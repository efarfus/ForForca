import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../apiService';
import TopBar from "../components/topbar"; // Importando o componente TopBar

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await ApiService.login(email, password); // Chama a função de login do ApiService

      // Salva o usuário no localStorage
      localStorage.setItem("User", JSON.stringify(user));

      // Redireciona para a página principal após o login
      navigate('/main');
    } catch (err) {
      console.error('Erro ao fazer login:', err);

      // Definindo mensagens amigáveis para os erros comuns de autenticação
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setError('Email ou senha incorretos. Tente novamente.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Formato de email inválido. Verifique o email inserido.');
      } else {
        setError('Erro ao fazer login. Tente novamente');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TopBar /> {/* Adicionando a TopBar */}
      
      <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe o erro, se houver */}

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '30px' }}>
          <button type="submit" style={{ padding: '10px', fontSize: '16px', marginLeft: '25px' }}>Entrar</button>
          <button type="button" style={{ padding: '10px', fontSize: '16px', marginLeft: '25px' }} onClick={() => navigate('/cadastro')}>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
