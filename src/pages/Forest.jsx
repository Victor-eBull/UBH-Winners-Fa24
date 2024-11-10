import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Forest(){
    const navigate = useNavigate();
    useEffect(() => {
        if (!document.querySelector("script[src='/maze.js']")) {
            const script = document.createElement("script");
            script.src = "/maze.js";
            script.async = true;
            document.body.appendChild(script);

            // Clean up the script when component unmounts
            return () => {
                document.body.removeChild(script);
            };
        }   
    }, []);


    return (
        <div>
            <link href="/forest.css" rel="stylesheet"></link>
            <img src="/Jabberwocky.webp" alt="Jumpscare Image" id="jumpscareImage" />
            <canvas id="maze" width="3000" height="1800"></canvas>
            <script src="maze.js"></script>
        </div>
    )
}
export default Forest