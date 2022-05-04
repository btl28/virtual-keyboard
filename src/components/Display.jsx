import React, {useState} from "react";

function Display(props) {

    return (
        <div className="display">
            <textarea readOnly value={props.displayVal} />
        </div>
    );
}

export default Display;