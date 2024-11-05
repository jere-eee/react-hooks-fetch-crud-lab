import React from "react";

function QuestionItem({ question, onDel, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => {
          fetch(`http://localhost:4000/questions/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "correctIndex": Number(e.target.value)
            })
          })
          .then(r => r.json())
          .then(updatedQ => onUpdate(updatedQ))
        }}>{options}</select>
      </label>
      <button onClick={() => {
        fetch(`http://localhost:4000/questions/${id}`, {
          method: "DELETE"
        })
        .then(r => r.json())
        .then(q => onDel(question))
      }}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
