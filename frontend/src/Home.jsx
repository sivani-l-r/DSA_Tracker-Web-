import React from 'react'

const Home = () => {

    const [questions, setQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionType, setNewQuestionType] = useState('');
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');
  const [heading, setHeading] = useState('Questions');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [editedType, setEditedType] = useState('');
  const [editedAttempts, setEditedAttempts] = useState('');
  const [editedNote, setEditedNote] = useState('');

  useEffect(() => {
    fetchQuestions();
  }, [filter]);

  const fetchQuestions = async () => {
    try {
      let url = 'http://localhost:5555/all';
      let headingText = 'All Questions';
      if (filter === 'Array') {
        url = 'http://localhost:5555/array';
        headingText = 'Array Questions';
      } else if (filter === 'Stack') {
        url = 'http://localhost:5555/stack';
        headingText = 'Stack Questions';
      }
      const response = await axios.get(url);
      setQuestions(response.data.data);
      setHeading(headingText); // Update the heading
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError('Error fetching questions');
    }
  };

  const handleAddQuestion = async () => {
    try {
      const response = await axios.post('http://localhost:5555/', {
        questionText: newQuestionText,
        questionType: newQuestionType,
      });
      setNewQuestionText('');
      setNewQuestionType('');
      fetchQuestions();
    } catch (error) {
      console.error('Error adding question:', error);
      setError('Error adding question');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/all/${searchTerm}`);
      setSearchResults(response.data);
      setSearchTerm('');
      // Refetch questions based on the selected filter
      fetchQuestions();

    } catch (error) {
      console.error('Error searching questions:', error);
      setError('Error searching questions');
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:5555/all/${editingQuestion._id}`, {
        questionText: editedText,
        questionType: editedType,
        attempts: editedAttempts,
        questionNote: editedNote,
      });
      console.log(response.data); // Log response if needed
      fetchQuestions(); // Fetch questions again to update UI
      setEditingQuestion(null); // Reset editing state
    } catch (error) {
      console.error('Error editing question:', error);
      setError('Error editing question');
    }
  };

  const handleEditButtonClick = (question) => {
    setEditingQuestion(question);
    setEditedText(question.questionText);
    setEditedType(question.questionType);
    setEditedAttempts(question.attempts);
    setEditedNote(question.questionNote);
  };

  const handleDelete = async (questionId) => {
    try {
      const response = await axios.delete(`http://localhost:5555/all/${questionId}`);
      console.log(response.data); // Log response if needed
      fetchQuestions(); // Fetch questions again to update UI
    } catch (error) {
      console.error('Error deleting question:', error);
      setError('Error deleting question');
    }
  };
  
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>DSA Tracker</h1>
      {/* Add navigation button for the stats page */}
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
      <Link to="/stats" style={{ textDecoration: 'none', color: '#007bff', fontSize: '1.2rem' }}>Stats</Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9', flex: '1' }}>
          <h2 style={{ marginBottom: '10px', color: '#007bff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
            <FaPlus style={{ marginRight: '10px', fontSize: '1.2rem' }} /> Add New Question
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <label htmlFor="questionText" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question Text</label>
            <input
              type="text"
              id="questionText"
              placeholder="Enter question text"
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <label htmlFor="questionType" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question Type</label>
            <input
              type="text"
              id="questionType"
              placeholder="Enter question type"
              value={newQuestionType}
              onChange={(e) => setNewQuestionType(e.target.value)}
              style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
            />
          </div>
          <button onClick={handleAddQuestion} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>Add Question</button>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#007bff', fontSize: '1.5rem', marginBottom: '10px', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>{heading}</h2>
        <div style={{ float: 'right', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', marginRight: '10px' }}
          />
          <button onClick={handleSearch} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Search</button>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
      <div style={{ float: 'right' }}>
        <label htmlFor="filter" style={{ marginRight: '10px' }}>Filter:</label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}>
          <option value="All">All</option>
          <option value="Array">Array</option>
          <option value="Stack">Stack</option>
        </select>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
        <thead style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #007bff' }}>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '1rem', fontWeight: 'bold', borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc'  }}>Question</th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '1rem', fontWeight: 'bold', borderRight: '1px solid #ccc' }}>Type</th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '1rem', fontWeight: 'bold', borderRight: '1px solid #ccc' }}>Attempts</th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '1rem', fontWeight: 'bold', borderRight: '1px solid #ccc' }}>Notes</th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '1rem', fontWeight: 'bold', borderRight: '1px solid #ccc' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0 ? (
            searchResults.map((question) => (
              <tr key={question._id}>
                <td style={{ padding: '12px', fontSize: '1rem', borderRight: '1px solid #ccc' }}>{question.questionText}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{question.questionType}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{question.attempts}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>{question.questionNote}</td>
                <td style={{ padding: '12px', fontSize: '1rem' }}>
                  <div>
                    <FaEdit style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleEditButtonClick(question)} />
                    <FaTrash style={{ cursor: 'pointer' }} onClick={() => handleDelete(question._id)} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            questions.map((question) => (
              <tr key={question._id}>
                <td style={{ padding: '12px', fontSize: '1rem', borderRight: '1px solid #ccc' , borderLeft: '1px solid #ccc' }}>{question.questionText}</td>
                <td style={{ padding: '12px', fontSize: '1rem' , borderRight: '1px solid #ccc' }}>{question.questionType}</td>
                <td style={{ padding: '12px', fontSize: '1rem' , borderRight: '1px solid #ccc' }}>{question.attempts}</td>
                <td style={{ padding: '12px', fontSize: '1rem' , borderRight: '1px solid #ccc' }}>{question.questionNote}</td>
                <td style={{ padding: '12px', fontSize: '1rem' , borderRight: '1px solid #ccc' }}>
                  <div>
                    <FaEdit style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleEditButtonClick(question)} />
                    <FaTrash style={{ cursor: 'pointer' }} onClick={() => handleDelete(question._id)} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* Modal for editing question */}
      {editingQuestion && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '999', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
            <h2>Edit Question</h2>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="editedText" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question Text</label>
              <input
                type="text"
                id="editedText"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="editedType" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question Type</label>
              <input
                type="text"
                id="editedType"
                value={editedType}
                onChange={(e) => setEditedType(e.target.value)}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="editedAttempts" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Attempts</label>
              <input
                type="number"
                id="editedAttempts"
                value={editedAttempts}
                onChange={(e) => setEditedAttempts(e.target.value)}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="editedNote" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Note</label>
              <input
                type="text"
                id="editedNote"
                value={editedNote}
                onChange={(e) => setEditedNote(e.target.value)}
                style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
              />
            </div>
            <div>
              <button onClick={handleEdit} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', marginRight: '10px' }}>Save</button>
              <button onClick={() => setEditingQuestion(null)} style={{ padding: '10px 20px', backgroundColor: '#ccc', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home