import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [marks, setMarks] = useState('');
  const [credits, setCredits] = useState('');
  const [gpa, setGpa] = useState(null);

  const getGradePoint = (marks) => {
    if (marks >= 80 && marks <= 100) return 4.0;
    if (marks >= 70 && marks < 80) return 3.5;
    if (marks >= 60 && marks < 70) return 3.0;
    if (marks >= 50 && marks < 60) return 2.5;
    if (marks >= 40 && marks < 50) return 2.0;
    if (marks >= 30 && marks < 40) return 1.5;
    if (marks >= 20 && marks < 30) return 1.0;
    if (marks >= 10 && marks < 20) return 0.5;
    return 0.0;
  };

  const calculateGpa = () => {
    const marksArray = marks.split(',').map(Number);
    const creditsArray = credits.split(',').map(Number);

    if (marksArray.length !== creditsArray.length) {
      alert('The number of marks and credit hours should be the same.');
      return;
    }

    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < marksArray.length; i++) {
      totalGradePoints += getGradePoint(marksArray[i]) * creditsArray[i];
      totalCredits += creditsArray[i];
    }

    setGpa(totalGradePoints / totalCredits);
  };

  return (
    <div className="App">
      <h1>GPA Calculator</h1>
      <h5>developed by Abdul Qadeer</h5>
      
      <div>
        <label>
          Marks (comma-separated):
          <input
            type="text"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Credit Hours (comma-separated):
          <input
            type="text"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateGpa}>Calculate GPA</button>
      {gpa !== null && (
        <div>
          <h2>Your GPA is: {gpa.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
