import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';  // using sql as db

const app = express();
const PORT = 3003; // why? inc the port from server.js

app.use(cors());
app.use(express.json());

// mysql db connection
const db = mysql.createConnection({
    host: 'localhost', // must be container name
    user: 'root',
    password: 'rootpassword', // replace with password
    database: 'mydatabase', // replace with db name
});

// connect to db
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/test-db', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database connection failed', details: err });
        } else {
            res.json({ success: 'Database connected', result: results[0].result });
        }
    });
});

// api funcs ------------------------------------------------

// helper func to handle query results
function handleQuery(query, params) {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
}

// sign up (store new user info in db)
app.post('/api/sign-up', async (req, res) => {
    const {username, token} = req.body;
    const query = "INSERT INTO user_sessions (username, token, room1, room2, notes, start_timestamp, latest_timestamp) VALUES (?, ?, TRUE, FALSE, '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

    try {
        await handleQuery(query, [username, token]);
        res.status(200).json({token: token});
    } catch (error) {
        console.log('DB error during sign-up:', error);
        res.status(500).json({error: error.message});
    }
});

// log-in returns gamestate stored in db
app.post('/api/log-in', async (req, res) => {
    const {token} = req.body;
    const query = "SELECT * FROM user_sessions WHERE token = ?";

    try {
        const results = await handleQuery(query, [token]);
        if (results.length === 0) {
            return res.status(404).json({error: 'User not found in DB'});
        }
        const user = results[0];
        res.status(200).json({
            id: user.id,
            username: user.username,
            token: user.token,
            room1: user.room1,
            room2: user.room2,
            notes: user.notes,
        });
    } catch (error) {
        console.log('DB error during login:', error);
        res.status(500).json({error: error.message});
    }
});

// updates the room value
app.post('/api/update-room', async (req, res) => {
    const { token, room_number } = req.body;
    const query = 'UPDATE user_sessions SET room1 = ?, room2 = ?, latest_timestamp = CURRENT_TIMESTAMP WHERE token = ?';
    const room1 = room_number === 1;
    const room2 = room_number === 2;

    try {
        await handleQuery(query, [room1, room2, token]);
        res.status(200).json({ message: 'Room updated successfully' });
    } catch (error) {
        console.log('Error during room update:', error);
        res.status(500).json({ error: error.message });
    }
});

// save users notes to db
app.post('/api/save-notes', async (req, res) => {
    const { token, notes } = req.body;
    const query = 'UPDATE user_sessions SET notes = ?, latest_timestamp = CURRENT_TIMESTAMP WHERE token = ?';

    try {
        await handleQuery(query, [notes, token]);
        res.status(200).json({ message: 'Notes saved successfully' });
    } catch (error) {
        console.log('Error during notes save:', error);
        res.status(500).json({ error: error.message });
    }
});

// dashboard logic ----------------------------------------------------
app.post('/api/prune-old-sessions', async (req, res) => {
    const { daysThreshold } = req.body;

    const query = `
        DELETE FROM user_sessions
        WHERE latest_timestamp < DATE_SUB(NOW(), INTERVAL ? DAY)
    `;

    try {
        await handleQuery(query, [daysThreshold]);
        res.status(200).json({ message: `Pruned sessions older than ${daysThreshold} days` });
    } catch (error) {
        console.log('Error pruning sessions:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/top-five-users', async (req, res) => {
    const query = `
        SELECT username, room1, room2, TIMESTAMPDIFF(SECOND, start_timestamp, latest_timestamp) AS time_diff
        FROM user_sessions
        WHERE room1 = TRUE OR room2 = TRUE
        ORDER BY 
            CASE
                WHEN room2 = TRUE THEN 2
                WHEN room1 = TRUE THEN 1
                ELSE 0
            END DESC, 
            time_diff ASC
        LIMIT 5
    `;

    try {
        const results = await handleQuery(query);
        res.status(200).json(results); // Returning the top 5 users
    } catch (error) {
        console.log('Error fetching top 5 users:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`DB Server running on port ${PORT}`);
});
