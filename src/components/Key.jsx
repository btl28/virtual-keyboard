import React from "react";

function Key(props) {

    function handleClick() {
        props.buttonClicked(props.keyName);
    }

    return (
        <button onClick={handleClick} className={props.class}>{props.keyName}</button>
    );
}

export default Key;