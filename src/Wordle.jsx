import { useState, useEffect } from "react";

const Wordle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="wordle-container">
      <h1 className="title">Wordle</h1>
      <button onClick={toggleTheme}>Switch to {theme === "dark" ? "Light" : "Dark"} Mode</button>
      <div className="grid">
        {/* Your game rows and cells */}
        <div className="row">
          <div className="cell correct">A</div>
          <div className="cell wrong">B</div>
          <div className="cell present">C</div>
        </div>
      </div>
    </div>
  );
};

export default Wordle;
