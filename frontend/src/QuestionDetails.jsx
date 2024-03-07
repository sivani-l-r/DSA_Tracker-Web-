import React from 'react';

const QuestionDetails = ({ question, onClose }) => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
      <h2 style={{ color: '#007bff', fontSize: '1.5rem', marginBottom: '20px' }}>{question.questionText}</h2>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ marginBottom: '5px' }}><strong>Type:</strong> {question.questionType}</p>
        <p style={{ marginBottom: '5px' }}><strong>Attempts:</strong> {question.attempts}</p>
        <p style={{ marginBottom: '5px' }}><strong>Notes:</strong> {question.questionNote}</p>
      </div>
      <button onClick={onClose} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>Close</button>
    </div>
  );
};

export default QuestionDetails;
