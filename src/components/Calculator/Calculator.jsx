import Backbtn from "../Backbtn";
import { useCallback, useEffect, useState } from "react";
import Display from "./Display";
import Input from "./Input";

function Calculator() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Calculator";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleClick = useCallback(
    (input) => {
      if (input === "AC") {
        setValue("");
      } else if (input === "=" || input === "Enter") {
        try {
          setValue(eval(value).toString());
        } catch {
          setValue("Error");
        }
      } else if (input === "C") {
        if (value === "Error") {
          setValue("");
        } else {
          setValue(value.slice(0, -1));
        }
      } else {
        if (value === "Error") {
          setValue(input);
        } else {
          setValue(value + input);
        }
      }
    },
    [value]
  );

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();

      if (
        [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "+",
          "-",
          "*",
          "/",
          "c",
          "ac",
          "=",
          "enter",
          "backspace",
        ].includes(key)
      ) {
        if (key === "=" || key === "enter") {
          handleClick("=");
        } else if (key === "c") {
          handleClick("C");
        } else if (key === "backspace") {
          if (event.shiftKey) {
            handleClick("AC");
          } else {
            handleClick("C");
          }
        } else {
          handleClick(key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClick]);

  return (
    <>
      <Backbtn />

      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-6">Calculator</h1>
        <Display value={value} />
        <Input handleClick={handleClick} />
      </div>
    </>
  );
}

export default Calculator;
