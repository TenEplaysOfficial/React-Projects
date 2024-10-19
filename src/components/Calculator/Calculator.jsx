import Backbtn from "../Backbtn";
import { useEffect, useState } from "react";
import Display from "./Display";
import Input from "./Input";

function Calculator() {
  const [value, setValue] = useState('');

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Calculator";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleClick = (input) => {
    if (input === "AC") {
      setValue("");
    } else if (input === "=") {
      try {
        setValue(eval(value).toString());
      } catch{
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
  };

  return (
    <>
      <Backbtn />

      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl  font-bold mb-6">Calculator</h1>
        <Display value={value} />
        <Input handleClick={handleClick} />
      </div>
    </>
  );
}

export default Calculator;
