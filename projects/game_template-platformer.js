var player = [50, 250, 0, 0, true, true, true, true];//x,y,width,height,up, down, left, right (open)

var diag = [[200, 200, 300, 300]];

var blocks = [];

var level = 0;

var first = true;

var X = 0;

frameRate(60);

var maps = [
    
    [
        
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000000000000",
        "000000011100000",
        "0000000000000000001111011101111",
        "0000011110000001",
        "0000000000000011",
        "0000000000000111",
        "1111111111111111111111111111111"
        
    ],
    
];

var keys = [];

keyPressed = function() {
    
    keys[keyCode] = true;
    
};

keyReleased = function() {
    
    keys[keyCode] = false;
    
};

draw = function() {
    
    if (first) {
        
        for (var i in maps[level]) {
            
            for (var j in maps[level][i]) {
                
                var x = j*25;
                var y = i*25;
                
                if (maps[level][i][j] === "1") {
                    
                    blocks.push([x, y, 1]);
                    
                }
                
            }
            
        }
        
        first = false;
        
    } else {
        
        pushMatrix();
        
        //moves the translate amount by the player's x value
        X = constrain(player[0], 200, maps[level][15].length*25 - 200);
        
        player[0] = constrain(player[0], 0, maps[level][15].length*25 - 25); //constrains it to the level map
        
        translate(-X + 200, 0); //moves it left and right
        
        background(255, 255, 255);
        
        noStroke();
        
        //enforces gravity, while still limiting it (air resistence)
        if (player[3] < 7.5) {
            
            player[3] += 0.248;
            
        }
        
        //says that all directions are open (resets!)
        player[4] = true;
        player[5] = true;
        player[6] = true;
        player[7] = true;
        
        //player's collision with blocks
        for (var i in blocks) {
            
            //checks if there is something to the right of the player
            if (player[0] >= (blocks[i][0] - 25 - player[2]) & player[0] <= (blocks[i][0] - 20) & player[1] > (blocks[i][1] - 25) & player[1] < (blocks[i][1] + 25)) {
                
                player[7] = false; //there is something to the right
                player[2] = 0; //sets xvel to be 0
                player[0] = blocks[i][0] - 25; //move the player outside
                
            }
            
            //checks if there is something to the left of the player
            if (player[0] >= (blocks[i][0] + 20) & player[0] < (blocks[i][0] + 25 - player[2]) & player[1] > (blocks[i][1] - 25) & player[1] < (blocks[i][1] + 25)) {
                
                player[6] = false; //there is something to the left
                player[2] = 0; //sets xvel to be 0
                player[0] = blocks[i][0] + 25; //move the player outside
                
            }
            
            //checks if there is something to the down of the player
            if (player[1] >= (blocks[i][1] - 25 - player[3]) & player[1] <= (blocks[i][1] - 23) & player[0] > (blocks[i][0] - 24.5) & player[0] < (blocks[i][0] + 24.5)) {
                
                player[5] = false; //there is something to the down
                player[3] = 0; //sets xvel to be 0
                player[1] = blocks[i][1] - 25; //move the player outside
                
            }
            
            //checks if there is something to the up of the player
            if (player[1] >= (blocks[i][1] + 15) & player[1] <= (blocks[i][1] + 25) & player[0] > (blocks[i][0] - 25) & player[0] < (blocks[i][0] + 25)) {
                
                player[4] = false; //there is something to the up
                player[3] = 0.1; //sets xvel to be 0
                player[1] = blocks[i][1] + 25; //move the player outside
                
            }
            
        }
        
        //stops the player at the edges
        if (player[0] === 0 | player[0] === (maps[level][15].length*25 - 25)) {
            
            player[2] = 0;
            
        }
        
        ///control of player via arrow keys
        if (keys[LEFT] & !keys[RIGHT] & player[6] & player[2] > -3) {
            
            player[2] -= 0.1;
            
        } else if (!keys[LEFT] & keys[RIGHT] & player[7] & player[2] < 3) {
            
            player[2] += 0.1;
            
        } else if (abs(player[2]) > 0.001) {
            
            player[2] /= 1.1;
            
        } else {
            
            player[2] = 0;
            
        }
        
        if (keys[UP] & player[3] >= 0 & !player[5] & player[4]) {
            
            player[3] = -6;
            
        }
        
        //moves the player by specified x and y velocities
        player[0] += player[2];
        player[1] += player[3];
        
        //draws the player
        fill(9, 0, 140);
        rect(player[0], player[1], 25, 25);
        
        //draws the blocks
        for (var i in blocks) {
            
            if (blocks[i][2] === 1) {
                
                fill(76, 148, 255);
                
                rect(blocks[i][0], blocks[i][1], 25, 25);
                
            }
            
        }
        
        popMatrix();
        
    }
    
    text(round(player[0]), 10, 20);
    text(round(player[1]), 10, 30);
    text(round(player[2]), 10, 40);
    text(round(player[3]), 10, 50);
    
    text(player[4], 50, 20);
    text(player[5], 50, 30);
    text(player[6], 50, 40);
    text(player[7], 50, 50);
    
};