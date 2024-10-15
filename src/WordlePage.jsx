import { useState } from "react";
import GameBoard from "./GameBoard";
import "./index.css";

export function WordlePage() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const wordLength = 5;

  return (
    <main>
      <div className="game">
        <GameBoard guesses={guesses} currentGuess={currentGuess} wordLength={wordLength} />
      </div>
    </main>
  );
}
