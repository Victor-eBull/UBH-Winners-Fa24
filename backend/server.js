import express from 'express';
import cors from 'cors'; // for cross-origin requests
import axios from 'axios'; // for sending information to other db
import mysql from 'mysql';
import { createConnection } from 'mysql';

const app = express();
const PORT = 3002; // why?

app.use(cors());
app.use(express.json());

// db server url
const db_server = 'http://database:3303'; // container_name:port

// basic game state structure
const gamestate = {
  id: null,
  username: '',
  token: '',
  room_number: 0,
  notes: '',
};

// logical funcs ----------------------------------------------------

// helper func to generate a token
function generate_token() {
  return Math.random().toString(36).substring(2);
}

// takes token, returns token to app.jsx, sends token and username to db server
async function sign_up(username) {
  const new_token = generate_token();
  // send that to the db server or throw error
  try {
    await axios.post(db_server, { username, new_token });
    return new_token;

  } catch (error) {
    console.log('error signing user up: ', username);
    throw new Error('sign-up failed');

  }
}

// takes token and returns gamestate to app.jsx
async function log_in(token) {
  let state = {
    id: null,
    username: '',
    token: '',
    room_number: 0,
    notes: '',
  };

  try {
    // req data from db server
    const resp = await axios.post(db_server, { token });
    const { id, username, token: recv_token, room1, room2, notes } = resp.data;

    // set static struct members
    state.id = id;
    state.username = username;
    state.token = recv_token;
    state.notes = notes;

    // set room
    if (room1) {
      state.room_number = 1;
    } else if (room2) {
      state.room = 2;
    } else {
      state.room_number = 1;
    }

    return state;

  } catch (error) {
    console.log('error logging in user: ', error);
    throw new Error('log-in failed');

  }
}

// takes token and new room number and updates their current room/challenge in the db
async function update_room(token, room_number) {
  try {
    await axios.post(db_server, { token, room_number });
    return log_in(token);

  } catch (error) {
    console.log('error updating room: ', error);
    throw new Error('update room failed');

  }

}

// takes token and notes and updates their current notes in the db
async function save_notes(token, notes) {
  try {
    await axios.post(db_server, { token, notes });
    return true;

  } catch (error) {
    console.log('error saving notes: ', error);
    throw new Error('save notes failed');

  }

}

// routing for funcs ----------------------------------------------------

// user sign up
app.post('/api/sign-up', async(req, res) => {
  const {username} = req.body;
  try {
    const result = await sign_up(username);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// user log in
app.post('/api/log-in', async(req, res) => {
  const {token} = req.body;
  try {
    const state = await log_in(token);
    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// update user's room
app.post('/api/update-room', async(req, res) => {
  const {token, room_number} = req.body;
  try {
    const result = await update_room(token, room_number);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// update user's room
app.post('/api/save-notes', async(req, res) => {
  const {token, notes} = req.body;
  try {
    const result = await save_notes(token, notes);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});


// create lister on the specifie dport
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
const challenges = [
  "challenge1",
  "challenge2"
]

app.post("/api/:challenge", (req, res) => {
  // Change this to cookies if we have a login
  const { user_id } = req.body;
  const challenge = req.params["challenge"];

  if (!challenges.includes(challenge)) {
    res.status(401).send("Bad challenge name [URL]");
  }

  res.json({
    message: `user ${user_id} progress for challenge "${challenge}" updated`
  });
});
*/
/*
app.get('/api/progress', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // EXAMPLE CODE:

  res.write(`data: ${JSON.stringify({ challenge1: 45, challenge2: 60 })
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
*/
