import { useState } from "react";
import "./App.css";
import Button from "./button";
import Count from "./Count";
import ButtonDifficulty from "./ButtonDifficulty";
import { gameOver } from "./lib/constants";

function App() {
  const [number, setNumber] = useState([1, 5, 3]);

  const [clickCount, setClickCount] = useState(0);

  const vencer = () => {
    setNumber((prev) => prev.map(() => prev[0]));
  };

  const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  return (
    <>
      <h1> Desafio </h1>
      <p class="text"> CLique nos botões + e - para igualar os números!</p>
      <div className="count-container">
        {number.map((number, index) => {
          return <Count key={index} number={number} />;
        })}
      </div>

      <Button
        number={number}
        setNumber={setNumber}
        setClickCount={setClickCount}
        clickCount={clickCount}
      />

      <button
        className={`btn btn-reset ${gameOver(number) ? "btn-reset--win" : ""} `}
        onClick={() => {
          setClickCount(0);
          setNumber([getRandomNumber(), getRandomNumber(), getRandomNumber()]);
        }}
      >
        Reset
      </button>

      <ButtonDifficulty number={number} setNumber={setNumber} />

      <button
        className="btn btn--win"
        onClick={vencer}
        disabled={gameOver(number)}
      >
        Vencer
      </button>

      <p>Jogadas: {clickCount}</p>

      {
        <p>
          {gameOver(number) ? (
            <img
              className={`img-win ${gameOver(number) ? "img-win--show" : ""}`}
              src="./public/you_win.gif"
            />
          ) : null}
        </p>
      }
    </>
  );
}

export default App;
