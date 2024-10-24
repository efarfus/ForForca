import React from "react";

function Botao() {
  const [countStateA, setCountStateA] = React.useState(0);
  const [countStateB, setCountStateB] = React.useState(0);

  function counterStateA() {
    setCountStateA(countStateA + 1);
  }
  function counterStateB() {
    setCountStateB(countStateB + 1);
  }

  // 1 - utilização
  React.useEffect(function () {
    console.log("Roda a cada renderização do componente");
  });

  // 2 - array de dependencias
  React.useEffect(
    function () {
      console.log("Roda quando o Count State A é alterado");
    },
    [countStateA]
  );

  // 3 - array de dependencias vazio
  React.useEffect(function () {
    console.log("Só executa uma vez quando o componente é renderizado");
  }, []);

  return (
    <div className="container row">
      <div className="text-center col">
        <p>Count State A: {countStateA}</p>
        <button type="button" class="btn btn-success" onClick={counterStateA}>
          Contar State A
        </button>
      </div>
      <div className="text-center col">
        <p>Count State B: {countStateB}</p>
        <button type="button" class="btn btn-success" onClick={counterStateB}>
          Count State B
        </button>
      </div>
    </div>
  );
}
export default Botao;
