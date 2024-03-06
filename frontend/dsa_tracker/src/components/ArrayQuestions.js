import React from 'react';

function ArrayQuestions() {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Array Questions</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Question</th>
            <th style={tableHeaderStyle}>Completed</th>
            <th style={tableHeaderStyle}>Note</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows for array questions */}
          <tr>
            <td style={tableCellStyle}>Sample question 1</td>
            <td style={tableCellStyle}>Yes</td>
            <td style={tableCellStyle}>Lorem ipsum dolor sit amet</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Sample question 2</td>
            <td style={tableCellStyle}>No</td>
            <td style={tableCellStyle}>-</td>
          </tr>
          {/* Add more table rows as needed */}
        </tbody>
      </table>
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

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const tableHeaderStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  borderBottom: '2px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default ArrayQuestions;
