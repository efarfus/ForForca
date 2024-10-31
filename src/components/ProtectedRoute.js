// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth'; // Ajuste isso conforme sua lógica de autenticação

const ProtectedRoute = ({ element, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser; // Verifica se há um usuário autenticado

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/" />} // Redireciona para a página de login se não estiver autenticado
    />
  );
};

export default ProtectedRoute;
