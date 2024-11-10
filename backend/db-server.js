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
    port: 3306,
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

app.listen(PORT, () => {
    console.log(`DB Server running on port ${PORT}`);
});