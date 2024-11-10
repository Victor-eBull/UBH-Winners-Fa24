// const map = [
// '11111111111111111111111111111111111111111111111111',
// '00000000000000000000000100000000000000000000000001',
// '10111111110111111111110101111101111111111111111001',
// '10000000000000000000000100000000000000000000001001',
// '10111111111101111111010101110111101111111111101001',
// '10000000000101000000010100000000101000000000001001',
// '11111111111111111111110111111110101111111111101001',
// '00000000000000000000010000000000000000000000001001',
// '11111111111111111111110111111011111111111111111111',
// '10000000000000000000010100000000000000000000000001',
// '10111101111101111111110101111111111111101111111001',
// '10000000000001000000010100000000000001000000001001',
// '11111111111101111111010111111111011101111111011101',
// '10000000000000000000010100000000000100000000000001',
// '10111101111111111111110101111111110101111111111001',
// '10000100001000000000010100000000000100001000001001',
// '10111111111111111111110111111111111111111111111001',
// '10000000000000000000010111111111111111111111111111',
// '10111111111111111111110000000000000000000000000001',
// '11111111111111111111111111111111111111111111111111'
// ];
const map = [
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","0","1","0","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","1"],
    ["1","0","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","0","1","0","1","1","1","0","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","0","1","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1","0","1","0","0","0","0","0","0","0","1","0","1","0","0","0","0","0","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","1","0","0","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","0","1","0","1","1","1","1","1","1","1","1","1","1","1","0","1","0","0","1"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","1","1","1","1","0","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","1","0","0","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","0","1","1","1","1","1","1","1","1","1","0","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1","1","1","1","1","1","1","1","1","0","0","1"],
    ["1","0","0","0","0","1","0","0","0","0","1","0","0","0","0","0","0","0","0","0","0","1","0","1","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","1","0","0","0","0","0","1","0","0","1"],
    ["1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]
];

let checkpoint = {
    x: 22,
    y: 18
}

let door = {
    x: 21,
    y: 7
}

function coordsOf(grid,character){
    return map.map((row,i)=>[i,row.indexOf(character)]).find(value=>value[1]!=-1);
}
const TILE_SIZE = 160
const canvas = document.getElementById('maze');
canvas.width = 3000;
canvas.height = 1800;


const visualHeight = 400;
canvas.style.aspectRatio = "10 / 6";
canvas.style.height = `100%`;
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

const FOV = Math.PI / 3; // Field of view, in radians
const NUM_RAYS = 1500;
const STEP_ANGLE = FOV / NUM_RAYS;
const MOVE_SPEED = 25;
const ROTATE_SPEED = 0.06;

const offsetFactor = 0.2;

function raw2grid(x,y){
    output = [Math.floor(x / TILE_SIZE), Math.floor(y / TILE_SIZE)]
    // console.log(`(${output[0]}, ${output[1]})`);
    return output;
}

const rows = map.length;
const cols = map[0].length;

// Player
const player = {
    x: 1.5 * TILE_SIZE,
    y: 3.5 * TILE_SIZE,
    angle: 0
};

// Helper functions
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function gameOver(){
    alert("You escaped!");
}

function checkCollision(x, y) {
    // Ensure the x and y coordinates are within bounds of the grid
    if (x < 0 || x >= TILE_SIZE * map[0].length || y < 0 || y >= TILE_SIZE * map.length) {
        gameOver()
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
    let draw = true;
    while (true) {
        rayX += cosAngle;
        rayY += sinAngle;
        distance += 1;
        
        const mapX = Math.floor(rayX / TILE_SIZE);
        const mapY = Math.floor(rayY / TILE_SIZE);
        
        // Check if ray is outside map bounds
        if (mapX < 0 || mapX >= cols || mapY < 0 || mapY >= rows) {
            draw = false;
            break;
        };
        // Check if ray hits a wall
        if (map[mapY][mapX] === '1') break;
    }
    return { distance, rayX, rayY, draw };
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
        const { distance, rayX, rayY, draw } = castRay(rayAngle);
        if(!draw){
            continue;
        }
        
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
        console.log(`Collision:\nCurrent: (${player.y}, ${player.x}) ${JSON.stringify(raw2grid(player.x, player.y).reverse())}\nNew: (${newY}, ${newX}) [${JSON.stringify(raw2grid(newX,newY).reverse())}]`)
        // If collision occurs, prevent movement in that direction
        // You can optionally add a "bounce back" effect or handle it differently
        // For now, we prevent the player from moving in the direction they intended
        // player.x = newX // Optional to keep moving horizontally even if the newY is colliding
    }
}


const keys = {};
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

let isDoorOpened = false;
function gameLoop() {
    movePlayer();

    // Geometry change
    if(!isDoorOpened){
        let [gridX, gridY] = raw2grid(player.x, player.y);
        if(gridX == checkpoint.x && gridY == checkpoint.y) {
            map[door.y][door.x] = "0";
            isDoorOpened = true;
        }
    }

    drawScene();
    requestAnimationFrame(gameLoop);
}
// Start the game loop
gameLoop();