import "../styles/Home.css";

export default function Home({ onStart }) {
  return (
    <div className="home-screen">
      <h1 className="title">Quizzy Land</h1>
      <p className="subtitle">Готов к весёлому челленджу по фронтенду?</p>
      <button className="start-button" onClick={onStart}>Начать игру</button>
    </div>
  );
}