import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Roadmap from './pages/Roadmap'
import './App.css'

function App() {
  const [nickname, setNickname] = useState('')
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing startGame={setGameStarted} changeNickname={setNickname}/>} />
      <Route path="/roadmap" element={<Roadmap/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
