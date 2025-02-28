import { gameOver } from "./lib/constants";

export default function ButtonDifficulty({ number, setNumber }) {
  const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const increaseDifficulty = () => {
    if (number.length <= 4) {
      console.log("increaseDifficulty");
      setNumber((prev) => [...prev, getRandomNumber()]);
    } else {
      alert("Dificuldade máxima atingida");
    }
  };

  const decreaseDifficulty = () => {
    if (number.length >= 3) {
      console.log("decreaseDifficulty");
      setNumber((prev) => prev.slice(0, -1));
    } else {
      alert("Dificuldade mínima atingida");
    }
  };
  return (
    <div>
      <button
        className="btn btn--hard"
        onClick={increaseDifficulty}
        disabled={gameOver(number)}
      >
        Dificil
      </button>
      <button
        className="btn btn--easy"
        onClick={decreaseDifficulty}
        disabled={gameOver(number)}
      >
        Facil
      </button>
    </div>
  );
}
