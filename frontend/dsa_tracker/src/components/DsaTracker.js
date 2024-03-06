import React from 'react';
import QuestionList from './QuestionList.js';

function DsaTracker({ questions }) {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>DSA Tracker</h1>
      <QuestionList questions={questions} />
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '30px',
};

export default DsaTracker;
