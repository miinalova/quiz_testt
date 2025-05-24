import React from "react";
import "../styles/result.css"; // стили для анимации и яркого дизайна

export default function ResultScreen({ score, total, onRestart }) {
  const percent = (score / total) * 100;

  const getMessage = () => {
    // if (percent === 100) return "Фантастика! Ты мастер!";
    // if (percent >= 70) return "Отличный результат!";
    // if (percent >= 50) return "Хорошо, но можно лучше!";
    // return "Ничего, ты справишься в следующий раз!";
  };
  return (
    <div className="result-container">
      <h2 className="result-text">{getMessage()}</h2>
      <p className="result-score">
        Вы набрали <strong>{score}</strong> из {total} баллов
      </p>
      <button className="button" onClick={onRestart}>
        Попробовать снова
      </button>
    </div>
  );
}

