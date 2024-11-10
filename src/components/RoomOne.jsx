import React, { useState } from 'react';
import '../styles/RoomOne.css';

function RoomOne() {
    const [dots, setDots] = useState([
        { id: 1, top: '75px', left: '100px', dialogue: "Bits of nonsense, scattered just out of sight.", clicked: false, showDialogue: false },
        { id: 2, top: '150px', left: '200px', dialogue: "Why can't you just tell me the 4 numbers?", clicked: false, showDialogue: false },
        { id: 3, top: '300px', left: '250px', dialogue: "A closer look, and you'll see it all add up.", clicked: false, showDialogue: false },
        { id: 4, top: '125px', left: '4 50px', dialogue: "Oh, there are lines unseen, but they’re not so hard to find.", clicked: false, showDialogue: false },
    ]);

    const handleDotClick = (id) => {
        setDots((prevDots) =>
            prevDots.map((dot) =>
                dot.id === id
                    ? { ...dot, clicked: true, showDialogue: !dot.showDialogue }
                    : dot
            )
        );
    };

    return (
        <div className="room">
            <h1>The Mad Hatter's Tea Party</h1>
            <p className="subtitle">
                Alice stumbled into Wonderland, where everything was backward, sideways, and never quite seemed to <b>add up</b>.
                The Mad Hatter, Dormouse, and March Hare chattered in riddles that left her more baffled with every word.
                Maybe if you look around carefully, the pieces would fall into place – and the strange nonsense at the table would start to make sense.
            </p>
            <div className="image-container">
                <img src="../tea_party_foreground.png" alt="Tea Party" style={{ height: 400, width: 'auto' }} />
                {dots.map((dot) => (
                    <span
                        key={dot.id}
                        className="dot"
                        onClick={() => handleDotClick(dot.id)}
                        style={{
                            top: dot.top,
                            left: dot.left,
                            backgroundColor: dot.clicked ? 'red' : 'yellow',
                        }}
                    ></span>
                ))}
                {dots.map((dot) =>
                    dot.showDialogue ? (
                        <div
                            key={dot.id}
                            className="dialogue-box"
                            style={{ top: `calc(${dot.top} - 25px)`, left: dot.left }}
                        >
                            <p>{dot.dialogue}</p>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default RoomOne;
