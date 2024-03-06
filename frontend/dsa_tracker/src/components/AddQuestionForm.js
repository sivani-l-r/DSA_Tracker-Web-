import React, { useState } from 'react';
import axios from 'axios';

function AddQuestionForm() {
  const [questionType, setQuestionType] = useState('');
  const [questionName, setQuestionName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!questionType || !questionName) return;

    try {
      const response = await axios.post('http://localhost:5555/', {
        questionText: questionName,
        questionType: questionType
      });

      console.log('Question added successfully:', response.data);
      
      setQuestionType('');
      setQuestionName('');
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Add Question</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="questionType" style={styles.label}>
            Type:
          </label>
          <input
            id="questionType"
            type="text"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            style={styles.input}
            placeholder="Enter question type"
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="questionName" style={styles.label}>
            Name:
          </label>
          <input
            id="questionName"
            type="text"
            value={questionName}
            onChange={(e) => setQuestionName(e.target.value)}
            style={styles.input}
            placeholder="Enter question name"
          />
        </div>
        <button type="submit" style={styles.button}>Add</button>
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default AddQuestionForm;
