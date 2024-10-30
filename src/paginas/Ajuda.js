import React from 'react';
import '../sobre.css';
import TopBar from '../components/topbar';

const Sobre = () => {
  return (
    <>
      <TopBar />
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Sobre o Jogo da Forca</h1>
        <p>
            O Jogo da Forca é um clássico jogo de palavras onde os jogadores tentam adivinhar uma palavra secreta escolhida por outro jogador. É um jogo que desafia o conhecimento e a intuição, além de ser uma excelente forma de se divertir com amigos e familiares.
        </p>
        <h2>Como Jogar</h2>
        <p>
            O jogo começa com um jogador escolhendo uma palavra secreta. Os outros jogadores tentam adivinhar a palavra, letra por letra. Para cada letra errada, uma parte do corpo é desenhada na "forca". O objetivo é adivinhar a palavra antes que a figura do corpo esteja completa.
        </p>
        <h2>Regras do Jogo</h2>
        <ul>
          <li>O jogador que escolher a palavra deve mantê-la em segredo.</li>
          <li>Os jogadores podem adivinhar uma letra por vez.</li>
          <li>Se a letra estiver na palavra, ela será revelada; se não, uma parte da figura será desenhada.</li>
          <li>O jogo termina quando a palavra é adivinhada ou a figura está completa.</li>
        </ul>
        <h2>Inspiração</h2>
        <p>
            O Jogo da Forca é um jogo tradicional que tem sido jogado por gerações. Ele se baseia na ideia de adivinhação e dedução, promovendo a interação e o pensamento crítico. É uma forma divertida de aprender novas palavras e melhorar as habilidades linguísticas.
        </p>
        <h2>Divirta-se!</h2>
        <p>
          Esperamos que você goste de jogar nosso Jogo da Forca. Que comece a diversão!
        </p>
      </div>
    </>
  );
};

export default Sobre;
