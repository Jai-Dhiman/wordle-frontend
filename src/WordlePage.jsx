// import { WordleIndex } from "./WordleIndex";
import { useState } from "react";
import GameBoard from "./GameBoard";

export function WordlePage() {
  const Game = () => {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const wordLength = 5;
  };

  return (
    <main>
      <div className="game">
        <GameBoard guesses={guesses} currentGuess={currentGuess} wordLength={wordLength} />
      </div>
    </main>
  );
}
