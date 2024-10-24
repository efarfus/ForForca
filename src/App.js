import React from "react";
import axios from "axios";

import './App.css';
import AppRouter from './AppRouter';

axios.defaults.baseURL = "http://localhost:8989/";
axios.defaults.headers.common["Content-Type"] =
    "application/json;charset=utf-8";

    
  const App = () => {
    return (
      
      <div class="tela">
        {/* Outros componentes ou layout global aqui */}
        <AppRouter />
      </div>
    );
  };

export default App;
