import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Landing({startGame, changeNickname}) {
    const navigate = useNavigate()
    const gameName = 'Escape From Wonderland'
    const [showError, setShowError] = useState(false)
    const [nickname, setNickname] = useState('')

    const handleNicknameChange = (e) => {
        const input = e.target.value
        const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '')
        setNickname(cleanedInput)
    }

    const handleEnter = () => {
        setNickname(nickname.trim())
        if (nickname.length > 0) {
            setShowError(false)
            changeNickname(nickname)
            startGame(true)
            navigate('/game')
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
                <input type={"text"}
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder={"Nickname"}
                    maxLength={12}
                />
                <button onClick={handleEnter}>{'Enter'}</button>
            </div>
        </div>
    )
}

export default Landing