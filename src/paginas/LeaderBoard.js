import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from '../components/topbar';

const LeaderBoard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fazendo a requisição para obter os dados da leaderboard
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('firebase');
        setData(response.data);
      } catch (err) {
        setError("Erro ao carregar a leaderboard");
        console.error(err);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <><TopBar></TopBar><div>
      <h1>Leaderboard</h1>

      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Acertos</th>
            <th>Desistências</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.acertos}</td>
              <td>{user.desistencias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
  );
};

export default LeaderBoard;
