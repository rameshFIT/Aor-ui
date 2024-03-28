import React from 'react';
import axios from 'axios';

function App() {
  const handleSaveClick = async () => {
    try {
      // If you have to pass parameters, you can add them to the URL query string.
      const response = await axios.get('https://localhost:5001/api/AORExceptions/GetAORExceptions', { params: { pageNumber: 1, pageSize: 50 } });
      //const response = await axios.get('https://localhost:5001/AORExceptions/Test');
                                       

      console.log('API response:', response.data);
      // Handle the response as needed
    } catch (error) {
      console.error('API call error:', error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <button onClick={handleSaveClick}>Call API</button>
    </div>
  );
}

export default App;
