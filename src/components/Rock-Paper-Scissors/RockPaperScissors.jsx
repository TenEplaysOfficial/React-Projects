import { useEffect, useState } from "react";
import Backbtn from "../Backbtn";
import rockPic from "../../assets/Images/Rock-Paper-Scissor/rock.svg";
import papperPic from "../../assets/Images/Rock-Paper-Scissor/paper.svg";
import scissorPic from "../../assets/Images/Rock-Paper-Scissor/scissors.svg";

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const choices = ["rock", "paper", "scissors"];

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Rock, Paper, Scissors";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const randomChoice = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };

  const determineWinners = (user, computer) => {
    if (user === computer) return "It's tie!";
    if (
      (user === choices[0] && computer === choices[2]) ||
      (user === choices[1] && computer === choices[0]) ||
      (user === choices[2] && computer === choices[1])
    ) {
      setUserScore((pre) => pre + 1);
      return "You win";
    }
    setComputerScore((pre) => pre + 1);
    return "Computer win!";
  };

  const handleInput = (choice) => {
    const computerChoice = randomChoice();
    setComputerChoice(computerChoice);
    setUserChoice(choice);
    setResult(determineWinners(choice, computerChoice));
  };

  return (
    <>
      <Backbtn />
      <h1 className="text-4xl font-bold text-center mb-6">
        Rock Paper Scissors
      </h1>
      <div className="flex justify-center flex-col items-center w-full h-fit">
        <h2 className="text-xl font-semibold mb-4">Choice</h2>
        <p className="text-md text-gray-600 mb-4">
          Please select one of the options below:
        </p>
        <div className="flex justify-center gap-6 md:gap-10 border-solid border-4 border-black rounded-full items-center pt-6 px-4 md:px-5">
          <img
            src={rockPic}
            alt="Rock"
            onClick={() => handleInput(choices[0])}
            className="w-20 h-20 md:w-28 md:h-28 hover:animate-rotateInfinite"
          />
          <img
            src={papperPic}
            alt="Paper"
            onClick={() => handleInput(choices[1])}
            className="w-20 h-20 md:w-28 md:h-28 hover:animate-rotateInfinite"
          />
          <img
            src={scissorPic}
            alt="Scissor"
            onClick={() => handleInput(choices[2])}
            className="w-20 h-20 md:w-28 md:h-28 hover:animate-rotateInfinite"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-8 w-full p-4 rounded-lg">
          <div className="flex-1 text-center bg-white border-black border-2 rounded-3xl p-4 md:p-6 shadow-lg order-1 md:order-2">
            <h2 className="font-semibold text-lg text-gray-700  mb-2">
              Current Round
            </h2>
            <p className="text-2xl font-bold text-blue-600">{result}</p>
            <p className="text-sm text-gray-500">Your Pick: {userChoice}</p>
            <p className="text-sm text-gray-500">
              Computer Pick: {computerChoice}
            </p>
          </div>
          <div className="flex-1 text-center bg-white border-black border-2 rounded-3xl p-4 md:p-6 shadow-lg order-2 md:order-1">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Your Score
            </h3>
            <p className="text-2xl font-bold text-blue-600">{userScore}</p>
          </div>
          <div className="flex-1 text-center bg-white border-black border-2 rounded-3xl p-4 md:p-6 shadow-lg order-3">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Computer Score
            </h3>
            <p className="text-2xl font-bold text-blue-600">{computerScore}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RockPaperScissors;
