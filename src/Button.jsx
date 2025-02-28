import { gameOver } from "./lib/constants";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { RiAddLargeFill, RiSubtractFill } from "react-icons/ri";

export default function Button({
  number,
  setNumber,
  setClickCount,
  clickCount,
}) {
  const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const addNumber = () => {
    setClickCount((prev) => prev + 1);
    setNumber((prev) =>
      prev.map((num) => (num === 9 ? getRandomNumber() : num + 1))
    );
  };

  const subNumber = () => {
    setClickCount((prev) => prev + 1);
    setNumber((prev) =>
      prev.map((num) => (num === 1 ? getRandomNumber() : num - 1))
    );
  };

  return (
    <div className="btn-container">
      <button
        className="btn btn--plus"
        onClick={addNumber}
        disabled={gameOver(number)}
      >
        <RiAddLargeFill className="icon" />
      </button>

      <button
        className="btn btn--minus"
        onClick={subNumber}
        disabled={gameOver(number)}
      >
        <RiSubtractFill className="icon" />
      </button>
    </div>
  );
}
