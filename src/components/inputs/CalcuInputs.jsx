import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import classes from "../inputs/CalcuInput.scss";

const NumberInputs = () => {
  const [output, setOutput] = useState("");
  const [number] = useState([
    "",
    "CE",
    "C",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "",
    0,
    ".",
    "=",
  ]);
  const [id] = useState(Math.floor(Math.random()));
  const [Output, setlOutput] = useState([]);
  const [FinalOutput, setFinalOutput] = useState("");
  const [Operator, setOperator] = useState("");
  const [secondContainer, setSecondContainer] = useState("");
  const [Equals, setEquals] = useState("answer");

  const buttonHandler = (number) => {
    if (Number.isInteger(number)) {
      Output.push(number);
    } else {
      if (
        number != "=" &&
        Output[Output.length - 1] != number &&
        Output[Output.length - 1] != "*" &&
        Output[Output.length - 1] != "-" &&
        Output[Output.length - 1] != "/" &&
        Output[Output.length - 1] != "+" &&
        number != "C" &&
        number != "CE"
      ) {
        Output.push(number);
      }
    }
    Math.eval = (str) => {
      for (var i = 0; i < str.length; i++) {
        if (
          isNaN(str[i]) &&
          !["+", "-", "/", "*", "%", "**"].includes(str[i])
        ) {
          return NaN;
        }
      }

      try {
        return eval(str);
      } catch (e) {
        if (e.name !== "SyntaxError") throw e;
        return NaN;
      }
    };

    let newArr = Output.reduce((sum, number) => {
      if (number) {
        return sum + number;
      }
    }, "");
    setFinalOutput(newArr);
    if (number === "=") {
      setEquals(Math.eval(newArr));
    }

    if (number === "C") {
      const newFinal = FinalOutput;
      setFinalOutput(newFinal.slice(0, -1));
      Output.pop();
    }
    if (number === "CE") {
      const newFinal = FinalOutput;
      setFinalOutput("");
      setlOutput([]);
      setEquals("answer");
    }
  };

  return (
    <div className="calcuContainer">
      <div className="calculator">
        <div className="outPutContainer">
          <h3 className="input"> {FinalOutput}</h3>
        </div>
        <div className="equals">
          <h4 className="answer">{Equals}</h4>
        </div>
        <div className="buttonContainer">
          <div className="buttons">
            {number.map((condition) => {
              return (
                <Button
                  id={id}
                  item={condition}
                  number={Output}
                  clicked={() => buttonHandler(condition)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberInputs;
