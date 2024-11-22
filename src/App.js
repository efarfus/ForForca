// App.js
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AppRouter from "./AppRouter";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import ProtectedRoute from "./components/ProtectedRoute";

axios.defaults.baseURL = "http://localhost:8989/";
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";

const App = () => {
  return (
    <Router>
      <div className="tela">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          {/* Use trailing * in the protected route path */}
          <Route
            path="/*"
            element={<ProtectedRoute element={<AppRouter />} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
