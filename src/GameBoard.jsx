const GameBoard = ({ guesses, currentGuess, wordLength }) => {
  const totalRows = 6;

  const renderCell = (letter, status) => {
    let cellClass = "cell";
    if (status === "correct") cellClass += " correct";
    if (status === "present") cellClass += " present";
    if (status === "absent") cellClass += " absent";
    return <div className={cellClass}>{letter}</div>;
  };

  const renderRow = (guess, isCurrentGuess) => {
    const cells = [];
    for (let i = 0; i < wordLength; i++) {
      if (isCurrentGuess) {
        cells.push(renderCell(currentGuess[i] || "", ""));
      } else if (guess) {
        cells.push(renderCell(guess.letter[i], guess.status[i]));
      } else {
        cells.push(renderCell("", ""));
      }
    }
    return <div className="row">{cells}</div>;
  };

  const rows = [];
  for (let i = 0; i < totalRows; i++) {
    if (i < guesses.length) {
      rows.push(renderRow(guesses[i], false));
    } else if (i === guesses.length) {
      rows.push(renderRow(null, true));
    } else {
      rows.push(renderRow(null, false));
    }
  }

  return <div className="game-board">{rows}</div>;
};

export default GameBoard;
