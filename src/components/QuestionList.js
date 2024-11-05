import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDel, onUpdate}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem question={q} key={q.id} onDel={onDel} onUpdate={onUpdate}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
