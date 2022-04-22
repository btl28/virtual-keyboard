import React, {useState} from "react";
import Key from "./Key";

function Keyboard(props) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const row2 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const row3 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const row4 = ["Z", "X", "C", "V", "B", "N", "M"]
    const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

    const [row1, setRow1] = useState(numbers);

    function onButtonClicked(keyName) {
        props.displayText(keyName);
    }

    return (
        <div className="container">
            {row1.map((item, index) => {
                return <Key keyName={item} key={index} class="key" buttonClicked={onButtonClicked} />
            })}
            {row2.map((item, index) => {
                return <Key keyName={item} key={index} class="key" buttonClicked={onButtonClicked} />
            })}
            <div className="row3">
                {row3.map((item, index) => {
                    return <Key keyName={item} key={index} class="key" buttonClicked={onButtonClicked} />
                })}
            </div>
            <Key class="shift key" buttonClicked={onButtonClicked} />
            <div className="row4">
                {row4.map((item, index) => {
                    return <Key keyName={item} key={index} class="key" buttonClicked={onButtonClicked} />
                })}
            </div>
        </div>
    );
}

export default Keyboard;