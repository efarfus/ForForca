// TopBar.js
import React from "react";
import "../topbar.css"; // Certifique-se de criar este arquivo de estilo
import logout from "../assets/logout.png";
import medal from "../assets/medal.png";
import interogacao from "../assets/interogacao.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const TopBar = () => {
  const navigate = useNavigate(); // Hook para navegar entre páginas
  const auth = getAuth(); // Obtendo a instância de autenticação

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Faz o logout do usuário
      localStorage.removeItem("User");
      navigate("/",{ replace: true }); // Redireciona para a página inicial ou de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error); // Trate o erro de logout se necessário
    }
  };

  return (
    <header className="top-bar">
      <Link to={"/main"} className="logo-link">
        <h1 className="logo">ForForca</h1>
      </Link>
      <div className="icons">
        <div className="icon icon1">
          <Link to={"/leaderboard"}>
            <img src={medal} style={{ width: "24px", height: "24px" }} alt="Leaderboard" />
          </Link>
        </div>
        <div className="icon icon2">
          <Link to={"/ajuda"}>
            <img
              src={interogacao}
              style={{ width: "24px", height: "24px" }}
              alt="Ajuda"
            />
          </Link>
        </div>
        <div className="icon icon3" onClick={handleLogout} style={{ cursor: "pointer" }}>
          <img src={logout} style={{ width: "24px", height: "24px" }} alt="Logout" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
