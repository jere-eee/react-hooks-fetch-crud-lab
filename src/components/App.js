import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then((data) => setQuestions(data))
  }, [])

  function handleAddQ(q) {
    setQuestions([...questions, q])
  }

  function handleDelete(question) {
    const newQuestions = questions.filter(q => q.id !== question.id)
    setQuestions(newQuestions)
  }

  function handleUpdate(question) {
    const updatedQs = questions.map((q) => {
      if (q.id === question.id) {
        return question
      } 
      else return q
    })
    setQuestions(updatedQs)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQ={handleAddQ} /> : <QuestionList questions={questions} onDel={handleDelete} onUpdate={handleUpdate}/>}
    </main>
  );
}

export default App;
