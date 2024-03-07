import React from 'react';

const QuestionDetails = ({ question, onClose }) => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
      <h2>{question.questionText}</h2>
      <p><strong>Type:</strong> {question.questionType}</p>
      <p><strong>Attempts:</strong> {question.attempts}</p>
      <p><strong>Notes:</strong> {question.questionNote}</p>
      <button onClick={onClose} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>Close</button>
    </div>
  );
};

export default QuestionDetails;
