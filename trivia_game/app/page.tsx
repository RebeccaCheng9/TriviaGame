"use client";

import { useState } from 'react';
interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
    {
        question: "When was RPI established?",
        options: ["1800", "1820", "1814", "1824"],
        answer: "1824",
    },
    {
        question: "What was RPI's original name?",
        options: ["Rensselaer School", "Rensselaer Institute", "Rensselaer University", "Rensselaer Polytechnic Institute"],
        answer: "Rensselaer School",
    },
    {
        question: "The freshman dorms were completed in the:",
        options: ["1940s", "1950s", "1960s", "1970s"],
        answer: "1950s",
    },
];

const QuizApp: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState < number > (0);
    const [score, setScore] = useState < number > (0);
    const [showResult, setShowResult] = useState < boolean > (false);

    const handleAnswer = (option: string) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
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
            background: "linear-gradient(to bottom right, #D6001C, #ffffff)",
            padding: "20px",
            color: "white",
        },
        quizBox: {
            background: "white",
            color: "#333",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            width: "400px",
            textAlign: "center" as "center",
        },
        questionTitle: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#D6001C",
            marginBottom: "15px",
        },
        timer: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "red",
            marginBottom: "15px",
        },
        optionsContainer: {
            display: "flex",
            flexDirection: "column" as "column",
            gap: "10px",
        },
        optionButton: {
            padding: "12px 16px",
            fontSize: "1rem",
            background: "#D6001C",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
        },
        optionButtonHover: {
            background: "#D6001C",
        },
        resultContainer: {
            textAlign: "center" as "center",
        },
        restartButton: {
            marginTop: "20px",
            padding: "12px 16px",
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
                        <p className="text-xl mt-2">
                            Your Score: {score} / {questions.length}
                        </p>
                        <button
                            style={styles.restartButton}
                            onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowResult(false);
                            }}
                        >
                            Restart Quiz
                        </button>
                    </div>
                ) : (
                    <div style={{ textAlign: "center" }}>
                        <h2 style={styles.questionTitle}>{questions[currentQuestion].question}</h2>
                        <div style={styles.optionsContainer}>
                            {questions[currentQuestion].options.map((option) => (
                                <button
                                    key={option}
                                    style={styles.optionButton}
                                    onMouseOver={(e) => (e.currentTarget.style.background = 
                                        styles.optionButtonHover.background)}
                                    onMouseOut={(e) => (e.currentTarget.style.background = 
                                        styles.optionButton.background)}
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default QuizApp;