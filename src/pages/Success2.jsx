import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Game.css'

function Success2() {
    const navigate = useNavigate()
    return (
        <>
        <div className={"game"}>
            <br />
            <br />
            <br />
            <div>
                <br/>
                <img src="../cat.png" alt="cat" style={{height: "400px"}}/>
                <p>You have successfully escaped the Black Forest Maze. Are you ready for the next challenge?</p>
            </div>
            <div className='submit'>
                <button onClick={() => navigate('/shell')}>Enter</button>
            </div>
        </div>
        </>
    )
}

export default Success