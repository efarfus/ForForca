import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../leaderboard.css'; // Importação do CSS
import TopBar from '../components/topbar';

const LeaderBoard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const exampleData = [
      { username: 'jogador1', acertos: 10, desistencias: 2 },
      { username: 'jogador2', acertos: 15, desistencias: 3 },
      { username: 'jogador3', acertos: 8, desistencias: 1 },
      { username: 'jogador4', acertos: 20, desistencias: 0 },
      { username: 'jogador5', acertos: 12, desistencias: 4 },
      { username: 'jogador6', acertos: 11, desistencias: 2 },
      { username: 'jogador7', acertos: 14, desistencias: 5 },
      { username: 'jogador8', acertos: 9, desistencias: 1 },
      { username: 'jogador9', acertos: 13, desistencias: 2 },
      { username: 'jogador10', acertos: 18, desistencias: 3 },
      { username: 'jogador11', acertos: 7, desistencias: 2 },
      { username: 'jogador12', acertos: 16, desistencias: 1 },
      // Dados adicionais...
    ];

    const fetchLeaderboardData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // const response = await axios.get('firebase'); // Habilitar quando o backend estiver pronto
        setData(exampleData.sort((a, b) => b.acertos - a.acertos)); // Ordena antes de setar os dados
      } catch (err) {
        setError("Erro ao carregar a leaderboard");
        console.error(err);
      }
    };

    fetchLeaderboardData();
  }, []);

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
                <td>{user.acertos}</td>
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
