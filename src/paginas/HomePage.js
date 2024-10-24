import React, { useState, useRef, useEffect } from "react";
import palavras from "../palavras";
import TopBar from "../components/topbar"; // Importando o componente TopBar
import "../App.css"; // Verifique se o arquivo App.css está na mesma pasta que App.js

const App = () => {
  const [palavra, setPalavra] = useState("");
  const [tentativas, setTentativas] = useState(6);
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [gameOver, setGameOver] = useState(false); // Controle do estado do jogo
  const inputRef = useRef(null); // Ref para o input

  const escolherPalavraAleatoria = () => {
    const indexAleatorio = Math.floor(Math.random() * palavras.length);
    return palavras[indexAleatorio];
  };

  // Inicializa o jogo com uma palavra aleatória
  useEffect(() => {
    setPalavra(escolherPalavraAleatoria());
  }, []);

  const handleTentativa = () => {
    const letra = inputRef.current.value.toLowerCase();
    inputRef.current.value = ""; // Limpa o input
  
    if (letrasTentadas.includes(letra) || letra.length === 0) {
      setMensagem("Você já tentou essa letra ou não digitou nada!");
      return;
    }
  
    setLetrasTentadas((prev) => [...prev, letra]);
  
    if (!palavra.includes(letra)) {
      setTentativas((prev) => prev - 1);
      if (tentativas - 1 === 0) {
        setMensagem(`Você perdeu! A palavra era "${palavra}".`);
        setGameOver(true); // Fim de jogo
      } else {
        if (!gameOver && tentativas > 0) {
          setMensagem("Letra incorreta! Tente outra.");
        }
      }
    } else {
      const palavraOculta = palavra
        .split("")
        .every((l) => letrasTentadas.includes(l) || l === letra);
      if (palavraOculta) {
        setMensagem(`Parabéns! Você adivinhou a palavra: "${palavra}".`);
        setGameOver(true); // Fim de jogo
        setMensagem(""); // Limpa a mensagem de erro no game over
      } else {
        setMensagem("Boa! Você acertou uma letra.");
      }
    }
  };

  const handleReset = () => {
    setTentativas(6);
    setLetrasTentadas([]);
    setMensagem(""); // Limpa a mensagem
    setGameOver(false);
    setPalavra(escolherPalavraAleatoria());
  };

  const palavraOculta = palavra
    .split("")
    .map((letra) => (letrasTentadas.includes(letra) ? letra : "_"))
    .join(" ");

  return (
    <div className="game-container">
        <TopBar /> {/* Adicionando a TopBar */}

      <p className="tentativas-restantes">
        Tentativas restantes: <span>{tentativas}</span>
      </p>

      {!gameOver && tentativas > 0 && (
      <div className="forca-visual">
        {/* Visual da forca */}
        <div className="forca">
          {tentativas < 6 && <div className="cabeca boneco"></div>}
          {tentativas < 5 && <div className="corpo boneco"></div>}
          {tentativas < 4 && <div className="braco-esquerdo boneco"></div>}
          {tentativas < 3 && <div className="braco-direito boneco"></div>}
          {tentativas < 2 && <div className="perna-esquerda boneco"></div>}
          {tentativas < 1 && <div className="perna-direita boneco"></div>}
        </div>
      </div>)}

      <p className="word">{palavraOculta}</p>
      <p className="letras-tentadas">
        Letras tentadas: <span>{letrasTentadas.join(", ")}</span>
      </p>

      {!gameOver && tentativas > 0 && (
        <>
          <input
            type="text"
            ref={inputRef}
            maxLength="1"
            placeholder="Digite uma letra"
            className="input-letter"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTentativa(); // Chama a função de tentativa quando "Enter" for pressionado
              }
            }}
          />
          <button onClick={handleTentativa}>Tentar</button>
        </>
      )}

      <button
        id={!gameOver ? "desistir" : null}
        onClick={gameOver ? handleReset : () => {
            setGameOver(true); // Fim de jogo
            setMensagem(""); // Limpa a mensagem de erro ao desistir
            setMensagem(`Você perdeu! A palavra era "${palavra}".`);

          }}
      >
        {gameOver ? "Tentar novamente" : "Desistir desta palavra"}
      </button>

      <p className="message">{mensagem}</p>
    </div>
  );
};

export default App;
