import { useState, useEffect } from "react";
import Backbtn from "../Backbtn";

function QuizApp() {
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [answerRevealed, setAnswerRevealed] = useState(false);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10`)
      .then((response) => response.json())
      .then((data) => setQuiz(data.results))
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  const handleAnswerSelect = (answer) => {
    if (selectedAnswers[currentQuestionIndex]) return;

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
    setAnswerRevealed(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerRevealed(false);
    } else {
      calculateScore();
      setIsQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const restartQuiz = () => {
    setSelectedAnswers([]);
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
    setScore(0);
    setAnswerRevealed(false);
  };

  if (isQuizCompleted) {
    return (
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold">Quiz Completed!</h1>
        <p className="mt-2">
          Your Score: {score} out of {quiz.length}
        </p>
        <div className="flex">
        <button
          onClick={restartQuiz}
          className="button"
        >
          Restart Quiz
        </button>
        <Backbtn/>
        </div>
      </div>
    );
  }

  return (
    <>
    <Backbtn/>
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 justify-center flex">Quiz App</h1>
      {quiz.length > 0 && (
        <div>
          <h3 className="text-xl mb-2">Question {currentQuestionIndex + 1}:</h3>
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{
              __html: quiz[currentQuestionIndex].question,
            }}
          ></p>
          <ul className="mb-4">
            {quiz[currentQuestionIndex].incorrect_answers
              .concat(quiz[currentQuestionIndex].correct_answer)
              .sort(() => Math.random() - 0.5)
              .map((answer, i) => {
                const isCorrect =
                  answer === quiz[currentQuestionIndex].correct_answer;
                const isSelected =
                  selectedAnswers[currentQuestionIndex] === answer;
                const isWrong = isSelected && !isCorrect;

                return (
                  <li
                    key={i}
                    onClick={() => handleAnswerSelect(answer)}
                    className={`cursor-pointer py-2 px-4 rounded mb-2 ${
                      isCorrect && answerRevealed
                        ? "bg-green-200"
                        : isWrong
                        ? "bg-gray-300"
                        : isSelected
                        ? "bg-red-200"
                        : "bg-white"
                    }`}
                  >
                    {answer}
                  </li>
                );
              })}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
            className="button"
          >
            {currentQuestionIndex < quiz.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </button>

          {/* Show status of answers continuously */}
          <div className="mt-4">
            <h4 className="font-bold">Status of Answers:</h4>
            {selectedAnswers.map((answer, index) => {
              const question = quiz[index];
              if (question) {
                return (
                  <div key={index}>
                    <strong>Question {index + 1}: </strong>
                    {answer === question.correct_answer ? (
                      <span className="text-green-500">Correct</span>
                    ) : answer ? (
                      <span className="text-red-500">Incorrect</span>
                    ) : (
                      <span className="text-gray-500">Not answered</span>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  </>
  );
  }

export default QuizApp;
