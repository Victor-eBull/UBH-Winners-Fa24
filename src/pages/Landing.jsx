import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Landing({startGame, changeNickname}) {
    const navigate = useNavigate()
    const gameName = 'The White Rabbit\'s Escape'
    const [showError, setShowError] = useState(false)
    const [nickname, setNickname] = useState('')

    const handleEnter = (e) => {
        if (nickname.length > 0) {
            setShowError(false)
            changeNickname(nickname)
            startGame(true)
            navigate('/roadmap')
        }else{
            setShowError(true)
        }
    }

    const error = showError ? <p className={"error"}>Please enter a nickname.</p> : null

    return (
        <div className={"landing"}>
            <h1 className={"landing_name"}>{gameName}</h1>
            {error}
            <div className={"landing_inputs"}>
                <input onChange={(e) => setNickname(e.target.value)} type={"text"} placeholder={"Nickname"} />
                <button onClick={handleEnter}>{'Enter'}</button>
            </div>
        </div>
    )
}

export default Landing