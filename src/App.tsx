import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([""]);
  return (
    <div>
      <div className="App">
        <h1>Hello !!!</h1>
        <input
          onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList, e.target.value]);
          }}
          placeholder="Enter any text"
        />
      </div>
      <br />
      {inputText}
      {historyList.map((x) => {
        return <div>{x}</div>;
      })}
    </div>
  );
};
export default App;
