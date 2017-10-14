//I got 3515 and 3512. How about you?

var screen = "home";

var health = 100;

var levelTimer = 1000;

var levels = [
    
    [
       
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        
    ],
    
    [
       
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        
    ],
    
    [
       
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        
    ]
    
];

var choice = [0];

var level = 0;

var game = "playing";

var score = 0;

//x, y, size, color, yvel, xvel, jump?
var player = [350, 40, 20, color(2, 500, 1), 0, 0, false];

var levelTime = 0;

var first = true;

var end = [10, 300];

var blocks = [];

var enemy = [
    
    [
        
        [300, 200, 20, color(0), 0, 0, true, false],
        [100, 200, 20, color(0), 0, 0, true, false]
        
    ], 
    
    [
        
        [300, 200, 30, color(0), 0, 0, true, false],
        [350, 200, 30, color(0), 0, 0, true, false],
        [50, 200, 30, color(0), 0, 0, true, false],
        [100, 200, 30, color(0), 0, 0, true, false]
        
    ], 
    
    [
        
        [250, 200, 20, color(0), 0, 0, false, false],
        [150, 200, 20, color(0), 0, 0, false, false],
        [300, 200, 20, color(0), 0, 0, false, false],
        [350, 200, 20, color(0), 0, 0, false, false],
        [50, 200, 20, color(0), 0, 0, false, false],
        [100, 200, 20, color(0), 0, 0, false, false]
        
    ]
    
];

var enemyOriginal = [
    
    [
        
        [300, 200, 20, color(0), 0, 0, true, false],
        [100, 200, 20, color(0), 0, 0, true, false]
        
    ], 
    
    [
        
        [300, 200, 30, color(0), 0, 0, true, false],
        [350, 200, 30, color(0), 0, 0, true, false],
        [50, 200, 30, color(0), 0, 0, true, false],
        [100, 200, 30, color(0), 0, 0, true, false]
        
    ], 
    
    [
        
        [250, 200, 20, color(0), 0, 0, false, false],
        [150, 200, 20, color(0), 0, 0, false, false],
        [300, 200, 20, color(0), 0, 0, false, false],
        [350, 200, 20, color(0), 0, 0, false, false],
        [50, 200, 20, color(0), 0, 0, false, false],
        [100, 200, 20, color(0), 0, 0, false, false]
        
    ]
    
];

var keys = [];

keyPressed = function() {
    
    keys[keyCode] = true;
    
};

keyReleased = function() {
    
    keys[keyCode] = false;
    
};

mouseReleased = function() {
    
    if (screen === "home") {
        
        screen = "game";
        
    } else if (screen === "end") {
        
        screen = "home";
        level = 0;
        first = true;
        health = 50;
        score = 0;
        
        enemy = enemyOriginal;
        
    }
    
};

var collide = false;

draw = function() {
    
    if (screen === "home") {
        
        levelTime = 0;
        levelTimer = 1000;
        
        background(47, 81, 99);
        
        textAlign(CENTER, CENTER);
        
        textFont(createFont("ar essence"), 60);
        
        fill(255, 255, 255);
        
        text("LADDERS", 200, 110);
        
        textSize(30);
        
        fill(255, 255, 255, abs(frameCount%510-255));
        text("Click to play", 200, 300);
        
    } else if (screen === "end") {
        
        background(0, 0, 0);
        
        fill(255, 255, 255);
        
        textSize(50);
        
        textAlign(CENTER);
        text("GAME OVER", 200, 120);
        
        textSize(30);
        
        score = health*17 + levelTime;
        
        text("Score: " + score, 200, 271);
        
        level = 0;
        
    } else if (screen === "game") {
        
        for (var i = 0; i < 100; i ++) {
            
            choice[i] = round(random(0.5, 100.5));
            
        }
        
        
        background(163, 163, 163);
        
        noStroke();
        for (var i = 0; i < enemy[level].length; i ++) {
            
            fill(0);
            rect(enemy[level][i][0], enemy[level][i][1], enemy[level][i][2], enemy[level][i][2]);
            
            enemy[level][i][7] = false;
            
            for (var j = 0; j < blocks.length; j ++) {
                
                if (enemy[level][i][0] > (blocks[j][0] - 20) & enemy[level][i][0] < (blocks[j][0] + 20) & enemy[level][i][1] > (blocks[j][1] - 20) & enemy[level][i][1] < (blocks[j][1] + 20)) {
                    
                    enemy[level][i][7] = true;
                    enemy[level][i][4] = 0;
                    enemy[level][i][6] = false;
                    
                }
                
            }
            
            if (enemy[level][i][0] < player[0] & enemy[level][i][5] < 3) {
                
                enemy[level][i][5] += 0.1;
                
            }
            
            
            if (enemy[level][i][0] > player[0] & enemy[level][i][5] > -3) {
                
                enemy[level][i][5] -= 0.1;
                
            }
            
            if (enemy[level][i][0] < 0 | enemy[level][i][0] > 380) {
                
                enemy[level][i][5] = 0;
                
                if (enemy[level][i][0] < 0) {
                    
                    enemy[level][i][0] = 0;
                    
                } else {
                    
                    enemy[level][i][0] = 380;
                    
                }
                
            }
            
            if (!enemy[level][i][7]) {
                
                enemy[level][i][4] += 0.25;
                enemy[level][i][6] = true;
            
            }
            
            if (!enemy[level][i][6] & choice[i] < 50 & player[1] < enemy[level][i][1]) {
                
                enemy[level][i][4] = -enemy[level][i][2]/4;
                enemy[level][i][6] = false;
                
            }
            
            enemy[level][i][1] += enemy[level][i][4];
            enemy[level][i][0] += enemy[level][i][5];
            
            if (enemy[level][i][0] > (player[0] - player[2]) & enemy[level][i][0] < (player[0] + player[2]) & enemy[level][i][1] > (player[1] - player[2]) & enemy[level][i][1] < (player[1] + player[2])) {
                
                health -= enemy[level][i][2];
                
                player[4] = 0;
                player[6] = true;
                
                player[0] = 350;
                player[1] = 50;
                
            }
            
        }
        
        if (first) {
            
            enemy = enemyOriginal;
            
            for (var i = 0; i < 20; i ++) {
                
                for (var j = 0; j < 20; j ++) {
                    
                    if (levels[level][i][j] === 1) {
                        
                        blocks.push([20*j, 20*i]);
                        
                    }
                    
                }
                
            }
            
            first = false;
            
        } else {
            
            fill(97, 65, 65);
            
            if (keys[LEFT] & !keys[RIGHT] & player[0] > 0) {
                
                player[5] = -4;
                
            } else if (keys[RIGHT] & !keys[LEFT] & player[0] < 380) {
                
                player[5] = 4;
                
            } else {
                
                player[5] = 0;
                
            }
            
            collide = false;
            for (var i = 0; i < blocks.length; i ++) {
                
                rect(blocks[i][0], blocks[i][1], 4, 20);
                rect(blocks[i][0] + 16, blocks[i][1], 4, 20);
                rect(blocks[i][0], blocks[i][1] + 3, 20, 4);
                rect(blocks[i][0], blocks[i][1] + 13, 20, 4);
                
                if (player[0] > (blocks[i][0] - 20) & player[0] < (blocks[i][0] + 20) & player[1] > (blocks[i][1] - 20) & player[1] < (blocks[i][1] + 20)) {
                    
                    collide = true;
                    player[4] = 0;
                    player[6] = false;
                    
                }
                
            }
            
            fill(player[3]);
            rect(player[0], player[1], player[2], player[2]);
        
            fill(0);
            rect(player[0] + player[2]*1/8, player[1] + player[2]*1/4, player[2]/5, player[2]/4);
            rect(player[0] + player[2]*5/8, player[1] + player[2]*1/4, player[2]/5, player[2]/4);
            if (!player[6] & keys[UP]) {
                
                player[4] = -6;
                player[6] = true;
                
            }
            
            if (!collide) {
                
                player[4] += 0.25;
            
            }
            
            fill(255, 0, 0);
            rect(end[0], end[1], 20, 20);
            
            textAlign(LEFT, CENTER);
            fill(255, 255, 255);
            text("Health: " + health, 7, 20);
            text("Level Timer: " + levelTimer, 200, 20);
            
            levelTimer -= 1;
            
            player[1] += player[4];
            player[0] += player[5];
            
            if (player[0] > (end[0] - 20) & player[0] < (end[0] + 20) & player[1] > (end[1] - 20) & player[1] < (end[1] + 20)) {
                
                player = [350, 40, 20, color(2, 500, 1), 0, 0, false];
                
                if (level < (levels.length - 1)) {
                    
                    level ++;
                    levelTime += levelTimer;
                    levelTimer = 1000;
                    
                } else {
                    
                    screen = "end";
                    
                }
                
                for (var i = blocks.length; i > 0; i --) {
                    
                    blocks.pop();
                    
                }
                
                first = true;
                player[0] = 350;
                player[1] = 50;
                
                player = [350, 40, 20, color(2, 500, 1), 0, 0, false];
                
            }
            
        }
    
    }
    
};