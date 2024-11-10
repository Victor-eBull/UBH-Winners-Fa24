import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import RoomOne from '../components/RoomOne'
import '../styles/Game.css'

const apiurl = 'http://localhost:3002/api';

function Game() {
    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const checkAnswer = (e) => {
        e.preventDefault();
        fetch(`${apiurl}/check-number`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "number": input }),
        }).then((res) => {
            if (!res.ok) {
                console.log('Error submitting answer');
            }
            return res.json();
        }).then((data) => {
            if (data.message === "pass"){
                console.log("Correct answer!");
                alert("win");
                // Navigate to next room
            }
            else {
                console.log("Incorrect answer");
                alert("flop era");
            }
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
            
    }

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
                <button onClick={checkAnswer}
                >Submit</button>
            </div>
        </div>
        </>
    )
}

export default Game