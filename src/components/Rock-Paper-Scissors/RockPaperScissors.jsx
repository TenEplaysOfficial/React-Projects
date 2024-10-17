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
      <h1 className="title-big">Rock Paper Scissors</h1>
      <div className="flex justify-center flex-col items-center">
        Choice
        <div className="flex justify-center gap-10 border-solid  border-4 border-black rounded-full items-center pt-6 px-5  ">
          <img
            src={rockPic}
            alt="Rock"
            onClick={() => handleInput(choices[0])}
            className="w-28 h-28 hover:animate-rotateInfinite"
          />

          <img
            src={papperPic}
            alt="Paper"
            onClick={() => handleInput(choices[1])}
            className="w-28 h-28 hover:animate-rotateInfinite"
          />
          <img
            src={scissorPic}
            alt="Scissor"
            onClick={() => handleInput(choices[2])}
            className="w-28 h-28 hover:animate-rotateInfinite"
          />
        </div>
        <div className="flex justify-around gap-10 mt-8 w-full">
          <div>
            <h3>User dashboard</h3>
            <p>{userScore}</p>
          </div>
          <div>
          <h2>Result</h2>
          <p>{result}</p>
          </div>
          <div>
            <h3>Computer dashboard</h3>
            <p>{computerScore}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RockPaperScissors;
