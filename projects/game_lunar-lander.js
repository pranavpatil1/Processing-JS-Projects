frameRate(60);

//A new map every second, of every minute, of every hour, of every day, of every month, of EVERY YEAR!!!! Don't miss out! (yes there ARE infinite maps... probably)

/**

Use LEFT and RIGHT to move left and right.

Use UP to more fuel. Use DOWN to use less fuel.

TO WIN MAKE SURE: the ship is slowly descending, the ground is even, and it isn't moving too much left or right

FOR A BONUS: land directly above a line

COOL COURSE ID's: [32, 50, 21, 26, 1, 2016], [2, 50, 6, 27, 1, 2016], [31, 2, 7, 27, 1, 2016], [4, 51, 10, 28, 1, 2016], [16, 7, 11, 28, 1, 2016], [44, 41, 16, 29, 1, 2016]

*/

/**                 INPUT YOUR PREVIOUS COURSE ID IN ORDER TO PLAY WITH A CERTAIN MAP AGAIN                */

var reset = false;

//used to reset the game to create a new level or start over
var first = false;

//Seperate each of the numbers with commas
var courseId = [];

//TODO: ADD MENU AT SIDE (CHANGE CANVAS SIZE) WHERE THERE IS ALL THE INFORMATION AND SETTINGS AND MAP AND JOYSTICK STUFF

//x, y, xvel, yvel, upward power
var player = [170, 30, 0, 0, 0];

var ground = [];

var gameState = "";

var score = 0;

var fuel = 750;
var fuelLost = 0;

var endTime = 0;

var bonus = [];

var bonusAmt = 1;

if (courseId.length === 0) {

    courseId = [second(), minute(), hour(), day(), month(), year()];
    
}

var courseIdText = courseId[0] + ", " + courseId[1] + ", " + courseId[2] + ", " + courseId[3] + ", " + courseId[4] + ", " + courseId[5];

for (var i = -10; i < 410; i += 5) {
    
    ground.push([i, noise((i + 100*courseId[0])/300 + noise((i + courseId[1]*200)/200) + noise((i + courseId[2]*300)/300) + noise((i + courseId[3]*400)/400) + noise((i + courseId[4]*500)/500) + noise((i + courseId[5]*600)/600))*625]);
    
}

for (var i = 5; i < (ground.length - 5); i ++) {
    
    if (abs(ground[i - 5][1] - ground[i][1]) > 10 & abs(ground[i + 5][1] - ground[i][1]) > 10 & abs(ground[i - 1][1] - ground[i][1]) < 3 & abs(ground[i + 1][1] - ground[i][1]) < 3) {
        
        bonus.push([ground[i][0], floor(abs(ground[i + 5][1] - ground[i][1])/10 + abs(ground[i - 5][1] - ground[i][1])/10)]);
        
    }
    
}

var keys = [];

keyPressed = function() {
    
    keys[keyCode] = true;
    
};

keyReleased = function() {
    
    keys[keyCode] = false;
    
};

//changes font
textFont(createFont("monospace"));

draw = function() {
    
    if (fuel <= 0) {
        
        first = true;
        score = 0;
        fuel = 750;
        
    }
    
    if (first) {
        
        //x, y, xvel, yvel, upward power
        player = [random(50, 350), random(10, 80), 0, 0, 0];
        
        ground = [];
        
        bonus = [];
        
        bonusAmt = 1;
        
        endTime = frameCount;
        
        courseId = [second(), minute(), hour(), day(), month(), year()];
        
        courseIdText = courseId[0] + ", " + courseId[1] + ", " + courseId[2] + ", " + courseId[3] + ", " + courseId[4] + ", " + courseId[5];
        
        for (var i = -10; i < 410; i += 5) {
            
            ground.push([i, noise((i + 100*courseId[0])/300 + noise((i + courseId[1]*200)/200) + noise((i + courseId[2]*300)/300) + noise((i + courseId[3]*400)/400) + noise((i + courseId[4]*500)/500) + noise((i + courseId[5]*600)/600))*625]);
            
        }
        
        for (var i = 5; i < (ground.length - 5); i ++) {
            
            if (abs(ground[i - 5][1] - ground[i][1]) > 10 & abs(ground[i + 5][1] - ground[i][1]) > 10 & abs(ground[i - 1][1] - ground[i][1]) < 3 & abs(ground[i + 1][1] - ground[i][1]) < 3) {
                
                bonus.push([ground[i][0], floor(abs(ground[i + 5][1] - ground[i][1])/10 + abs(ground[i - 5][1] - ground[i][1])/10)]);
                
            }
            
        }
        
        first = false;
        
    }
    
    //the actual game screen, originally fitting a 400 by 400 canvas, but now moved to the middle to simulate the video game
    
    rect(200, 300, 380, 380);
    
    pushMatrix();
    
    translate(20, 75);
    
    scale(0.9);
    
    background(0, 0, 0);
    
    textSize(10);
    
    //win or lose text messages
    fill(255, 255, 255, endTime - frameCount + 255); //displays for 255 frames
    if (gameState === "win") {
        
        text("Nice job! Mission complete!", 100, 100);
        
    }
    if (gameState === "lose") {
        
        text("You lost " + fuelLost + " fuel\nTry again", 100, 100);
        
    }
    
    if ((endTime - frameCount) < 0) {
        
        gameState = "";
        
    }
    
    //displays the ship, using translate
    pushMatrix();
    
    //moves it to negative player x and y
    translate(-player[0], -player[1]);
    
    //zooms in
    scale(2);
    
    //when you have no fuel, there is no fire and fuel is reset to 0
    if (fuel <= 0) {
        
        player[4] = 0;
        fuel = 0;
        
    }
    
    //stops the player when it is at the top of bottom by making yvel 0 and moving it back on the screen
    if (player[1] < 5) {
        
        player[3] = 0;
        player[1] += 0.1;
        
    } else if (player[1] > 395) {
        
        player[3] = 0;
        player[1] -= 0.1;
        
    } else { //if on the screen, change the yvel by the upward force and how much the player is moving up or down
        
        player[3] -= player[4]*cos(player[2]) + 0.2;
        
    }
    
    pushMatrix();
    
    rectMode(CENTER);
    
    stroke(255, 255, 255);
    strokeWeight(2);
    noFill();
    
    translate(player[0], player[1]);
    
    rotate(player[2]);
    
    pushMatrix();
    
    scale(0.5);
    
    rect(0, 0, 10, 10);
    
    //left engine
    line(-5, 0, -10, 0);
    line(-10, 3, -10, 0);
    if (player[2] > 3) {
        
        triangle(-9, 3, -11, 3, -10, 8 + random(-1, 1));
        
    }
    
    //right engine
    line(5, 0, 10, 0);
    line(10, 3, 10, 0);
    if (player[2] < -3) {
        
        triangle(9, 3, 11, 3, 10, 8 + random(-1, 1));
    
    }
    
    if (player[4] > 0.1) {
        
        triangle(-5, 5, 5, 5, 0, 5 + 5*player[4] + random(8));
        
    }
    
    popMatrix(); //end of player drawing
    
    popMatrix();
    
    if (keys[LEFT] & player[2] > -90 & fuel > 0) {
        
        player[2] -= 0.5;
        
        if (player[2] < 0) {
            
            player[3] += player[3]*(cos(player[2]) - cos(player[2] + 0.5));
            
        }
        
    }
    
    if (keys[RIGHT] & player[2] < 90 & fuel > 0) {
        
        player[2] += 0.5;
        
        if (player[2] > 0) {
            
            player[3] += player[3]*(cos(player[2]) - cos(player[2] - 0.5));
            
        }
        
    }
    
    if (abs(player[2]) === 90) {
        
        player[3] = 3;
        
    }
    
    //gravity
    player[3] += 0.5;
    
    if (keys[UP] & player[4] < 1.3) {
        
        player[4] += 0.1;
        
    }
    
    if (keys[DOWN] & player[4] > 0.1) {
        
        player[4] -= 0.1;
        
    }
    
    //lose fuel when you use the main boosters but also the left and right boosters
    fuel -= player[4]/10;
    fuel -= abs(player[2])/5000;
    
    if ((player[0] <= 5 & player[2] >= 0) | (player[0] >= 395 & player[2] <= 0) | (player[0] >= 5 & player[0] <= 395)) {
        
        player[0] += player[2]/500;
        
    }
    player[1] += player[3]/2000*cos(player[2]);
    
    for (var i = 1; i < (ground.length - 1); i ++) {
        
        line(ground[i][0], ground[i][1], ground[i + 1][0], ground[i + 1][1]);
        
        if (player[1] > (ground[i][1] - 5) & player[0] > (ground[i][0] - 2.5) & player[0] < (ground[i][0] + 2.5)) {
            
            //player is slowly descending, the ground is even, and the horizontal speed is low
            if (round(-player[3]/5*cos(player[2])) >= -10 & abs(round(player[2]*2.222)) < 20 & abs(ground[i - 1][1] - ground[i][1]) < 3 & abs(ground[i + 1][1] - ground[i][1]) < 3 & gameState === "") {
                
                gameState = "win";
                
                bonusAmt = 1;
                
                for (var i = 0; i < bonus.length; i ++) {
                    
                    if (abs(bonus[i][0] - player[0]) < 2.5) {
                        
                        bonusAmt = bonus[i][1];
                        
                    }
                    
                }
                
                score += 5*bonusAmt*(floor(abs((-1000/player[3])*cos(player[2]))));
                
                first = true;
                
            } else {
                
                gameState = "lose";
                fuelLost = round(abs((-player[3]/5*cos(player[2])) - 10)/20 * random(50, 100));
                
                fuel -= fuelLost;
                
                first = true;
                
            }
            
            endTime = frameCount;
            
        }
        
        for (var j = 0; j < bonus.length; j ++) {
            
            if (bonus[j][0] === ground[i][0]) {
                
                fill(255, 255, 255);
                textSize(5);
                text("x" + bonus[j][1], ground[i][0] - 2, ground[i][1] + 10);
                
            }
            
        }
        
    }
    popMatrix();
    
    popMatrix();
    //end of actual game screen
    
    //top menu with map and information
    
    fill(255, 255, 255);
    rect(200, 35, 400, 70);
    
    fill(0, 0, 0);
    
    textSize(12);
    text("ALTITUDE              " + round((390 - player[1])*2.22), 200, 20);
    text("HORIZONTAL SPEED      " + round(player[2]*2.222), 200, 40);
    text("VERTICAL SPEED        " + round(-player[3]/5*cos(player[2])), 200, 60);
    text("FUEL              " + round(fuel), 20, 20);
    text("SCORE             " + round(score), 20, 40);
    
    fill(255, 255, 255);
    text("Course ID: " + courseIdText, 130, 470);
    
    noFill();
    rect(90, 145, 120, 120);
    
    stroke(0, 255, 30);
    point(30 + player[0]*0.3, 85 + player[1]*0.3);
    
    for (var i = 0; i < ground.length - 2; i ++) {
        
        stroke(255, 255, 255);
        if (ground[i][0] > -5) {
            
            line(30 + ground[i][0]*0.3, 85 + ground[i][1]*0.3, 30 + ground[i + 1][0]*0.3, 85 + ground[i + 1][1]*0.3);
            
        }
        
        stroke(0, 255, 242);
        for (var j = 0; j < bonus.length; j ++) {
            
            if (bonus[j][0] === ground[i][0]) {
                
                point(30 + ground[i][0]*0.3, 88 + ground[i][1]*0.3);
                
            }
            
        }
        
    }
    noStroke();
    
    //beginning of bottom menu
    fill(255, 255, 255);
    
    rect(200, 540, 400, 120);
    
    rect(392, 280, 16, 450);
    rect(8, 280, 16, 450);
    
};