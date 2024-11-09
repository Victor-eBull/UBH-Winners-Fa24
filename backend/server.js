import express from 'express';
import cors from 'cors'; // for cross-origin requests

const app = express();
const PORT = 3002; // why?

app.use(cors());
app.use(express.json());

// handles requests from server 2 (challenge 1)
app.post('/api/challenge1-completed', (req, res) => {
    // get user id
    const {user_id} = req.body;

    // handle progres slogic here

    // make response
    res.json({message: 'user ${user_id} progress for challenge 1 updated'});
});

// handles requests from server 3 (challenge 2)
app.post('/api/challenge2-completed', (req, res) => {
    // get user id
    const {user_id} = req.body;

    // handle progres slogic here

    // make response
    res.json({message: 'user ${user_id} progress for challenge 2 updated'});
});

app.get('/api/progress', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
  
    // Send initial data
    res.write('data: ' + JSON.stringify({ challenge1: 45, challenge2: 60 }) + '\n\n');
  
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