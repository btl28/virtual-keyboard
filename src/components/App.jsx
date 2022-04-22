import React, {useState} from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  function display(keyName) {
    setDisplayValue(prevValue => {
      return prevValue + keyName;
    });
  }

  return (
    <div>
      <Display text={displayValue} />
      <Keyboard displayText={display} />
    </div>
  );
}

export default App;
