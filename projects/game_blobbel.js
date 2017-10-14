// WARNING, IF RUN INSANE LAG AND MIGHT NOT WORK!

//As much as I (and any other game developer) would like 60 fps, it's just not happening...
frameRate(10);

//beginning variables

{

//x, y, xvel, yvel, left open, right open, down open, up open, width, height
var player = [900, 420, 0.01, 0, true, true, true, true, 30, 30];

//which powerups does he have
var powerups = [false, false, false];

//is he in the water
var inWater = false;

//is jumping?
var jump = false;

//a currently empty array of blocks which will later hold a list of all the walls
var blocks = [];

//variables used to determine where the block is relative to a group of blocks
var top;
var left;
var right;
var bottom;

var page = "game"; //home, world select, level select, game, end game

//which levels you have unlocked
var unlock = [[true, false, false, false]];

//did u finish the level?
var win = false;

//type of level (outside or inside)
var levelType = 0;

//on the world select page, which level you are on
var worldChoose = 0;

//a currently empty array for the items inn the background
var bkgrdBlocks = [];

//an array of the different types of enemies
var enemy = [];

//an array for all the coins
var coins = [];

//current world
var world = 0;

//current level
var level = 0;

//for underground parts of a level or things like
var stage = 0;

//used to set up at the beginning of a level
var first = true;

//where you translate it
var translatePos = 0;

//the score you currently have (high score purposes)
var score = 0;

var highscore = [0];

//how many coins you have
var coin = 0;

//how many lives remaining
var lives = 3;

//variable for when you click keys
var keys = [];

}

keyPressed = function() {
    
    keys[keyCode] = true; //adds into the keys array as true
    
}; 

keyReleased = function() {
    
    keys[keyCode] = false; //gets rid of value from keys array by setting it as false
    
};

/**

                                    Outside:
 * AIR              nothingness....
 * WATER        1   blue, lose a life, but reset to the last time you were on land and stable
 * TREE TRUNK   2   brown, just like a normal block, different background
 * PLATFORM     3   top part is green (grass), the bottom is brown dirt
 * DIRT MOUND   4   movable block, used to reach higher areas
 * GRASS        5   normal ground block
                                    Inside: 
 * LAVA         1   red, lose a life, but reset to the last time you were on land and stable
 * CRATE (opt.) 4   movable block, used to reach higher areas
 * PLATFORM     3   kind of a silvery platform, diagonals lined
 * GROUND       5 normal, but top block is special, sides are also special IF
                    it is not on the very edge of a level, this is so that it can
                    be used as the equivalent of a tree trunk
                                    General:
 * COIN         6  collectable!
 * portal       [stage to go to, x, yn]

*/

/**

[0][0] - blue water, the two sprites for the water top
    [0][0][0] - big wave
    [0][0][1] - small wave
[0][1] - red lava, the two sprites for the lava top
    [0][1][0] - big wave
    [0][1][1] - small wave

[1][0] - tree trunk
    [1][0][0] - side sprite
    [1][0][1] - side sprite top
    [1][0][1] - middle sprite top
[1][1] - none EMPTY

[2][0] - platform in air (dirt with some grass)
    [2][0][0] - top
    [2][0][1] - side
[2][1] - platform

[3][0] - dirt mound
[3][1] - crate

[4][0] - grassy ground
    [4][0][0] - top of grass
[4][1] - ground sprites
    [4][1][0] - shaded from center, square

*/

var blockImage = [
    
    [[], []], 
    [[], []], 
    [[], []], 
    [[], []], 
    [[], []]
    
];

noStroke();

//water and lava
for (var i = 0; i < 4; i ++) {
    
    background(0, 0, 0, 0);
    
    if (i < 2) { //water
        
        fill(48, 84, 148);
        
    } else { //lava
        
        fill(255, 60, 0);
        
    }
    
    if (i % 2 === 0) {
        
        //big wave
        rect(0, 15, 30, 15);
        rect(3, 12, 24, 3);
        rect(3, 9, 21, 3);
        rect(6, 6, 15, 3);
        rect(12, 3, 12, 3);
        
    } else {
    
        //small wave
        rect(0, 15, 30, 15);
        rect(18, 12, 12, 3);
        rect(21, 9, 9, 3);
        rect(27, 6, 3, 3);
        
        rect(0, 12, 9, 3);
        rect(0, 9, 6, 3);
        rect(0, 6, 9, 3);
        
    }
    
    blockImage[0][floor(i/2)].push(get(0, 0, 30, 30));
    
}

//tree trunk
for (var i = 0; i < 3; i ++) {
    
    background(0, 0, 0, 0);
    
    fill(117, 100, 50);
    
    if (i === 0) {
        
        rect(0, 0, 30, 30);
        
        fill(41, 26, 0, 20);
        
        for (var k = 0; k < 5; k ++) {
            
            rect(6*k + 6, 0, 24 - 6*k, 30);
            
        }
        
        fill(95, 79, 36);
        rect(27, 0, 6, 30);
        
    } else if (i === 1) {
        
        fill(196, 154, 92);
        rect(0, 3, 27, 12);
        
        fill(117, 100, 50);
        rect(15, 12, 12, 3);
        rect(15, 3, 12, 3);
        
        rect(0, 15, 18, 3);
        rect(0, 0, 18, 3);
        
        rect(27, 6, 3, 6);
        rect(24, 6, 3, 6);
        
    } else {
        
        fill(196, 154, 92);
        rect(0, 3, 30, 12);
        
        fill(117, 100, 50);
        rect(0, 15, 30, 3);
        rect(0, 0, 30, 3);
        
    }
    
    blockImage[1][0].push(get(0, 0, 30, 30));
    
}

//floating platform
for (var i = 0; i < 2; i ++) {
    
    background(0, 0, 0, 0);
    
    if (i === 0) {
        
        fill(117, 100, 50);
        rect(0, 0, 30, 24);
        
        fill(45, 150, 0);
        rect(0, 0, 30, 9);
        rect(0, 9, 6, 3);
        rect(12, 9, 3, 3);
        rect(18, 9, 3, 3);
        rect(21, 9, 3, 6);
        
    } else {
        
        fill(117, 100, 50);
        rect(3, 24, 12, 3);
        rect(9, 24, 6, 6);
        
    }
    
    blockImage[2][0].push(get(0, 0, 30, 30));
    
}

//grassy ground
for (var i = 0; i < 1; i ++) {
    
    background(0, 0, 0, 0);
    
    if (i === 0) { //grass
        
        fill(45, 150, 0);
        rect(0, 6, 30, 9);
        rect(0, 3, 6, 3);
        rect(12, 3, 3, 3);
        rect(18, 3, 3, 3);
        rect(21, 0, 3, 6);
        
    } else { //normal platform
        
        
        
    }
    
    blockImage[4][i].push(get(0, 0, 30, 30));
    
}

//an array of the different blocks in a level / part of lvl
var maps = [
    
    [
        
        [
            
            [
                
                "                                                                                                                                         ",
                "                                                                                                                                         ",
                "                                                 3                  3                                                                     ",
                "  3333        3                                                                                                                      3",
                "            3        3        3                          3                                                                                 ",
                "                                      3                             3                                                                     ",
                "                                                                                                                                         ",
                "                                                                                                                                     3    ",
                "                                                                333333333                                             3                  ",
                "                                                                                        ",
                "                                                                            333     3333333333333333333333    3333          3333     3",
                "                                                                                                                33333    33333",
                "                                                                                                                   33333333",
                "                                                                    3333333                ",
                "                                                        22                              ",
                "                                                        22   222                                                                         ",
                "                                                        22   222                                                                         ",
                "                                                   2222 22   222                                                                         ",
                "111111111111111111111111155555555555111111155555555555555555555555                      55555511111111111111111111111111111111111111111111111155555",
                "111111111111111111111111155555555555111111155555555555555555555555                      55555511111111111111111111111111111111111111111111111155555"
            
            ], //main level
            
            [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ] //secret level part (coin haven!)
            
        ], //level 1
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //main level
            
            [
                
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                
            ] //powerup restock
            
        ], //level 2
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //main level
            
            [
                
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                
            ] //its a trap!!!!! (enemies here!)
            
        ], //level 3
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //main level
            
            [
                
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                
            ] //coins!!
            
        ], //level 4
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //boss battle
            
        ] //level 5
        
    ] //world 1

];

//an array for the different things in the background (clouds hills etc.)
var bkgrdArray = [
    
    [
    
        [
            
            [
                
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //main level
            
            [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ] //secret level part (coin haven!)
            
        ], //level 1
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //main level
            
            [
                
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                
            ] //powerup restock
            
        ], //level 2
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //main level
            
            [
                
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                
            ] //its a trap!!!!! (enemies here!)
            
        ], //level 3
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
            ], //main level
            
            [
                
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                
            ] //coins!!
            
        ], //level 4
        
        [
            
            [
            
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            
        ], //boss battle
            
        ] //level 5
    
    ]

];

var wave = [
    
    [          ],
    [       111],
    [    11111 ],
    [  1111111 ],
    [ 11111111 ],
    [1111111111],
    [1111111111],
    [1111111111],
    [1111111111],
    [1111111111],
    
];

var pmil = 0;

draw = function() {
    
    pushMatrix();
    
    noStroke();
    
    //first variable used to initialize a level
    if (page === "home") {
        
        background(107, 174, 255);
        
    } else if (page === "world select") {
        
        background(107, 140, 255);
        
        if (worldChoose === 0) {
            
            world = 0;
            
        }
        
    } else if (page === "level select") {
        
        background(107, 140, 255);
        
        if (world === 0) {
            
            
            
        }
        
        if (unlock[world][0]) {
            
            
            
        } else {
            
            
            
        }
        
        if (unlock[world][1]) {
            
            
            
        } else {
            
            
            
        }
        
        if (unlock[world][2]) {
            
            
            
        } else {
            
            
            
        }
        
        if (unlock[world][3]) {
            
            
            
        } else {
            
            
            
        }
        
        if (unlock[world][4]) {
            
            
            
        } else {
            
            
            
        }
        
    } else if (page === "game") {
        
        if (first) {
            
            translatePos = 0; //resets translatePos to the very beginning
            
            //empties all arrays storing level info
            
            for (var i = blocks.length; i > 0; i --) {
                
                blocks.pop();
                
            }
            for (var i = coins.length; i > 0; i --) {
                
                coins.pop();
                
            }
            for (var i = bkgrdBlocks.length; i > 0; i --) {
                
                bkgrdBlocks.pop();
                
            }
            for (var i = enemy.length; i > 0; i --) {
                
                enemy.pop();
                
            }
            
            //goes through maps array at specific level and stage
            for (var i = 0; i < maps[world][level][stage].length; i ++) {
                
                maps[world][level][stage][i] = maps[world][level][stage][i].split("");
                
                for (var j = 0; j < maps[world][level][stage][i].length; j ++) {
                    
                    if (maps[world][level][stage][i][j] === "6") { //a coin
                        
                        coins.push([j*30, i*30]); //adds a value to the coins array
                        
                    } else if (maps[world][level][stage][i][j] !== " ") { //if it will act as a normal block
                        
                        //x, y, type, y bounce height, isBouncing?, bounce y velocity, times to be hit
                        blocks.push([j*30, i*30, parseInt(maps[world][level][stage][i][j], 10)]);
                        
                    }
                    
                }
                
            } //end of going through maps array
            /*
            //goes through the backgrounds array at specific level and stage
            for (var i = 0; i < [world][level][stage].length; i ++) {
                
                bkgrdArray[world][level][stage][i] = bkgrdArray[world][level][stage][i].split();
                
                for (var j = 0; j < bkgrdArray[world][level][stage][i].length; j ++) {
                    
                    if (bkgrdArray[world][level][stage][i][j] !== 0) {
                        
                        //x, y, type
                        bkgrdBlocks.push([j*25, i*25, bkgrdArray[world][level][stage][i][j]]); //adds value to background blocks array
                        
                    }
                    
                }
                
            }
            */
            //first set to false so that this only occurs once!
            first = false;
            
        } else { //if not first (to keep from any drawing errors)
            
            //begins the major game code
            pushMatrix();
            
            //check which type of level it is
            levelType = 0;
            if ((world === 0 & level === 3) | (world === 0 & level === 4)) {
                
                levelType = 1;
                
            }
            
            //if he is not on the very left 200 or the vvery right 200
            if (player[0] > 300 & player[0] < (30*maps[world][level][stage][19].length - 300)) {
                
                translatePos = -player[0] + 300; //moves the translateX to 200 more than the negative of player x to have him mario in the middle of the screen
                
            }
            
            translate(translatePos, 0); //translate to translate pos (no y change in the real game!)
            
            //usually a bright blue background
            background(107, 173, 255);
            
            //goes through the array of background blocks
            for (var i = 0; i < bkgrdBlocks.length; i ++) {
                
                //if the block is in the screen (accoringing to x translate amt)
                if (bkgrdBlocks[i][0] >= (-translatePos - 25) & bkgrdBlocks[i][0] < (-translatePos + 400)) {
                    
                    //goes through each background type
                    if (bkgrdBlocks[i][2] === 0) {
                        
                        //draws it
                        
                    }
                    
                }
                
            }
            
            //black background in some scenarios
            if ((world === 0 & level === 3) | (world === 0 & level === 4)) { //worlds 1-4, 1-5
                
                background(102, 102, 102); //its inside, gray walls
                
            }
            
            //player collision with different blocks
            {
            
            //resets player values to there is space everywhere (left right up down)
            player[4] = true; //left
            player[5] = true; //right
            player[6] = true; //down
            player[7] = true; //up
            
            //goes through blocks array
            for (var i = 0; i < blocks.length; i ++) {
                
                if (blocks[i][2] >= 2 & blocks[i][2] <= 5) {
                    
                    //begins collision
                    
                    //checks if something is to the left
                    
                    //if x is between 2.5 inside the right side and just outside the right side
                    //y pos from way above to way below
                    if (player[0] <= (blocks[i][0] + 30) & player[0] >= (blocks[i][0] + 25) & (player[1] > (blocks[i][1] - player[9] + 5) & player[1] < (blocks[i][1] + 30))) {
                        
                        player[4] = false; //something to the left
                        player[0] = blocks[i][0] + 30;//moves it to the outside so thats its never inside
                        player[2] = 0;//sets x vel to be 0
                        
                    }
                    
                    //if x is between 2.5 inside the left side and just outside the left side
                    //y pos from way above to way below
                    if (player[0] <= (blocks[i][0] - player[8] + 5) & player[0] >= (blocks[i][0] - player[8]) & (player[1] > (blocks[i][1] - player[9] + 5) & player[1] < (blocks[i][1] + 30))) {
                        
                        player[5] = false;//something to the right
                        player[0] = blocks[i][0] - 30;//moves outside
                        player[2] = 0;//sets x vel to be 0
                        
                    }
                    
                    //x is way to left or way to right
                    //y is a block above to 8.5 inside the block (yvel gets up to 7.5!!!)
                    if (player[1] >= (blocks[i][1] - player[9] - player[3]) & player[1] <= (blocks[i][1] - player[9] + 8) & player[0] > (blocks[i][0] - player[8]) & player[0] < (blocks[i][0] + 30)) {
                        
                        player[6] = false;//something below
                        player[1] = blocks[i][1] - player[9];//y is just outside (remember that huge 8.5 gap?)
                        player[3] = 0;//sets yvel to 0
                        jump = false;//end of a jump
                        
                    }
                    
                    //x is way to left or way to right
                    //y is a block above to 8.5 inside the block (yvel gets up to 7.5!!!)
                    if (player[1] <= (blocks[i][1] + 30 - player[3]) & player[1] >= (blocks[i][1] + 25 - player[3]) & player[0] > (blocks[i][0] - player[8] + 1) & player[0] < (blocks[i][0] + 29)) {
                        
                        player[7] = false;//something up
                        player[1] = blocks[i][1] + 30;//y is just outside (remember that huge 8.5 gap?)
                        player[3] = 1;//sets yvel to 0
                        
                    }
                    
                }
                   
            } //end of going through blocks array
            
            }
            
            //controls coin collecting and drawing
            for (var i = 0; i < coins.length; i ++) {
                
                if (coins[i]) {
                    
                    //draw a coin
                    
                }
                
                if (player[0] > (coins[i][0] - 19) & player[0] < (coins[i][0] + 15) & player[1] > (coins[i][1] - player[9]) & player[1] < (coins[i][1] + 25)) {
                    
                    coins[i] = false;
                    coin ++;
                    score += 200;
                    
                }
                
            }
            
            //player movement and control
            {
            
            //CONTROLS LEFT AND RIGHT
            
            //goes max 2 x vel except when u r big
            if (!keys[RIGHT] & keys[LEFT] & player[2] > -4) { //clicking only left, there is a space left and you aren't going too fast
                
                if (player[2] > 0) { //immediate turn right when going left
                    
                    player[2] = 0; //resets x velocity to 0
                    
                }
                
                player[2] -= 0.4; //decreases x velocity slowly to create speed
                
            }
            //goes max 2 x vel except when u r big
            if (!keys[LEFT] & keys[RIGHT] & player[2] < 4) { //clicking only left, there is a space left and you aren't going too fast
                
                if (player[2] < 0) { //immediate turn right when going left
                    
                    player[2] = 0; //resets x velocity to 0
                    
                }
                
                player[2] += 0.4; //decreases x velocity slowly to create speed
                
            }
            
            if ((!keys[LEFT] & !keys[RIGHT]) | (keys[RIGHT] & keys[LEFT])) { //if neither are held or if both are
                
                if (Math.abs(player[2]) > 0.001) {
                    
                    player[2] /= 1.05; //the slow down
                    
                }
                
            }
            
            //jumping
            if (!player[6] & player[7]) { //space up but not space down
                
                if (keys[UP]) { //if you are holding the up button on the ground
                    
                    //initial upward velocity is 8
                    player[3] = -6;
                    
                    //sets jump to true for spriting purposes
                    jump = true;
                    
                } else {
                    
                    player[3] = 0; //should not be moving up or down with no place to go down :D
                    
                }
                
                //falling
            } else if (player[3] < 7.5 & player[6]) { //if there is no place to go down, then
                
    //                         vv     cuz 0.2 just aint gud enuf
                player[3] += 0.2065; //ENFORCE GRAVITY... BWAHAHAHAHAHA
                
            }
            
            player[0] += player[2]; //change x by x velocity
            player[1] += player[3]; //change y by y velocity
            
            player[0] = constrain(player[0], 0, 30*maps[world][level][stage][14].length - 30); //dont let the player go off the screen
            
            }
            
            //draws all the blocks
            for (var i = 0; i < blocks.length; i ++) {
                
                pushMatrix();
                
                translate(blocks[i][0], blocks[i][1]);
                
                /**
                
                                                    Outside:
                 * AIR              nothingness....
                 * WATER        1   blue, lose a life, but reset to the last time you were on land and stable
                 * TREE TRUNK   2   brown, just like a normal block, different background
                 * PLATFORM     3   top part is green (grass), the bottom is brown dirt
                 * DIRT MOUND   4   movable block, used to reach higher areas
                 * GRASS        5   normal ground block
                                                    Inside: 
                 * LAVA         1   red, lose a life, but reset to the last time you were on land and stable
                 * CRATE (opt.) 4   movable block, used to reach higher areas
                 * PLATFORM     3   kind of a silvery platform, diagonals lined
                 * GROUND       5/2 normal, but top block is special, sides are also special IF
                                    it is not on the very edge of a level, this is so that it can
                                    be used as the equivalent of a tree trunk
                                                    General:
                 * COIN         10  collectable!
                 * portal       [stage to go to, x, yn]
                
                */
            
                top = true;
                
                for (var j = 0; j < blocks.length; j ++ ) {
                    
                    if (blocks[j][0] === blocks[i][0] & blocks[j][1] === (blocks[i][1] - 30) & blocks[j][2] === blocks[i][2]) {
                        
                        top = false;
                        
                    }
                    
                }
                
                var left = true;
                
                for (var j = 0; j < blocks.length; j ++ ) {
                    
                    if (blocks[j][1] === blocks[i][1] & blocks[j][0] === (blocks[i][0] - 30) & blocks[j][2] === blocks[i][2]) {
                        
                        left = false;
                        
                    }
                    
                }
                
                var right = true;
                
                for (var j = 0; j < blocks.length; j ++ ) {
                    
                    if (blocks[j][1] === blocks[i][1] & blocks[j][0] === (blocks[i][0] + 30) & blocks[j][2] === blocks[i][2]) {
                        
                        right = false;
                        
                    }
                    
                }
                
                if (blocks[i][0] <= (-translatePos + 600) & blocks[i][0] >= (-translatePos - 30)) {
                    
                    if (blocks[i][2] === 1) { //water/lava
                        
                        if (levelType === 0) { //water
                            
                            fill(48, 84, 148);
                            
                        } else { //lava
                            
                            fill(255, 60, 0);
                            
                        }
                        
                        if (top) {
                            
                            if (frameCount%60 < 30) {
                                
                                image(blockImage[0][levelType][0], 0, 0);
                                
                            } else {
                                
                                image(blockImage[0][levelType][1], 0, 0);
                                
                            }
                            
                        } else {
                            
                            rect(0, 0, 30, 30);
                            
                            if (!left) {
                                
                                rect(-3, 0, 6, 30);
                                
                            }
                            
                        }
                        
                    } else if (blocks[i][2] === 2) { //tree trunk / ground
                        
                        if (levelType === 0) { //tree trunk
                            
                            fill(117, 100, 50);
                            
                            if (top) {
                                
                                if (left) {
                                    
                                    pushMatrix();
                                    
                                    image(blockImage[1][0][0], 0, 0);
                                    
                                    //takes the right log side and flips it
                                    scale(-1,1);
                                    
                                    image(blockImage[1][0][1], -30, -9);
                                    
                                    popMatrix();
                                    
                                } else if (right) {
                                    
                                    pushMatrix();
                                    
                                    scale(-1, 1);
                                    
                                    image(blockImage[1][0][0], -30, 0);
                                    
                                    popMatrix();
                                    
                                    image(blockImage[1][0][1], 0, -9);
                                    
                                } else {
                                    
                                    rect(0, 0, 30, 30);
                                    
                                    fill(90, 74, 32);
                                    
                                    rect(0, 0, 30, 30);
                                    
                                    image(blockImage[1][0][2], 0, -9);
                                    
                                }
                                
                            } else {
                                
                                if (left) {
                                    
                                    image(blockImage[1][0][0], 0, 0);
                                    
                                } else if (right) {
                                    
                                    pushMatrix();
                                    
                                    scale(-1, 1);
                                    image(blockImage[1][0][0], -30, 0);
                                    
                                    popMatrix();
                                    
                                } else {
                                    
                                    rect(0, 0, 30, 30);
                                    
                                    fill(90, 74, 32);
                                    
                                    rect(- 3, 0, 36, 30);
                                    
                                }
                                
                            }
                            
                        } else { //normal ground block
                            
                            
                            
                        }
                        
                    } else if (blocks[i][2] === 3) { //platform
                        
                        if (levelType === 0) { //grassy platform
                            
                            if (top) {
                                
                                image(blockImage[2][0][0], 0, 0);
                                
                            }
                            
                            fill(117, 100, 50);
                            if (right) {
                                
                                pushMatrix();
                                
                                scale(-1, 1);
                                image(blockImage[2][0][1], -30, 0);
                                
                                popMatrix();
                                
                            } else {
                                
                                rect(15, 24, 21, 6);
                                
                            }
                            if (left) {
                                
                                image(blockImage[2][0][1], 0, 0);
                                
                            } else {
                                
                                rect(-6, 24, 21, 6);
                                
                            }
                            
                        } else { //metal platform
                            
                            
                            
                        }
                        
                    } else if (blocks[i][2] === 4) { //moving block
                        
                        if (levelType === 0) { //dirt mound
                            
                            fill(0, 0, 0);
                            rect(0, 0, 30, 30);
                            
                        } else { //crate
                            
                            
                            
                        }
                        
                    } else if (blocks[i][2] === 5) { //ground
                        
                        if (levelType === 0) { //grass
                            
                            fill(117, 100, 50);
                            
                            rect(0, 0, 30, 30);
                            
                            if (!left) {
                                
                                rect(-3, 6, 6, 24);
                                
                            }
                            
                            if (top) {
                                
                                image(blockImage[4][0][0], 0, -9);
                                
                            } else {
                                
                                if (!left) {
                                    
                                    rect(-3, 0, 6, 6);
                                    
                                }
                                
                            }
                            
                        } else { //ground
                            
                            
                            
                        }
                        
                    }
                    
                }
                
                popMatrix();
                
            }
            
            //draws the player
            {
            
            var playerLeft;
            
            if (player[2] < 0) {
                
                playerLeft = true;
                
            }
            if (player[2] > 0) {
                
                playerLeft = false;
                
            }
            
            pushMatrix();
            
            translate(player[0], player[1]);
            
            if (!jump) {
                
                fill(26, 181, 36);
                
                if (playerLeft) {
                    
                    translate(30, 0);
                    scale(-1, 1);
                    
                }
                
                rect(0, 21, 27, 3);
                rect(0, 24, 27, 3);
                rect(0, 27, 24, 3);
                
                rect(9, 0, 15, 3);
                rect(6, 3, 18, 3);
                rect(6, 6, 18, 3);
                rect(3, 9, 24, 3);
                rect(3, 12, 24, 3);
                rect(3, 15, 27, 3);
                rect(3, 18, 27, 3);
                
                if (abs(player[2]) > 0.5) {
                    
                    rect(-3, 27, 3, 3);
                    
                } else if (abs(player[2]) < 0.3) {
                    
                    rect(24, 27, 3, 3);
                    
                }
                if (abs(player[2]) > 1.15) {
                    
                    rect(-6, 27, 6, 3);
                    rect(-3, 24, 3, 3);
                    
                } 
                
                fill(0, 0, 0);
                rect(18, 6, 3, 3); //eye
                
            } else {
                
                fill(26, 181, 36);
                rect(3, 3, 24, 24);
                
                rect(0, 9, 6, 12);
                rect(9, 24, 12, 6);
                rect(9, 0, 12, 6);
                rect(24, 9, 6, 12);
                
                fill(0, 0, 0);
                if (playerLeft) {
                    
                    rect(15 + floor((10*cos(-20*frameCount))/3)*3, 15 + floor(10*sin(-20*frameCount)/3)*3, 3, 3);
                    
                } else {
                    
                    rect(15 + floor((10*cos(20*frameCount))/3)*3, 15 + floor(10*sin(20*frameCount)/3)*3, 3, 3);
                    
                }
                
            }
            
            popMatrix();
            
            }
            
            if (player[1] > 600) {
                
                player[0] = 900;
                player[1] = 420;
                player[2] = 0;
                player[3] = 0;
                translatePos = 0;
                
            }
            
        }
        
    } else if (page === "game end") {
        
        if (win) {
            
            
            
        } else {
            
            
            
        }
        
    }
    
    popMatrix();
    
    fill(0, 0, 0);
    text("fps: " + (1000/(millis() - pmil)), 20, 30);
    
    pmil = millis();
    
};