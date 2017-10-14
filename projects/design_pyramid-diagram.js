var page = "begin"; //which page it is
var rows = 14; //row of pyramid blocks

var change = false; //whether or not to first screen is fading away
var opacity = 200; //opacity of the first page

var pyramidX = 200; //3D pyramid x coordinate 
var pyramidY = 75; //3D pyramid y coordinate
var right = true; //whether or not the pyrmaid is going right
var down = true; //whether or not the pyramid is going down

var drawPyramid = function(x, y, size) {
    
    scale(size/400); //becomes smaller or bigger
    translate(x, y); //moves to the x and y
    
    noStroke();
    fill(174, 226, 245);
    rect(0, 0, 400, 400); //background
    
    fill(171, 158, 108);
    triangle(20, 350, 200, 50, 380, 350); //overall pyramid
    
    stroke(120, 93, 76);
    strokeWeight(1);
    fill(148, 121, 80);
    for (var i = 50 + (14 - rows)*10; i <= (150 + rows*10); i += 11) {
        for (var j = 340; j > 70; j -= 20) {
            quad(i, j, i + 10, j, i + 20, j - 20, i + 10, j - 20); //bricks on the left
        }
        rows --;
    }
    fill(148, 121, 80);
    for (var i = 350; i >= 220; i -= 11) {
        for (var j = 340; j > 70; j -= 20) {
            quad(i, j, i - 10, j, i - 20, j - 20, i - 10, j - 20); //bricks on the right
        }
        rows --;
    }
    rows = 14;
    fill(148, 121, 80);
    quad(160, 340, 240, 340, 210, 90, 190, 90);
    noStroke();
    fill(174, 226, 245);
    triangle(20, 350, 200, 50, 20, 50); //takes away extra blocks on the outside
    triangle(380, 350, 200, 50, 380, 50);
    
    fill(171, 158, 108);
    quad(10, 350, 44, 350, 197, 70, 188, 70); //takes away extra blocks on the inside
    quad(380, 350, 356, 350, 203, 70, 212, 70);
    fill(201, 172, 84);
    rect(0, 350, 400, 50);
    
    stroke(255, 255, 255);
    strokeWeight(5);
    line(336, 280, 224, 378); //path from entrance to descending corridor
    
    line(176, 250, 127, 170); //exits from King's Chamber
    line(204, 250, 270, 170);
    
    stroke(94, 68, 68);
    fill(255, 255, 255); //outline and fill for the rooms
    strokeWeight(1);
    rect(192, 300, 17, 21, 3); //Queen's Chamber
    
    quad(200, 235, 200, 265, 260, 315, 260, 285); //Grand Gallery
    
    rect(190, 370, 20, 10); //lower underground chamber
    
    //King's Chamber
    rect(177, 225, 15, 40);
    for (var r = 0; r < 5; r ++) {
        line(177, 232 + r*5, 192, 232 + r*5); //lines
    }
    triangle(172, 227, 197, 227, 184.5, 217); //upper segment
    rect(192, 252, 7, 13); //connecting chamber to gallery
    noStroke();
    rect(192, 257, 9, 8); //makes the pathway open
    
    stroke(255, 255, 255);
    strokeWeight(5);
    line(277, 325, 252.5, 305); //pathway upward to the gallery
    line(200, 310, 258, 310); //Queen's Chamber to gallery
    
    line(183, 378, 222, 378); //continued path to descending corridors
    
    strokeWeight(2);
    line(260, 310, 260, 330); //escape path
    line(260, 332, 230, 370);
    
    translate(-x, -y); //goes back so that other objexts aren't translated
    scale(400/size); //returns to normal size
    
};

var arrow = function(x, y, left) {
    translate(x - 300, y - 100);
    
    noStroke();
    
    if (left) {
        
        fill(48, 69, 67);
        arc(300, 100, 15, 30, -10, 170); //arrow front
        fill(48, 69, 67);
        arc(302, 85, 15, 50, 90, 270); //arrow line
        fill(255, 255, 255);
        arc(302, 80, 5, 40, 90, 270); //cover up part of arrow line
        
    } else {
        
        fill(48, 69, 67);
        arc(300, 100, 15, 30, 20, 200); //arrow front
        fill(48, 69, 67);
        arc(298, 85, 15, 50, -90, 90); //arrow line
        fill(255, 255, 255);
        arc(298, 80, 5, 40, -90, 90); //cover up part of arrow line
        
    }
    
    translate(300 - x, 100 - y);
};

mouseReleased = function() {
    
    if (page === "begin") { //goes to Home page
    
        change = true;
        
    } else if (page === "Home") { //goes to info pages
    
        if (30 <= mouseX  && mouseX <= 130 && 80 <= mouseY && mouseY <= 130) {
            page = "Pyramid History";
        } // History page
        
        if (280 <= mouseX  && mouseX <= 380 && 80 <= mouseY && mouseY <= 130) {
            page = "Facts";
        } //Facts page
        
        if (300 <= mouseX  && mouseX <= 390 && 150 <= mouseY && mouseY <= 200) {
            page = "Pyramids";
        } //Facts page
        
        if (221 <= mouseX  && mouseX <= 240 && 270 <= mouseY && mouseY <= 281) {
            page = "grandGallery";
        } //Grand Gallery page
        
        if ((178.5 <= mouseX  && mouseX <= 190.5 && 254 <= mouseY && mouseY <= 264) || (194.5 <= mouseX  && mouseX <= 205.5 && 305 <= mouseY && mouseY <= 317)) {
            
            page = "Chambers";
            
        } //King and Queen Chambers page
        
        if ((dist(mouseX, mouseY, 89, 250) < 10) || (dist(mouseX, mouseY, 277, 230) < 10)) {
            page = "blockTypes";
        } //Blocks page
        
        if ((300 <= mouseX  && mouseX <= 335 && 280 <= mouseY && mouseY <= 312) || (235 <= mouseX  && mouseX <= 265 && 180 <= mouseY && mouseY <= 210) || (131 <= mouseX  && mouseX <= 155 && 180 <= mouseY && mouseY <= 210)) {
            page = "entrance/exit paths";
        }
        
        if ((193 <= mouseX  && mouseX <= 207 && 372 <= mouseY && mouseY <= 380) || (254 <= mouseX  && mouseX <= 264 && 325 <= mouseY && mouseY <= 335)) {
            
            page = "Other";
            
        }
        
    } else {
        
        if (20 <= mouseX  && mouseX <= 70 && 370 <= mouseY && mouseY <= 395) {
            
            page = "Home";
            
        } //back to Home page at any of info pages
        //to a second fact page
        if (page === "Facts" && 140 <= mouseX && mouseX <= 190 && 370 <= mouseY && mouseY <= 395) {
            
            page = "More Facts";
            
        } else if(page === "More Facts" && 140 <= mouseX && mouseX <= 190 && 370 <= mouseY && mouseY <= 395){
            
            page = "Facts";
            
        } //back to first fact page
        
    }
};

draw = function() {
    
    if (page === "Home" || page === "begin") {
        
        textAlign(CENTER); //makes all of the text commands centered
        drawPyramid(0, 0, 400); //draws main pyramid on homepage
        
        fill(255, 255, 255);
        textFont(createFont("Aharoni"), 15);
        text("Khufu was an ancient Egyptian pharoah who had\na pyramid built for him to be  buried in. Learn\nabout the architecture of pyramids by clicking around.", 200, 20); //background text
        
        noStroke();
        fill(70, 133, 128);
        rect(30, 80, 100, 50, 20); //button
        fill(255, 255, 255);
        textFont(createFont("cursive"), 15);
        text("Evolution\nof Pyramids", 80, 100); //button text
        
        fill(70, 133, 128);
        rect(280, 80, 100, 50, 20); //button
        fill(255, 255, 255);
        textFont(createFont("cursive"), 15);
        text("Fun Facts!", 330, 110); //button text
        
        fill(70, 133, 128);
        rect(300, 150, 95, 50, 20); //button
        fill(255, 255, 255);
        textFont(createFont("cursive"), 15);
        text("Bonus\nPyramid", 347.5, 171); //button text
        
        noStroke();
        fill(201, 145, 145);
        if (221 <= mouseX  && mouseX <= 240 && 270 <= mouseY && mouseY <= 281) {
            
            fill(171, 50, 50); //new fill
            
        } //changes color of Grand Gallery button
        rect(221, 270, 19, 11, 2);

        fill(175, 174, 212); //original fill
        if ((178.5 <= mouseX  && mouseX <= 190 && 254 <= mouseY && mouseY <= 264) || (194.5 <= mouseX  && mouseX <= 205.5 && 305 <= mouseY && mouseY <= 317)) {
            
            fill(59, 51, 171); //new fill
            
        } //changes color of Chambers
        rect(178.5, 254, 12, 10, 2); //king's chamber button
        rect(194.5, 305, 11, 12, 2); //queen's chamber button
        
        fill(179, 212, 176); //original fill
        if ((dist(mouseX, mouseY, 89, 250) < 10) || (dist(mouseX, mouseY, 277, 230) < 10)) {
            
            fill(33, 199, 24); //new fill
            
        } //changes color of Bricks buttons
        ellipse(89, 250, 20, 20); //inner bricks button
        ellipse(277, 230, 20, 20); //outer bricks button
        
        fill(199, 176, 147); //original fill
        if ((300 <= mouseX  && mouseX <= 335 && 280 <= mouseY && mouseY <= 312) || (235 <= mouseX  && mouseX <= 265 && 180 <= mouseY && mouseY <= 210) || (131 <= mouseX  && mouseX <= 155 && 180 <= mouseY && mouseY <= 210)) {
            
            fill(255, 153, 0); //new fill
            
        } //changes color of entrance/exit
        quad(300, 300, 312, 310, 335, 290, 322, 280); //entrance button
        quad(235, 200, 247, 210, 265, 190, 252, 180); //right exit button
        quad(155, 200, 143, 210, 131, 190, 143, 180); //left exit button
        
        fill(212, 176, 211); //original fill
        if ((193 <= mouseX  && mouseX <= 207 && 372 <= mouseY && mouseY <= 380) || (254 <= mouseX  && mouseX <= 264 && 325 <= mouseY && mouseY <= 335)) {
            
            fill(171, 51, 167); //new fill
            
        } //changes color of Other
        rect(193, 372, 14, 8, 2); //king's chamber button
        rect(254, 325, 10, 10, 2); //queen's chamber button
        
        if (221 <= mouseX  && mouseX <= 240 && 270 <= mouseY && mouseY <= 281) {
            
            noStroke();
            fill(0, 0, 0);
            triangle(mouseX, mouseY, mouseX + 30, mouseY - 30, mouseX + 40, mouseY - 30); //points to mouse 
            rect(mouseX + 11, mouseY - 50, 80, 28, 5); //text bubble
            fill(255, 255, 255);
            textFont(createFont("Times"), 12);//changes font and size
            text("Grand Gallery", mouseX + 50, mouseY - 32); //text
            
        } //adds speech bubble after to cover everything
        
        if ((178.5 <= mouseX  && mouseX <= 190 && 254 <= mouseY && mouseY <= 264) || (194.5 <= mouseX  && mouseX <= 205.5 && 305 <= mouseY && mouseY <= 317)) {
            
            noStroke();
            fill(0, 0, 0);
            triangle(mouseX, mouseY, mouseX + 30, mouseY - 30, mouseX + 40, mouseY - 30); //points to mouse 
            rect(mouseX + 7, mouseY - 50, 107, 28, 5); //text bubble
            fill(255, 255, 255);
            textFont(createFont("Times"), 12);//changes font and size
            text("Different Chambers", mouseX + 60, mouseY - 32); //text
            
        } //adds speech bubble after to cover everything
        
        if ((267 <= mouseX  && mouseX <= 287 && 220 <= mouseY && mouseY <= 240) || (79 <= mouseX  && mouseX <= 99 && 240 <= mouseY && mouseY <= 260)) {
            
            noStroke();
            fill(0, 0, 0);
            triangle(mouseX, mouseY, mouseX + 30, mouseY - 30, mouseX + 40, mouseY - 30); //points to mouse 
            rect(mouseX + 11, mouseY - 50, 80, 28, 5); //text bubble
            fill(255, 255, 255);
            textFont(createFont("Times"), 12);//changes font and size
            text("Brick Types", mouseX + 50, mouseY - 32); //text
            
        } //adds speech bubble after to cover everything
        
        if ((300 <= mouseX  && mouseX <= 335 && 280 <= mouseY && mouseY <= 312) || (235 <= mouseX  && mouseX <= 265 && 180 <= mouseY && mouseY <= 210) || (131 <= mouseX  && mouseX <= 155 && 180 <= mouseY && mouseY <= 210)) {
            
            noStroke();
            fill(0, 0, 0);
            triangle(mouseX, mouseY, mouseX + 30, mouseY - 30, mouseX + 40, mouseY - 30); //points to mouse 
            rect(mouseX + 11, mouseY - 50, 80, 28, 5); //text bubble
            fill(255, 255, 255);
            textFont(createFont("Times"), 12);//changes font and size
            text("Entrance/Exit", mouseX + 50, mouseY - 32); //text
            
        } //adds speech bubble after to cover everything
        
        if ((193 <= mouseX  && mouseX <= 207 && 372 <= mouseY && mouseY <= 380) || (254 <= mouseX  && mouseX <= 264 && 325 <= mouseY && mouseY <= 335)) {
            
            noStroke();
            fill(0, 0, 0);
            triangle(mouseX, mouseY, mouseX + 30, mouseY - 30, mouseX + 40, mouseY - 30); //points to mouse 
            rect(mouseX + 11, mouseY - 50, 60, 28, 5); //text bubble
            fill(255, 255, 255);
            textFont(createFont("Times"), 12);//changes font and size
            text("Other", mouseX + 40, mouseY - 32); //text
            
        } //adds speech bubble after to cover everything
        
        
        noStroke();
        if (page === "begin") {
            fill(56, 103, 161, opacity);
            rect(100, 100, 200, 200); //top bar
            fill(0, 0, 50, opacity * 51 / 40);
            textFont(createFont("impact"),35);
            text("Architecture\nof Pyramids", 200, 190); //title
        }
        
    } else {
        
        background(255, 255, 255);
        noStroke();
        
        fill(56, 103, 161, 200);
        rect(0, 0, 400, 120);
        fill(56, 103, 161, 200);
        rect(215, 0, 200, 400);
        
        stroke(0, 187, 255, 100);
        strokeWeight(10);
        fill(255, 255, 255);
        rect(227.5, 20, 160, 360);
        
        drawPyramid(15, 320, 200); //mini pyramid for pointing little things out
        
        textAlign(CENTER);
        
        if (page === "Other") {
            
            fill(77, 99, 97);
            textFont(createFont("kaiti"), 30); //title font
            text("Other Tunnels\nand Shafts", 108, 50); //title
            textFont(createFont("Times"), 12.75); //text font
            text("One attribute of pyramids is their escape shaft. This small passage leads down to the underground chamber. It might’ve been used to get out of the pyramid once the interior was finished or in the case of a cave-in or other emergency. Keep in mind that the pyramids were created at a time where there were no machines. The pyramids were created by hand! The lower, underground chamber mentioned before could have many purposes. Some say it was there as a backup, in the case that the pharaoh died before the upper pyramid had been completed. It could’ve also symbolized the death god, Sokar.", 233, 30, 150, 400); //main text
            stroke(44, 43, 54);
            line(107, 348, 40, 250); //line left
            line(137, 321, 180, 250); //line right
            fill(0, 0, 0);
            textFont(createFont("ar essence"), 13);
            text("Underground \nChamber", 40, 230); //label left
            text("Escape \nPath", 180, 230); //label right
            
        } else if (page === "Chambers") {
            
            fill(77, 99, 97);
            textFont(createFont("impact"), 35); //title font
            text("Different\nChambers", 102, 47); //title
            textFont(createFont("Times"), 12.5); //text font
            text("The King’s Chamber is a room near the top of the pyramid where the King’s sarcophagus can be found. It needed to resist lots of pressure, so it was made completely of pink granite, with five relieving chambers. For four thousand years, it was able to withstand lots of pressure, and only a single tiny crack has been created. \n\nThe Queen’s Chamber is another room lower in the pyramid, which, unlike the King’s Chamber, is not meant to be a burial chamber. It is made of finished limestone, and in the wall lies a niche. Many strange objects were found here, such as a granite sphere and a copper hook.", 235, 34, 147, 400); //text
            stroke(44, 43, 54);
            line(100, 283, 40, 250); //line left
            line(107, 316, 180, 250); //line right
            fill(0, 0, 0);
            textFont(createFont("ar essence"), 13); 
            text("King's\nChamber", 40, 230); //label left
            text("Queen's\nChamber", 180, 230); //label right
            
        } else if (page === "grandGallery") {
        
            fill(77, 99, 97);
            textFont(createFont("constantia"), 35); //title font
            text("Grand\nGallery", 107, 50); //title
            textFont(createFont("Times"), 14.5); //text font
            text("The Grand Gallery is a pathway that connects two chambers, named the King’s Chamber and the Queen’s Chamber. It is an impressive example of sophisticated architecture. The Grand Gallery is more than 153 feet long, and about 29 feet high, while only 7 feet wide. The passage is actually completely empty, no decoration at all! While it was being constructed, the Grand Gallery could have also been used by astronomers as an observation point.", 235, 33, 148, 400); //text
            stroke(44, 43, 54);
            line(120, 295, 180, 250); //line
            fill(0, 0, 0);
            textFont(createFont("ar essence"), 13);
            text("Grand\nGallery", 180, 230); //label
            
        } else if (page === "entrance/exit paths") {
            
            fill(77, 99, 97);
            textFont(createFont("andalus"), 35);
            text("Paths to enter\nand exit", 108, 50);
            textFont(createFont("Times"), 15);
            text("There are many ways to get around in the pyramid. There is one main entrance, and it leads down to the Underground Chamber. About halfway through, you have the option to go up to the Grand Gallery and later the King’s Chamber, or to the Queen’s Chamber. The exits are through the King’s Chamber going out both ways. ", 238, 38, 135, 400);
            stroke(44, 43, 54);
            line(87, 272, 40, 250); //line left
            line(124, 266, 40, 250); //line left
            line(158, 315, 180, 250); //line right
            fill(0, 0, 0);
            textFont(createFont("ar essence"), 13); 
            text("Exit\nPaths", 40, 230); //text left
            text("Entrance\nPath", 180, 230); //text right
            
        } else if (page === "blockTypes") {
            
            fill(77, 99, 97);
            textFont(createFont("ar destine"), 35);
            text("Different\nBlock Types", 108, 50);
            textFont(createFont("Times"), 14.5);
            text("In the very inside are the Core Blocks, and these are placed first. Then the Packing Blocks are placed. After this stage, the pyramid looks a lot like a stepped pyramid. The pyramid really gets its shape when the Casing Blocks are placed, and the pyramid starts looking grand. Finally, the Capstone is placed at the top. Inside the pyramid are also storages for bricks, so that they wouldn’t have to go all the way out just to get more bricks.", 235, 33, 145, 400);
            stroke(44, 43, 54);
            line(85, 228, 40, 210); //line top-left
            line(80, 312, 40, 250); //line bottom-left
            line(108, 200, 160, 195); //line top-right
            line(157, 290, 180, 250); //line bottom-right
            fill(0, 0, 0);
            textFont(createFont("ar essence"), 13);
            text("Casing\nBlocks", 40, 190); //label top-left
            text("Core\nBlocks", 40, 230); //label bottom-left
            text("Capstone", 160, 190); //label top-right
            text("Packing\nBlocks", 180, 230); //label bottom-right
            
        } else if (page === "Pyramid History") {
            
            fill(77, 99, 97);
            textFont(createFont("ar berkley"), 35);
            text("Stages of\nthe Pyramid", 100, 45);
            textFont(createFont("Times"), 15);
            text("Old Burial Site\n\n\n\nMustabas\n\n\n\n\nStep Pyramids\n(Stacked Mustabas)\n\n\n\n\nBent Pyramid", 235, 39, 145, 400); //all text
            
            fill(255, 255, 255);
            rect(7, 121, 230, 253); //covers up old pyramid and clears other part
            
            fill(77, 99, 97);
            textSize(20);
            text("Great Pyramid", 100, 185);
            
            drawPyramid(150, 700, 120);
            
            fill(171, 132, 65);
            bezier(270, 80, 280, 60, 300, 50, 340, 80); //old burial site
            
            quad(250, 180, 280, 140, 340, 140, 370, 180); //mustaba
            fill(97, 74, 54);
            quad(295, 180, 300, 160, 320, 160, 325, 180); //mustaba door
            
            stroke(97, 74, 54);
            fill(171, 132, 65);
            quad(290, 250, 300, 230, 310, 230, 320, 250); //highest, small level
            quad(270, 270, 280, 250, 330, 250, 340, 270); //middle, medium level
            quad(250, 290, 260, 270, 350, 270, 360, 290); //lowest, longer level
            
            beginShape(); //pyramid (pentagon)
            vertex(250, 370);
            vertex(270, 340);
            vertex(305, 320);
            vertex(340, 340);
            vertex(360, 370);
            endShape(CLOSE);
            
            arrow(360, 130, false); //top arrow
            arrow(235, 230, true); //middle arrow
            arrow(370, 315, false); //bottom arrow
            
            fill(48, 69, 67);
            beginShape(); //arrow to end
            vertex(229, 352); //point
            vertex(190, 331); 
            vertex(182, 340);
            vertex(186, 320); //front
            vertex(212, 320);
            vertex(199, 326);
            endShape(CLOSE);
            
        } else if (page === "Facts") {
            
            fill(77, 99, 97);
            textFont(createFont("gabriola"), 45);
            text("Fun Facts", 102, 70);
            textFont(createFont("Times"), 14.3);
            text("The pyramid was made of 2.3 million blocks, and weighed about 5.9 million TONS. Multiplied by 10^8 gives the Earth's mass!\n\nIt is impossible to create an exact replica of the Great Pyramids, because we don't have the technology they had. (Hard to believe, right?)\n\nIt is thought that Khufu intended to have a statue of himself in the Queen's chamber, rather than the Queen herself.", 239, 32, 140, 400); //all text
            
            noStroke();
            fill(67, 92, 70);
            rect(140, 370, 50, 25, 3);
            fill(255, 255, 255);
            textFont(createFont("Times"), 16);
            text("More", 165, 388);

        } else if (page === "More Facts") {
            
            fill(77, 99, 97);
            textFont(createFont("gabriola"), 45);
            text("More Facts", 102, 70);
            textFont(createFont("Times"), 13.75);
            text("The pyramid is constructed to deal with heat expansion and earthquakes.\n\nThe pyramid was originally covered with polished limestone casing stone that made it glow like a jewel. After an earthquake, these stones were loosened and taken away.\n\nThe granite sarcophagus must have been placed during construction, because it was too big to fit in the hallways.\n(Probably why it is still there!)", 239, 32, 140, 400); //all text
            
            noStroke();
            fill(67, 92, 70);
            rect(140, 370, 50, 25, 3);
            fill(255, 255, 255);
            textFont(createFont("Times"), 16);
            text("Back", 165, 388);

        } else if (page === "Pyramids") {
        
            background(random(100, 200), random(100, 200), random(100, 200)); //random colored background 
            noStroke();
            
            if (right) { //x coordinate increase when right is true
                pyramidX += random(2, 3);
            } else { //x coordinate decreases when right is false
                pyramidX -= random(2, 3);
            }
            
            if (pyramidX > 280) { //right becomes false after the x coordinate becomes greater than 280
                right = false;
            }
            if (pyramidX < 163) { //right becomes true again after the x coordinate becomes less than 163
                right = true;
            }
            
            if (down) { //y coordinate increases when down is true
                pyramidY += random(2, 3);
            } else { //y coordinate decreases when down is false
                pyramidY -= random(2, 3);
            }
            if (pyramidY > 160) { //down becomes false after the y coordinate becomes greater than 160
                down = false;
            }
            if (pyramidY < 0) { //down becomes true again after the y coordinate becomes less than 0
                down = true;
            }
            
            for (var i = 240; i > 1; i /= 1.01) {
                fill(255, 255, 255); //yellow base triangles
                triangle(pyramidX, pyramidY, pyramidX - i/2, pyramidY + i, pyramidX + i/2, pyramidY + i); //front
                triangle(pyramidX, pyramidY, pyramidX - i/2, pyramidY + i, pyramidX - i/1.5, pyramidY + i/1.45); //side
                
                fill(189, 171, 56); //slightly smaller triangle
                triangle(pyramidX, pyramidY + 0.5, pyramidX - i/2, pyramidY + i - 0.5, pyramidX + i/2 + 0.5, pyramidY + i - 0.5); //front
                triangle(pyramidX - 0.5, pyramidY + 0.5, pyramidX - i/2 - 0.5, pyramidY + i - 0.5, pyramidX - i/1.5 + 0.5, pyramidY + i/1.45 - 0.5); //size
            }
            
            fill(0, 0, 0);
            textFont(createFont("microsoft yi baiti"), 20);
            text("Today the pyramid may look boring, but it once glowed like a jewel, truly capturing the essence of the Sun god. Sadly we have no pictures, but this is an interpretation of what it might've looked like", 0, 160, 400, 400);
        
    }
        
        noStroke();
        fill(67, 92, 70);
        rect(20, 370, 50, 25, 3); //home button on all screens
        fill(255, 255, 255);
        textFont(createFont("Times"), 16);
        text("Home", 45, 388); //button text
        
    }
    
        
    
    if (change) {
        
        if (opacity >= 0) {
            
            opacity -= 10; //opacity decreases and page fades away
            
        } else {
            
            page = "Home"; //when page is gone, it changes pages
            change = false;
            
        }
    }
    
};
