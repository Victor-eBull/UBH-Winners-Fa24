import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import RoomOne from '../components/RoomOne'
import '../styles/Game.css'

function Game() {
    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const handleSubmit = () => {}

    return (
        <>
        <div className={"game"}>
            <div>
                <RoomOne/>
            </div>
            <div className='submit'>
                <input value={input}
                    type='text'
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter your anwser here'
                ></input>
                <button onClick={handleSubmit}
                >Submit</button>
            </div>
        </div>
        </>
    )
}

export default Game