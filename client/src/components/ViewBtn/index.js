import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';

function ViewBtn(props) {
  return (
    <Link to= {props.to}>
      <button type="button" className="btn custom-view-btn" tabIndex="0">
          View
      </button>
    </Link>
  );
}
export default ViewBtn;