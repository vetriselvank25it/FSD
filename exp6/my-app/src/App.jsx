import React, { useState } from "react";

// Reusable function
function calculateTotal(marks, bonus) {
  return marks + bonus;
}

// Child component
function Student({ name, department }) {
  const [marks, setMarks] = useState(80);

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Marks: {marks}</p>

      <button onClick={() => setMarks(marks + 5)}>
        Add 5 Marks
      </button>

      <p>Total: {calculateTotal(marks, 10)}</p>
    </div>
  );
}

// Parent component
function App() {
  return (
    <div>
      <h1>ReactJS Laboratory</h1>
      <Student
        name="VETRISELVAN K"
        department="INFORMATION TECHNOLOGY"
      />
    </div>
  );
}

export default App;