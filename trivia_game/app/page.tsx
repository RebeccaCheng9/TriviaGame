"use client";

import { useState } from 'react';
import { questions} from './questions';
import { ProgressBar, Progress} from "@/components/ProgressBar";
import "tailwindcss";

const QuizApp: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState < number > (0);
    const [score, setScore] = useState < number > (0);
    const [showResult, setShowResult] = useState < boolean > (false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const user: Progress = { value: score, max: 100 };

    const handleAnswer = (option: string) => {
        if (selectedAnswer) return; // Prevent multiple clicks
        setSelectedAnswer(option);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        setSelectedAnswer(null); // Reset for the next question
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    // Inline Style Objects
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column" as "column",
            alignItems: "center", 
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%)",
            padding: "20px",
            color: "white",
        },
        quizBox: {
            background: "white",
            color: "#333",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            width: "40%",
            textAlign: "center" as "center",
        },
        questionTitle: {
            fontFamily: "Raleway",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#D6001C",
            marginBottom: "15px",
        },
        optionsContainer: {
            display: "flex",
            flexDirection: "column" as "column",
            gap: "10px",
        },
        optionButton: {
            padding: "12px 16px",
            fontFamily: "Raleway",
            fontSize: "1.25rem",
            background: "#D6001C",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
            opacity: "1.0",
        },
        optionButtonHover: {
            background: "#D6001C",
        },
        resultContainer: {
            textAlign: "center" as "center",
            fontFamily: "Raleway",
        },
        restartButton: {
            marginTop: "20px",
            padding: "12px 16px",
            fontFamily: "Raleway",
            fontSize: "1rem",
            background: "#D6001C",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.quizBox}>
                {showResult ? (
                    <div style={styles.resultContainer}>
                        <h2 style={styles.questionTitle}>Quiz Completed!</h2>
                        <p style = {{ fontSize: "1.25rem", fontFamily: "Raleway", marginTop: "8px"}}>
                            Score: {score} / {questions.length}
                        </p>
                        <button
                            style={styles.restartButton}
                            onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowResult(false);
                            }}
                        >
                            Restart
                        </button>
                    </div>
                ) : (
                    <div style={{ textAlign: "center" }}>
                        <h2 style={styles.questionTitle}>{questions[currentQuestion].question}</h2>
                        <div style={styles.optionsContainer}>
                            {questions[currentQuestion].options.map((option) => {
                                let buttonStyle = { ...styles.optionButton };
                                if (selectedAnswer) {
                                    if (option === questions[currentQuestion].answer) {
                                        buttonStyle.background = "#3cd658";
                                    } else if (option === selectedAnswer) {
                                        buttonStyle.background = "#ef4444";
                                    } else {
                                        buttonStyle.opacity = "0.5"; //dim the other buttons
                                    }
                                }
                                return (
                                    <button
                                        key={option}
                                        style={buttonStyle}
                                        disabled={!!selectedAnswer}
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </button>
                                );   
                            })}    
                        {selectedAnswer && (
                            <div style={{ marginTop: "20px", color: "#333"}}>
                                <p style = {{ fontSize: "1.25rem", fontWeight: "bold", fontFamily: "Raleway", marginBottom: "10px"}}>
                                    {questions[currentQuestion].funfact}
                                </p>
                                <button
                                    style={styles.restartButton}
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