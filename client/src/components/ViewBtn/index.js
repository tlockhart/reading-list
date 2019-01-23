import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <div className="user-btn">
        <button type="button" className="btn custom-view-btn" {...props} tabIndex="0">
            View
        </button>
    </div>
  );
}

export default ViewBtn;