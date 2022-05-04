import React, {useState} from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

function App() {
  const [displayVal, setDisplayVal] = useState("");
  const [isShift, setIsShift] = useState(false);

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
  }

  return (
    <div>
      <Display displayVal={displayVal} />
      <Keyboard changeVal={setDisplay} isShiftTrue={isShift} />
    </div>
  );
}

export default App;
