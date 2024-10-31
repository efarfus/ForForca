import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database'; // Importar o Realtime Database
import TopBar from '../components/topbar';
import firebaseApp from '../firebase';
import User from '../models/User';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const auth = getAuth(firebaseApp);
    const db = getDatabase(firebaseApp); // Instância do Realtime Database

    try {
      // Criar usuário com email e senha no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Criar uma instância da classe User com os dados do usuário
      const newUser = new User(firebaseUser.uid, username, email, password, 0, 0);

      // Salvar a instância de User no Realtime Database em uma referência chamada "users"
      await set(ref(db, 'users/' + firebaseUser.uid), newUser.toJSON());

      console.log('Usuário registrado e salvo no Realtime Database:', newUser);
      alert('Cadastro realizado com sucesso!');
      
      // Limpar o formulário ou redirecionar o usuário, conforme necessário
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/');
    } catch (err) {
      console.error('Erro ao registrar:', err);
      setError('Erro ao registrar o usuário: ' + err.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <TopBar />

      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

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

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px' }}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
