import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import QuestionScreen from "./components/QuestionScreen";
import { questions } from "./data/question";
import ResultScreen from "./components/ResultScreen";

export default function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const currentQuestion = questions[step];

  // Таймер
  useEffect(() => {
    if (!currentQuestion || selected !== null) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          setSelected("время вышло");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentQuestion, selected]);

  // Начать тест
  const handleStart = () => setStarted(true);

  // Обработка ответа
  const handleAnswer = (option) => {
    setSelected(option);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  // Следующий вопрос
  const handleNext = () => {
    setSelected(null);
    setStep((prev) => prev + 1);
    setTimeLeft(10);
  };

  // Пока не начали
  if (!started) return <Home onStart={handleStart} />;

  // Все вопросы пройдены
  if (!currentQuestion)
    return (
      <ResultScreen
        score={score}
        total={questions.length}
        onRestart={() => {
          setStarted(false);
          setStep(0);
          setScore(0);
          setSelected(null);
        }}
      />
    );

  // Основной экран
  return (
    <QuestionScreen
      questionData={currentQuestion}
      step={step}
      total={questions.length}
      selected={selected}
      onAnswer={handleAnswer}
      onNext={handleNext}
      timeLeft={timeLeft}
      score={score}
    />
  );
}
