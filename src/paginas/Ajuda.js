import React from 'react';
import '../sobre.css';
import TopBar from '../components/topbar';

const Sobre = () => {
  return (
    <>
      
      <div className="sobre-container">
      <TopBar />
        <h1 className="sobre-title">Sobre o Jogo da Forca</h1>
        <p className="sobre-text">
            O Jogo da Forca é um clássico jogo de palavras onde os jogadores tentam adivinhar uma palavra secreta escolhida por outro jogador. É um jogo que desafia o conhecimento e a intuição. Esse projeto foi desenvolvido como trabalho da matéria de desenvolvimento web do quinto semestre da faculdade de sistemas de informação na Unochapecó.
        </p>
        <h2 className="sobre-subtitle">Como Jogar</h2>
        <p className="sobre-text">
            O jogo começa com um jogador escolhendo uma palavra secreta. Os outros jogadores tentam adivinhar a palavra, letra por letra. Para cada letra errada, uma parte do corpo é desenhada na "forca". O objetivo é adivinhar a palavra antes que a figura do corpo esteja completa.
        </p>
        <h2 className="sobre-subtitle">Regras do Jogo</h2>
        <ul className="sobre-list">
          <li className="sobre-list-item">O jogador que escolher a palavra deve mantê-la em segredo.</li>
          <li className="sobre-list-item">Os jogadores podem adivinhar uma letra por vez.</li>
          <li className="sobre-list-item">Se a letra estiver na palavra, ela será revelada; se não, uma parte da figura será desenhada.</li>
          <li className="sobre-list-item">O jogo termina quando a palavra é adivinhada ou a figura está completa.</li>
        </ul>
        <h2 className="sobre-subtitle">Inspiração</h2>
        <p className="sobre-text">
            O Jogo da Forca é um jogo tradicional que tem sido jogado por gerações. Ele se baseia na ideia de adivinhação e dedução, promovendo a interação e o pensamento crítico. É uma forma divertida de aprender novas palavras e melhorar as habilidades linguísticas.
        </p>
        <h2 className="sobre-subtitle">Divirta-se!</h2>
        <p className="sobre-text">
          Esperamos que você goste de jogar nosso Jogo da Forca. Que comece a diversão!
        </p>
      </div>
    </>
  );
};

export default Sobre;
