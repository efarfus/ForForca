// App.js
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AppRouter from './AppRouter'; // O seu componente de roteamento
import Login from './paginas/Login'; // Importando a página de Login
import ProtectedRoute from './components/ProtectedRoute'; // Importando a rota protegida

axios.defaults.baseURL = "http://localhost:8989/";
axios.defaults.headers.common["Content-Type"] =
    "application/json;charset=utf-8";

const App = () => {
  return (
    <Router>
      <div className="tela">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de Login */}

          {/* Defina suas rotas protegidas aqui */}
          <Route path="/leaderboard" element={<ProtectedRoute element={<AppRouter />} />} />
          <Route path="/main" element={<ProtectedRoute element={<AppRouter />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
