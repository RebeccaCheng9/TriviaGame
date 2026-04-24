"use client";

import { useState } from 'react';
import { questions} from './questions';
import "tailwindcss";

const QuizApp: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState < number > (0);
    const [score, setScore] = useState < number > (0);
    const [showResult, setShowResult] = useState < boolean > (false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showStart, setShowStart] = useState<boolean>(false);
    const [questionCount, setQuestionCount] = useState < number > (1);

    const handleAnswer = (option: string) => {
        if (selectedAnswer) return; // Prevent multiple clicks
        setSelectedAnswer(option);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        setQuestionCount(questionCount + 1);
        setSelectedAnswer(null); // Reset for the next question
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const handleStartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setShowStart(true);
    };

    return (
        <div className="quizContainer">
            <div className="quizBox">
                {!showStart ? (
                <div className = "startScreen">
                    <h1 className = "startTitle">RPI Trivia Game</h1>
                    <p className = "startDescription">Challenge yourself on how well you know the history of RPI with this quick quiz</p>
                    <button className="restartButton" onClick={handleStartGame}>Start Quiz</button>
                </div>
                ) : showResult ? (
                    <div className="font-raleway">
                        <h2 className="questionTitle">Quiz Completed!</h2>
                        <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "10px", height: "20px", marginTop: "20px",overflow: "hidden" }}>
                            {/* The Actual Progress Fill */}
                            <div style={{ width: `${(score / questions.length) * 100}%`, backgroundColor: "#3cd658", height: "100%", transition: "width 0.5s ease-in-out" }} />
                        </div>
                        <p style={{ fontSize: "1.5rem", fontFamily: "Raleway", fontWeight: "bold", marginTop: "10px",color: "#333"}}>
                            {Math.round((score / questions.length) * 100)}%
                        </p>
                        <p style = {{ fontSize: "1.25rem", fontFamily: "Raleway", marginTop: "8px"}}>
                            You got {score} out of {questions.length} correct!
                        </p>    
                        <button
                            className="restartButton"
                            onClick={() => {
                                setShowStart(false);
                                setScore(0);
                                setCurrentQuestion(0);
                                setSelectedAnswer(null);
                                setShowResult(false);
                                setQuestionCount(1);
                            }}
                        >
                            Restart
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p style = {{ fontSize: "1.25rem", fontFamily: "Raleway", marginTop: "8px"}}>
                            Question {questionCount} out of {questions.length}
                        </p>
                        <h2 className="questionTitle">{questions[currentQuestion].question}</h2>
                        <div className="optionsContainer">
                            {questions[currentQuestion].options.map((option) => {
                                let buttonClass = "optionButton";
                                if (selectedAnswer) {
                                    if (option === questions[currentQuestion].answer) {
                                        buttonClass += " optionCorrect";
                                    } else if (option === selectedAnswer) {
                                        buttonClass += " optionWrong";
                                    } else {
                                        buttonClass += " optionDimmed";
                                    }
                                }
                                return (
                                    <button
                                        key={option}
                                        className={buttonClass}
                                        disabled={!!selectedAnswer}
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </button>
                                );   
                            })}    
                            {selectedAnswer && (
                                <div className="mt-2 pt-4 border-t border-gray-300 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <span className="text-red-600 font-bold text-xs uppercase tracking-widest block mb-2">Did you know?</span>
                                    <p style = {{ fontSize: "1.25rem", fontWeight: "bold", fontFamily: "Raleway", marginBottom: "10px"}}>
                                        {questions[currentQuestion].funfact}
                                    </p>
                                    <button
                                        className="restartButton"
                                        onClick={handleNextQuestion}
                                    >
                                        {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"}
                                    </button>
                                </div>    
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default QuizApp;