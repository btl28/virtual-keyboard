import React, {useState} from "react";
import Key from "./Key";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Keyboard(props) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const row2 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const row3 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const row4 = ["Z", "X", "C", "V", "B", "N", "M"]
    const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

    const deleteIcon = <FontAwesomeIcon icon={faDeleteLeft} />
    const shiftIcon = <FontAwesomeIcon icon={faArrowUp} />
    const enterIcon = <FontAwesomeIcon icon={faArrowLeft} />

    const [row1, setRow1] = useState(numbers);

    return (
        <div className="container">
            {row1.map((item, index) => {
                return <Key keyName={item} key={index} class="key" />
            })}
            {row2.map((item, index) => {
                return <Key keyName={item} key={index} class="key" />
            })}
            <div className="row3">
                {row3.map((item, index) => {
                    return <Key keyName={item} key={index} class="key" />
                })}
            </div>
            <Key class="shift key fn-key" keyName={shiftIcon} />
            <div className="row4">
                {row4.map((item, index) => {
                    return <Key keyName={item} key={index} class="key" />
                })}
            </div>
            <Key class="backspace key fn-key" keyName={deleteIcon} />
            <Key class="symbol key fn-key" keyName={"<>"} />
            <Key class="space key" keyName={"____"} />
            <Key class="enter key fn-key" keyName={enterIcon} />
        </div>
    );
}

export default Keyboard;