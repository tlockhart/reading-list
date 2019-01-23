import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <div className="userBtn ml-1">
      <button type="button" className="btn delete-btn" {...props} tabIndex="0">
        Delete
      </button>
    </div>
  );
}

export default DeleteBtn;