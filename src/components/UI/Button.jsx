import React from "react";
import classes from "../UI/Button.scss";

const Button = ({ item, id, clicked }) => {
  return (
    <div className="buttonCon">
      <button className="button" key={id} onClick={clicked}>
        {item}
      </button>
    </div>
  );
};

export default Button;
