import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <div className="user-btn">
      <button type="button" className="btn custom-delete-btn" {...props} tabIndex="0">
        Delete
      </button>
    </div>
  );
}

export default DeleteBtn;
