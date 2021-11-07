import React from "react";
import "./styles/title.css";

export default function Title({ children, ...restProps }) {
  return (
    <h1 className="title" {...restProps}>
      {children}
    </h1>
  );
}
