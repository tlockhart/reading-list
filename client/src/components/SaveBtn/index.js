import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <div className="userBtn ml-1">
      <button type="button" className="btn save-btn" {...props} tabIndex="0">
        Save
    </button>
    </div>
  );
}

export default SaveBtn;