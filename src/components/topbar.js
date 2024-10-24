// TopBar.js
import React from "react";
import "../topbar.css"; // Certifique-se de criar este arquivo de estilo
import logout from "../assets/logout.png"
import medal from "../assets/medal.png"
import interogacao from "../assets/interogacao.png"

const TopBar = () => {
  return (
    <header className="top-bar">
      <h1 className="logo">ForForca</h1>
      <div className="icons">
        <div className="icon icon1">
          <img src={medal} style={{ width: '24px', height: '24px' }}></img>
        </div>{" "}
        <div className="icon icon2">
          <img src={interogacao} style={{ width: '24px', height: '24px' }}></img>
        </div>{" "}
        <div className="icon icon3">
          <img src={logout} style={{ width: '24px', height: '24px' }}></img>
        </div>{" "}
      </div>
    </header>
  );
};

export default TopBar;
