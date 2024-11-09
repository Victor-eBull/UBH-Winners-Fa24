import express from 'express';
import cors from 'cors'; // for cross-origin requests

const app = express();
const PORT = 3002; // why?

app.use(cors());
app.use(express.json());


const challenges = [
  "challenge1",
  "challenge2"
]

app.post("/api/:challenge", (req, res)=>{
  // Change this to cookies if we have a login
  const {user_id} = req.body;
  const challenge = req.params["challenge"];

  if(!challenges.includes(challenge)){
    res.status(401).send("Bad challenge name [URL]");
  }

  res.json({
    message: `user ${user_id} progress for challenge "${challenge}" updated`
  });
});

app.get('/api/progress', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
  
    // EXAMPLE CODE:

    res.write(`data: ${
      JSON.stringify({ challenge1: 45, challenge2: 60 })
    }\n\n`)
  
    // Simulate sending progress updates every 5 seconds
    const intervalId = setInterval(() => {
      const newProgress = {
        challenge1: Math.floor(Math.random() * 100),
        challenge2: Math.floor(Math.random() * 100)
      };
      res.write('data: ' + JSON.stringify(newProgress) + '\n\n');
    }, 5000);
  
    // Cleanup when the connection is closed
    req.on('close', () => {
      clearInterval(intervalId);
    });
});


// create lister on the specifie dport
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});