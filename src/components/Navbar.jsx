function Navbar({username = null, showLeaderboard, showProgress = null}) {
    return (
        <nav>
            <ul className={"navbar"}>
                {username && <li>{"My Progress"}</li>}
                <li onClick={showLeaderboard}>{"Leaderboard"}</li>
                {username && <li id={"hi"}>Hi, {username}</li>}
            </ul>
        </nav>
    )
}

export default Navbar