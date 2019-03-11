import React from "react";
import { Animated } from "react-animated-css";

function Jumbotron({ children }) {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="jumbotron"
      >
        {children}
      </div>
    </Animated>
  );
}

export default Jumbotron;
