import React, {useEffect, useState} from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

function App() {
  const [displayVal, setDisplayVal] = useState("");
  const [isShift, setIsShift] = useState(false);
  const [symbolState, setSymbolState] = useState(0);

  function setDisplay(id) {
    if (id !== "shift" && id !== "enter" && id !== "space" && id !== "backspace" && id !== "symbol") {
      setDisplayVal(() => {
        return displayVal + id
      });
    }
    id === "shift" && setIsShift(!isShift);
    id === "backspace" && setDisplayVal(() => {
      return displayVal.slice(0, -1)
    })
    id === "space" && setDisplayVal(() => {
      return displayVal + " "
    })
    id === "enter" && setDisplayVal(() => {
      return displayVal + "\n"
    })
    id === "symbol" && setSymbolState(() => {
      if (symbolState === 3)
        return 0
      else
        return symbolState + 1
    })
  }

  return (
    <div>
      <Display displayVal={displayVal} />
      <Keyboard changeVal={setDisplay} isShiftTrue={isShift} symbolState={symbolState} />
    </div>
  );
}

export default App;
