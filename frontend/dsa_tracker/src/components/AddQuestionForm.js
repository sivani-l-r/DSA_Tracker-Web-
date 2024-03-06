import React, { useState } from 'react';

function AddQuestionForm({ onAddQuestion }) {
  const [questionType, setQuestionType] = useState('');
  const [questionName, setQuestionName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionType || !questionName) return;
    onAddQuestion({ type: questionType, name: questionName });
    setQuestionType('');
    setQuestionName('');
  };

  return (
    <div style={formContainer}>
      <h2 style={headingStyle}>Add Question</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroup}>
          <label style={labelStyle}>
            Type:
            <input
              type="text"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              style={inputStyle}
              placeholder="Enter question type"
            />
          </label>
        </div>
        <div style={inputGroup}>
          <label style={labelStyle}>
            Name:
            <input
              type="text"
              value={questionName}
              onChange={(e) => setQuestionName(e.target.value)}
              style={inputStyle}
              placeholder="Enter question name"
            />
          </label>
        </div>
        <button type="submit" style={buttonStyle}>Add</button>
      </form>
    </div>
  );
}

const formContainer = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputGroup = {
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '300px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

export default AddQuestionForm;
