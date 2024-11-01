// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const ProtectedRoute = ({ element }) => {
  const auth = getAuth();
  const user = auth.currentUser || JSON.parse(localStorage.getItem("User")); // Checa no localStorage

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Caso contrário, renderiza o elemento protegido
  return element;
};

export default ProtectedRoute;
  