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

let maze_state = 0;
// let mazes = [
//     {
//         gameOver: false,
//         x: 10,
//         y: 5,
//         tp_x: 28,
//         tp_y: 1,
//         maze: [
//             "111111111111111111111111111111",
//             "100010000000000000100000000001",
//             "100010010011100000100010011101",
//             "100110010000100000001010000111",
//             "100000000000111100001000000001",
//             "111000011111100000111100011001",
//             "101100011111100000111100011001",
//             "100000000000000000000000000001",
//             "111111111111111111111111111111"
//         ].map(x=>x.split(""))
//     },
//     {
//         gameOver: false,
//         x: 1,
//         y: 7,
//         tp_x: 1,
//         tp_y: 2,
//         maze: [
//             "11111111111111111111111111111111111111111111111",
//             "10111111111111111111111111111111111111111111111",
//             "10000000000000000000000000000000000000000000001",
//             "11111111111111111111111111111111111111111111111",
//         ].map(x=>x.split(""))
//     },
//     {
//         gameOver: false,
//         x: 3,
//         y: 2,
//         tp_x: 1,
//         tp_y: 1,
//         maze: [
//             "11111111111111111111111111111111111111111111111111111111",
//             "10000000000000000000000000000000000000000000000000000001",
//             "11111111111111111111111111111111111111111111111111111111",
//         ].map(x=>x.split(""))
//     },
//     {
//         gameOver: false,
//         x: 6,
//         y: 1,
//         tp_x: 49,
//         tp_y: 5,
//         maze: [
//             "111111111111111111111111111111111111111111111111111111111111111111111111",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000001111111111111111111111111",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000001111111111111111111111111",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "111111111111111111111111111111111111111111111111111111111111111111111111",
//         ].map(x=>x.split(""))
//     },
//     {
//         gameOver: false,
//         x: 46,
//         y: 5,
//         tp_x: 46,
//         tp_y: 5,
//         maze: [
//             "111111111111111111111111111111111111111111111111111111111111111111111111",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "111111111111111111111111111111111111111111111111111111111111111111111111",
//         ].map(x=>x.split(""))
//     },
//     {
//         gameOver: false,
//         x: 100000,
//         y: 5,
//         tp_x: 48,
//         tp_y: 5,
//         maze: [
//             "111111111111111111111111111111111111111111111111111111111111111111111111",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "100000000000000000000000000000000000000000000000000000000000000000000001",
//             "111111111111111111111111111111111111111111111111111111111111111111111111",
//         ].map(x=>x.split(""))
//     },
// ]
let mazes = [
    {
        gameOver: false,
        x: 13,
        y: 1,
        tp_x: 13,
        tp_y: 1,
        tp_rotateBy: 0,
        next_maze_state: 1,
        maze: [
            "1111111111111111",
            "1000000000000001",
            "1111111111111101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1111111111111111"
        ].map(x=>x.split(""))
    },
    {
        gameOver: false,
        x: 103,
        y: 1,
        tp_x: 1,
        tp_y: 1,
        tp_rotateBy: 0,
        next_maze_state: 0,
        maze: [
            "1111111111111111",
            "1000000000000001",
            "1000000000001101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1000000000000101",
            "1111111111111111"
        ].map(x=>x.split(""))
    },
]

function coordsOf(grid,character){
    return mazes[maze_state].maze.map((row,i)=>[i,row.indexOf(character)]).find(value=>value[1]!=-1);
}
const TILE_SIZE = 200;
const canvas = document.getElementById('maze');
canvas.width = 3000;
canvas.height = 1700;


// canvas.style.aspectRatio = "10 / 6";
canvas.style.width = "100%";
canvas.style.height = `100%`;
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

const FOV = Math.PI / 3; // Field of view, in radians
const NUM_RAYS = 200;
const STEP_ANGLE = FOV / NUM_RAYS;
const MOVE_SPEED = 40;
// const ROTATE_SPEED = 0.06;
const ROTATE_SPEED = 0.1;

const offsetFactor = 0.06;

function raw2grid(x,y){
    output = [Math.floor(x / TILE_SIZE), Math.floor(y / TILE_SIZE)]
    // console.log(`(${output[0]}, ${output[1]})`);
    return output;
}

// Player
const player = {
    x: 1.5 * TILE_SIZE,
    y: 1.5 * TILE_SIZE,
    angle: 0,
    get grid(){
        return {
            y: Math.floor(this.y / TILE_SIZE),
            x: Math.floor(this.x / TILE_SIZE)
        };
    }
};

// Helper functions
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.strokeWeight = 0;
    ctx.fillRect(x, y, width, height);
}

let hasEnded = false;
function gameOver(){
    if(!hasEnded){
        hasEnded = true;
        alert("You escaped!");

        // Handle the game ended logic here!
    }
}

function checkCollision(x, y) {
    // Ensure the x and y coordinates are within bounds of the grid
    if (x < 0 || x >= TILE_SIZE * mazes[maze_state].maze[0].length || y < 0 || y >= TILE_SIZE * mazes[maze_state].maze.length) {
        gameOver()
        return true; // Collision with the boundary of the maze
    }

    // Calculate the grid cell the player is in based on x and y
    const cellX = Math.floor(x / TILE_SIZE);
    const cellY = Math.floor(y / TILE_SIZE);

    // Check if the cell has a wall (represented by 1 in the map)
    if (mazes[maze_state].maze[cellY] && mazes[maze_state].maze[cellY][cellX] === '1') {
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
    let sky = false;
    while (true) {
        rayX += cosAngle;
        rayY += sinAngle;
        distance += 1;
        
        const mapX = Math.floor(rayX / TILE_SIZE);
        const mapY = Math.floor(rayY / TILE_SIZE);
        
        // Check if ray is outside map bounds
        if (mapX < 0 || mapX >= mazes[maze_state].maze[0].length || mapY < 0 || mapY >= mazes[maze_state].maze.length) {
            sky = true;
            break;
        };
        // Check if ray hits a wall
        if (mazes[maze_state].maze[mapY][mapX] === '1') break;
    }
    return { distance, rayX, rayY, sky };
}

function drawScene() {
    const sliceWidth = canvas.width / NUM_RAYS;
    const offsetY = canvas.height * offsetFactor;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw 2D top-down view of map and player
    for (let row = 0; row < mazes[maze_state].maze.length; row++) {
        for (let col = 0; col < mazes[maze_state].maze[0].length; col++) {
            const color = mazes[maze_state].maze[row][col] === '1' ? '#222' : '#777';
            // drawRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE, color);
            // drawRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE, "rgba(0,0,0,1)");
        }
    }
    
    // Draw rays
    for (let i = 0; i < NUM_RAYS; i++) {
        const rayAngle = player.angle - (FOV / 2) + (i * STEP_ANGLE);
        const { distance, rayX, rayY, sky } = castRay(rayAngle);
        
        // Draw ray in 2D view
        // ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
        // ctx.beginPath();
        // ctx.moveTo(player.x, player.y);
        // ctx.lineTo(rayX, rayY);
        // ctx.stroke();
        

        // Render pseudo-3D wall slice
        const correctedDist = distance * Math.cos(rayAngle - player.angle);
        const wallHeight = (TILE_SIZE * canvas.width/4) / correctedDist * 1.5;
        // drawRect(
        //     (i * (canvas.width / NUM_RAYS)),
        //     (canvas.height / 2) - (wallHeight / 2),
        //     canvas.width / NUM_RAYS,
        //     wallHeight,
        //     color
        // );
        // const MAX_DIST = TILE_SIZE * Math.max(mazes[maze_state].maze[0].length, mazes[maze_state].maze.length) / 1.2;
        const MAX_DIST = TILE_SIZE * 10;
        const alpha = Math.max(0, Math.min(.7, 1 - (correctedDist / MAX_DIST)));
        // ctx.noStroke();
        drawRect(
            i * sliceWidth,
            (canvas.height / 2) - (wallHeight / 2) - offsetY,
            sliceWidth,
            wallHeight,
            sky ? `rgba(0, 255, 255, ${alpha})` : `rgba(255, 255, 255, ${alpha})`
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
    if (keys['ArrowUp'] || keys['w']) {
        newX = player.x + cosAngle * MOVE_SPEED;
        newY = player.y + sinAngle * MOVE_SPEED;
    }

    // // Handle backward movement (down arrow)
    // if (keys['ArrowDown'] || keys['s']) {
    //     newX = player.x - cosAngle * MOVE_SPEED;
    //     newY = player.y - sinAngle * MOVE_SPEED;
    // }

    // Handle rotation (left and right armap.length)
    let newAngle = player.angle
    if (keys['ArrowLeft'] || keys['a']) newAngle -= ROTATE_SPEED;
    if (keys['ArrowRight'] || keys['d']) newAngle += ROTATE_SPEED;

    // Check for collision at the new position and update accordingly
    if (!checkCollision(newX, newY)) {
        // If no collision, update the player position
        // Geometry change
        let [gridX, gridY] = raw2grid(newX, newY);
        let trigger_x = mazes[maze_state].x;
        let trigger_y = mazes[maze_state].y;
        if (gridX != mazes[maze_state].x || gridY != mazes[maze_state].y){
            player.x = newX;
            player.y = newY;
            player.angle = newAngle;
            return;
        }
        
        console.log("Maze state updated!");

        const centerX = (gridX + 0.5) * TILE_SIZE;
        const centerY = (gridY + 0.5) * TILE_SIZE;

        const translatedX = player.x - centerX;
        const translatedY = player.y - centerY;

        let rotateBy = mazes[maze_state].tp_rotateBy;

        const rotatedX = translatedX * Math.cos(rotateBy) - translatedY * Math.sin(rotateBy);
        const rotatedY = translatedX * Math.sin(rotateBy) + translatedY * Math.cos(rotateBy);
        
        const final_offsetX = rotatedX + centerX;
        const final_offsetY = rotatedY + centerY;

        console.log(final_offsetX, final_offsetY);

        let dx = final_offsetX % TILE_SIZE;
        let dy = final_offsetY % TILE_SIZE;

        player.x = mazes[maze_state].tp_x * TILE_SIZE + dx;
        player.y = mazes[maze_state].tp_y * TILE_SIZE + dy;

        // let offset_x = newX % TILE_SIZE;
        // let offset_y = newY % TILE_SIZE;
        
        // player.x = mazes[maze_state].tp_x*TILE_SIZE + offset_x;
        // player.y = mazes[maze_state].tp_y*TILE_SIZE + offset_y;
        player.angle = newAngle + mazes[maze_state].tp_rotateBy;
        
        maze_state = mazes[maze_state].next_maze_state;
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

const jabberAudio = new Audio("/scream.mp3");
jabberAudio.loop = false;

let hasJumpScared = false;
function gameLoop() {
    movePlayer();

    // if (!hasJumpScared && gridX == jumpscare.x && gridY == jumpscare.y) {
    //     triggerJumpscare();
    // }

    drawScene();
    requestAnimationFrame(gameLoop);
}
function triggerJumpscare() {
    const jabberImage = document.getElementById("jumpscareImage");
    
    hasJumpscared = true;
    jabberAudio.play().then(() => {
        setTimeout(function(){
            jabberImage.setAttribute("data-show", "true");
        }, 100);
    });

    // Remove the jumpscare effect after animation (optional)
    setTimeout(() => {
        jabberImage.removeAttribute("data-show");
        jabberAudio.pause();
    }, 2000);
}

// Start the game loop
gameLoop();
let hasRunOnce = false;
function runOnce(){
    if(hasRunOnce){
        return;
    }
    hasRunOnce = true;

    const filepath = "/background-music.mp3";

    const background_music = new Audio(filepath);
    background_music.loop = true;
    background_music.play().then;
}
window.addEventListener("keydown", runOnce);
window.addEventListener("click", runOnce);