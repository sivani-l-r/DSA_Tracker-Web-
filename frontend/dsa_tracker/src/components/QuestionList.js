import React from 'react';

function QuestionList({ questions }) {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Questions</h2>
      <ul style={listStyle}>
        {questions.map((question, index) => (
          <li key={index} style={listItemStyle}>
            <span style={typeStyle}>Type:</span> {question.type}, <span style={nameStyle}>Name:</span> {question.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  marginBottom: '10px',
};

const typeStyle = {
  fontWeight: 'bold',
};

const nameStyle = {
  fontWeight: 'bold',
};

export default QuestionList;
