import React from "react";

function Display(props) {
    return (
        <div className="display">
            <textarea rows="12" value={props.text} />
        </div>
    );
}

export default Display;