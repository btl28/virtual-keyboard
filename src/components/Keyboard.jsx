import React, {useState} from "react";
import Key from "./Key";
import chars from "../characters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Keyboard(props) {

    const row1Def = chars.row1;
    const row2Def = chars.row2;
    const row3Def = chars.row3;
    const row4Def = chars.row4;

    const deleteIcon = <FontAwesomeIcon icon={faDeleteLeft} />
    const shiftIcon = <FontAwesomeIcon icon={faArrowUp} />
    const enterIcon = <FontAwesomeIcon icon={faArrowLeft} />

    const [row1, setRow1] = useState(row1Def);
    const [row2, setRow2] = useState(row2Def);
    const [row3, setRow3] = useState(row3Def);
    const [row4, setRow4] = useState(row4Def);

    function changeDisplay(id) {
        props.changeVal(id);
        props.isShiftTrue === false ? setRow1(row1Def) : setRow1(chars.altRow1);
        props.isShiftTrue === false ? setRow2(row2Def) : setRow2(chars.altRow2);
        props.isShiftTrue === false ? setRow3(row3Def) : setRow3(chars.altRow3);
        props.isShiftTrue === false ? setRow4(row4Def) : setRow4(chars.altRow4);
    }

    return (
        <div className="container">
            {row1.map((item, index) => {
                return <Key keyName={item} key={index} id={item} class="key" onButtonClick={changeDisplay} />
            })}
            {row2.map((item, index) => {
                return <Key keyName={item} key={index} id={item} class="key" onButtonClick={changeDisplay} />
            })}
            <div className="row3">
                {row3.map((item, index) => {
                    return <Key keyName={item} key={index} id={item} class="key" onButtonClick={changeDisplay} />
                })}
            </div>
            <Key class="shift key fn-key" id={"shift"} keyName={shiftIcon} onButtonClick={changeDisplay} />
            <div className="row4">
                {row4.map((item, index) => {
                    return <Key keyName={item} key={index} id={item} class="key" onButtonClick={changeDisplay} />
                })}
            </div>
            <Key class="backspace key fn-key" id={"backspace"} keyName={deleteIcon} onButtonClick={changeDisplay} />

            <Key class="symbol key fn-key" id={"symbol"} keyName={"<>"} onButtonClick={changeDisplay} />

            <Key class="space key" id={"space"} keyName={"____"} onButtonClick={changeDisplay} />
            
            <Key class="enter key fn-key" id={"enter"} keyName={"Enter"} onButtonClick={changeDisplay} />
        </div>
    );
}

export default Keyboard;