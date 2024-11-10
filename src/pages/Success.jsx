import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Game.css'

function Success() {
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
                <p>You have successfully escaped the tea party. Ready to enter the Black Forest?</p>
            </div>
            <div className='submit'>
                <button onClick={() => navigate('/room2')}>Enter</button>
            </div>
        </div>
        </>
    )
}

export default Success