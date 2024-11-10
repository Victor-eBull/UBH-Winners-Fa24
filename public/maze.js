const canvas = document.getElementById('maze');
canvas.width = 3000;
canvas.height = 1800;

const visualHeight = 400;
canvas.style.width = `${visualHeight * 1.66666667}px`;
canvas.style.height = `${visualHeight}px`;
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

const TILE_SIZE = 40;
const FOV = Math.PI / 3; // Field of view, in radians
const NUM_RAYS = 2500;
const STEP_ANGLE = FOV / NUM_RAYS;
const MOVE_SPEED = 1.5;
const ROTATE_SPEED = 0.03;

const offsetFactor = 0.2;

const map = [
    '11111111111111111111111111111111111111111111111111',
    '10000000000000000000000100000000000000000000000001',
    '10111111111111111111110101111111111111111111111001',
    '10000000000000000000000100000000000000000000001001',
    '10111111111101111111010101111111101111111111101001',
    '10000000000101000000000100000000101000000000001001',
    '10111111110101111111010111111110101111111111101001',
    '10000000000100000000000100000000100000000000001001',
    '11111111111111111111111111111111111111111111111111',
    '10000000000000000000000000000000000000000000000001',
    '10111101111101111111111101111111111111101111111001',
    '10000000000001000000000000000000000001000000001001',
    '11111111111101111111011111111111011101111111011101',
    '10000000000000000000000100000000000100000000000001',
    '10111101111111111111110101111111110101111111111001',
    '10000100001000000000000100000000000100001000001001',
    '10111111111111111111111111111111111111111111111001',
    '10000000000000000000000000000000000000000000000001',
    '10111111111111111111111111111111111111111111111001',
    '11111111111111111111111111111111111111111111111111'
];


const rows = map.length;
const cols = map[0].length;

// Player
const player = {
    x: TILE_SIZE + TILE_SIZE / 2,
    y: TILE_SIZE + TILE_SIZE / 2,
    angle: 0
};

// Helper functions
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function checkCollision(x, y) {
    // Ensure the x and y coordinates are within bounds of the grid
    if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
        return true; // Collision with the boundary of the maze
    }

    // Calculate the grid cell the player is in based on x and y
    const cellX = Math.floor(x / TILE_SIZE);
    const cellY = Math.floor(y / TILE_SIZE);

    // Check if the cell has a wall (represented by 1 in the map)
    if (map[cellY] && map[cellY][cellX] === '1') {
        return true; // Collision with a wall
    }
    return false; // No collision
}


function castRay(rayAngle) {
    let rayX = player.x;
    let rayY = player.y;
    const cosAngle = Math.cos(rayAngle);
    const sinAngle = Math.sin(rayAngle);
    let distance = 0;
    while (true) {
        rayX += cosAngle;
        rayY += sinAngle;
        distance += 1;
        
        const mapX = Math.floor(rayX / TILE_SIZE);
        const mapY = Math.floor(rayY / TILE_SIZE);
        
        // Check if ray is outside map bounds
        if (mapX < 0 || mapX >= cols || mapY < 0 || mapY >= rows) break;
        // Check if ray hits a wall
        if (map[mapY][mapX] === '1') break;
    }
    return { distance, rayX, rayY };
}

function drawScene() {
    const sliceWidth = canvas.width / NUM_RAYS;
    const offsetY = canvas.height * offsetFactor;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw 2D top-down view of map and player
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const color = map[row][col] === '1' ? '#222' : '#777';
            // drawRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE, color);
            // drawRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE, "rgba(0,0,0,1)");
        }
    }
    
    // Draw rays
    for (let i = 0; i < NUM_RAYS; i++) {
        const rayAngle = player.angle - (FOV / 2) + (i * STEP_ANGLE);
        const { distance, rayX, rayY } = castRay(rayAngle);
        
        // Draw ray in 2D view
        // ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
        // ctx.beginPath();
        // ctx.moveTo(player.x, player.y);
        // ctx.lineTo(rayX, rayY);
        // ctx.stroke();
        

        // Render pseudo-3D wall slice
        const correctedDist = distance * Math.cos(rayAngle - player.angle);
        const wallHeight = (TILE_SIZE * canvas.width/4) / correctedDist;
        // drawRect(
        //     (i * (canvas.width / NUM_RAYS)),
        //     (canvas.height / 2) - (wallHeight / 2),
        //     canvas.width / NUM_RAYS,
        //     wallHeight,
        //     color
        // );
        const MAX_DIST = TILE_SIZE * Math.max(map[0].length, map.length) / 4;
        const alpha = Math.max(0, Math.min(1, 1 - (correctedDist / MAX_DIST)));
        // ctx.noStroke();
        drawRect(
            i * sliceWidth,
            (canvas.height / 2) - (wallHeight / 2) - offsetY,
            sliceWidth,
            wallHeight,
            `rgba(255, 255, 255, ${alpha})`
        );
    }
    
    // Draw player as a circle in 2D view
    // ctx.fillStyle = 'red';
    // ctx.beginPath();
    // ctx.arc(player.x, player.y, 5, 0, Math.PI * 2);
    // ctx.fill();
}

function movePlayer() {
    const cosAngle = Math.cos(player.angle);
    const sinAngle = Math.sin(player.angle);

    let newX = player.x;
    let newY = player.y;

    // Handle forward movement (up arrow)
    if (keys['ArrowUp']) {
        newX = player.x + cosAngle * MOVE_SPEED;
        newY = player.y + sinAngle * MOVE_SPEED;
    }

    // Handle backward movement (down arrow)
    if (keys['ArrowDown']) {
        newX = player.x - cosAngle * MOVE_SPEED;
        newY = player.y - sinAngle * MOVE_SPEED;
    }

    // Handle rotation (left and right arrows)
    if (keys['ArrowLeft']) player.angle -= ROTATE_SPEED;
    if (keys['ArrowRight']) player.angle += ROTATE_SPEED;

    // Check for collision at the new position and update accordingly
    if (!checkCollision(newX, newY)) {
        // If no collision, update the player position
        player.x = newX;
        player.y = newY;
    } else {
        // If collision occurs, prevent movement in that direction
        // You can optionally add a "bounce back" effect or handle it differently
        // For now, we prevent the player from moving in the direction they intended
        // player.x = newX // Optional to keep moving horizontally even if the newY is colliding
    }
}


const keys = {};
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

function gameLoop() {
    movePlayer();
    drawScene();
    requestAnimationFrame(gameLoop);
}
// Start the game loop
gameLoop();