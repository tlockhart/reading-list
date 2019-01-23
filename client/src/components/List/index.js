import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  // console.log("List Children = "+({...children}));
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  // console.log("ListITEM Children = "+({...children}));
  return <li className="list-group-item">{children}</li>;
}
