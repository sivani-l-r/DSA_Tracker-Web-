import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddQuestionForm from './components/AddQuestionForm';
import DsaTracker from './components/DsaTracker';
import ArrayQuestions from './components/ArrayQuestions';
import StackQuestions from './components/StackQuestions';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>DSA Tracker</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/array" style={linkStyle}>
            <div style={boxStyle}>
              Array
            </div>
          </Link>
          <Link to="/stack" style={linkStyle}>
            <div style={boxStyle}>
              Stack
            </div>
          </Link>
          {/* Add more rectangular box components for Queue, etc. */}
        </div>
        <Routes>
          <Route path="/" element={<AddQuestionForm />} />
          <Route path="/array" element={<ArrayQuestions />} />
          <Route path="/stack" element={<StackQuestions />} />
          {/* Add routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  margin: '10px',
};

const boxStyle = {
  border: '1px solid black',
  padding: '20px',
  cursor: 'pointer',
  minWidth: '200px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: 'white',
  transition: 'transform 0.3s ease-in-out',
  marginBottom: '20px',
  ":hover": {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  }
};

export default App;
