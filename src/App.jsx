import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing';
import Game from './pages/Game';
import Forest  from './pages/Forest';
import ShellPuzzle from './pages/ShellPuzzle';
import Success from './pages/Success';
import Success2 from './pages/Success2';
import './App.css';
import './styles/modal.css';

const apiurl = 'http://localhost:3002/api';

function App() {
  const username = localStorage.getItem('username');
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${apiurl}/log-in`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "token" : token }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to log in');
          }
          return res.json();
        })
        .then((data) => {
          console.log('logged in user:', data.data.username);
          localStorage.setItem('username', data.data.username);
          setIsLoggedIn(true);
          // Do something with the fetched data //! this should be my user data
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      console.log('No token found, skipping fetch');
    }
  }, []);

  useEffect(() => {
    if (nickname) {
    const formData = new FormData();
    formData.append('username', nickname);
    fetch(`${apiurl}/sign-up`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "username" : nickname }),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to sign up');
      }
        return res.json()
      })
    .then((data) => {
      console.log("Fetched token: " + data);
      localStorage.setItem('token', data.data.token);
      setIsLoggedIn(true);
    })
    .catch(err => console.log(err));
  }
  }, [gameStarted]);

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
    {loggedIn ?
      <Navbar username={localStorage.getItem("username")} showLeaderboard={setShowLeaderboard} showProgress={setShowProgress}/> :
      <Navbar showLeaderboard={setShowLeaderboard}/>} {/*// TODO: change to logged in */}
    {showLeaderboard && leaderboard()}
    {showProgress && progress()}
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Landing startGame={setGameStarted} changeNickname={setNickname} loggedIn={loggedIn}/>} />
      <Route path={"/game"} element={<Game/>} />
      <Route path="/success" element={<Success />}/>
      {/* <Route path="/success2" element={<Success2 />}/> */}
      <Route path="/room2" element={<Forest />}/>
      <Route path="/shell" element={<ShellPuzzle />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
