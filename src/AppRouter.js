import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './paginas/HomePage';
import Sobre from './paginas/Sobre';
import NotFound from './paginas/NotFound';
import Post from './paginas/Post';
import NovoPost from './paginas/NovoPost';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/novopost" element={<NovoPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;