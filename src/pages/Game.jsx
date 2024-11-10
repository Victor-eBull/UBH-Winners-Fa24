import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import RoomOne from '../components/RoomOne'
import '../styles/Game.css'

function Game() {
    const navigate = useNavigate()

    return (
        <>
        <div className={"game"}>
            <div>
                <RoomOne/>
            </div>
        </div>
        </>
    )
}

export default Game