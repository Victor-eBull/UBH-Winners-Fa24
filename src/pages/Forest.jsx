import { useEffect } from 'react';

function Forest(){
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
                // body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                // canvas { border: 1px solid black; background-color: #333; }
        <div>
            <link href="/forest.css" rel="stylesheet"></link>
            <canvas id="maze" width="3000" height="1800"></canvas>
            <script src="maze.js"></script>
        </div>
    )
}
export default Forest