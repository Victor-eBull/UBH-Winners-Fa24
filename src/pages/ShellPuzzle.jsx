import React, { useState } from 'react';
import '../styles/ShellPuzzle.css';

const apiurl = 'http://localhost:3002/api';

const ShellPuzzle = () => {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);

  // Function to handle command submission
  const handleCommandSubmit = async () => {
    // Add the entered command to the history
    const newCommandHistory = [...commandHistory, { command: inputValue, output: '' }];

    try {
      // Send command to backend
      const response = await fetch(`${apiurl}/shell`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: inputValue }),
        });
      const data = await response.json();

      // Update the last command's output in the command history
      newCommandHistory[newCommandHistory.length - 1].output = data.output;
      setCommandHistory(newCommandHistory);
      setInputValue(''); // Clear the input
    } catch (error) {
      console.error('Error executing command:', error);
    }
  };

  // Key press handler for the "Enter" key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submit behavior
      handleCommandSubmit(); // Call the command submission function
    }
  };

  return (
    <div className="shell-container">
      <div className="shell-output">
        {commandHistory.map((entry, index) => (
          <div key={index}>
            <span className="command"> {entry.command}</span>
            <pre className="output">{entry.output}</pre>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="shell-input"
        placeholder="Type a command..."
        autoFocus
      />
    </div>
  );
};

export default ShellPuzzle;
