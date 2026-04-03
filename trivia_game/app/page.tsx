"use client";

import { useState } from 'react';
import "tailwindcss";

interface Question {
    question: string;
    options: string[];
    answer: string;
    funfact: string;
}

const questions: Question[] = [
    {
        question: "When was RPI established?",
        options: ["1800", "1820", "1814", "1824"],
        answer: "1824",
        funfact: "Did you know that RPI is the oldest technological research university in the US!",
    },
    {
        question: "True or False: Majoring in mechanical engineering was always offered.",
        options: ["True", "False"],
        answer: "False",
        funfact: "Degrees in electrical and mechanical engineering were first offered in the 1910s.",
    },
    {
        question: "The founders of RPI are...",
        options: ["Stephen Van Rensselaer and Palmer Ricketts", "Stephen Van Rensselaer and Russell Sage", "Stephen Van Rensselaer and Benjamin Franklin Greene", "Stephen Van Rensselaer and Amos Eaton"],
        answer: "Stephen Van Rensselaer and Amos Eaton",
        funfact: "Stephen Van Rensselaer was an influential politician who served in the House of Representatives from 1822 - 1829.",
    },
    {
        question: "The Polytechnic, the school newspaper, has had continous publication since what year?",
        options: ["1850", "1824", "1885", "1900"],
        answer: "1885",
        funfact: "You are actually using the Polytechnic website right now!!",
    },
    {
        question: "The 1950 graduating class is unique due to the fact that...?",
        options: ["Over 80% were veterans", "Over 60% were female", "Over 70% were atheletes", "Over 50% were younger than 20"],
        answer: "Over 80% were veterans",
        funfact: "Additionally, the average age was 32, and over 40% were married.",
    },
    {
        question: "George W. G. Ferris (RPI Class of 1881) is known for creating the first...?",
        options: ["Swing Tower", "Rollercoaster", "Merry-go-Round", "Ferris Wheel"],
        answer: "Ferris Wheel",
        funfact: "Another notible RPI alumni include Steven Sasson (class of 1972), the inventor of the first digital camera.",
    },
    {
        question: "True or False: Puckman was not the first mascot.",
        options: ["True", "False"],
        answer: "True",
        funfact: "The mascot of RPI has gone through multiple changes, including ones like \"The Bachelors,\" and \"Red Hawks\"."
    },
    {
        question: "What was RPI's original name?",
        options: ["Rensselaer School", "Rensselaer Institute", "Rensselaer University", "Rensselaer Polytechnic Institute"],
        answer: "Rensselaer School",
        funfact: "All the options above were once the name of RPI except for Rensselaer University!",
    },
    {
        question: "The freshman dorms were completed in the:",
        options: ["1940s", "1950s", "1960s", "1970s"],
        answer: "1950s",
        funfact: "The freshman dorms have been around for over 75 years!",
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
    /* 
    const revealAnswer = (option: string) => {
        questions[currentQuestion].answer.style.background = #00d627;
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

    }
    */ 

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
            background: "linear-gradient(to bottom, #D6001C 0%, #e8e8e8 95%, #ffffff 100%)",
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
            fontSize: "1.5rem",
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