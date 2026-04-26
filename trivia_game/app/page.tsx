"use client";

import { useState, useEffect } from 'react';
import { questions} from './questions';
import "tailwindcss";

const QuizApp: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState < number > (0);
    const [score, setScore] = useState<Record<string, number>>({});
    const [showResult, setShowResult] = useState < boolean > (false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showStart, setShowStart] = useState<boolean>(false);
    const [questionCount, setQuestionCount] = useState < number > (1);
    const [highScore, setHighScore] = useState<string | null>(null);

    const totalCorrect = Object.values(score).reduce((acc, val) => acc + val, 0);

    const handleAnswer = (option: string) => {
        if (selectedAnswer) return; // Prevent multiple clicks
        setSelectedAnswer(option);
        const category = questions[currentQuestion].category;
        if (option === questions[currentQuestion].answer) {
            setScore(prev => ({
            ...prev,
            [category]: (prev[category] || 0) + 1
        }));
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        setQuestionCount(questionCount + 1);
        setSelectedAnswer(null); // Reset for the next question
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            const finalScore = Math.round((totalCorrect / questions.length) * 100);
            const savedScore = localStorage.getItem("rpi_trivia_high_score"); 
            const existingHighScore = savedScore ? parseInt(savedScore, 10) : 0;
            /*save high score*/
            if (finalScore > existingHighScore) {
                localStorage.setItem("rpi_trivia_high_score", finalScore.toString()); 
            }
            setShowResult(true);
        }
    };

    const handleStartGame = () => {
        setScore({});
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setShowStart(true);
    };

    const getFeedbackMessage = () => {
        const percentage = (totalCorrect / questions.length) * 100;
        if (percentage === 100) return "Perfect score! You're an expert at this!";
        if (percentage >= 80) return "Impressive! You really know a lot.";
        if (percentage >= 50) return "Not bad! You've got the basics down.";
        return "RPI has a lot of history to discover.";
    };

    useEffect(() => {
        const saved = localStorage.getItem("rpi_trivia_high_score");
        if (saved) setHighScore(saved);
    }, [showResult]);

    return (
        <div className="quizContainer">
            <div className="quizBox">
                {!showStart ? (
                <div className = "startScreen">
                    <h1 className = "startTitle">RPI Trivia Game</h1>
                    <p className = "startDescription">Challenge yourself on your knowledge of the history of RPI with this quick quiz</p>
                    {highScore && (
                        <div className="mb-4 text-red-600 rounded-lg font-bold text-2xl">Personal Best: {highScore}%</div>
                    )}
                    <button 
                        className="restartButton transition-all duration-300 hover:scale-105 active:scale-95" 
                        onClick={handleStartGame}>Start Quiz
                    </button>
                </div>
                ) : showResult ? (
                    <div className="font-raleway flex flex-col items-center w-full text-center">
                        <h2 className="questionTitle">Quiz Completed!</h2>
                        <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "10px", height: "20px", marginTop: "20px",overflow: "hidden" }}>
                            {/* The Actual Progress Fill */}
                            <div style={{ width: `${(totalCorrect / questions.length) * 100}%`, backgroundColor: "#3cd658", height: "100%", transition: "width 0.5s ease-in-out" }} />
                        </div>
                        <p style={{ fontSize: "1.5rem", fontFamily: "Raleway", fontWeight: "bold", marginTop: "10px",color: "#333"}}>
                            {Math.round((totalCorrect / questions.length) * 100)}%
                        </p>
                        <p style = {{ fontSize: "1.25rem", fontFamily: "Raleway", marginTop: "8px"}}>
                            You got {totalCorrect} out of {questions.length} correct!
                        </p>
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto mt-6">
                            {Array.from(new Set(questions.map(q => q.category))).map((cat) => {
                                // Calculate stats for this specific category
                                const totalInCategory = questions.filter(q => q.category === cat).length;
                                const correctInCategory = score[cat] || 0;
                                const percent = Math.round((correctInCategory / totalInCategory) * 100);
                                const radius = 30;
                                const circumference = 2 * Math.PI * radius;

                                return (
                                    <div key={cat} className="flex flex-col items-center p-3 border border-gray-600 rounded-xl bg-gray-50 shadow-sm">
                                        <span className="font-bold text-base text-gray-700 mb-2">{cat}</span>
                                        <div className="relative flex items-center justify-center">
                                            <svg width="80" height="80" className="transform -rotate-90">
                                                <circle cx="40" cy="40" r={radius} stroke="#e0e0e0" strokeWidth="5" fill="transparent" />
                                                <circle
                                                    cx="40" cy="40" r={radius} stroke="#3cd658" strokeWidth="5" fill="transparent"
                                                    strokeDasharray={circumference}
                                                    style={{ 
                                                        strokeDashoffset: circumference - (percent / 100) * circumference,
                                                        transition: "stroke-dashoffset 1s ease"
                                                    }}
                                                />
                                            </svg>
                                            <span className="absolute text-sm font-bold">{percent}%</span>
                                        </div>
                                        <span className="text-sm uppercase tracking-wider text-gray-600 mt-2">
                                            {correctInCategory} / {totalInCategory}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <p style={{ fontSize: "1.25rem", color: "#666", fontStyle: "italic", margin: "5px 0" }}>
                            {getFeedbackMessage()}
                        </p>    
                        <button
                            className="restartButton"
                            onClick={() => {
                                setShowStart(false);
                                setScore({});
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