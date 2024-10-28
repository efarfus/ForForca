import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from "../components/topbar"; // Importando o componente TopBar

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TopBar /> {/* Adicionando a TopBar */}

      <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
        <h2>Login</h2>
        
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop:'30px'}}>
          <button type="submit" style={{ padding: '10px', fontSize: '16px', marginLeft: "25px" }}>Entrar</button>
          <button type="button" style={{ padding: '10px', fontSize: '16px', marginLeft: "25px" }} onClick={() => navigate('/cadastro')}>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
