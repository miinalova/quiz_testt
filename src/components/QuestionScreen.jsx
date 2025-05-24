export default function QuestionScreen({
  questionData,
  step,
  total,
  onAnswer,
  selected,
  onNext,
  timeLeft,
}) {
  const percent = ((step + 1) / total) * 100;

  return (
    <>
     <div className="container">
       <div className="progress-bar">
         <div className="progress" style={{ width: `${percent}%` } }></div>
       </div>
 
       <p>
         Вопрос {step + 1} из {total} — Осталось: {timeLeft}с
       </p>
 
       <div className="question-container">
         <h2>{questionData.question}</h2>
 
         {questionData.options.map((opt) => {
           let className = 'option-button';
           if (selected) {
             if (opt === questionData.answer) className += ' correct';
             else if (opt === selected) className += ' incorrect';
           }
 
           return (
             <button
               key={opt}
               className={className}
               onClick={() => onAnswer(opt)}
               disabled={!!selected}
               type="button"
             >
               {opt}
             </button>
           );
         })}
 
         {selected && (
           <button
             className="button"
             onClick={onNext}
             style={{ marginTop: 20 }}
             type="button"
           >
             Следующий
           </button>
         )}
       </div>
     </div>
    </>
  );
}