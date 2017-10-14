//graphics todo

/**

DONE 4goo needs to be more round and maybe little goo pieces come off when you run on it

3lava needs to be round as well and lava flying out

8finish world 3 level 3

9redesign world 2 level 6, i dont like the disappearing thing D:

2make pieces fly with the death

DONE 7fix "r" bugs

DONE 5slow player down but still allow him to go the same height

6imagize everything? (lava, goo, grass...)

BETTER WITHOUT 1make the player grow into his speed rather than just one initial speed

10 add a quick going into portal animation

11add a cool background (world 1 = city with fluffy clouds, 2 = volcano with dark clouds, 3 = factory with steam coming out)

12 convert to html and add audio effects: background music for menu, each of the worlds (individual), jumping, going in goo, falling in lava, falling off the screen

13turn the home page buttons to a circle button with a scene shot (city, volcano, factory)

*/

var practice = false;

/**

Get to the green portal to advance to the next level!!!

    E   :   Go to Main Menu.
    R   :   Restart to beginning of level and lose a life.
    Q   :   Restart to beginning of the entire world with score and deaths reset.

Credit to chopsor in his program: https://www.khanacademy.org/computer-programming/concept-player-on-block-collision/6004175585148928

Highscores World 1: 

    1.  12,595  : Pranav Patil
    2.  
    3.  
    4.  
    5.  
    6.  
    7.  
    8. 
    9. 
    10. 

Highscores World 2:

    1.  12,544  : Pranav Patil
    2.  
    3. 
    4.  
    5.  
    6.
    7.  
    8. 
    9. 
    10. 

Highscores World 3: 

    1.  13,459  : Pranav Patil
    2.  
    3.  
    4.  
    5.  
    6.  
    7.
    8.  
    9. 
    10. 

*/

var start = true;
var logoPlay = false;
var timer = 0;

//game variables

{

var score1 = 15000;
var score2 = 15000;
var score3 = 15000;

var finalScore1 = 0;
var finalScore2 = 0;
var finalScore3 = 0;

var highScore1 = 0;
var highScore2 = 0;
var highScore3 = 0;

var restart = false;
var quickEnd = false;

var level1 = 0;
var level2 = 0;
var level3 = 0;

var Level1 = true;
var Level2 = false;
var Level3 = false;

var playLevel1 = false;
var playLevel2 = false;
var playLevel3 = false;

var end = false;
var beginning = true;

var origX = 20;
var origY = 300;

var finalX = 376;
var finalY = 4;

var first = true;
var Second = false;

var fade = 255;

var deaths = 0;

var bombX = 0;
var bombY = 0;
var bombSize = 260;

var painFade = 0;

var lavaX = [];
var lavaY = [];
var lavaWidth = [];
var lavaHeight = [];

var gooX = [];
var gooY = [];
var gooWidth = [];
var gooHeight = [];

var gooTrue = false;

var top = false;
var right = false;

var up = true;

var broken = [];

var splash = [];

background(0, 0, 0);

scale(width/400, height/400);

//allows me to use keys
var keys = [];
var firstClick = [];
keyPressed = function() {
    
    if (!keys[keyCode]) {
        
        firstClick[keyCode] = true;
        
    } else {
        
        firstClick[keyCode] = false;
        
    }
    
    keys[keyCode] = true;
};
keyReleased = function() {
    
    firstClick[keyCode] = false;
    keys[keyCode] = false;
    
};

mouseReleased = function() {
    
    if (!start) {
        
        logoPlay = true;
        start = true;
        
    } else {
        
        if (beginning) {
            
            if (mouseX > 30 && mouseX < 130 && mouseY > 212 && mouseY < 272 && (Level1 || practice)) {
                
                beginning = false;
                level1 = 1;
                playLevel1 = true;
            
            }
            if (mouseX > 150 && mouseX < 250 && mouseY > 212 && mouseY < 272 && (Level2 || practice)) {
                
                beginning = false;
                level2 = 1;
                playLevel2 = true;
            
            }
            if (mouseX > 270 && mouseX < 370 && mouseY > 212 && mouseY < 272 && (Level2 || practice)) {
                
                beginning = false;
                level3 = 1;
                playLevel3 = true;
            
            }
            if (mouseX > 150 && mouseX < 250 && mouseY > 330 && mouseY < 380) {
                
                practice = !practice;
            
            }
            
        } else if (end) {
        
            end = false;
            beginning = true;
            level1 = 0;
            level2 = 0;
            level3 = 0;
            first = true;
            deaths = 0;
            playLevel1 = false;
            playLevel2 = false;
            playLevel3 = false;
        
        } else {
                
                if (mouseX > 130 && mouseX < 180 && mouseY > 360 && mouseY < 390 && practice) {
                    
                    first = true;
                    if (playLevel1) {
                        
                        level1 --;
                        if (level1 === 0) {
                            
                            level1 = 1;
                            
                        }
                        
                    } else if (playLevel2) {
                        
                        level2 --;
                        if (level2 === 0) {
                            
                            level2 = 1;
                            
                        }
                        
                    } else {
                        
                        level3 --;
                        if (level3 === 0) {
                            
                            level3 = 1;
                            
                        }
                        
                    }
                
                } else if (mouseX > 220 && mouseX < 270 && mouseY > 360 && mouseY < 390 && practice) {
                    
                    first = true;
                    fade = 255;
                    if (playLevel1) {
                        
                        level1 ++;
                        if (level1 === 7) {
                            
                            level1 = 6;
                            
                        }
                        
                    } else if (playLevel2) {
                        
                        level2 ++;
                        if (level2 === 7) {
                            
                            level2 = 6;
                            
                        }
                        
                    } else {
                        
                        level3 ++;
                        if (level3 === 4) {
                            
                            level3 = 3;
                            
                        }
                        
                    }
                
                }
                
            }
        
    } 
        
    
};

var blocks = []; //array for pushing blocks

//collision detection function
var collide = function(obj1, obj2) {
    if (obj1.x < obj2.x + obj2.w && obj1.x + obj1.w > obj2.x && obj1.y < obj2.y + obj2.h && obj1.y + obj1.h > obj2.y) {
        return true; //collision is true
    }    
};

//Player Object
var Player = function(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.velx = 0;
    this.vely = 0;
    
    this.moveSpeed = 0.5;
    this.maxSpeed = 5;
    
    this.falling = false;
    this.gravity = 0.25;
    this.color = color;
};
//UPDATE PLAYER
Player.prototype.update = function() {
    if ((keys[UP] || keys[87]) && !this.falling && gooTrue === false) {
        this.vely = -6.3; //Makes player begin to jump when up key is pressed
        this.falling = true; //Lets computer know that player is jumping
    }
    if (keys[DOWN]) {
        
        this.falling = true;
        this.vely = 20;
        
    }
        
    if (keys[LEFT] || keys[65]) {
        
        this.velx = -4;
        if (gooTrue) {
            
            this.velx = -2;
            
        }
    }                   //must be
    if (keys[RIGHT] || keys[68]) {  //opposite
        
        this.velx = 4;
        if (gooTrue) {
            
            this.velx = 2;
            
        }
    }
    
    //if statement that makes player stationary if neither the left or right arrow keys are pressed
    if ((!keys[RIGHT] && !keys[LEFT]) && (!keys[65] && !keys[68])) {
        this.velx = 0;
    }
    
    if (this.y > 500 | restart) {
        
        bombX = this.x;
        bombY = this.y;
        bombSize = 0;
        
        if (!beginning & !end) {
            
            deaths++;
            
            if (playLevel1) {
                
                score1 -= 500;
                
            } else if (playLevel2) {
                
                score2 -= 500;
                
            } else {
                
                score3 -= 500;
                
            }
            
            
        }
        
        this.x = origX;
        this.y = origY;
        
        painFade = 255;
        
        this.falling = true;
        
        restart = false;
        
        this.vely = 0;
        this.velx = 0;
        
    }
    
    if (this.y < 200) {
        
        top = true;
        
    } else {
        
        top = false;
        
    }
    if (this.x < 200) {
        
        right = false;
        
    } else {
        
        right = true;
        
    }
    
    if (practice && (first || Second)) {
        
        if (playLevel1 || playLevel2) {
            
            this.x -= 40;
            this.y += 40;
            
        }
        
    }
    
    if (level1 < 1 && level2 < 1 && level3 < 1) {
        
        this.x = origX;
        this.y = origY;
        
        this.vely = 0;
        
    }
    
    if (this.x > (finalX - 20) && this.x < (finalX + 20) && this.y > (finalY - 20) && this.y < (finalY + 20) && !(first || Second)) {
        
        background(0, 0, 0);
        if (playLevel1) {
            
            level1 ++;
            
        } else if (playLevel2) {
            
            level2 ++;
            
        } else if (playLevel3) {
            
            level3 ++;
            
        }
        first = true;
        this.falling = true;
        
    }
    
    if (first) {
        
        if (level1 === 6) {
            
            this.x -= 60;
            
        }
        if (end) {
            
            this.x = 20;
            this.y = 300;
            origX = this.x;
            origY = this.y;
            
        }
        
    }
    
    if (Second) {
        
        this.x = origX;
        this.y = origY;
        Second = false;
        
    }
    
    if (gooTrue & frameCount%4 === 0) {
        
        if (this.velx > 1) {
            
            splash.push([this.x, this.y + this.h - 4, random(180, 360), 0]);
            
        }
        if (this.velx < -1) {
            
            splash.push([this.x, this.y + this.h - 4, random(270, 360), 0]);
            
        }
        
    }
    
    //moves player
    this.x += this.velx;
    //APPLY COLLISION WITH X POS
    this.applyCollision(this.velx, 0);
    
    this.falling = true;
    this.y += this.vely;
    //APPLY COLLISION WITH Y POS
    this.applyCollision(0, this.vely);
    
    if (this.vely < 10) {
        
        this.vely += this.gravity;
        
    }
    
    //makes player stay on screen
    this.x = constrain(this.x, 0, 400 - this.w);
};
//COLLISION APPLIED HERE (WATCH CAREFULLY)
Player.prototype.applyCollision = function(velx, vely) {
    for (var i = 0; i < blocks.length; i++) {
        //applies the collision detection function by saying "if (collide(this, blocks[i]))"
        if (collide(this, blocks[i])) {
            //if y velocity is greater than 0 (player is falling) and they hit the block, they stop and aren't falling
                if (vely > 0) {
                    this.vely = 0;
                    this.falling = false;
                    this.y = blocks[i].y - this.h;
                }
            //if y velocity is less than 0 (player is jumping up) and they hit the block, they hit and go back down
                if (vely < 0) {
                    this.vely = 0;
                    this.falling = true;
                    this.y = blocks[i].y + blocks[i].h;
                }
            //if x velocity is less than 0 (player is going left) and they hit the block, they stop
                if (velx < 0) {
                    this.velx = 0;
                    this.x = blocks[i].x + blocks[i].w;
                }
            //if x velocity is greater than 0 (player is going right) and they hit the block, they stop
                if (velx > 0) {
                    this.velx = 0;
                    this.x = blocks[i].x - this.w;
                }
                
        }
    }
    for (var i = 0; i < lavaX.length; i ++) {
        
        if (this.x > (lavaX[i] - 10) && this.x < (lavaX[i] + lavaWidth[i]) && this.y > (lavaY[i] - 20) && this.y < (lavaY[i] + lavaHeight[i])) {
            
            restart = true;
            
        }
        
    }
    gooTrue = false;
    for (var i = 0; i < gooX.length; i ++) {
        
        if ((this.x) >= (gooX[i] - this.w + 2) && (this.x) <= (gooX[i] + gooWidth[i] - 2) && this.y === (gooY[i] - 20)) {
            
            gooTrue = true;
            
        }
        
    }
};
Player.prototype.draw = function() {
    
    stroke(0, 0, 0);
    
    fill(this.color);
    
    pushMatrix();
    
    translate(this.x, this.y);
    
    translate(-4, 5 - abs(5*sin(frameCount*5)));
    scale(0.2);
    
    pushMatrix();
    
    fill(255);
    stroke(255);
    beginShape();
    vertex(41, 1);
    vertex(26, 18);
    vertex(35, 36);
    vertex(56, 38);
    vertex(70, 21);
    vertex(58, 5);
    endShape(CLOSE);
    
    fill(0);
    stroke(0);
    
    ellipse(43 + this.velx, 17, 7, 7);
    ellipse(53 + this.velx, 17, 7, 7);
    
    popMatrix();
    
    translate(sin(frameCount*5), 2*abs(5*sin(frameCount*5)) - 5);
    
    fill(255);
    stroke(255);
    beginShape();
    vertex(40, 50);
    vertex(24, 52);
    vertex(28, 88);
    vertex(64, 86);
    vertex(67, 49);
    vertex(48, 46);
    endShape(CLOSE);
    
    popMatrix();
    
    noStroke();
    
};
Player.prototype.display = function() {
    //draw and update player to display it
    this.draw();
    this.update();
};

//Block Object
var Block = function(x, y, w, h, color) {
    //these must stay the same
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
};
Block.prototype.display = function() {
    //draw the blocks
    noStroke();
    
    fill(this.color);
    
    if (level2 === 6) {
        
        fill(173, 133, 73);
    
    }
    
    pushMatrix();
    
    translate(this.x, this.y);
    
    beginShape();
    
    vertex(0, 0);
    vertex(this.w, 0);
    vertex(this.w, this.h - 5);
    
    vertex(this.w - 4, this.h - 2);
    
    if (this.w > 10) {
        
        vertex(this.w - 6, this.h - 1);
        vertex(this.w - 10, this.h);
        
        vertex(10, this.h);
        vertex(6, this.h - 1);
        
    }
    
    vertex(4, this.h - 2);
    vertex(0, this.h - 5);
    
    endShape();
    
    popMatrix();
    
    if (this.color === color(173, 133, 73)) {
        
        noStroke();
        
        fill(0, 112, 0);
        
        rect(this.x, this.y, this.w, 5);
        
        pushMatrix();
        
        translate(this.x, this.y);
        
        for (var i = 0; i < this.w; i += 20) {
            
            beginShape();
    
            vertex(0, 3);
            vertex(0, 5);
            vertex(1, 6);
            vertex(2, 8);
            vertex(3, 6);
            vertex(4, 5.5);
            vertex(5, 5);
            vertex(6, 5);
            vertex(7, 6);
            vertex(8, 5.2);
            vertex(9, 5);
            vertex(10, 5.3);
            
            if (!((i + 20) > this.w & this.w%20 !== 0)) {
            
                vertex(11, 6);
                vertex(12, 7);
                vertex(13, 6);
                vertex(14, 5.5);
                vertex(15, 5);
                vertex(16, 5);
                vertex(17, 6);
                vertex(18, 5);
                vertex(19, 5);
                vertex(20, 5);
            
            }
            
            endShape();
            
            translate(20, 0);
            
        }
        

        popMatrix();
        
    } else if (this.color === color(173, 133, 72)) {
        
        noStroke();
        
        fill(0, 0, 0);
        
        pushMatrix();
        
        translate(this.x, this.y);
        
        rect(0, 0, this.w, 4);
        
        for (var i = 0; i < this.w; i += 20) {
            
            beginShape();
            
            vertex(0, 4);
            vertex(0, 5);
            vertex(1, 4.6);
            vertex(2, 4.7);
            vertex(3, 4.8);
            vertex(4, 5.3);
            vertex(5, 5.7);
            vertex(6, 6);
            vertex(7, 5.5);
            vertex(8, 4.8);
            vertex(9, 4.9);
            vertex(10, 5);
            
            if (!((i + 20) > this.w & this.w%20 !== 0)) {
                
                vertex(10, 5);
                vertex(11, 4.5);
                vertex(12, 4);
                vertex(13, 4);
                vertex(14, 4.3);
                vertex(15, 4.8);
                vertex(16, 5);
                vertex(17, 5.5);
                vertex(18, 4.8);
                vertex(19, 4.4);
                vertex(20, 5);
                vertex(20, 4);
                
            } else {
                
                vertex(10, 4);
                
            }
            
            endShape(CLOSE);
            
            translate(20, 0);
            
        }
        
        popMatrix();
        
    }
    
};

//variable for a new player (currently in the middle)
var player = new Player(origX, origY, 10, 20, color(230, 212, 179, 200));

var lava = function(x, y, width, height) {
    
    lavaX.push(x);
    lavaY.push(y);
    lavaWidth.push(width);
    lavaHeight.push(height);
    
};

var lavaPop = function() {
    
    for (var i = lavaX.length; i > 0; i --) {
    
        lavaX.pop();
        lavaY.pop();
        lavaWidth.pop();
        lavaHeight.pop();
    
    }
    
};

var goo = function(x, y, width, height) {
    
    blocks.push(new Block(x, y, width, height, color(173, 133, 72)));
    
    gooX.push(x);
    gooY.push(y);
    gooWidth.push(width);
    gooHeight.push(height);
    
};

var gooPop = function() {
    
    for (var i = gooX.length; i > 0; i --) {
    
        gooX.pop();
        gooY.pop();
        gooWidth.pop();
        gooHeight.pop();
    
    }
    
};

//Draw all of the platforms here (use loops as well to make things efficient
var drawBlocks = function() {
    //change x, y, size, and color for each block if you want
    
    if (first) {
        
        Second = true;
        
    }
    
    if (playLevel1) {
    
        if (level1 === 0) {
            
            blocks.push(new Block(0, 340, 400, 20, color(173, 133, 73)));
            
        } else if (level1 === 1) {
        
                if (first) {
                    
                    finalX = 376;
                    finalY = 4;
                    
                    origX = 20;
                    origY = 300;
                    
                    first = false;
                    
                    for (var i = blocks.length; i > 0; i --) {
                    
                        blocks.pop();
                        
                    }
                    lavaPop();
                    gooPop();
                    
                }
        
            blocks.push(new Block(20, 340, 20, 20, color(173, 133, 73)));
            blocks.push(new Block(200, 300, 20, 20, color(173, 133, 73)));
            blocks.push(new Block(360, 280, 40, 80, color(173, 133, 73)));
            blocks.push(new Block(310, 250, 20, 20, color(173, 133, 73)));
            
            blocks.push(new Block(10, 100, 20, 20, color(173, 133, 73)));
                
            for (var i = 40; i < 400; i += 160) {
                blocks.push(new Block(i, 180, 20, 20, color(173, 133, 73)));
            }
            for (var i = 40; i < 400; i += 100) {
                blocks.push(new Block(i, 40, 20, 20, color(173, 133, 73)));
            }
            blocks.push(new Block(340, 40, 60, 20, color(173, 133, 73)));
        
        } else if (level1 === 2) {
            
            if (first) {
            
                finalX = 20;
                finalY = 0;
                
                origX = 380;
                origY = 0;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                    
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            } 
            
            blocks.push(new Block(340, 40, 60, 20, color(173, 133, 73)));
            
            for (var i = 0; i < 400; i += 60) {
                
                blocks.push(new Block(i, i, 20, 20, color(173, 133, 73)));
                
            }  
            
            blocks.push(new Block(200, 120, 160, 20, color(173, 133, 73)));
            
            blocks.push(new Block(200, -80, 20, 220, color(173, 133, 73)));
            
        } else if (level1 === 3) {
            
            if (first) {
                
                finalX = 380;
                finalY = 20;
                
                origX = 20;
                origY = 0;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                    
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
                
            blocks.push(new Block(340, 40, 60, 20, color(173, 133, 73)));
                
            blocks.push(new Block(0, 250, 80, 20, color(173, 133, 73)));
                
            blocks.push(new Block(60, 170, 20, 100, color(173, 133, 73)));
            
            for (var i = 0; i < 340; i += 60) {
                
                blocks.push(new Block(i, 380-i, 20, 20, color(173, 133, 73)));
                
            }
            blocks.push(new Block(360, 0, 20, 60, color(173, 133, 73)));
            
        } else if (level1 === 4) {
            
            if (first) {
                
                finalX = 0;
                finalY = 20;
                
                origX = 380;
                origY = 20;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                    
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
            
            for (var i = 0; i < 400; i += 70) {
                
                blocks.push(new Block(0, i, 20, 20, color(173, 133, 73)));
                
            }
            for (var i = 0; i < 400; i += 70) {
                
                blocks.push(new Block(240, i, 20, 20, color(173, 133, 73)));
                
            }
            
            blocks.push(new Block(300, 0, 20, 200, color(173, 133, 73)));
            
            blocks.push(new Block(100, 380, 100, 20, color(173, 133, 73)));
            
            blocks.push(new Block(180, 0, 20, 400, color(173, 133, 73)));
            
            blocks.push(new Block(100, -100, 20, 400, color(173, 133, 73)));
            
            blocks.push(new Block(380, 380, 20, 20, color(173, 133, 73)));
            
        } else if (level1 === 5) {
            
            if (first) {
                
                finalX = 80;
                finalY = 0;
                
                origX = 0;
                origY = 20;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                    
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
            blocks.push(new Block(60, 340, 40, 20, color(173, 133, 73)));
            
            for (var i = 20; i < 400; i += 160) {
                
                blocks.push(new Block(80, i, 20, 20, color(173, 133, 73)));
                
            }
            for (var i = 100; i < 400; i += 160) {
                
                blocks.push(new Block(380, i, 20, 20, color(173, 133, 73)));
                
            }
            for (var i = 60; i < 400; i += 80) {
                
                blocks.push(new Block(230, i, 20, 20, color(173, 133, 73)));
                
            }
            blocks.push(new Block(60, 0, 20, 360, color(173, 133, 73)));
            blocks.push(new Block(0, 380, 120, 20, color(173, 133, 73)));
            
        } else if (level1 === 6) {
            
            if (first) {
                
                finalX = 190;
                finalY = 190;
                
                origX = 20;
                origY = 0;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                    
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
                
            blocks.push(new Block(0, 380, 400, 20, color(173, 133, 73)));
            
            for (var i = 0; i < 400; i += 80) {
                
                blocks.push(new Block(380, i, 20, 20, color(173, 133, 73)));
                
            }
            for (var i = 40; i < 320; i += 80) {
                
                blocks.push(new Block(320, i, 40, 20, color(173, 133, 73)));
                
            }
            
            for (var i = 100; i < 260; i += 70) {
                
                blocks.push(new Block(300, i, 40, 20, color(173, 133, 73)));
                
            }
            
            blocks.push(new Block(340, 360, 20, 40, color(173, 133, 73)));
            
            
            blocks.push(new Block(60, 300, 280, 20, color(173, 133, 73)));
            
            blocks.push(new Block(100, 240, 160, 20, color(173, 133, 73)));
            
            blocks.push(new Block(320, 40, 20, 280, color(173, 133, 73)));
            
            blocks.push(new Block(100, 40, 240, 20, color(173, 133, 73)));
            
            blocks.push(new Block(100, 40, 20, 220, color(173, 133, 73)));
            
            blocks.push(new Block(240, 100, 20, 160, color(173, 133, 73)));
            
            blocks.push(new Block(60, 0, 20, 320, color(173, 133, 73)));
            
        } else if (level1 !== 0) {
            
            end = true;
            
        }
        
    }
    
    if (playLevel2) {
    
        if (level2 === 0) {
            
            blocks.push(new Block(0, 340, 400, 20, color(173, 133, 73)));
            
        } else if (level2 === 1) {
        
            if (first) {
                
                finalX = 380;
                finalY = 0;
                
                origX = 20;
                origY = 300;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
            
            for (var i = 20; i < 400; i += 60) {
                
                blocks.push(new Block(i, 400 - i, 20, 20, color(173, 133, 73)));
                lava(i - 20, 400 - i, 20, 20);
                
            }
        
        } else if (level2 === 2) {
        
            if (first) {
                
                finalX = 20;
                finalY = 0;
                
                origX = 380;
                origY = 0;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
            
            for (var i = 40; i < 340; i += 60) {
                
                blocks.push(new Block(i/1.75 + 170, 400 - i, 20, 20, color(173, 133, 73)));
                lava(i/1.75 + 150, 400 - i, 20, 20);
                
            }
            
            for (var i = 50; i < 380; i += 70) {
                
                blocks.push(new Block(0, i, 20, 20, color(173, 133, 73)));
                lava(55, i - 10, 20, 20);
                
            }
            blocks.push(new Block(100, 380, 20, 20, color(173, 133, 73)));
            blocks.push(new Block(360, 60, 40, 20, color(173, 133, 73)));
            lava(160, 0, 1, 250);
        
        } else if (level2 === 3) {
        
            if (first) {
                
                finalX = 380;
                finalY = 0;
                
                origX = 10;
                origY = 0;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
            
            for (var i = 0; i < 280; i += 70) {
                
                blocks.push(new Block(i, 100, 50, 20, color(173, 133, 73)));
                lava(i + 50, 90, 20, 40);
                lava(i + 50, 0, 20, 10);
                
            }
            blocks.push(new Block(40, 0, 10, 10, color(173, 133, 73)));
            blocks.push(new Block(90, 0, 20, 10, color(173, 133, 73)));
            blocks.push(new Block(160, 0, 20, 10, color(173, 133, 73)));
            blocks.push(new Block(230, 0, 20, 10, color(173, 133, 73)));
            blocks.push(new Block(0, 50, 10, 10, color(173, 133, 73)));
            
            for (var i = 280; i > 0; i -= 70) {
                
                blocks.push(new Block(i, 230, 50, 20, color(173, 133, 73)));
                lava(i - 20, 220, 20, 40);
                
            }
            for (var i = 0; i < 280; i += 70) {
                
                blocks.push(new Block(i, 360, 50, 20, color(173, 133, 73)));
                lava(i + 50, 350, 20, 30);
                
            }
            
            for (var i = 50; i < 350; i += 65) {
                
                blocks.push(new Block(380, i, 20, 20, color(173, 133, 73)));
                lava(370, i + 10, 10, 10);
                
            }
            lava(360, 0, 10, 10);
            
            lava(330, 0, 5, 250);
            blocks.push(new Block(335, 0, 5, 250, color(173, 133, 73)));
            blocks.push(new Block(340, 370, 20, 20, color(173, 133, 73)));
            lava(360, 360, 20, 20);
        
        } else if (level2 === 4) {
        
            if (first) {
                
                finalX = 20;
                finalY = 280;
                
                origX = 390;
                origY = 0;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                
                }
                lavaPop();
                gooPop();
                    
            }
            
            for (var i = 110; i < 360; i += 80) {
                
                blocks.push(new Block(i + 40, 100, 40, 20, color(173, 133, 73)));
                lava(i, 100, 40, 20);
                
            }
            blocks.pop();
            blocks.push(new Block(390, 100, 10, 20, color(173, 133, 73)));
            
            lava(40, 100, 30, 20);
            blocks.push(new Block(70, 100, 40, 20, color(173, 133, 73)));
            for (var i = 0; i < 320; i += 80) {
                
                blocks.push(new Block(i + 40, 200, 40, 20, color(173, 133, 73)));
                lava(i, 200, 40, 20);
                
            }
            lava(320, 200, 30, 20);
            for (var i = 40; i < 440; i += 80) {
                
                blocks.push(new Block(i + 40, 300, 40, 20, color(173, 133, 73)));
                lava(i, 300, 40, 20);
                
            }
            blocks.push(new Block(30, 100, 10, 20, color(173, 133, 73)));
            blocks.push(new Block(350, 200, 10, 20, color(173, 133, 73)));
        
        } else if (level2 === 5) {
        
            if (first) {
                
                finalX = 20;
                finalY = 20;
                
                origX = 10;
                origY = 280;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                
                }
                lavaPop();
                gooPop();
                    
            }
            
            blocks.push(new Block(0, 350, 400, 20, color(173, 133, 73)));
            blocks.push(new Block(30, 295, 10, 40, color(173, 133, 73)));
            
            for (var i = 40; i < 380; i += 60) {
                
                lava(i, 290, 20, 60);
                
            }
            
            for (var i = 70; i < 230; i += 80) {
                
                blocks.push(new Block(340, i, 20, 20, color(173, 133, 73)));
                
            }
            
            blocks.push(new Block(340, 230, 20, 10, color(173, 133, 73)));
            
            blocks.push(new Block(390, 310, 20, 20, color(173, 133, 73)));
            
            lava(320, 90, 20, 140);
            
            for (var i = 0; i < 300; i += 100) {
                
                blocks.push(new Block(i, 200, 20, 20, color(173, 133, 73)));
                lava(i - 50, 130, 20, 20);
                
            }
            
            blocks.push(new Block(0, 120, 20, 20, color(173, 133, 73)));
            
        } else if (level2 === 6) {
        
            if (first) {
                
                finalX = 20;
                finalY = 20;
                
                origX = 10;
                origY = 280;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                
                }
                lavaPop();
                gooPop();
                    
            }
            
            blocks.push(new Block(0, 350, 400, 20, color(173, 133, 73)));
            blocks.push(new Block(30, 295, 10, 40, color(173, 133, 73)));
            
            for (var i = 40; i < 380; i += 60) {
                
                lava(i, 290, 20, 60);
                
            }
            
            for (var i = 70; i < 270; i += 80) {
                
                blocks.push(new Block(340, i, 20, 20, color(173, 133, 73)));
                
            }
            
            blocks.push(new Block(390, 310, 20, 20, color(173, 133, 73)));
            
            lava(320, 90, 20, 140);
            
            for (var i = 0; i < 300; i += 100) {
                
                blocks.push(new Block(i, 200, 20, 20, color(173, 133, 73)));
                lava(i - 50, 130, 20, 20);
                
            }
            
            blocks.push(new Block(0, 120, 20, 20, color(173, 133, 73)));
            
        } else if (level2 !== 0) {
            
            lavaPop();
            blocks.push(new Block(0, 340, 400, 20, color(173, 133, 73)));
            end = true;
            
        }
        
    }
    
    if (playLevel3) {
    
        if (level3 === 0) {
            
            blocks.push(new Block(0, 340, 400, 20, color(173, 133, 73)));
            
        } else if (level3 === 1) {
        
            if (first) {
                
                finalX = 356;
                finalY = 4;
                
                origX = 0;
                origY = 300;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
            
            blocks.push(new Block(0, 380, 40, 20, color(173, 133, 73)));
            goo(20, 380, 360, 20);
            
            blocks.push(new Block(50, 360, 20, 40, color(173, 133, 73)));
            
            lava(380, 380, 20, 20);
            
            for (var i = 80; i < 400; i += 80) {
                
                blocks.push(new Block(i, 400 - i, 40, 20, color(173, 133, 73)));
                goo(i - 20, 400 - i, 40, 20);
                
            }
            
        } else if (level3 === 2) {
            
            if (first) {
                
                finalX = 376;
                finalY = 4;
                
                origX = 16;
                origY = 300;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
        
            blocks.push(new Block(0, 340, 65, 10, color(173, 133, 73)));
            
            blocks.push(new Block(160, 300, 30, 10, color(173, 133, 73)));
            goo(160, 300, 10, 10);
            
            blocks.push(new Block(300, 250, 30, 10, color(173, 133, 73)));
            goo(300, 250, 10, 10);
            
            blocks.push(new Block(10, 100, 20, 10, color(173, 133, 73)));
            
            blocks.push(new Block(40, 180, 20, 10, color(173, 133, 73)));
            blocks.push(new Block(350, 180, 30, 10, color(173, 133, 73)));
            
            goo(350, 180, 10, 10);
            blocks.push(new Block(180, 140, 20, 10, color(173, 133, 73)));
            
            for (var i = 40; i < 200; i += 100) {
                blocks.push(new Block(i - 10, 40, 30, 10, color(173, 133, 73)));
                goo(i - 10, 40, 10, 10);
            }
            lava(240, 40, 10, 10);
            blocks.push(new Block(340, 40, 60, 10, color(173, 133, 73)));
            goo(35, 340, 400, 10);
            
            for (var i = 70; i < 400;  i += 70) {
                
                lava(i, 310, 30, 10);
                
            }
            
        } else if (level3 === 3) {
            
            if (first) {
                
                finalX = 200;
                finalY = 300;
                
                origX = 350;
                origY = 300;
                
                first = false;
                
                for (var i = blocks.length; i > 0; i --) {
                
                    blocks.pop();
                    
                }
                lavaPop();
                gooPop();
                
            }
            
            goo(0, 380, 400, 20);
            
            blocks.push(new Block(340, 40, 60, 10, color(173, 133, 73)));
            lava(340, 30, 10, 10);
            blocks.push(new Block(375, 30, 10, 20, color(173, 133, 73)));
            
            lava(210, 40, 130, 10);
            blocks.push(new Block(200, 40, 10, 10, color(173, 133, 73)));
            
            lava(70, 40, 130, 10);
            blocks.push(new Block(40, 40, 30, 10, color(173, 133, 73)));
            
            goo(40, 40, 10, 10);
            
            lava(10, 0, 20, 40);
            
            goo(0, 120, 360, 20);
            
            blocks.push(new Block(20, 100, 40, 40, color(173, 133, 73)));
            blocks.push(new Block(60, 100, 20, 40, color(173, 133, 73)));
            
            goo(0, 100, 40, 40);
            
            blocks.push(new Block(100, 100, 40, 40, color(173, 133, 73)));
            
            blocks.push(new Block(140, 50, 20, 10, color(173, 133, 73)));
            
            blocks.push(new Block(160, 100, 40, 40, color(173, 133, 73)));
            blocks.push(new Block(220, 100, 40, 40, color(173, 133, 73)));
            blocks.push(new Block(280, 100, 40, 40, color(173, 133, 73)));
            
            blocks.push(new Block(270, 50, 10, 10, color(173, 133, 73)));
            
            lava(380, 50, 20, 330);
            
            blocks.push(new Block(200, 370, 180, 20, color(173, 133, 73)));
            blocks.push(new Block(300, 300, 40, 80, color(173, 133, 73)));
            blocks.push(new Block(280, 240, 40, 140, color(173, 133, 73)));
            blocks.push(new Block(280, 180, 20, 200, color(173, 133, 73)));
            
        } else if (level3 !== 0) {
            
            end = true;
            
        }
        
    }
    
};

var logo = function(x, y) {
    
    background(0, 0, 0);
    
    pushMatrix();
    
    timer ++;
    
    translate(x + 35, y - 6);
    
    pushMatrix();
    
    translate(-74, 24);
    
    var shapes = [181, 155, 181, 155, 180, 155, 180, 147, 183, 127, 191, 102, 209, 78, 228, 67, 250, 60, 276, 58, 296, 61, 315, 67, 332, 80, 340, 89, 345, 99, 349, 107, 353, 121, 356, 137, 356, 152, 358, 161, 370, 187, 358, 190, 357, 199, 357, 207, 355, 234, 351, 242, 344, 250, 331, 256, 314, 262, 301, 266, 289, 268, 289, 290, 289, 301, 289, 316, 289, 318, 235, 318, 235, 305, 235, 292, 235, 283, 235, 270, 235, 264, 233, 258, 224, 252, 216, 245, 205, 233, 196, 220, 188, 202, 183, 184, 181, 168, 180, 155, 181, 151];
    
    beginShape();
    
    noStroke();
    
    fill(0, 255, 0, (timer - 60)*3);
    for (var j = 0; j < floor(shapes.length/2)*2; j += 2) {
        
        vertex(shapes[j], shapes[j+1]);
        
    }
    
    endShape(CLOSE);
    
    popMatrix();
    
    translate(-15, 28);
    
    noStroke();
    
    fill(0, 0, 0);
    rect(40, 100, 210, 70, 10);
    rect(40, 160, 190, 70, 10);
    
    textFont(createFont("impact"), 60);
    
    fill(255, 255, 255, timer*10);
    text("G", 50, 160);
    fill(255, 255, 255, timer*10 - 50);
    text("A", 84, 160);
    fill(255, 255, 255, timer*10 - 100);
    text("M", 115, 160);
    fill(255, 255, 255, timer*10 - 150);
    text("I", 158, 160);
    fill(255, 255, 255, timer*10 - 200);
    text("N", 176, 160);
    fill(255, 255, 255, timer*10 - 250);
    text("G", 209, 160);
    
    fill(255, 255, 255, timer*10 - 300);
    text("G", 50, 220);
    fill(255, 255, 255, timer*10 - 350);
    text("E", 83, 220);
    fill(255, 255, 255, timer*10 - 400);
    text("N", 108, 220);
    fill(255, 255, 255, timer*10 - 450);
    text("I", 140, 220);
    fill(255, 255, 255, timer*10 - 500);
    text("U", 157, 220);
    fill(255, 255, 255, timer*10 - 550);
    text("S", 190, 220);
    
    popMatrix();
    
    fill(0, 0, 0, (timer - 160)*8);
    rect(0, 0, 400, 400);
    
};

}

var draw = function() {
    
    if (!start) {
        
        //size(55, 30);
        
        background(0, 0, 0);
        
        textAlign(LEFT, LEFT);
        textFont(createFont("monospace"));
        text("START", 10, 20);
        
        //resets all variables
        {
        
        score1 = 15000;
        score2 = 15000;
        score3 = 15000;
        
        finalScore1 = 0;
        finalScore2 = 0;
        finalScore3 = 0;
        
        highScore1 = 0;
        highScore2 = 0;
        highScore3 = 0;
        
        restart = false;
        quickEnd = false;
        
        level1 = 0;
        level2 = 0;
        level3 = 0;
        
        Level1 = true;
        Level2 = false;
        Level3 = false;
        
        playLevel1 = false;
        playLevel2 = false;
        playLevel3 = false;
        
        end = false;
        beginning = true;
        
        origX = 20;
        origY = 300;
        
        finalX = 376;
        finalY = 4;
        
        first = true;
        Second = false;
        
        fade = 255;
        painFade = 255;
        
        deaths = 0;
        
        bombX = 0;
        bombY = 0;
        bombSize = 260;
        
        lavaX = [];
        lavaY = [];
        lavaWidth = [];
        lavaHeight = [];
        
        gooX = [];
        gooY = [];
        gooWidth = [];
        gooHeight = [];
        
        gooTrue = false;
        
        top = false;
        right = false;
        up = true;
        
        }
        
    } else if (logoPlay) {
        
        logo(0, 0);
        
        if (timer > 190) {
            
            logoPlay = false;
            
        }
        
    } else {
        
        pushMatrix();
        
        textAlign(CENTER);
        
        if (frameCount === 400) {
            
            fade = 255;
            first = true;
            
        }
        
        //draws the background
        fill(0, 63, 91);
        rect(0, 0, 400, 400);
        
        strokeWeight(5);
        stroke(0, 0, 0, 100);
        
        pushMatrix();
        
        scale(1.5);
        translate(constrain(-player.x, -288, -155) + 155, -player.y + 150);
        
        if (first) {
            drawBlocks(); //apply the block drawings
        }
        
        noStroke();
        
        for (var i = 0; i < lavaX.length; i ++) {
            
            fill(255, 0, 0);
            
            if (level2 === 6) {
                
                fill(255, 0, 0, -fade/3 - 2000);
                
            }
            
            pushMatrix();
            
            translate(lavaX[i], lavaY[i]);
            
            fill(189, 100, 32);
            rect(0, 0, lavaWidth[i], lavaHeight[i]);
            
            pushMatrix();
            
            for (var j = 0; j < floor(lavaWidth[i]/10)*10; j += 10) {
            
                beginShape();
                
                vertex(0, 1);
                vertex(0, -1);
                vertex(1, -1.5);
                vertex(2, -1.8);
                vertex(3, -1.4);
                vertex(4, -0.5);
                vertex(5, -0.2);
                vertex(6, -0.6);
                vertex(7, -1);
                vertex(8, -0.8);
                vertex(9, -0.7);
                vertex(10, -1);
                vertex(10, 1);
                
                endShape();
                
                translate(10, 0);
                
            }
            
            popMatrix();
            
            pushMatrix();
            
            for (var j = 0; j < floor(lavaWidth[i]/10)*10; j += 10) {
            
                beginShape();
                
                vertex(0, lavaHeight[i] - 1);
                vertex(0, lavaHeight[i]+1);
                vertex(1, lavaHeight[i]+1.5);
                vertex(2, lavaHeight[i]+1.8);
                vertex(3, lavaHeight[i]+1.4);
                vertex(4, lavaHeight[i]+0.5);
                vertex(5, lavaHeight[i]+0.2);
                vertex(6, lavaHeight[i]+0.6);
                vertex(7, lavaHeight[i]+1);
                vertex(8, lavaHeight[i]+0.8);
                vertex(9, lavaHeight[i]+0.7);
                vertex(10, lavaHeight[i]+1);
                vertex(10, lavaHeight[i] - 1);
                
                endShape();
                
                translate(10, 0);
                
            }
            
            popMatrix();
            
            pushMatrix();
            
            for (var j = 0; j < floor(lavaHeight[i]/10)*10; j += 10) {
            
                beginShape();
                
                vertex(1, 0);
                vertex(-1, 0);
                vertex(-1.5, 1);
                vertex(-1.8, 2);
                vertex(-1.4, 3);
                vertex(-0.5, 4);
                vertex(-0.2, 5);
                vertex(-0.6, 6);
                vertex(-1, 7);
                vertex(-0.8, 8);
                vertex(-0.7, 9);
                vertex(-1, 10);
                vertex(1, 10);
                
                endShape();
                
                translate(0, 10);
                
            }
            
            popMatrix();
            
            pushMatrix();
            
            for (var j = 0; j < floor(lavaHeight[i]/10)*10; j += 10) {
            
                beginShape();
                
                vertex(lavaWidth[i] - 1, 0);
                vertex(lavaWidth[i]+1, 0);
                vertex(lavaWidth[i]+1.5, 1);
                vertex(lavaWidth[i]+1.8, 2);
                vertex(lavaWidth[i]+1.4, 3);
                vertex(lavaWidth[i]+0.5, 4);
                vertex(lavaWidth[i]+0.2, 5);
                vertex(lavaWidth[i]+0.6, 6);
                vertex(lavaWidth[i]+1, 7);
                vertex(lavaWidth[i]+0.8, 8);
                vertex(lavaWidth[i]+0.7, 9);
                vertex(lavaWidth[i]+1, 10);
                vertex(lavaWidth[i] - 1, 10);
                
                endShape();
                
                translate(0, 10);
                
            }
            
            popMatrix();
            
            popMatrix();
            
        }
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].display(); //display blocks
        }
        for (var i in splash) {
            
            fill(0, 0, 0, 255 - 25*splash[i][3]);
            rect(splash[i][0] + splash[i][3]*cos(splash[i][2]), splash[i][1] + splash[i][3]*sin(splash[i][2]), 4, 4);
            
            if (splash[i][3] < 10) {
                
                splash[i][3] ++;
                
            } else {
                
                splash.splice(i, 1);
                i --;
                
            }
            
            
        }
        strokeWeight(0.2);
        stroke(255, 255, 255, 100);
        if (!beginning && !end) {
            

            for (var i = 0; i < 25; i += random(2, 4)) {
                
                fill(0, 150 + i*5, 0, 50);
                ellipse(finalX + 10, finalY + 10, pow(i, 1.1) + random(4, 8), pow(i, 1.1) + random(4, 8));
                
            }
            
        }
        
        noStroke();
        
        player.display(); //display player
        
        if (bombSize < 255) {
            
            fill(0, 105, 81, 50-bombSize);
            noStroke();
            for (var i = 0; i < 360; i += 59) {
                fill(255, 209, 71, 255-bombSize);
                if ((bombSize%50) < 10) {
                    
                    fill(0, 173, 133, 73-bombSize);
                    
                }
                ellipse(bombX + bombSize*cos(i + frameCount*10)/6, bombY + bombSize*sin(i + frameCount*10)/6, bombSize/2, bombSize/2);
            }
            bombSize += 8;
        }
        
        popMatrix();
        
        noStroke();
        fill(255, 255, 255, 85);
        rect(0, 0, 400, 32);
        rect(200, 0, 200, 32);
        
        if (practice) {
            
            rect(130, 360, 50, 30);
            rect(220, 360, 50, 30);
            
            fill(0);
            textSize(14);
            text("Back", 155, 380);
            text("Next", 245, 380);
            
        }
        
        fill(255, 255, 255, 85);
        ellipse(200, 0, 150, 150);
        textSize(28);
        fill(0, 0, 0);
        if (playLevel1) {
            
            text("Level "+level1, 200, 41);
            
        }
        if (playLevel2) {
            
            text("Level "+level2, 200, 41);
            
        }
        if (playLevel3) {
            
            text("Level "+level3, 200, 41);
            
        }
        
        if (first) {
            
            fade = 255;
            
        }
        
        fill(180, 0, 0, painFade);
        rect(0, 0, 400, 400);
        
        fill(0, 0, 0, fade);
        rect(0, 0, 400, 400);
        
        //names
        {
        
        fill(0, 0, 0, fade/5 + 250);
        if (level1 === 1) {
            
            text("Move with arrow keys or WASD", 200, 150);
        
        } else if (level1 === 2) {
            
            text("Up the Staircase", 200, 150);
        
        } else if (level1 === 3) {
            
            text("Not AGAIN!!!", 200, 150);
        
        } else if (level1 === 4) {
            
            text("The Ladder", 200, 150);
        
        } else if (level1 === 5) {
            
            text("Back and Forth", 200, 150);
        
        } else if (level1 === 6) {
            
            text("The Spiral", 200, 150);
        
        }
        
        if (level2 === 1) {
            
            text("Stay away from lava!!!", 200, 150);
        
        } else if (level2 === 1) {
            
            text("Watch your step", 200, 150);
        
        } else if (level2 === 3) {
            
            text("Think outside the box", 200, 150);
        
        } else if (level2 === 4) {
            
            text("One By One", 200, 150);
        
        } else if (level2 === 5) {
            
            text("Careful!!!", 200, 150);
        
        } else if (level2 === 6) {
            
            text("Where'd it go!!!", 200, 150);
        
        }
        
        if (level3 === 1) {
            
            text("The black goo is a sticky trap!", 200, 150);
        
        } else if (level3 === 2) {
            
            text("Things just got... tiny", 200, 150);
        
        } else if (level3 === 2) {
            
            text("The Final Stretch", 200, 150);
        
        }
        
        }
        
        fade -= 12;
        painFade -= 20;
        
        fill(0, 0, 0, 100);
        textFont(createFont("impact"), 15);
        text("Deaths: "+deaths, 64, 22);
        
        if (playLevel1) {
            
            text("Score: "+score1, 336, 22);
        
        } else if (playLevel2) {
            
            text("Score: "+score2, 336, 22);
        
        } else {
            
            text("Score: "+score3, 336, 22);
        
        }
        
        noStroke();
        
        if (!end && !beginning && fade < 150) {
            
            score1 --;
            score2 --;
            score3 --;
            
        }
        
        //R
        if (firstClick[82]) {
            
            bombX = player.x;
            bombY = player.y;
            bombSize = 0;
        
            deaths++;
            
            if (playLevel1) {
                
                score1 -= 500;
                
            } else if (playLevel2) {
                
                score2 -= 500;
                
            } else {
                
                score3 -= 500;
                
            }
            
            player.x = origX;
            player.y = origY;
            
            painFade = 255;
            
            player.falling = true;
            
            player.vely = 0;
            player.velx = 0;
            
        } else if (keys[69]) {//E 
            
            end = false;
            
            quickEnd = true;
            
        } else if (keys[81]) {//Q
            
            first = true;
            
            deaths = 0;
            
            origX = 20;
            origY = 300;
            
            end = false;
            
            if (playLevel1) {
                
                level1 = 1;
                score1 = 15000;
                
            } else if (playLevel2) {
            
                level2 = 1;
                score2 = 15000;
                
            } else if (playLevel3) {
            
                level3 = 1;
                score3 = 15000;
            
            }
            
        }
        
        if (quickEnd) {
            
            quickEnd = false;
            
            level1 = 0;
            level2 = 0;
            level3 = 0;
            
            score1 = 0;
            score2 = 0;
            score3 = 0;
            
            deaths = 0;
            
            this.x = 20;
            this.y = 300;
            
            origX = 20;
            origY = 300;
            
            beginning = true;
            level1 = 0;
            level2 = 0;
            level3 = 0;
            first = true;
            deaths = 0;
            playLevel1 = false;
            playLevel2 = false;
            playLevel3 = false;
        
        }
        
        if (beginning) {
            
            noStroke();

            fill(92, 141, 148, 15);

            for (var i = 0; i < 400 * sqrt(2); i += random(10, 15)) {

                ellipse(200, 200, i + random(-5, 5), i + random(-5, 5));

            }

            rect(0, 0, 400, 400);

            fill(255, 255, 255);

            for (var i = 0; i < 360; i += 13) {

                pushMatrix();

                translate(200, 200);

                rotate(i + frameCount / 50);

                triangle(500, -40, 1050, -40, 50 * abs(sin(frameCount / 100)), 0);

                popMatrix();

            }

            fill(255);
            rect(45, 95, 310, 70);

            fill(67, 100, 100);
            rect(50, 100, 300, 60);

            fill(255, 255, 255);
            textAlign(CENTER);

            textFont(createFont("impact"), 50);

            text("Dimensionist", 200, 150);
            
            textFont(createFont("courier"), 20);
            
            fill(38, 0, 255);
            rect(30, 212, 100, 60, 10);
            fill(255, 0, 0, 100);
            if (Level2 || practice) {
                
                fill(255, 0, 0);
                
            }
            rect(150, 212, 100, 60, 10);
            fill(0, 0, 0, 100);
            if (Level3 || practice) {
                
                fill(0, 0, 0, 100);
                
            }
            rect(270, 212, 100, 60, 10);
            
            fill(255, 255, 255);
            text("World 1", 80, 247);
            
            if (Level2 || practice) {
                
                fill(255, 255, 255);
                text("World 2", 200, 247);
                
            } else {
                
                fill(128, 100, 128);
                rect(150, 212, 100, 60, 10);
                fill(0, 0, 0);
                text("Locked", 200, 247);
                
            }
            if (Level3 || practice) {
                
                fill(255, 255, 255);
                text("World 3", 320, 247);
                
            } else {
                
                fill(92, 81, 92);
                rect(270, 212, 100, 60, 10);
                fill(0, 0, 0);
                text("Locked", 320, 247);
                
            }
            
            if (highScore1 < finalScore1 && playLevel1) {
                
                highScore1 = finalScore1;
                
            } else if (highScore2 < finalScore2 && playLevel2) {
                
                highScore2 = finalScore2;
                
            } else if (highScore3 < finalScore3 && playLevel3) {
                
                highScore3 = finalScore3;
                
            } else {
                
                score1 = 15000;
                score2 = 15000;
                score3 = 15000;
                
            }
            
            fill(255, 255, 255);
            textSize(15);
            text("Highscore: \n"+highScore1, 88, 300);
            text("Highscore: \n"+highScore2, 200, 300);
            text("Highscore: \n"+highScore3, 312, 300);
            
            fill(0, 0, 0);
            rect(150, 330, 100, 50, 10);
            fill(255, 255, 255);
            
            textFont(createFont("verdana"));
            if (practice) {
                
                text("Practice\nMode", 200, 350);
                
            } else {
                
                text("Regular\nMode", 200, 350);
                
            }
            
        }
        
        if (end) {
            
            fill(255, 255, 255);
            textAlign(CENTER);
            textFont(createFont("impact"), 20);
            
            if (playLevel1) {
            
                text("Congratulations on finishing World 1!\n\nYour score was:  "+(score1+deaths*500)+" - "+deaths+" x 500 = ", 200, 49);
                
                if (score1 > 0) {
                    
                    text("Travel through World 2 to try and get him again!", 200, 350);
                    
                }
                textSize(14);
                text("Q: Replay   E/Click: Home", 200, 367);
                
                textSize(50);
                text(score1, 200, 167);
                
            } else if (playLevel2) {
            
                text("Congratulations on finishing World 2!\n\nYour score was:  "+(score2+deaths*500)+" - "+deaths+" x 500 = ", 200, 49);
                
                if (score2 > 0) {
                    
                    text("Travel through World 3 to try and get him again!", 200, 350);
                    
                }
                textSize(14);
                text("Q: Replay   E/Click: Home", 200, 367);
                
                textSize(50);
                text(score2, 200, 167);
                
            } else if (playLevel3) {
            
                text("Congratulations on finishing World 3\n\nYour score was:  "+(score3+deaths*500)+" - "+deaths+" x 500 = ", 200, 49);
                
                text("Now try and beat him as fast as possible!", 200, 350);
                
                textSize(14);
                text("Q: Replay   E/Click: Home", 200, 367);
                
                textSize(50);
                text(score3, 200, 167);
                
            }
            
            if (playLevel1) {
            
                finalScore1 = score1;
                
            } else if (playLevel2) {
            
                finalScore2 = score2;
                
            } else if (playLevel3) {
            
                finalScore3 = score3;
                
            }
            
            textSize(20);
            if ((playLevel1 & score1 > 7500) | (playLevel2 & score2 > 7500) | (playLevel3 & score3 > 7500)) {
                
                text("You were able to make it to Dr. Detriment\nin time! You blasted him away to another\n dimension, never to be seen again...\n\nMake a spinoff to be put in the high scores!!!", 200, 206);
                
                if (!practice) {
                
                    if (playLevel1) {
                    
                        Level2 = true;
                    
                    } else {
                        
                        Level3 = true;
                        
                    }
                    
                }
                
            } else if ((playLevel1 & score1 > 0 && score1 !== 15000) | (playLevel2 & score2 > 0 && score2 !== 15000) | (playLevel3 & score3 > 0 && score3 !== 15000)) {
                
                text("You made it to Dr. Detriment just\nin time! You blasted him away to another\ndimension, never to be seen again...", 200, 206);
                
                if (!practice) {
                
                    if (playLevel1) {
                    
                        Level2 = true;
                    
                    } else {
                        
                        Level3 = true;
                        
                    }
                    
                }
                
            } else {
                
                text("Dr. Detriment got the best of you! Sadly,\nhe was able to take over the galaxy,\nand, mad with power, he took your ability\nfor himself and took you captive.\nYou never saw light again.", 200, 206);
                
            }
            
            if (highScore1 < finalScore1 && playLevel1) {
                
                highScore1 = finalScore1;
                
            } else if (highScore2 < finalScore2 && playLevel2) {
                
                highScore2 = finalScore2;
                
            } else if (highScore3 < finalScore3 && playLevel3) {
                
                highScore3 = finalScore3;
                
            }
            
        }
        
        if (practice) {
    
            score1 = 0;
            score2 = 0;
            score3 = 0;
            
        }
        
        popMatrix();
        
        firstClick[82] = false; //resets the r button (nothin else needed!)
        
    }
    
};