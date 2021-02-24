// Each time this function is called a GameObject
// is create based on the arguments
// In JavaScript you can consider everything an Object
// including functions

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var image1 = new Image();
image1.src = "./img/flyingBird.png";
var image2 = new Image();
image2.src = "./img/goal.png";
var backgroundImage = new Image();
backgroundImage.src = "./img/Skyline.jpg";

var imageArray = [image1, image2];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GameObject(name, image, health) 
{
    this.name = name;
    this.img = image; // this can be used to hold image filename
    this.health = health;
    this.x = 0; // initialised at 0 ***
    this.y = 0; // initialised at 0 ***
}

// The GamerInput is an Object that holds the Current
// GamerInput (Left, Right, Up, Down)
function GamerInput(input) {
    this.action = input; // Hold the current input as a string
}

// Default GamerInput is set to None
var gamerInput = new GamerInput("None"); //No Input

// Default Player
var player = new GameObject("Player", "flyingBird.png", 100);

// Gameobjects is a collection of the Actors within the game
// this is an Array
var gameobjects = [player, new GameObject("NPC", "goal.png", 100)];
gameobjects[1].x = getRandomInt(100,600);
gameobjects[1].y = getRandomInt(100,600);

// assign objects their image and image source
for (i = 0; i < gameobjects.length; i++)
	{
       gameobjects[i].img = imageArray[i]
    }

// Process keyboard input event
function input(event) {
    // Take Input from the Player
	
    // console.log("Input");
    // console.log("Event type: " + event.type);
    // console.log("Keycode: " + event.keyCode);

	
	// keyboard press movement
    if (event.type === "keydown") {
        switch (event.keyCode) {
            case 37: // Left Arrow
                gamerInput = new GamerInput("Left");
                break; //Left key
            case 38: // Up Arrow
                gamerInput = new GamerInput("Up");
                break; //Up key
            case 39: // Right Arrow
                gamerInput = new GamerInput("Right");
                break; //Right key
            case 40: // Down Arrow
                gamerInput = new GamerInput("Down");
                break; //Down key
            default:
                gamerInput = new GamerInput("None"); //No Input
        }
    } 
	
     // console.log("Gamer Input :" + gamerInput.action);
}

function update() {
    // Iterate through all GameObjects
    // Updating position and gamestate
    // console.log("Update");
	
        if (gameobjects[0].health >= 1) 
		{
            // console.log("Health :" + gameobjects[i].health);
			
			// *** This is where X and Y are being updated
			if (gamerInput.action === "Up") 
			{
				gameobjects[0].y -= 3;
				// console.log("Up");
			}
            if (gamerInput.action === "Down") 
			{
                gameobjects[0].y += 3;
                // console.log("Down");
            }
			if (gamerInput.action === "Left") 
			{
                gameobjects[0].x -= 3;
                // console.log("Left);
            }
			if (gamerInput.action === "Right") 
			{
                gameobjects[0].x += 3;
                // console.log("Right");
            }
			
        } 
		else 
		{
            console.log(gameobjects[i].name + " at X: " + gameobjects[i].x + "  Y: " + gameobjects[i].y + " looks like its not alive :'(");
        }
		
		//(1.x > 2.x && 1.x < 2.x + width)
		
		if (gameobjects[0].x > gameobjects[1].x && gameobjects[0].x < gameobjects[1].x + (gameobjects[1].img.width / 2))
		{
			console.log("x co ordinate check passed");
			
			if (gameobjects[0].y > gameobjects[1].y && gameobjects[0].y < gameobjects[1].y + gameobjects[1].img.height / 2)
			{
				console.log("old x pos" + gameobjects[1].x);
				console.log("old y pos" + gameobjects[1].y);
				console.log("Flew through the goal");
				gameobjects[1].x = getRandomInt(100,600);
				gameobjects[1].y = getRandomInt(100,600);
				console.log("new x pos" + gameobjects[1].x);
				console.log("new x pos" + gameobjects[1].y);
			}
		}
}

var frames = 4;
var currentFrame = 0;
// Initial time set
var initial = new Date().getTime();
var current; // current time

function animate() {
    current = new Date().getTime(); // update current
    if (current - initial >= 200) 
	{ // check is greater that 200 ms
        currentFrame = (currentFrame + 1) % frames; // update frame
        initial = current; // reset initial
    } 

    // Draw sprite frame
    context.drawImage(gameobjects[0].img, (gameobjects[0].img.width / frames) * currentFrame, 0, 200, 100, gameobjects[0].x, gameobjects[0].y, 200, 100);
}
// Draw GameObjects to Console
// Modify to Draw to Screen
function draw() {
    // Clear Canvas
    // Iterate through all GameObjects
    // Draw each GameObject
	
    //console.log("Draw");
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(backgroundImage, 0, 0 );
	
    for (i = 0; i < gameobjects.length; i++) {
        if (gameobjects[i].health > 0) 
		{
            //console.log("Image :" + gameobjects[i].img);
			
			context.drawImage(gameobjects[1].img, gameobjects[1].x, gameobjects[1].y);
			animate();
        }
    }
}

function gameloop() {
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}

// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);

// Handle Keypressed "keyup" or "keydown"
// this is is being handled by the method input()
window.addEventListener('keyup', input);
window.addEventListener('keydown', input);

// handle on click events for each button
function xonClick(){
    gamerInput = new GamerInput("Left");
}
function yonClick(){
	gamerInput = new GamerInput("Up");
}
function aonClick(){
	gamerInput = new GamerInput("Down");
}
function bonClick(){
	gamerInput = new GamerInput("Right");
}


