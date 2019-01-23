import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", paddingTop: "4rem", textAlign: "center" }}
      className="jumbotron detailJumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
