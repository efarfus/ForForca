import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./paginas/HomePage";
import NotFound from "./paginas/NotFound";
import Cadastro from "./paginas/Cadastro";
import Ajuda from "./paginas/Ajuda";
import Login from "./paginas/Login";
import LeaderBoard from "./paginas/LeaderBoard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<HomePage />} />
      <Route path="/ajuda" element={<Ajuda />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
