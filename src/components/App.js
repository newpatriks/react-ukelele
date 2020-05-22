import React, { useState } from "react";
import "../styles/App.css";
import chords from "../lib/ukelele-chords.js";
import Ukelele from "./Ukelele";

function App() {
  const [currentChord, updateChord] = useState("A");
  return (
    <div className="App">
      <select onChange={e => updateChord(e.target.options[e.target.selectedIndex].value)}>
        {Object.keys(chords).map((key) => {
          return (<option key={key} id={key} value={key}>
            {key}
          </option>)
        })}
      </select>
      <Ukelele chord={currentChord} width={400} height={200} />
    </div>
  );
}

export default App