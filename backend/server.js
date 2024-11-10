import express from 'express';
import cors from 'cors'; // for cross-origin requests
import axios from 'axios'; // for sending information to other db
import mysql from 'mysql';
import { createConnection } from 'mysql';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

// db server url
const db_server = 'http://localhost:3003'; // container_name:port
//const db_server = 'http://localhost:3306'; // container_name:port

// basic game state structure
const gamestate = {
  id: 1,
  username:'',
  token: '',
  room_number: 1,
  notes: ''
};

// helper func to generate a token
function generate_token() {
  return Math.random().toString(36).substring(2);
}

// takes token, returns token to app.jsx, sends token and username to db server
async function sign_up(username) {
  const token = generate_token();
  // console.log(token);
  try {
    const response =  await axios.post(`${db_server}/api/sign-up`, {username, token});
    console.log(response);
    return response.data.token;
  } catch (error) {
    console.log(response);
    console.log('Error signing user up:', username);
    console.log(error.message);
    throw new Error('sign-up failed: ' + error);
  }
}

// takes token and returns gamestate to app.jsx
async function log_in(token) {
  let state = {
    id: 1,
    username: '',
    token: '',
    room_number: 0,
    notes: ''
  };

  try {
    const resp = await axios.post(`${db_server}/api/log-in`, { token });
    const { id, username, token: recv_token, room1, room2, notes } = resp.data;

    // set static struct members
    state.id = id;
    state.username = username;
    state.token = recv_token;
    state.notes = notes;

    // set room
    state.room_number = room1 ? 1 : room2 ? 2 : 1;

    return state;
  } catch (error) {
    console.log('Error logging in user:', error);
    throw new Error('log-in failed');
  }
}

// takes token and new room number and updates their current room/challenge in the db
async function update_room(token, room_number) {
  try {
    await axios.post(`${db_server}/api/update-room`, { token, room_number });
    return log_in(token);
  } catch (error) {
    console.log('Error updating room:', error);
    throw new Error('update room failed');
  }
}

// takes token and notes and updates their current notes in the db
async function save_notes(token, notes) {
  try {
    await axios.post(`${db_server}/api/save-notes`, { token, notes });
    return true;
  } catch (error) {
    console.log('Error saving notes:', error);
    throw new Error('save notes failed');
  }
}

// Routing for funcs ----------------------------------------------------

// user sign up
app.post('/api/sign-up', async (req, res) => {
  const { username } = req.body;
  try {
    const result = await sign_up(username);
    res.status(200).json({
      status: 'success',
      message: 'User signed up successfully',
      data: { token: result }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
      data: null
    });
  }
});

// user log in
app.post('/api/log-in', async (req, res) => {
  const { token } = req.body;
  try {
    const state = await log_in(token);
    res.status(200).json({
      status: 'success',
      message: 'User logged in successfully',
      data: state
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
      data: null
    });
  }
});

// update user's room
app.post('/api/update-room', async (req, res) => {
  const { token, room_number } = req.body;
  try {
    const result = await update_room(token, room_number);
    res.status(200).json({
      status: 'success',
      message: 'Room updated successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
      data: null
    });
  }
});

// update user's notes
app.post('/api/save-notes', async (req, res) => {
  const { token, notes } = req.body;
  try {
    const result = await save_notes(token, notes);
    res.status(200).json({
      status: 'success',
      message: 'Notes saved successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
      data: null
    });
  }
});

// puzzle funcs --------------------------------------------------------------
// check for secret number (42)
app.post('/api/check-number', (req, res) => {
  const { number } = req.body;

  if (typeof number !== 'number') {
    return res.status(400).json({ error: 'Invalid input, expected a number' });
  }

  if (number === 42) {
    return res.status(200).json({ message: 'The number is 42' });
  } else {
    return res.status(200).json({ message: 'The number is not 42' });
  }
});

// dashboard funcs ------------------------------------------------------------

async function prune_old_sessions() {
  const daysThreshold = 1; // number of days
  try {
    const response = await axios.post(`${db_server}/api/prune-old-sessions`, { daysThreshold });
    console.log('Old sessions pruned:', response.data);
  } catch (error) {
    console.log('Error pruning old sessions:', error);
    throw new Error('Prune old sessions failed');
  }
}

app.post('/api/prune-old-sessions', async (req, res) => {
  try {
    await prune_old_sessions();
    res.status(200).json({ status: 'success', message: 'Old sessions pruned successfully' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

async function get_top_five_users() {
  try {
    const response = await axios.get(`${db_server}/api/top-five-users`);
    console.log('Top 5 users:', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching top 5 users:', error);
    throw new Error('Failed to get top 5 users');
  }
}

app.get('/api/top-five-users', async (req, res) => {
  try {
    const topUsers = await get_top_five_users();
    res.status(200).json({ status: 'success', data: topUsers });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Create listener on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
