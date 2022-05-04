import React from "react";

function Key(props) {

    function handleClick() {
        props.onButtonClick(props.id);
    }

    return (
        <button onClick={handleClick} className={props.class} name={props.id}>{props.keyName}</button>
    );
}

export default Key;