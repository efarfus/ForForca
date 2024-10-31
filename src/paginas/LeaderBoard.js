import React, { useState, useEffect } from 'react';
import '../leaderboard.css'; // Importação do CSS
import TopBar from '../components/topbar';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const LeaderBoard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const auth = getAuth();
  const database = getDatabase();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userRef = ref(database, `users/${user.uid}`);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            // Limpe o estado anterior e adicione apenas os dados do usuário atual
            setData([userData]); // Define apenas o usuário atual
          } else {
            setError("Usuário não encontrado.");
          }
        } catch (err) {
          setError("Erro ao carregar os dados do usuário.");
          console.error(err);
        }
      } else {
        setError("Usuário não autenticado.");
      }
    };

    fetchUserData();
  }, [auth, database]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <TopBar />
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">Leaderboard</h1>

        {error && <p>{error}</p>}

        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Acertos</th>
              <th>Desistências</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.vitorias}</td>
                <td>{user.desistencias}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-buttons">
          {currentPage > 1 && (
            <button onClick={prevPage} className="arrow-button">
              ←
            </button>
          )}
          {currentPage < Math.ceil(data.length / itemsPerPage) && (
            <button onClick={nextPage} className="arrow-button">
              →
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
