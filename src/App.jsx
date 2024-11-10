import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing';
import Game from './pages/Game';
import './App.css';
import './styles/Modal.css';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('')
  const [gameStarted, setGameStarted] = useState(false);
  
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const modal = (title, closeModal, content) => {
    return(
    <div className={'modal_container'} onClick={(e) => {e.target.classList.contains('modal_container') ? closeModal() : null}}>
    <div className={'modal'}>
      <div className={'modal_header'}>
        <h1>{title}</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <div className={'modal_body'}>
        {content}
      </div>
    </div>
    </div>
    );
  }

  const leaderboard = () => {
    // fetch leaderboard
    const p1 = "Player 1: 100";
    const p2 = "Player 2: 90";
    const p3 = "Player 3: 80";
    const p4 = "Player 4: 70";
    const p5 = "Player 5: 60";
    const body = (
      <ol>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
        <li>{p4}</li>
        <li>{p5}</li>
      </ol>
    );
    return(
      modal("Leaderboard", () => setShowLeaderboard(false), body)
    );
  }

  const progress = () => {
    // fetch progress
    const body = (
      <p>Placeholder</p>
    );
    return(
      modal("My Progress", () => setShowProgress(false), body)
    );
  }
  

  return (
    <>
    {nickname ?
      <Navbar username={nickname} showLeaderboard={setShowLeaderboard} showProgress={setShowProgress}/> :
      <Navbar showLeaderboard={setShowLeaderboard}/>} {/*// TODO: change to logged in */}
    {showLeaderboard && leaderboard()}
    {showProgress && progress()}
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Landing startGame={setGameStarted} changeNickname={setNickname}/>} />
      <Route path={"/game"} element={<Game/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
