import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing';
import Roadmap from './pages/Roadmap';
import './App.css';

function App() {
  const [nickname, setNickname] = useState('')
  const [gameStarted, setGameStarted] = useState(false);
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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing startGame={setGameStarted} changeNickname={setNickname}/>} />
      <Route path="/roadmap" element={<Roadmap/>} />
      <Route path="/room2" element={<Forest />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

// const updates = <div>
// {/* Display progress if available */}
// {progress ? (
//   <div>
//     <h2>Progress:</h2>
//     <p>Challenge 1: {progress.challenge1}%</p>
//     <p>Challenge 2: {progress.challenge2}%</p>
//   </div>
// ) : (
//   <p>Waiting for progress updates...</p>
// )}
// </div>
