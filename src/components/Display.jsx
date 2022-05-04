import React, {useState} from "react";

function Display(props) {

    return (
        <div className="display">
            <textarea readOnly rows="12" value={props.displayVal} />
        </div>
    );
}

export default Display;