/**

Instructions: 

When the game begins, you will be at the aim screen. Here, click somewhere inside the semi-circle to send your ball flying! Try to hit all of the balls to complete all 5 levels!

Mobile mode (phone): 
Click or tap on the left side of the screen to go left and the right side of the screen to go left. This is the preset mode, because it is easier to change a variable on the computer rather than on mobile. 

Computer mode (computer):
Use the left and right arrow keys to move the platform left and right. You will have to change the variable at the beginning for this mode (line 2).

Points:

Advancing a level: 500 points
This can be done simply by getting rid of all the brown circles on screen. Simple enough, right?

Hitting a brown ball: 50 points
May not seem like a lot, but after seeing the later levels, it is clear that the points DO ADD UP!!!

Clicking the letter "O": -100 points
This returns you to the aim screen, and is useful when the ball seems to be going nowhere. Make sure not to abuse this key, or you WILL see an impact in your score!

Blue Ball falling into the lava: -100 points
This has the same effect as the previous penalty, but this isn't voluntary. Be careful, and try to make sure you do not let it fall! Simple penalty, easily avoided.

A Brown Ball falling into the lava: -1000 points:
THIS WILL KILL YOUR SCORE!!! Avoid at all costs! 

The best score I can think is attainable is 8500, which would be a flawless round, complete with luck and skill. You can't get any penalties and the ball keeps colliding with other balls very often. 
*/ //Instructions

//whether or not you are on a computer
var tap = false;

//aligns text in the very center
textAlign(CENTER, CENTER);
//changes font
textFont(createFont("monospace"));

var circles = []; //array for the circles you have to hit

var rectX = 200; //rectangle's x position

var ballX = 200; //ball position
var ballY = 300;

var play = false; //whether or not the game is going

var slope = [2, -3.5]; //ball's direction

var aim = [200, 300]; //where the ball is aiming at the beginning

//whether or not the game is complete
var complete = false;

//which level you are on
var level = 0;

//how much fade there is after yoru ball falls

//frameCount in which you started playing
var levelStart = 0;

//total number of levels (could have been levels.length, but this is shorter and a little more clear
var numLevels = 5;

//arcade classic text font which i created especially for this contest!
var pixel = function(message, x, y, size, colors, textWidth, textHeight) {
    
    rectMode(LEFT);
    
    //colors the specified colors
    fill(colors);
    stroke(colors);
    
    //moves to x and y
    pushMatrix();
    translate(x, y);
    
    //shinks to proper size, given most letters are 70 by 70
    scale(size / 70);
    
    var letter; //which letter you are on
    var letterX = -80; //the x pos of that letter (saying x and y are at (0, 0))
    var letterY = 0; //the y pos of that letter (saying x and y are at (0, 0))
    
    //goes through each letter in the string
    for (var a = 0; a < message.length; a ++) {
        
        //letter variable changes to the cooresponding letter
        letter = message.charAt(a);
        
        //x pos increases by 80 to leave a 10 space (w/o scale) 
        letterX += 80;
        
        //checks if the x value of the letter is going to be past the specified maximum
        if (letterX > textWidth*70/size - 80) {
            
            //if so reset it to 0 
            letterX = 0;
            
            //if the letter is a space
            if (letter === " ") {
                
                letterX -= 50; //move the x pos of it back 50 (will move 30 later)
                
            }
            
            letterY += 80; //move a line down (leaving a 10 space)
            
        }
        
        //begin writing
        pushMatrix();
        
        //move to x and y of the specific letter
        translate(letterX, letterY);
        
        //goes and checks through multiple numbers and symbols
        if (letter === "a") {
            
            rect(0, 20, 20, 20);
            rect(0, 40, 70, 10);
            rect(0, 50, 20, 20);
            rect(10, 10, 20, 10);
            rect(20, 0, 30, 10);
            rect(40, 10, 20, 10);
            rect(50, 20, 20, 20);
            rect(50, 50, 20, 20);
            
        } else if (letter === "b") {
            
            rect(0, 0, 60, 10);
            rect(0, 10, 20, 20);
            rect(0, 30, 60, 10);
            rect(0, 40, 20, 20);
            rect(0, 60, 60, 10);
            rect(50, 10, 20, 20);
            rect(50, 40, 20, 20);
            
        } else if (letter === "c") {
            
            rect(0, 20, 20, 30);
            rect(10, 10, 20, 10);
            rect(10, 50, 20, 10);
            rect(20, 0, 40, 10);
            rect(20, 60, 40, 10);
            rect(50, 10, 20, 10);
            rect(50, 50, 20, 10);
            
        } else if (letter === "d") {
            
            rect(0, 0, 50, 10);
            rect(0, 10, 20, 50);
            rect(0, 60, 50, 10);
            rect(40, 10, 20, 10);
            rect(40, 50, 20, 10);
            rect(50, 20, 20, 30);
            
        } else if (letter === "e") {
            
            rect(0, 0, 60, 10);
            rect(0, 10, 20, 20);
            rect(0, 30, 50, 10);
            rect(0, 40, 20, 20);
            rect(0, 60, 70, 10);
            
        } else if (letter === "f") {
            
            rect(0, 0, 70, 10);
            rect(0, 10, 20, 20);
            rect(0, 30, 60, 10);
            rect(0, 40, 20, 30);
            
        } else if (letter === "g") {
            
            rect(0, 20, 20, 30);
            rect(10, 10, 20, 10);
            rect(10, 50, 20, 10);
            rect(20, 0, 50, 10);
            rect(20, 60, 50, 10);
            rect(40, 30, 30, 10);
            rect(50, 40, 20, 20);
            
        } else if (letter === "h") {
            
            rect(0, 0, 20, 30);
            rect(0, 30, 70, 10);
            rect(0, 40, 20, 30);
            rect(50, 0, 20, 30);
            rect(50, 40, 20, 30);
            
        } else if (letter === "i") {
            
            //enlarged (widened) pixels to create uniformity in width (10 by 11.5)
            rect(0, 0, 70, 10);
            rect(0, 60, 70, 10);
            rect(23, 10, 23, 50);
            
        } else if (letter === "j") {
            
            rect(0, 50, 20, 10);
            rect(10, 60, 50, 10);
            rect(50, 0, 20, 60);
            
        } else if (letter === "k") {
            
            rect(0, 0, 20, 30);
            rect(0, 30, 40, 10);
            rect(0, 40, 50, 10);
            rect(0, 50, 20, 20);
            rect(30, 20, 20, 10);
            rect(30, 50, 30, 10);
            rect(40, 10, 20, 10);
            rect(40, 60, 30, 10);
            rect(50, 0, 20, 10);
            
        } else if (letter === "l") {
            
            rect(0, 0, 20, 60);
            rect(0, 60, 70, 10);
            
        } else if (letter === "m") {
            
            rect(0, 0, 20, 10);
            rect(0, 10, 30, 10);
            rect(0, 20, 70, 10);
            rect(0, 30, 20, 40);
            rect(30, 30, 10, 10);
            rect(40, 10, 30, 10);
            rect(50, 0, 20, 10);
            rect(50, 30, 20, 40);
            
        } else if (letter === "n") {
            
            rect(0, 0, 20, 10);
            rect(0, 10, 30, 10);
            rect(0, 20, 40, 10);
            rect(0, 30, 20, 40);
            rect(30, 30, 40, 10);
            rect(40, 40, 30, 10);
            rect(50, 0, 20, 30);
            rect(50, 50, 20, 20);
            
        } else if (letter === "o") {
            
            rect(0, 10, 20, 50);
            rect(10, 0, 50, 10);
            rect(10, 60, 50, 10);
            rect(50, 10, 20, 50);
            
        } else if (letter === "p") {
            
            rect(0, 0, 60, 10);
            rect(0, 10, 20, 30);
            rect(0, 40, 60, 10);
            rect(0, 50, 20, 20);
            rect(50, 10, 20, 30);
            
        } else if (letter === "q") {
            
            rect(0, 10, 20, 50);
            rect(10, 0, 50, 10);
            rect(10, 60, 40, 10);
            rect(30, 40, 40, 10);
            rect(40, 50, 20, 10);
            rect(50, 10, 20, 30);
            rect(60, 60, 10, 10);
            
        } else if (letter === "r") {
            
            rect(0, 0, 60, 10);
            rect(0, 10, 20, 30);
            rect(0, 40, 50, 10);
            rect(0, 50, 20, 20);
            rect(30, 50, 30, 10);
            rect(40, 30, 20, 10);
            rect(40, 60, 30, 10);
            rect(50, 10, 20, 20);
            
        } else if (letter === "s") {
            
            rect(0, 10, 20, 20);
            rect(0, 50, 20, 10);
            rect(10, 0, 40, 10);
            rect(10, 30, 50, 10);
            rect(10, 60, 50, 10);
            rect(40, 10, 20, 10);
            rect(50, 40, 20, 20);
            
        } else if (letter === "t") {
            
            //just like when widening I, 10 to 11.5
            rect(0, 0, 70, 10);
            rect(23, 10, 23, 60);
            
        } else if (letter === "u") {
            
            rect(0, 0, 20, 60);
            rect(10, 60, 50, 10);
            rect(50, 0, 20, 60);
            
        } else if (letter === "v") {
            
            rect(0, 0, 20, 40);
            rect(10, 40, 20, 10);
            rect(20, 50, 30, 10);
            rect(30, 60, 10, 10);
            rect(40, 40, 20, 10);
            rect(50, 0, 20, 40);
            
        } else if (letter === "w") {
            
            rect(0, 0, 20, 30);
            rect(0, 30, 70, 20);
            rect(0, 50, 30, 10);
            rect(0, 60, 20, 10);
            rect(30, 20, 10, 10);
            rect(40, 50, 30, 10);
            rect(50, 0, 20, 30);
            rect(50, 60, 20, 10);
            
        } else if (letter === "x") {
            
            rect(0, 0, 20, 10);
            rect(0, 10, 30, 10);
            rect(0, 50, 30, 10);
            rect(0, 60, 20, 10);
            rect(10, 20, 50, 10);
            rect(10, 40, 50, 10);
            rect(20, 30, 30, 10);
            rect(40, 10, 30, 10);
            rect(40, 50, 30, 10);
            rect(50, 0, 20, 10);
            rect(50, 60, 20, 10);
            
        } else if (letter === "y") {
            
            //just like I and T, y is widened by a scale of 1.15
            rect(0, 0, 23, 30);
            rect(11.5, 30, 46, 10);
            rect(23, 40, 23, 30);
            rect(46, 0, 23, 30);
            
        } else if (letter === "z") {
            
            rect(0, 0, 70, 10);
            rect(0, 50, 30, 10);
            rect(0, 60, 70, 10);
            rect(10, 40, 30, 10);
            rect(20, 30, 30, 10);
            rect(30, 20, 30, 10);
            rect(40, 10, 30, 10);
            
        } else if (letter === "0") {
            
            rect(0, 20, 20, 30);
            rect(10, 10, 10, 10);
            rect(10, 50, 20, 10);
            rect(20, 0, 30, 10);
            rect(20, 60, 30, 10);
            rect(40, 10, 20, 10);
            rect(50, 20, 20, 30);
            rect(50, 50, 10, 10);
            
        } else if (letter === "1") {
            
            //widened like other letters/symbols
            rect(0, 60, 70, 10);
            rect(11.5, 10, 34.5, 10);
            rect(23, 0, 23, 10);
            rect(23, 20, 23, 40);
            
        } else if (letter === "2") {
            
            rect(0, 10, 20, 10);
            rect(0, 50, 20, 10);
            rect(0, 60, 70, 10);
            rect(10, 0, 50, 10);
            rect(10, 40, 20, 10);
            rect(20, 30, 40, 10);
            rect(40, 20, 30, 10);
            rect(50, 10, 20, 10);
            
        } else if (letter === "3") {
            
            rect(0, 0, 70, 10);
            rect(0, 50, 20, 10);
            rect(10, 60, 50, 10);
            rect(20, 30, 40, 10);
            rect(30, 20, 20, 10);
            rect(40, 10, 20, 10);
            rect(50, 40, 20, 20);
            
        } else if (letter === "4") {
            
            rect(0, 30, 20, 10);
            rect(0, 40, 70, 10);
            rect(10, 20, 20, 10);
            rect(20, 10, 40, 10);
            rect(30, 0, 30, 10);
            rect(40, 20, 20, 20);
            rect(40, 50, 20, 20);
            
        } else if (letter === "5") {
            
            rect(0, 0, 60, 10);
            rect(0, 10, 20, 10);
            rect(0, 20, 60, 10);
            rect(0, 50, 20, 10);
            rect(10, 60, 50, 10);
            rect(50, 30, 20, 30);
            
        } else if (letter === "6") {
            
            rect(0, 20, 20, 10);
            rect(0, 30, 60, 10);
            rect(0, 40, 20, 20);
            rect(10, 10, 20, 10);
            rect(10, 60, 50, 10);
            rect(20, 0, 40, 10);
            rect(50, 40, 20, 20);
            
        } else if (letter === "7") {
            
            rect(0, 0, 70, 10);
            rect(0, 10, 20, 10);
            rect(20, 40, 20, 30);
            rect(30, 30, 20, 10);
            rect(40, 20, 20, 10);
            rect(50, 10, 20, 10);
            
        } else if (letter === "8") {
            
            rect(0, 10, 20, 10);
            rect(0, 20, 30, 10);
            rect(0, 40, 10, 20);
            rect(10, 0, 40, 10);
            rect(10, 30, 40, 10);
            rect(10, 60, 50, 10);
            rect(30, 40, 40, 10);
            rect(50, 10, 10, 20);
            rect(50, 50, 20, 10);
            
        } else if (letter === "9") {
            
            rect(0, 10, 20, 20);
            rect(10, 0, 50, 10);
            rect(10, 30, 60, 10);
            rect(10, 60, 40, 10);
            rect(40, 50, 20, 10);
            rect(50, 10, 20, 20);
            rect(50, 40, 20, 10);
            
        } else if (letter === "(") {
            
            rect(0, 20, 20, 30);
            rect(10, 10, 20, 10);
            rect(10, 50, 20, 10);
            rect(20, 0, 20, 10);
            rect(20, 60, 20, 10);
            
        } else if (letter === ")") {
            
            rect(0, 0, 20, 10);
            rect(0, 60, 20, 10);
            rect(10, 10, 20, 10);
            rect(10, 50, 20, 10);
            rect(20, 20, 20, 30);
            
        } else if (letter === "$") {
            
            rect(0, 20, 20, 10);
            rect(10, 10, 50, 10);
            rect(10, 30, 50, 10);
            rect(10, 50, 50, 10);
            rect(30, 0, 10, 10);
            rect(30, 60, 10, 10);
            rect(50, 40, 20, 10);
            
        } else if (letter === ".") {
            
            rect(0, 50, 20, 20);
            
        } else if (letter === ",") {
            
            rect(0, 50, 20, 20);
            rect(0, 80, 10, 10);
            rect(10, 70, 10, 10);
            
        } else if (letter === "!") {
            
            rect(0, 60, 10, 10);
            rect(10, 30, 20, 10);
            rect(10, 40, 10, 10);
            rect(20, 0, 30, 20);
            rect(20, 20, 20, 10);
            
        } else if (letter === "?") {
            
            rect(0, 10, 20, 10);
            rect(10, 0, 50, 10);
            rect(20, 40, 20, 10);
            rect(20, 60, 20, 10);
            rect(30, 30, 30, 10);
            rect(50, 10, 20, 20);
            
        } else if (letter !== " ") { //any other symbols (excluding space)
            
            letterX -= 80; //move it back 80 as if it never happened
            
        }
        
        popMatrix();
        
        //exceptions
        if (letter === "(" | letter === ")" | letter === " ") { //with parenthesis or a space
            
            letterX -= 30; //decrease the x of the NEXT letter by 30
            
        } else if (letter === "." | letter === ",") { //period of comma
            
            letterX -= 50; //decrease the x of the NEXT letter by 50
            
        } else if (letter === "!") {
            
            letterX -= 20; //decrease the x of the NEXT letter by 20
            
        }
        
    }
    
    popMatrix();
    
    rectMode(CENTER);

};


//an array representing each of the levels
var levels = [
    [
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1]
    ], 
    [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    ], 
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ], 
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    
];

//first frame of a level
var first = true;

//which screen you are on
var scene = 0;

//how high the ball is in the home screen
var ballHeight = 200;

//your game score
var score = 500;

//your highest game score
var highscore = 0;

//whether or not the highscore text appears at the win screen
var newHighscore = false;

mouseClicked = function() {
    
    //if you click when you are in the aiming screen - i had to change the < 100 to < 50 even though the arc has 100, i don't know why
    if (!play & dist(mouseX, mouseY, rectX, 300) <= 51 & mouseY < 350 & scene === 1) {
        
        //you have begun playing and the ball's slope changes
        play = true; 
        slope = [-(rectX - aim[0])/20, -(350 - aim[1])/20];
        
    }
    
    //home screen, bottom circle
    if (scene === 0 & dist(mouseX, mouseY, 35, 365) < 50) {
        
        //changes mobile to computer and vice versa
        tap = !tap;
        
    }
    
    //home screen, play button
    if (scene === 0 & mouseX > 250 & mouseX < 390 & mouseY > 350 & mouseY < 390) {
        
        //changes scene to aiming screen
        scene = 1;
        //changes levelStart to frameCount
        levelStart = frameCount;
        
    }
    
    //if you get past the last level, or lose, or click home
    if (level === numLevels | level === (numLevels + 1) | (mouseX > 10 & mouseX < 50 & mouseY > 370 & mouseY < 394)) {
        
        //resets level
        level = 0;
        //first frame is true (so level actually changes)
        first = true;
        //aiming screen on
        play = false;
        //goes to home screen
        scene = 0;
        //resets score
        score = 500;
        
        //deletes everything in the circle array
        for (var l = circles.length; l > 0; l --) {
        
            circles.pop();
        
        }
        
    }
    
};

//controls if you are holding a certain key
var keys = [];

keyPressed = function() {
    
    keys[keyCode] = true;
    
};

keyReleased = function() {
    
    //space button returns ball and decreases score
    if (keyCode === 32 & play) {
        
        score -= 100;
        play = false;   
        
    }
    
    keys[keyCode] = false;
    
};

draw = function() {
    
    if (scene === 0) {
        
        //rectangles are centered at the center
        rectMode(CENTER);
        
        //black background
        background(0, 0, 0);
        
        //ball is white, at ball height, to look like it is bouncing
        fill(255, 255, 255);
        ellipse(ballHeight - 250, 300-(700 - ballHeight)*abs(sin(frameCount))/2, 10, 10);
        
        fill(255, 255, 255);
        //platform under the ball
        rect(ballHeight - 250, 307, 50, 15, 2);
        
        //title text
        
        //message, x, y, size, colors, textWidth, textHeight
        pixel("classic breakout", 25, 112, 20, color(abs((millis()/2)%510 - 255), abs((millis()/2)%510 - 255), abs((millis()/2)%510 - 255)));
        
        noStroke();
        //play button
        
        if (mouseX > 250 & mouseX < 390 & mouseY > 350 & mouseY < 390) {
            
            fill(abs(millis()%510 - 255), abs(millis()%510 - 255), abs(millis()%510 - 255));
            
        } else {
            
            fill(0, 0, 0);
            
        }
        rect(320, 370, 140, 40, 10);
        
        noStroke();
        if (mouseX > 250 & mouseX < 390 & mouseY > 350 & mouseY < 390) {
            
            fill(abs((millis() + 255)%510 - 255), abs((millis() + 255)%510 - 255), abs((millis() + 255)%510 - 255));
            
        } else {
            
            fill(255, 255, 255);
            
        }
        //play button text
        textSize(20);
        pixel("start game", 267, 365, 10);
        
        //circle button for mobile or non-mobile
        fill(255, 255, 255);
        ellipse(35, 370, 40, 40);
        
        //text symbol for circle button
        fill(0, 0, 0);
        textSize(25);
        
        //phone or computer
        if (!tap) {
            
            text("💻", 35, 370);
        
        } else {
            
            text("📱", 35, 370);
        
        }
        
        //tap to change text comes for first 655 frames
        pixel("tap to change!!!", 60, 365, 7.5, color(255, 255, 255, 655-frameCount));
        
        //balll height changes by 2
        ballHeight += 2;
        
        //ball height randomizes between 100 and 200 if it gets above 700
        if (ballHeight > 700) {
            
            ballHeight = random(100, 200);
            
        }
        
        //resets newHighscore to false
        newHighscore = false;
        
    } else if (scene === 1) {
        
        //first frame of a level
        if (first & level !== numLevels) {
            
            //goes through level array at the specific level
            for (var a = 0; a < levels[level][0].length; a ++) {
        
                for (var j = 0; j < levels[level].length; j ++) {
                    
                    //if value is one (representing a circle) add a value to the circles array
                    if (levels[level][j][a] === 1) {
                        
                        //the entire width is always 360, height always 200
                        
                        //x, y
                        circles.push([a*(360/levels[level][0].length) + 40, j*(200/levels[level].length) + 75]);
                        
                    }
                }
                
            }
            //only occurs once
            first = false;
    
        }
        
        //not the aiming screen (actually playing, ball bouncing arouns
        if (play) {
            
            rectX = constrain(rectX, 45, 355);
            
            //mobile mode
            if (tap) {
                
                //when the player taps
                if (mouseIsPressed) {
                    
                    //if they tap on the right of the screen, and the platform has room to move right
                    if (mouseX > 200 & rectX < 355) {
                        
                        rectX += 5;
                        //move the platform right by an increment of 5
                        
                    } else if (rectX > 45) {
                        
                        //if there is room to go left, move the platform left
                        rectX -= 5;
                        
                    }
                    
                }
                
            } else if (!(keys[LEFT] & keys[RIGHT]) & !tap) { //computer and ONLY one key is held
                
                //if there is room to move left and LEFT arrow key is held
                if (keys[LEFT] & rectX > 45) {
                    
                    //move the platform left
                    rectX -= 5;
                    
                } else if (keys[RIGHT] & rectX < 355) {//the RIGHT key held and there is room to go right
                    
                    //move the platform right
                    rectX += 5;
                    
                }
                
            }
            
            //instead of a background, a semi-clear white rectangle covers the screen
            noStroke();
            fill(0, 0, 0, 50);
            rect(200, 200, 400, 400);
            
            fill(255, 255, 255);
            ellipse(ballX, ballY, 20, 20); //ball
            
            fill(255, 255, 255);
            rect(rectX, 370, 100, 20, 5); //platform
            
            //goes through the array of circles
            for (var i = 0; i < circles.length; i ++) {
                
                //move the circles by a small number if they are on screen
                if (circles[i][0] > 0) {
                    
                    circles[i][1] += 0.025;
                    
                }
                
                //if a circle onscreen falls to the bottom (> 360)
                if (circles[i][1] > 360 & circles[i][0] > 0 & circles[i][0] < 400) {
                    
                    //move the circles back up
                    for (var l = 0; l < circles.length; l ++) {
                        
                        circles[l][1] -= 150;
                        
                    }
                    
                    //decrease score
                    score -= 1000;
                    
                    //go back to aiming screen
                    play = false;
                    
                }
                
                //draw a 20 x 20 circle
                ellipse(circles[i][0], circles[i][1], 20, 20);
                
                //if the ball collides with one of the circles
                if (dist(circles[i][0], circles[i][1], ballX, ballY) < 20) {
                    
                    //change the ball's slope to correspond with where it hit the circle
                    slope[0] = -(circles[i][0] - ballX)/5;
                    slope[1] = -(circles[i][1] - ballY)/5;
                    
                    //move the circle off the screen
                    circles[i] = [-25, -25];
                    
                    //resets complete to true
                    complete = true;
                    for (var j = 0; j < circles.length; j ++) {
                        
                        //if there is a circles still onscreen
                        if (circles[j][0] > 0) {
                            
                            //make complete false
                            complete = false;
                            
                        }
                        
                    }
                    
                    //increase score
                    score += 50;
                    
                }
                
            }
            
            //increase ball by slope
            ballX += slope[0];
            ballY += slope[1];
            
            //if the ball hits the walls on the sides
            if (ballX > 390 | ballX < 10) {
                
                //change x slope
                slope[0] *= -1;
                
            }
            
            //if the ball hits the top or the platform
            if ((ballY > 350 & ballX > (rectX - 55) & ballX < (rectX + 55)) | ballY < 60) {
                
                //change y slope
                slope[1] *= -1;
                
                // if the ball hits the platform
                if (ballY > 350) {
                    
                    slope[0] += (ballX - rectX)/40; //the ball completely changes direction according to where it is hit by the platform at the bottom, centered at rectX
                    
                }
                
            } else if (ballY > 350) {
                
                //if the ball falls into the lava
                
                //aiming screen
                play = false;
                
                //decrease score
                score -= 100;
                
            }
            
            //if there are no balls on the screen
            if (complete) {
                
                //aiming screen
                play = false;
                
            }
            
            //when frameCount is equal to 0 (mod 5) / divisible by 5
            if (frameCount%5 === 0) {
                
                //decrease score
                score --;
                
            }
            
            //outlines of menu and background
            stroke(255, 255, 255);
            fill(0, 0, 0);
            rect(200, 25, 400, 50);
            noFill();
            rect(200, 225, 400, 350);
            
        } else {
            //aiming screen
            
            //if not in the arc
            if ((dist(mouseX, mouseY, rectX, 350) > 100 | mouseY > 350)) {
                
                //reset aim, set first to false
                aim = [rectX, 290];
                first = false;
                
            }
            
            //if inside the arc
            if (dist(mouseX, mouseY, rectX, 350) < 100 & mouseY < 350) {
                
                //set aim to mouseX/mouseY
                aim = [mouseX, mouseY];
                
            }
            
            background(0, 0, 0);
            
            //mobile
            if (tap) {
                
                //if the user clicks
                if (mouseIsPressed) {
                    
                    //if clicked on right side and there is room to move right
                    if (mouseX > 200 & rectX < 355) {
                        
                        //move right
                        rectX += 5;
                        
                    } else if (rectX > 45) {
                        //if clicked on th left side and there is room to move left
                        
                        //move left
                        rectX -= 5;
                        
                    }
                    
                }
                
                //if only ONE of the keys is pressed
            } else if (!(keys[LEFT] & keys[RIGHT])) {
                
                //if the LEFT arrow is pressed and there is room to go left
                if (keys[LEFT] & rectX > 45) {
                    
                    //move platform left
                    rectX -= 5;
                    
                } else if (keys[RIGHT] & rectX < 355) {
                    //if the RIGHT arrow is pressed and there is room to go right
                    
                    //move platform right
                    rectX += 5;
                    
                }
                
            }
            
            //align the ball
            ballX = rectX;
            ballY = 350;
            
            //aiming line
            stroke(255, 255, 255);
            strokeWeight(5);
            line(rectX, 350, aim[0], aim[1]);
            
            noStroke();
            //draw the platform
            fill(255, 255, 255);
            rect(rectX, 370, 100, 20, 5);
            
            //draw all the circles
            for (var i = 0; i < circles.length; i ++) {
                
                ellipse(circles[i][0], circles[i][1], 20, 20);
                
            }
            
            //draw the ball
            noStroke();
            fill(255, 255, 255);
            ellipse(ballX, ballY, 20, 20);
            
            //draws the aiming arc
            stroke(255, 255, 255);
            strokeWeight(3);
            noFill();
            arc(rectX, 350, 200, 200, 180, 360);
            line(rectX - 100, 350, rectX + 100, 350);
            
            //below aiming arc to give it a clear drawing
            noStroke();
            fill(0, 0, 0);
            rect(rectX, 357, 220, 10);
            
            //outlines of menu and background
            stroke(255, 255, 255);
            fill(0, 0, 0);
            rect(200, 25, 400, 50);
            noFill();
            rect(200, 225, 400, 350);
        }
        
        //goes to losing screen
        if (score < 0) {
            
            score = 0;
            level = numLevels + 1;
            
        }
        
        //writes the score
        pixel("level " + (level + 1), 10, 20, 10);
        pixel("highscore " + highscore, 113, 20, 10);
        pixel("score " + score, 280, 20, 10);
        
        //black background for home button
        fill(255, 255, 255);
        rect(35, 382, 50, 25);
        
        //text for home button
        fill(0, 0, 0);
        pixel("home", 14, 379, 10, color(0, 0, 0));
        
        //if no circles on screen
        if (complete) {
            
            //increases level and score
            level ++;
            score += 500;
            
            //first is true, to change circles array for the next level
            first = true;
            
            //only occurs once
            complete = false;
            
        }
        
        //win screen
        if (level === numLevels) {
            
            ///black, semi transparent background
            fill(0, 0, 0, 200);
            rect(200, 200, 400, 400);
            
            //win text, white
            fill(255, 255, 255);
            textSize(20);
            text("You WIN!!!\nCome back for more levels!!!\nClick to play again!", 200, 183);
            
            //if score is greater than highscore
            if (score > highscore) {
                
                newHighscore = true;
                highscore = score;
                
            }
            
            if (newHighscore) {
                
                //highscore text
                text("NEW HIGHSCORE!!!!", 200, 256);
                
            }
            
        }
        
        //lose screen
        if (level === (numLevels + 1)) {
            
            //semi transparent black background
            fill(0, 0, 0, 200);
            rect(200, 200, 400, 400);
            
            //lose text
            fill(255, 255, 255);
            textSize(20);
            text("You lost...\nTry to get to the last level!!!\nClick to play again!", 200, 183);
            
        }
        
    }
    
};