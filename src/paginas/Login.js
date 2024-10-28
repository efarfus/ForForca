import React, { useState } from 'react';
import TopBar from "../components/topbar"; // Importando o componente TopBar


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
        <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px' }}>Entrar</button>
        <button type="button" style={{ width: '100%', padding: '10px', fontSize: '16px' }} onClick={() => alert('Ir para a página de cadastro')}>Cadastrar</button>
        </form>
    </div>
  );
};

export default Login;
