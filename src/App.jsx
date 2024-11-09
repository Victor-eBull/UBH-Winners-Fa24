import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    // Create an EventSource connection to the server
    const eventSource = new EventSource('/api/progress');

    // Listen for messages from the server
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setProgress(data);
    };

    // Cleanup when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        {/* Display progress if available */}
        {progress ? (
          <div>
            <h2>Progress:</h2>
            <p>Challenge 1: {progress.challenge1}%</p>
            <p>Challenge 2: {progress.challenge2}%</p>
          </div>
        ) : (
          <p>Waiting for progress updates...</p>
        )}
      </div>
    </>
  );
}

export default App;
