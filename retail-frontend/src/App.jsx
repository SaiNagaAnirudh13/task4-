// src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // Replace with your VM's public IP
        const response = await fetch('/api');
        const text = await response.text();
        setMessage(text);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Failed to fetch data from backend.');
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1>RetailTech Solutions</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;