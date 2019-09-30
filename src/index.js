import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // Entrada, Roddando, Fim
  const [estado, setEstado] = useState("Entrada");

  // Palpites
  const [palpite, setPalpite] = useState(150);

  // qtd de palpites maquina
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("Rodando");
    setMin(0);
    setMax(300);
    setNumPalpite(1);
    setPalpite(150);
  };

  if (estado === "Entrada") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }
  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("Fim");
  };

  if (estado === "Fim" || min === 0) {
    return (
      <div>
        <p>
          Acertei o numero de {palpite} com {numPalpite} chutes!
        </p>
        <button onClick={iniciarJogo}>Começar novamente!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
