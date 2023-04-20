import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [list, setList] = useState(["Rizwan", "khan"]);
  const [inputVal, setInputVal] = useState("");
  const clickHnadler = () => {
    if (inputVal === "") return alert("Enter something!!");
    setList([...list, inputVal]);
    setInputVal("");
  };
  const keyHandeler = (e) => {
    if (e.keyCode === 13) {
      clickHnadler();
    }
  };
  return (
    <div className="App">
      <div>
        <input
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          onKeyDown={keyHandeler}
        />
        <div>
          <button onClick={clickHnadler}>Add</button>
        </div>
      </div>
      <div className="list">
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
