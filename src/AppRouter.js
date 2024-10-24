import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './paginas/HomePage';
import NotFound from './paginas/NotFound';
import Cadastro from "./paginas/Cadastro"
import Ajuda from "./paginas/Ajuda"
import LeaderBoard from './paginas/LeaderBoard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;