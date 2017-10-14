//made around 7-27-15

var planeX = []; //array for x positions of rockets
var octoX = []; //array for x positions of octopi
var planeY = []; //array for y positions of rockets
var octoY = []; //array for y positions of octopi
var speedO = []; //array for speed of octopi
var speedP = []; //array for speed of rockets

var leftSize = []; //size of builidings on left islands
var rightSize = []; //size of buildings on right islangs
var midSize = [random(5, 8), random(4, 7), random(3, 6), random(3, 5), random(3, 5)]; //building sizes for middle island

var laserY = 0; //controls the y value of the laser (which is rotated)

var page = 0; //page number
var turn = 45; //makes the arcs rotate
var wait = 0;

var starX = []; //controls x coordinates of all the stars
var starY = []; //controls y coordinates of all the stars
var starSize = []; //control sizze of all the stars

var building = function(x, y, size, right) {
    
    noStroke();
    if (right) { //building facing right
        
        fill(107, 100, 96, 200);
        quad(x + size/2, y, x - size/2, y, x - size/2, y - size*4, x + size/2, y - size*4 - size/2); //main building
        fill(0, 0, 0, 110);
        quad(x + size/2, y, x + size/16, y , x + size/16, y - size*4 - size/4, x + size/2, y - size*4 - size/2); //darker part of building
        
        strokeWeight(1);
        stroke(46, 50, 51);
        for (var i = 0; i < 13; i ++) {
            line(x - size/2, y - i*size/3.2, x + 1, y - i*size/3.2); //lines on building
        }
        
        //windows
        noStroke();
        fill(121, 168, 168);
        rect(x - size/2, y - size*3.5, size/4, size/4, size/10); //top
        rect(x - size/2, y - size*1.5, size/4, size/4, size/10); //bottom
        rect(x + size/8, y - size*2.5, size/4, size/4, size/10); //middle
        
    } else { //building facing left
        
        noStroke();
        fill(107, 100, 96, 200);
        quad(x - size/2, y, x + size/2, y, x + size/2, y - size*4, x - size/2, y - size*4 - size/2); //main building
        fill(0, 0, 0, 120);
        quad(x - size/2, y, x - size/16, y , x - size/16, y - size*4 - size/4, x - size/2, y - size*4 - size/2);//darker side of building
        
        strokeWeight(1);
        stroke(46, 50, 51);
        for (var i = 0; i < 13; i ++) {
            line(x - 1, y - i*size/3.2, x + size/2, y - i*size/3.2); //lines on building
        }
        
        //windows
        noStroke();
        fill(121, 168, 168);
        rect(x , y - size*3.5, size/4, size/4, size/10); //top
        rect(x, y - size*1.5, size/4, size/4, size/10); //bottom
        rect(x - size/2.25, y - size*2.5, size/4, size/4, size/10); //middle
    }
    
    if (page === 0) {
        
        fill(0, 255, 255, 20); //happy blue
        
    } else {
        
        fill(255, 0, 0, 20); //evil red
        
    }
    
    for (var i = 0; i < size; i ++) {
        rect(x - size/2, y - i*1.5, size + 1, i*1.8); //glow on buildings bottom
    }
        
};

var robot = function() {
    
    image(getImage("avatars/robot_male_1"), 10, -380, 80, 80); //robot inside
    
    noStroke();
    fill(98, 138, 138, 100);
    arc(55, -310, 150, 170, 180, 360); //glass acreen on top
    
    stroke(255, 0, 0);
    strokeWeight(5);
    line(55, laserY - 290, 55, laserY - 310); //laser
    
    stroke(80, 102, 102);
    strokeWeight(10);
    line(110, -310, 0, -310); //line in middle connecting left and right sides
    
    stroke(80, 102, 102, 100);
    fill(80, 102, 102);
    for (var i = 0; i < 20; i ++) {
        
        arc(20 - i*3, -310 + i/2, i*2, i*2/2, -120, 60); //left side of base
        arc(90 + i*3, -310 + i/2, i*2, i*2/2, 120, 300); //right side of base
        
    }
    
    fill(255, 0, 0, 20);
    noStroke();
    for(var i = 0; i < 10; i ++) {
        
        ellipse(40, -310 + i*7, i*3, i*3); //left light
        ellipse(70, -310 + i*7, i*3, i*3); //right light
        
    }
    
    noStroke();
    fill(80, 102, 102); //rectangles stacked to form curved middle base
    rect(30, -320, 50, 20, 15); //bottom rect
    rect(35, -310, 40, 15, 15); //middle rect
    rect(40, -300, 30, 8, 15); //top rect
    
};

for (var i = 0; i < 3; i ++) {
    
    //food
    rightSize.push(random(5, 8));
    rightSize.push(random(8, 11));
    rightSize.push(random(10, 13));
    leftSize.push(random(5, 8));
    leftSize.push(random(8, 11));
    leftSize.push(random(10, 13));
    
}

for (var i = 0; i < 100; i ++) {
    
    starX.push(random(400)); //adds 100 values to arrays starX, starY, and starSize
    starY.push(random(400));
    starSize.push(random(4));
    
}

for (var i = 0; i < 6; i ++) {
    
    speedO.push(random(10, 20)); //6 octopi with speed, x, y
    speedP.push(random(10, 20)); //6 rockets with speed, x, y
    planeX.push(random(500));
    octoX.push(random(500));
    planeY.push(random(400));
    octoY.push(random(400));
    
}

mouseReleased = function() {
    
    if (page < 2) {
        
        page = (page + 1) % 2; //page increases by one, but can only be 0 or 1 (binary)
        
    }
    
};

keyReleased = function() {
    
    if (keyCode === ENTER) {
        
        if (page <= 1) {
            
            page = 2;
            
        } else {
            
            page = round(random(0, 1));
            
        }
        
    }
    
};

textAlign(CENTER);

draw = function() {
    
    if (page === 0) {
        
        background(0, 0, 0); //dark starry background
        
        for (var x = 0; x < starX.length; x++) {
            
            stroke(255, 255, 255, 200); 
            strokeWeight(starSize[x]);
            point(400 - starX[x], starY[x]); //stars randomly placed, constantly moving
            
            starX[x] = (starX[x] + 2) % 400; //moves stars left by increasing starX, and decreasing x
            
        }
        
        noStroke();
        fill(0, 255, 255, 0.5); // 0  255  255  0.5 
        for (var i = 10; i < 500; i *= 1.015) {
           ellipse(200, 200, i + random(0, 100), i + random(0, 100)); //glow in background
        }
        
        for (var x = 0; x < planeX.length; x++) {
            image(getImage("space/rocketship"), planeX[x] - 50, planeY[x], 50, 50); //rocket
            image(getImage("space/octopus"), octoX[x] - 50, octoY[x], 50, 50); //octopus
            planeX[x] = (planeX[x] + speedP[x]); //speed of rocket
            octoX[x] = (octoX[x] + speedO[x]); //speed of octopus
            if (planeX[x] > 500) { //rocket goes off screen
                
                planeX[x] = 0; //back to left
                planeY[x] = random(400); //y coordinate changes
                
            }
            if (octoX[x] > 500) { //octopus goes off screen
                
                octoX[x] = 0; //back left
                octoY[x] = random(400); //y coordinate changes
                
            }
        }
        
        stroke(0, 238, 255);
        strokeWeight(random(1, 1.2)); //constantly changing stroke
        fill(9, 0, 255);
        for (var i = 10; i < 125; i *= 1.015) {
            quad(200, 250 - i, 200 - (i^(random(1.5, 3)) + i), 280 - 1.2*i, 200, 290 - 1.35*i, 200 + (i^(random(1.5, 3)) + i), 280 - 1.2*i); //quadrilaterals stacked on top to form cool design
        }
        
        //islands
        strokeWeight(1.1);
        for (var i = 10; i < 100; i *= 1.035) {
            for (var j = 0; j < 3; j += 1.2) {
                
                stroke(0, 238, 255);
                quad(300 + j*50, 320 - i/2 - j*10, 300 - i/2 + j*50, 320 - 0.6*i - j*10, 300 + j*50, 320 - 0.697*i - j*10, 300 + i/2 + j*50, 320 - 0.6*i - j*10); //right islands main body
                stroke(9, 0, 255);
                quad(300 + j*50, 270 - j*10, 300 - 50 + j*50, 320 - 60 - j*10, 300 + j*50, 320 - 69.7 - j*10, 300 + 50 + j*50, 320 - 60 - j*10); //right islands top
                stroke(0, 238, 255);
                quad(100 - j*50, 320 - i/2 - j*10, 100 + i/2 - j*50, 320 - 0.6*i - j*10, 100 - j*50, 320 - 0.697*i - j*10, 100 - i/2 - j*50, 320 - 0.6*i - j*10); //left islands main body
                stroke(9, 0, 255);
                quad(100 - j*50, 270 - j*10, 145 - j*50, 261 - j*10, 100 - j*50, 251.5 - j*10, 100 - i/2 - j*50, 260 - j*10); //left islands top
                
            }
        }
        
        //buildings on islands
        for (var i = 0; i < 3; i ++) {
            building(320 + i*60, 260 - i*45/4, rightSize[1 + i*3], false); //medium building on right
            building(280 + i*60, 260 - i*45/4, rightSize[0 + i*3], false); //small building on right
            building(300 + i*60, 260 - i*45/4, rightSize[2 + i*3], true); //tall building on right
            
            building(80 - i*60, 260 - i*45/4, leftSize[0 + i*3], false); //small building on left
            building(100 - i*60, 260 - i*45/4, leftSize[2 + i*3], false); //tall building on left
            building(120 - i*60, 260 - i*45/4, leftSize[1 + i*3], true); //medium building on left
        }
        
        for (var i = 0; i < 6; i ++) {
            building(170 - i*15, 200 + i*3/4, midSize[i], true); //buildings on mid-left
            building(230 + i*15, 200 + i*3/4, midSize[i], false); //buildings on mid-right
        }
        
        fill(0, 247, 255);
        textSize(40);
        textFont(createFont("impact"), 40);
        text("POWERFUL MAGIC", 200, 105); //bold title
        
    } else if (page === 1) {
        
        background(0, 0, 0); //dark background
    
        stroke(38, 5, 5);
        strokeWeight(2);
        fill(255, 51, 0, 0.5); 
        for (var i = 10; i < 500; i *= 1.015) {
            
           ellipse(200, 200, i + random(0, 100), i + random(0, 100)); //evil glow in background
           
        }
        
        stroke(255, 0, 0);
        strokeWeight(random(1, 1.2)); //constantly changing stroke
        fill(13, 13, 15);
        for (var i = 10; i < 125; i *= 1.015) {
            quad(200, 250 - i, 200 - (i^(random(1.5, 3)) + i), 280 - 1.2*i, 200, 290 - 1.35*i, 200 + (i^(random(1.5, 3)) + i), 280 - 1.2*i); //quadrilaterals stacked to form cool design
        }
        strokeWeight(1.1);
        
        
        for (var i = 10; i < 100; i *= 1.035) {
            for (var j = 0; j < 3; j += 1.2) {
                
                stroke(255, 0, 0);
                quad(300 + j*50, 320 - i/2 - j*10, 300 - i/2 + j*50, 320 - 0.6*i - j*10, 300 + j*50, 320 - 0.697*i - j*10, 300 + i/2 + j*50, 320 - 0.6*i - j*10); //main islands on right
                
                stroke(13, 13, 15);
                quad(300 + j*50, 270 - j*10, 300 - 50 + j*50, 320 - 60 - j*10, 300 + j*50, 320 - 69.7 - j*10, 300 + 50 + j*50, 320 - 60 - j*10); //right islands top
                
                stroke(255, 0, 0);
                quad(100 - j*50, 320 - i/2 - j*10, 100 + i/2 - j*50, 320 - 0.6*i - j*10, 100 - j*50, 320 - 0.697*i - j*10, 100 - i/2 - j*50, 320 - 0.6*i - j*10); //main islands on left
                
                stroke(13, 13, 15);
                quad(100 - j*50, 270 - j*10, 145 - j*50, 261 - j*10, 100 - j*50, 251.5 - j*10, 100 - i/2 - j*50, 260 - j*10); //left islands top
            }
        }
        
        for (var i = 0; i < 3; i ++) {
            building(320 + i*60, 260 - i*45/4, rightSize[1 + i*3], false); //medium building on right
            building(280 + i*60, 260 - i*45/4, rightSize[0 + i*3], false); //small building on right
            building(300 + i*60, 260 - i*45/4, rightSize[2 + i*3], true); //tall building on right
            
            building(80 - i*60, 260 - i*45/4, leftSize[0 + i*3], true); //small bulding on left
            building(100 - i*60, 260 - i*45/4, leftSize[2 + i*3], false); //tall building on left
            building(120 - i*60, 260 - i*45/4, leftSize[1 + i*3], true); //medium building on left
        }
        
        for (var i = 0; i < 6; i ++) {
            building(170 - i*15, 200 + i*3/4, midSize[i], true); //buildings on mid-left
            building(230 + i*15, 200 + i*3/4, midSize[i], false); //buildings on mid-right
        }
        
        pushMatrix();
        
        scale(0.5);
        translate(400, 400);
        rotate(15); //turns to the right
        robot(); //top robot
        
        rotate(-30); //turns to the left
        translate(-250, 150);//moves down and left
        robot(); //left robot
        
        rotate(30); //turns back
        translate(350, -50);  //moves up and right
        robot(); //right robot
        
        popMatrix();
        
        laserY = (laserY + 20) % 250; //increases laser so that it shoots and comes back
        
        fill(255, 0, 0);
        textSize(40);
        textFont(createFont("impact"), 40);
        text("EVIL ROBOTS", 200, 105); //bold title
        
    }
    
    if (page <= 1) {
        
        fill(255, 255, 255, 50);
        textFont(createFont("impact"), 25);
        text("What will the world be overcome by?", 200, 50); //future question
        fill(255, 255, 255, 50);
        text("Click to see alternate reality\nENTER to continue", 200, 350); //text very see through to keep out of the overall picture
        
    }
    
    if (page === 2) {
        
        background(0, 0, 0); //dark starry background
    
        stroke(38, 5, 5);
        strokeWeight(2);
        
        fill(255, 51, 0, 0.5); 
        for (var i = 10; i < 500; i *= 1.015) {
           arc(200, 200, i + random(0, 100), i + random(0, 100), 180 + turn, 360 + turn); //evil glow in background
        }
        
        noStroke();
        
        fill(0, 255, 255, 0.5); // 0  255  255  0.5 
        for (var i = 10; i < 500; i *= 1.015) {
           arc(200, 200, i + random(0, 100), i + random(0, 100), 0 + turn, 180 + turn); //glow in background
        }
        
        fill(0, 0, 0, 5);
        
        for (var i = 0; i < 150; i ++) {
            
            ellipse(200, 200, i, i); //center fading
        
        }
        
        textFont(createFont("kaiti"), 18);
        fill(255, 255, 255);
        text("So which\nfuture are\nwe destined\nto have?", 200, 175);
        
        turn = (turn + 5) % 360;
        
    }
    
};
