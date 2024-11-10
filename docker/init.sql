CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

CREATE TABLE IF NOT EXISTS user_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Unique auto-incremented ID
    username TEXT,              -- Username with default 'guest'
    token TEXT NOT NULL,                        -- Token field
    room1 BOOLEAN DEFAULT TRUE,                 -- Boolean for room1
    room2 BOOLEAN DEFAULT FALSE,                -- Boolean for room2
    notes TEXT,                                 -- Notes (text field)
    start_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for when the session starts
    latest_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp for the latest update
);