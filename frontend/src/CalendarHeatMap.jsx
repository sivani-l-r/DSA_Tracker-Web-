import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalendarHeatmap = () => {
  const [questionDates, setQuestionDates] = useState([]);

  useEffect(() => {
    fetchQuestions('http://localhost:5555/all'); // Pass the URL here
  }, []);

  // Fetch questions function
  const fetchQuestions = async (url) => {
    try {
      const response = await axios.get(url);
      const creationDates = response.data.data.map(question => {
        return new Date(question.createdAt).toISOString().slice(0, 10);
      });
      setQuestionDates(creationDates);
      console.log(creationDates);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const isQuestionCreatedOnDate = (date) => {
    return questionDates.includes(date);
  };

  const getCellStyle = (date, isQuestionCreated) => {
    return {
      backgroundColor: isQuestionCreated ? '#007bff' : '#f0f0f0',
      color: isQuestionCreated ? '#fff' : '#000',
      border: '1px solid #ccc',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer', // Add cursor pointer to indicate interactivity
      borderRadius: '50%', // Round the corners
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', // Add shadow for depth
      margin: '3px', // Add margin between each cell
    };
  };

  const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // Note: month is zero-indexed
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const currentYear = currentDate.getFullYear();
      const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 to month index because it starts from 0
      const currentDay = ("0" + currentDate.getDate()).slice(-2);

      // Format the date in the desired format
      const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;
      console.log(`current date: ${currentDate}`);
      console.log(`Formatted date: ${formattedDate}`);
      const isQuestionCreated = isQuestionCreatedOnDate(formattedDate);
      calendar.push(
        <div key={i} style={getCellStyle(currentDate, isQuestionCreated)}>
          {i}
        </div>
      );
    }

    return calendar;
  };

  const today = new Date(); // Move declaration here
  const currentMonth = (today.toLocaleString('default', { month: 'long' }));

  return (
    <div style={{ backgroundColor: '#fff', border: '2px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{currentMonth}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '300px', margin: '0 auto' }}>
        {generateCalendar()}
      </div>
    </div>
  );
};

export default CalendarHeatmap;
