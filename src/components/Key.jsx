import React from "react";

function Key(props) {

    return (
        <button className={props.class}>{props.keyName}</button>
    );
}

export default Key;