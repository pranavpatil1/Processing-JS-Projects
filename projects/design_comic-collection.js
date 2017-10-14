/**
Click or LEFT and RIGHT to switch pages
Open instructions with enter.

First three comics and second to last originally by Charles M. Schulz. 
Try to figure out which characters correspond with each other, and comment below!

Remember to come back for more!

For the keyboard commands comic, here's what all the things do.
 *      Ctrl+S              Save
 *      Ctrl+Z              Undo
 *      Alt+F4              Closes the program
 *      Ctrl+Alt+Delete     Terminate a task or shut down / reboot

For the last one, I wanted to do a "made-you-look" sort of thing to my friend, but this came out instead. :)
*/

/** 
I am a Summer of Scripting student and have completed weeks 1 to 5, but I went through the basics of Introto JS a little 2-3 months before to see what it was like and if it was worth doing. 

I learned to do the page change thing from looking at different programs and I hope we learn it soon, so that I can do it efficiently. 

I also went through documentation a little but I don't really understand all of it. 

I'm a middle schooler BTW, so this wasn't the easiest thing to make. I understand about 45% of JS.

As for the arrays, I have no idea how I made those patterns, but in the end, all that matters is that I made them.

This is the longest program I have created from scratch.

P.S.    Some people have created programs with jokes of mine, way after I created my program (Magic Wand and Keyboard Commands). Just know that I didn't copy. (I was concerned about this, because I worked extremely hard on this program, and it would be horrible to see that work go to waste).
*/

//Introductory Variables
{
var page = 0; //controls which page you are on
var hopper1Y = 99; //controls hopper's y coordinate
var goingUp = true; //whather or not hopper is going up
var leaferX = 0; //controls leafer's x coordinate
var leaferLeaving = false; //whether or not leafer is going away
var instructions = false; //whether or not the instruction page is open.
}

keyReleased = function() {
    if (instructions === false) {
        if (keyCode === RIGHT && page < 15) { //goes to next page with right arrow click
            page++;
        } else if (keyCode === LEFT && page > 1) { //goes back a page with left arrow click
            page--;
        }

        //on page 8 or 9, when the left arrow is clicked, the page goes back again
        if (page === 9 && keyCode === LEFT) {
            page--;
        }
    }
    if (keyCode === ENTER) {
        if (instructions) {
            instructions = false;
        } else {
            instructions = true;
        }
    }
};

mouseReleased = function() {

    //mouse turns page except when instructions are open
    if (page < 15 && instructions === false) {
        page++;
    }

};

draw = function() {

    if (page === 9 && leaferX < 100) { //moves leafer away
        leaferX++;
    }
    if (page === 7 || page === 8) { //resets leafer's position
        leaferX = 0;
    }

    if (goingUp) { //jumping up
        hopper1Y /= 1.0125;
    } else { //coming down
        hopper1Y *= 1.015;
    }
    if (hopper1Y < 85) { //changes Hopper's direction to down
        goingUp = false;
    }
    if (hopper1Y > 110) { //changes Hopper's direction to up
        goingUp = true;
    }

    if (page <= 1) {
        background(46, 48, 82);
        fill(76, 107, 140);
        stroke(173, 187, 222);

        for (var a = 0; a < 400; a += 20) {
            for (var b = 0; b < 400; b += 20) {
                bezier(a, b, a ^ 2 / 2, b ^ 2 / 2, 3 ^ a / 100, 2 ^ b, -2 * a / b, -2 * b / a);
            }
        }

        fill(255, 235, 235);
        textFont(createFont("fantasy"), 50);
        text("Comic\n   COLLECTION . . .\n\n          Featuring:", 21, 81); //title

        image(getImage("avatars/old-spice-man"), -10, 266); //characters
        image(getImage("creatures/Hopper-Happy"), 100, 266);
        image(getImage("creatures/Hopper-Cool"), 230, 345, 50, 50);
        image(getImage("creatures/Hopper-Jumping"), 230, 280, 50, 50);
        image(getImage("avatars/spunky-sam"), 284, 266);

    } else if (page === 2) {

        // the comic backgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 142, 390, 57); //ground on the top
        rect(5, 342, 390, 57); //ground on the bottom

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //actual comic with characters and lines
        //square one characters
        noStroke();
        fill(36, 25, 25);
        quad(30, 100, 70, 90, 70, 140, 30, 150); //computer back
        quad(30, 149.5, 69, 139.5, 120, 140, 80, 150); //computer bottom
        fill(153, 136, 136);
        quad(35, 105, 65, 98, 65, 138, 35, 145); //computer screen
        image(getImage("avatars/spunky-sam"), 103, 85, 75, 75); //make sure width = height for all character

        //square two characters
        noStroke();
        fill(36, 25, 25);
        quad(230, 100, 270, 90, 270, 140, 230, 150); //computer back
        quad(230, 149.5, 269, 139.5, 320, 140, 280, 150); //computer bottom
        fill(153, 136, 136);
        quad(235, 105, 265, 98, 265, 138, 235, 145); //computer screen

        image(getImage("avatars/spunky-sam"), 303, 85, 75, 75);

        //square three characters
        noStroke();
        fill(36, 25, 25);
        quad(30, 300, 70, 290, 70, 340, 30, 350); //computer back
        quad(30, 349.5, 69, 339.5, 120, 340, 80, 350); //computer bottom
        fill(153, 136, 136);
        quad(35, 305, 65, 298, 65, 338, 35, 345); //computer screen

        image(getImage("avatars/spunky-sam"), 103, 285, 75, 75);

        //square four characters
        noStroke();
        fill(36, 25, 25);
        quad(230, 300, 270, 290, 270, 340, 230, 350); //computer back
        quad(230, 349.5, 269, 339.5, 320, 340, 280, 350); //computer bottom
        fill(153, 136, 136);
        quad(235, 305, 265, 298, 265, 338, 235, 345); //computer screen

        image(getImage("avatars/spunky-sam"), 303, 285, 75, 75);
        fill(0, 153, 215);
        rect(331, 339, 20, 4);
        noFill();
        stroke(51, 45, 51);
        strokeWeight(0.15);
        arc(338, 344, 10, 10, 220, 320); //frown
        arc(331, 331, 20, 20, 148, 220); //left eye line
        arc(344, 332, 20, 20, 321, 381); //right eye line

        //square two dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("fantasy"), 12); //font
        fill(255, 255, 255);
        rect(214, 17, 170, 67, 12); //speech bubble
        fill(0, 0, 0);
        line(310, 85, 315, 95); //line to bubble
        text("    SOMETIMES, WHEN YOU ARE A \nGREAT WRITER, THE WORDS COME \n   SO FAST YOU CAN HARDLY PUT\n                   THEM ON PAPER . . .", 221, 35);

        //square four dialogue
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(258, 252, 103, 27, 12); //speech bubble
        fill(0, 0, 0);
        line(310, 280, 315, 290); //line to bubble
        text("SOMETIMES . . .", 276, 270);

    } else if (page === 3) {

        // the comic backgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 142, 390, 57); //ground on the top
        rect(5, 342, 390, 57); //ground on the bottom

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 190); // upper left
        rect(205, 5, 189.5, 190); // upper right
        rect(5, 200, 390, 195); // lower segment

        //actual comic with characters and lines
        //square one characters
        image(getImage("avatars/old-spice-man"), 13, 85, 75, 75); //make sure width = height for all characters
        image(getImage("creatures/Hopper-Jumping"), 109, hopper1Y, 60, 60); //you wouldn't want to squish the bunny ;)
        strokeWeight(0.5);
        arc(139, hopper1Y + 22, 55, 54, 320, 335); //right inner movement
        arc(139, hopper1Y + 22, 61, 60, 315, 340); //right outer movement
        arc(139, hopper1Y + 22, 55, 54, 210, 225); //left inner movement
        arc(139, hopper1Y + 22, 61, 60, 205, 230); //left outer movement

        //square two characters
        image(getImage("avatars/old-spice-man"), 213, 85, 75, 75);
        image(getImage("creatures/Hopper-Happy"), 309, 99, 60, 60);
        //mouth
        noStroke();
        fill(245, 193, 60);
        rect(324, 124, 20, 11); //gets rid of old mouth
        stroke(107, 71, 39);
        strokeWeight(1.7);
        arc(334, 133.5, 20, 15, 250, 290); //new mouth

        //square three characters
        image(getImage("avatars/old-spice-man"), 103, 285, 75, 75);
        image(getImage("creatures/Hopper-Happy"), 260, 299, 60, 60);
        //mouth
        noStroke();
        fill(245, 193, 60);
        rect(274, 324, 20, 11); //gets rid of old mouth
        stroke(107, 71, 39);
        strokeWeight(1.7);
        fill(255, 255, 255);
        arc(287, 332, 15, 15, 174, 354); //new mouth
        line(280, 333, 293.5, 332);

        //eyes
        stroke(0, 0, 0);
        fill(255, 255, 255);
        ellipse(275, 316, 10, 10); //left eye
        ellipse(295, 316, 10, 10); //right eye
        point(275, 316); //left pupil
        point(295, 316); //right pupil

        //arcs around eyes to show he was scared
        noFill();
        strokeWeight(0.45);
        arc(275, 316, 18, 20, 164, 233); //left eye
        arc(295, 316, 18, 20, 321, 378); //right eye

        //square one dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(16, 12, 135, 67, 12); //speech bubble
        fill(0, 0, 0);
        line(80, 80, 75, 90); //line to bubble
        textFont(createFont("fantasy"), 12); //font
        text("   HOW CAN YOU BE HAPPY \n    WHEN YOU DON'T KNOW \n    WHAT THIS YEAR HAS IN \n          STORE FOR YOU?", 20, 30);

        //square two dialogue
        fill(255, 255, 255);
        rect(216, 35, 165, 44, 12); //speech bubble
        fill(0, 0, 0);
        line(280, 80, 275, 90); //line to bubble
        text("    DON'T YOU WORRY ABOUT ALL\n  THE THINGS THAT CAN HAPPEN?", 221, 55);

        //square three
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(15, 212, 363, 67, 12); //speech bubble
        fill(0, 0, 0);
        line(170, 280, 165, 290); //line to bubble
        textSize(20);
       text("THAT'S BETTER . . . LIVE IN DREAD AND FEAR . . . \n                  BE SENSIBLE . . . ", 25,244);

        noStroke();
        fill(54, 145, 194);
        bezier(310, 305, 327, 310, 316, 286, 310, 305); //sweat
        bezier(301, 301, 317, 290, 297, 280, 300, 297.5); //sweat

    } else if (page === 4) {

        // the comic bacgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 149, 390, 57); //ground on the top
        rect(205, 349, 390, 57); //ground on the bottom
        rect(5, 376, 390, 57); //ground on the bottom

        //actual comic with characters and lines
        //square one characters
        image(getImage("cute/CharacterBoy"), 23, 65, 75, 125); //make sure width * 5/3 = height for all characters
        image(getImage("cute/CharacterPinkGirl"), 103, 65, 75, 125);

        //square two characters
        image(getImage("cute/CharacterBoy"), 223, 65, 75, 125);
        image(getImage("cute/CharacterPinkGirl"), 303, 65, 75, 125);
        
        //square three characters
        image(getImage("cute/CharacterBoy"), -21, 158, 180, 300);
        stroke(0, 0, 0);
        strokeWeight(4);
        fill(255, 255, 255);
        arc(72, 353, 36, 32, 0, 180); //smile
        
        line(54, 353, 89, 353);
        line(80, 353, 80, 366);
        line(64, 353, 64, 366);
        line(72, 353, 72, 366);

        fill(0, 0, 0);
        ellipse(37, 344, 8, 10);
        ellipse(104, 344, 8, 10);

        //square four characters
        image(getImage("cute/CharacterBoy"), 223, 265, 75, 125);
        image(getImage("cute/CharacterPinkGirl"), 303, 265, 75, 125);

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //square one dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("fantasy"), 12); //font

        fill(255, 255, 255);
        rect(114, 27, 75, 67, 12); //speech bubble
        fill(0, 0, 0);
        line(130, 95, 135, 105); //line to bubble
        text("    WHY NOT? \n  I'LL BE YOUR \n     CAMPAIN \n    MANAGER !", 121, 45);

        fill(255, 255, 255);
        rect(24, 30, 75, 67, 12); //speech bubble
        fill(0, 0, 0);
        line(82.5, 97.5, 77.5, 107.5); //line to bubble
        text("    SCHOOL \nPRESIDENT? \n          ME?", 34, 55);

        //square two dialogue
        fill(255, 255, 255);
        rect(337.5, 35, 49, 53, 12); //speech bubble
        fill(0, 0, 0);
        line(350, 89, 345, 105); //line to bubble
        text("  THINK \n  OF THE \nPOWER !", 343.5, 52);

        fill(255, 255, 255);
        rect(212, 20, 122, 78, 12); //speech bubble
        fill(0, 0, 0);
        line(282.5, 97.5, 277.5, 107.5); //line to bubble
        text("      BUT I COULD NEVER \nBE SCHOOL PRESIDENT . . . \n    THINK OF THE WORK . . . \n          THINK OF THE \n         RESPONSIBILITY . . .", 215, 37);

        fill(255, 255, 255);

        //thought bubbles to head
        ellipse(133, 310, 8, 8);
        ellipse(140, 304, 12, 12);
        ellipse(146, 294, 18, 18);

        //outer thought bubbles
        ellipse(95, 220, 20, 20); //top left
        ellipse(112, 218, 20, 20);
        ellipse(130, 221, 20, 20);
        ellipse(148, 219, 20, 20);
        ellipse(166, 223, 20, 20);
        ellipse(180, 220, 20, 20); //top right
        ellipse(183, 235, 20, 20);
        ellipse(183, 253, 20, 20);
        ellipse(183, 267, 20, 20);
        ellipse(175, 278, 20, 20); //bottom right
        ellipse(159, 281, 20, 20);
        ellipse(140, 280, 20, 20);
        ellipse(124, 282, 20, 20);
        ellipse(108, 281, 20, 20);
        ellipse(92, 281, 20, 20); //bottom left
        ellipse(88, 265, 20, 20);
        ellipse(84, 248, 20, 20);
        ellipse(86, 230, 20, 20);

        noStroke();
        rect(85, 217, 101, 66, 20);
        //main rectangle cutting off half of the circles

        filter(INVERT); //first invert of a double invert to make sure only a certain part is inverted
        image(getImage("cute/CharacterBoy"), 85, 207, 20, 35); //row one beginning
        image(getImage("cute/CharacterCatGirl"), 105, 207, 20, 35);
        image(getImage("cute/CharacterHornGirl"), 125, 207, 20, 35);
        image(getImage("cute/CharacterPinkGirl"), 145, 207, 20, 35);
        image(getImage("cute/CharacterPrincessGirl"), 165, 207, 20, 35);
        image(getImage("avatars/robot_female_1"), 85, 242, 20, 20); //row two beginning
        image(getImage("avatars/robot_female_3"), 105, 242, 20, 20);
        image(getImage("avatars/robot_male_3"), 125, 242, 20, 20);
        image(getImage("avatars/aqualine-ultimate"), 145, 242, 20, 20);
        image(getImage("avatars/purple-pi"), 165, 242, 20, 20);
        image(getImage("avatars/spunky-sam"), 85, 267, 20, 20); //row three beginning
        image(getImage("creatures/Hopper-Jumping"), 105, 267, 20, 20);
        image(getImage("creatures/OhNoes"), 125, 267, 20, 20);
        image(getImage("avatars/mr-pants"), 145, 267, 20, 20);
        image(getImage("avatars/marcimus"), 165, 267, 20, 20);
        filter(INVERT); //inverts the images to make them look like zombies 
        //Notice that I've left Winston out, because I just can't stand the sight of zombie Winston
        
        textSize(18);
        fill(0, 0, 0);
        text("      WORLD \nDOMINATION", 90, 246);

        //square four dialogue
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(233, 246, 118, 33, 12); //speech bubble
        fill(0, 0, 0);
        line(280, 280, 275, 300); //line to bubble
        textSize(20);
        text("I'LL DO IT ! ! !", 246, 270);

    } else if (page === 5) {

        background(135, 107, 65);

        strokeWeight(10);
        fill(255, 255, 255);
        stroke(0, 0, 0);
        rect(100, 30, 100, 100); //square one whiteboard
        rect(100, 230, 100, 100); //square three whiteboard

        textFont(createFont("fantasy"), 18);
        fill(0, 0, 0);
        text("x + y = 17", 118, 260); //square three whiteboard words
        text(" x - y = 4", 118, 285);
        text("Solve", 127, 315);

        text("x + y = 17", 118, 60); //square one whiteboard words
        text(" x - y = 4", 118, 85);
        text("Solve", 127, 115);

        noStroke();
        fill(97, 84, 58);
        rect(310, 126, 10, 60, 5); //table legs
        rect(360, 126, 10, 60, 5);
        fill(189, 171, 134);
        rect(300, 126, 80, 15, 5); //table top

        fill(97, 84, 58);
        rect(310, 326, 10, 60, 5); //table legs
        rect(360, 326, 10, 60, 5);
        fill(189, 171, 134);
        rect(300, 326, 80, 15, 5); //table top

        fill(125, 83, 62);
        rect(215, 360, 70, 20, 5); //seat on bottom
        rect(215, 160, 70, 20, 5); //seat on top

        fill(255, 255, 255);
        rect(283, 105, 32, 40); //empty homework paper
        rect(283, 305, 32, 40); //empty homework pape

        // the comic grid
        noFill();
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //square one and three characters
        image(getImage("avatars/robot_male_2"), 11, 93, 100, 100);
        image(getImage("avatars/robot_male_2"), 11, 291, 100, 100);

        //square two and four characters
        image(getImage("avatars/mr-pink"), 211, 93, 75, 75);
        image(getImage("avatars/mr-pink"), 211, 293, 75, 75);
        fill(255, 255, 255);
        noStroke();
        ellipse(243, 325, 17, 17); //cover on left eye
        ellipse(263, 325, 17, 17); //cover on right eye
        fill(0, 0, 0);
        ellipse(243, 325, 4, 5); //left pupil
        ellipse(263, 325, 4, 5); //right pupil

        //square one dialogue
        fill(255, 255, 255);
        strokeWeight(1);
        stroke(0, 0, 0);
        rect(37, 14, 106, 80, 10); //speech bubble
        line(65, 95, 62, 103); //line to bubble
        textSize(15);
        fill(0, 0, 0);
        text("Okay class, it's \n    time to go \n  through our \n      essays! ", 45, 22, 100, 400);

        //square two dialogue
        textSize(13);
        fill(255, 255, 255);
        stroke(0, 0, 0);
        rect(217, 15, 75, 42, 10); //speech bubble
        line(248, 57.5, 202, 69); //line to bubble

        fill(0, 0, 0);
        text("   Mr. Pink, \nyou go first.", 225, 33);

        fill(255, 255, 255);
        stroke(0, 0, 0);
        rect(236, 59, 150, 40, 10);
        fill(0, 0, 0);
        text("      Um... In the story, the \nmain character changes... ", 244, 77);

        //square three dialogue
        fill(255, 255, 255);
        strokeWeight(1);
        stroke(0, 0, 0);
        rect(27, 214, 138, 77, 10); //speech bubble
        line(88, 292, 70, 301); //line to bubble
        textSize(15);
        fill(0, 0, 0);
        text("    That was great, \n    Mr. Pink! Could \n   you just repeat \nthe third sentence?", 35, 233);

        //square four dialogue
        fill(255, 255, 255);
        strokeWeight(1);
        stroke(0, 0, 0);
        rect(226, 224, 156, 60, 10); //speech bubble
        line(290, 285, 280, 300); //line to bubble
        textSize(15);
        fill(0, 0, 0);
        text(" Well . . . That's a great \n    question. Can I get \nback to you on that???", 234, 242);

        //square two continued
        textFont(createFont("Times"), 10);
        strokeWeight(6);
        fill(250, 250, 250);
        rect(314, 8, 80, 46); //note in top right corner
        fill(0, 0, 0);
        text("    Mr. Pink begins \n   talking off the top \n      of his head.", 308, 16, 106, 100);

        //square two and four paper text
        textSize(10);
        text(" HW:\n NOT \nDONE", 285, 117);
        text(" HW:\n NOT \nDONE", 285, 317);

    } else if (page === 6) {

        // the comic bacgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 165, 390, 33); //ground on the top
        rect(5, 365, 390, 33); //ground on the bottom

        /* For all the drawStickman that end with one or two falses, I just leave it blank. 
        If it isn't there, it is assumed that it is false, meaning less code to write. */
        var drawStickman = function(x, y, up, crazy) {
            fill(255, 255, 255);
            stroke(0, 0, 0);
            ellipse(x, y, 25, 25); //head

            line(x, y + 12.5, x, y + 58); //main body 

            fill(66, 65, 65);
            ellipse(x - 5, y, 5, 5); //eyes
            ellipse(x + 5, y, 5, 5);

            line(x + 0.5, y + 58, x + 6, y + 76); //feet
            line(x + 0.5, y + 58, x - 6, y + 76);

            if (up) {
                if (crazy) {
                    line(x, y + 30, x + 20, y - 25 + hopper1Y / 2); //crazy waving hands
                    line(x, y + 30, x - 20, y - 25 + hopper1Y / 2);
                } else {
                    line(x, y + 30, x + 20, y + 20); //still hands upward
                    line(x, y + 30, x - 20, y + 20);
                }
            } else {
                line(x, y + 30, x + 8, y + 45); //still hands downward
                line(x, y + 30, x - 8, y + 45);
            }

        };

        //actual comic with characters and lines
        //square one characters
        drawStickman(57, 100, true);
        drawStickman(157, 100, true);

        //square two characters
        drawStickman(257, 100);
        line(257.5, 98, 265, 96); //inquisitive eyebrows
        drawStickman(357, 100);

        //square three characters
        drawStickman(57, 300);
        line(60, 294, 63, 294); //angry eyebrows
        line(54, 294, 50, 294);
        drawStickman(157, 300);

        //square four characters
        drawStickman(257, 300, true);
        line(257.5, 298, 265, 296); //angry eyebrown
        line(256.5, 298, 249, 296);
        line(270, 323, 268, 300); //arm to head (moves based on Hopper's y value from before)
        fill(117, 226, 245);
        noStroke();
        rect(271, 319, 10, 10, 10); //covers rest of arm
        drawStickman(357, 300, true, true);

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //square one dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("cursive"), 12); //font

        fill(255, 255, 255);
        rect(114, 16, 75, 67, 12); //speech bubble
        fill(0, 0, 0);
        line(137, 84, 140, 96); //line to bubble
        text("     Sure. \nWhat's up?\n       ...\n  CTRL+S", 121, 33);

        fill(255, 255, 255);
        rect(8, 58, 108, 26, 12); //speech bubble
        fill(0, 0, 0);
        line(82, 86, 77, 96); //line to bubble
        text("Hey. Can we talk?", 14, 75);

        //square two dialogue
        fill(255, 255, 255);
        rect(320, 41, 64, 40, 12); //speech bubble
        fill(0, 0, 0);
        line(337, 83, 340, 93); //line to bubble
        text("Nothing...\n CTRL+Z", 326, 60);

        fill(255, 255, 255);
        rect(214, 32, 93, 43, 12); //speech bubble
        fill(0, 0, 0);
        line(282, 76, 277, 86); //line to bubble
        text("Hold on. What \ndid you say???", 222, 51);

        //square three dialogue
        fill(255, 255, 255);
        rect(116, 261, 56, 22, 12); //speech bubble
        fill(0, 0, 0);
        line(137, 284, 140, 296); //line to bubble
        text("ALT+F4", 121, 278);

        fill(255, 255, 255);
        rect(8, 235, 107, 50, 12); //speech bubble
        fill(0, 0, 0);
        line(82, 286, 77, 296); //line to bubble
        text("Did you seriously \njust try to 'undo' \n  what you said?", 14, 251);

        //square four dialogue
        fill(255, 255, 255);
        rect(211, 210, 107, 62, 12); //speech bubble
        fill(0, 0, 0);
        line(243, 273, 248, 282); //line to bubble
        text("This is exactly \nwhat I was going \nto talk to you \nabout...", 220, 226);

        fill(255, 255, 255);
        rect(264, 262, 127, 34, 12); //speech bubble
        fill(0, 0, 0);
        line(337, 297, 340, 301); //line to bubble
        text("CTRL+ALT+DELETE!!\nCTRL+ALT+DELETE!!", 270, 277);

    } else if (page === 7) {

        // the comic backgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 142, 390, 57); //ground on the top
        rect(5, 342, 390, 57); //ground on the bottom

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //actual comic with characters and lines
        //square one characters
        image(getImage("avatars/orange-juice-squid"), 15, 85, 75, 75);

        //square two characters
        image(getImage("avatars/orange-juice-squid"), 226, 85, 75, 75);
        image(getImage("avatars/purple-pi"), 303, 100, 75, 75);
        fill(0, 0, 0);
        noStroke();
        rect(333, 126, 6, 7, 5); //open mouth

        //square three characters
        image(getImage("avatars/orange-juice-squid"), 15, 285, 75, 75);
        image(getImage("avatars/purple-pi"), 103, 300, 75, 75);
        stroke(0, 0, 0);
        strokeWeight(2);
        line(138, 328, 135, 328); //closed mouth

        //square four characters
        image(getImage("avatars/orange-juice-squid"), 226, 285, 75, 75);
        image(getImage("avatars/purple-pi"), 303, 300, 75, 75);
        noFill();
        arc(337, 333, 5, 10, 221, 323); //frown

        //function for the table
        var drawTable = function(x, y) {
            noStroke();
            fill(121, 158, 163);
            rect(x - 35, y, 80, 15, 5);
            rect(x - 28, y, 10, 50, 5);
            rect(x + 28, y, 10, 50, 5);
            fill(255, 255, 255);
            rect(x - 18, y + 10, 47, 33);
            fill(0, 0, 0);
            textFont("cursive", 9);
            text("FREE \n  HIGH \n    FIVES", x - 13, y + 21);
        };

        drawTable(50, 136);
        drawTable(250, 136);
        drawTable(50, 336);
        drawTable(260, 336);

        //square two dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("fantasy"), 14); //font
        fill(255, 255, 255);
        rect(227, 41, 145, 31, 12); //speech bubble
        fill(0, 0, 0);
        line(310, 74, 315, 84); //line to bubble
        text("You got any down lows?", 236, 62);

        //square three dialogue
        fill(255, 255, 255);
        rect(27, 241, 131, 31, 12); //speech bubble
        fill(0, 0, 0);
        line(75, 283, 80, 273); //line to bubble
        text("Sorry, we're all out . . .", 36, 262);

        //square four dialogue
        fill(255, 255, 255);
        rect(227, 241, 131, 31, 12); //speech bubble
        fill(0, 0, 0);
        line(285, 283, 290, 273); //line to bubble
        text("You were too slow.", 242, 262);

    } else if (page === 8 || page === 9) {
        // the comic backgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 162, 390, 40); //ground on the top
        rect(5, 362, 390, 40); //ground on the bottom

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //actual comic with characters and lines
        //square one characters

        image(getImage("avatars/leafers-ultimate"), 103, 105, 75, 75);
        image(getImage("avatars/mr-pants"), 23, 105, 75, 75);
        strokeWeight(3);
        line(91, 153, 92, 130);

        //square two characters

        line(316, 162, 302, 141);
        image(getImage("avatars/leafers-ultimate"), 303, 105, 75, 75);
        image(getImage("avatars/mr-pants"), 223, 105, 75, 75);

        //square three characters

        line(143, 362, 123, 351);
        image(getImage("avatars/leafers-ultimate"), 130, 305, 75, 75);
        image(getImage("avatars/mr-pants"), 23, 305, 75, 75);

        fill(90, 148, 81);
        noStroke();
        rect(90, 334, 20, 10); //piles of money in square three
        rect(90, 345, 20, 10);
        rect(90, 323, 20, 10);
        rect(90, 312, 20, 10);

        fill(199, 187, 157);
        rect(97.5, 334, 5, 10); //wrapping on piles of money
        rect(97.5, 345, 5, 10);
        rect(97.5, 323, 5, 10);
        rect(97.5, 312, 5, 10);

        noFill();
        stroke(255, 170, 0);
        arc(130, 330, 20, 20, 90, 270); //magical glow
        arc(130, 350, 20, 20, 90, 270);
        arc(130, 310, 20, 20, 80, 220);
        arc(113, 298, 20, 20, 30, 180);

        //square four characters

        image(getImage("avatars/mr-pants"), 223, 305, 75, 75);
        stroke(0, 0, 0);
        line(325 + leaferX, 362, 311 + leaferX, 341);
        image(getImage("avatars/leafers-ultimate"), 315 + leaferX, 305, 75, 75);

        fill(90, 148, 81);
        noStroke();
        rect(290, 334, 20, 10); //piles of money in square four
        rect(290, 345, 20, 10);
        rect(290, 323, 20, 10);
        rect(290, 312, 20, 10);

        fill(199, 187, 157);
        rect(297.5, 334, 5, 10); //wrapping on packs of money
        rect(297.5, 345, 5, 10);
        rect(297.5, 323, 5, 10);
        rect(297.5, 312, 5, 10);

        //square one dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("fantasy"), 12); //font
        fill(255, 255, 255);
        rect(14, 20, 123, 42, 13); //speech bubble
        fill(0, 0, 0);
        line(52, 63, 57, 81); //line to bubble
        text("     Dude! Check it out! \nI found a magic wand!!!", 21, 39);

        fill(255, 255, 255);
        rect(75, 62, 107, 42, 13); //speech bubble
        fill(0, 0, 0);
        line(105, 105, 110, 114); //line to bubble
        text("Woah! Let me see! \n   Can I have it???", 86, 81);

        //square two dialogue
        fill(255, 255, 255);
        rect(214, 53, 99, 42, 13); //speech bubble
        fill(0, 0, 0);
        line(242, 96, 247, 106); //line to bubble
        text("  Yeah... For like a \nthousand dollars!", 221, 73);

        fill(255, 255, 255);
        rect(327, 52, 50, 42, 13); //speech bubble
        fill(0, 0, 0);
        line(346, 95, 341, 105); //line to bubble
        text("Okay...\n deal.", 338, 71);

        //square three dialogue
        fill(255, 255, 255);
        rect(14, 257, 123, 25, 13); //speech bubble
        fill(0, 0, 0);
        line(52, 297, 45, 284); //line to bubble
        text("WOW!!! Thanks, buddy!", 21, 276);

        //square four dialogue
        fill(255, 255, 255);
        rect(234, 253, 123, 25, 13); //speech bubble
        fill(0, 0, 0);
        line(271, 290, 275, 280); //line to bubble

        if (leaferX < 80) {
            text("What a deal!", 260, 270);
        } else {
            text("Wait...", 280, 270);
        }

        //square three top note
        textFont(createFont("cursive"), 12);
        text("A thousand dollars appears \n          in his hands!", 26, 230);

        noStroke();
        fill(147, 193, 199);
        rect(257, 340, 10, 10); //covers original mouth

        //smile turning into frown based on leafer's x coordinate
        fill(0, 0, 0);
        stroke(0, 0, 0);
        bezier(255, 343 + leaferX / 40, 259, 343 - leaferX / 10 + 5, 263, 343 - leaferX / 10 + 5, 267, 343 + leaferX / 40);

    } else if (page === 10) {

        // the comic backgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 162, 390, 40); //ground on the top
        rect(5, 362, 390, 40); //ground on the bottom

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        var drawLightbulb = function(x, y, size) {
            noStroke();
            fill(255, 243, 112, 185); //semi transparent fill for the main lightbulb to show its glowing
            ellipse(x, y, size, size); //three circles making it less transparent toward the center
            ellipse(x, y, size / 1.5, size / 1.5);
            ellipse(x, y, size / 3, size / 3);

            fill(255, 243, 112);
           rect(x - size / 4, y + size / 3, size / 2, size / 1.15 - size / 2.5, size / 5); //base of lightbulb

            stroke(135, 130, 125);
            strokeWeight(size / 17);
            line(x - size / 4, y + size / 2.1, x + size / 5, y + size / 2.1); //lines on lightbulb base
            line(x - size / 4, y + size / 1.75, x + size / 5, y + size / 1.75);
            line(x - size / 4.5, y + size / 1.5, x + size / 5.5, y + size / 1.5);
        };

        //actual comic with characters and lines
        //square one characters

        image(getImage("avatars/piceratops-tree"), 103, 105, 75, 75);
        image(getImage("avatars/aqualine-sapling"), 23, 105, 75, 75);
        strokeWeight(3);

        //square two characters

        image(getImage("avatars/piceratops-tree"), 303, 105, 75, 75);
        image(getImage("avatars/aqualine-sapling"), 223, 105, 75, 75);
        drawLightbulb(261, 92, 20); //lightbulb above aqualine signifying an idea

        //square three characters
        image(getImage("avatars/piceratops-tree"), 119, 305, 75, 75);
        image(getImage("avatars/aqualine-sapling"), 23, 305, 75, 75);
        drawLightbulb(110, 267, hopper1Y / 2); //lightbulb changing size based on Leafer's x coordinate

        //square four characters
        image(getImage("avatars/aqualine-sapling"), 223, 305, 75, 75);
        image(getImage("avatars/piceratops-tree"), 315, 305, 75, 75);
        drawLightbulb(374, 339, 20); //lightbulb places in piceratop's hand

        //square one dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("fantasy"), 12); //font
        fill(255, 255, 255);
        rect(7, 74, 81, 42, 13); //speech bubble
        fill(0, 0, 0);
        line(39, 127, 35, 117); //line to bubble
        text("We are out of \nLIGHT BULBS!", 16, 92);

        fill(255, 255, 255);
        rect(82, 34, 113, 55, 13); //speech bubble
        fill(0, 0, 0);
        line(115, 91, 120, 111); //line to bubble
        text(" What are we going \n   to do? The stores \nare all closed today.", 89, 51);

        //square two dialogue
        fill(255, 255, 255);
        rect(214, 53, 123, 29, 13); //speech bubble
        fill(0, 0, 0);
        line(274, 84, 272, 100); //line to bubble
        text("I have an amazing idea!", 221, 73);

        //square four dialogue
        fill(255, 255, 255);
        rect(214, 257, 126, 39, 13); //speech bubble
        fill(0, 0, 0);
        line(252, 307, 245, 298); //line to bubble
        text("Sometimes, it pays to \nbe a cartoon character!", 221, 276);

    } else if (page === 11) {

        background(71, 158, 71);
        textSize(19);
        text("AND... the grand finale!", 111, 200);

    } else if (page === 12) {

        var drawTree = function(x, y) {
            fill(87, 64, 35);
            rect(x - 10, y, 20, 80); //main trunk
            strokeWeight(10);
            stroke(87, 64, 35);
            line(x, y + 10, x + 50, y - 50); //branches
            line(x, y + 10, x - 50, y - 50);
            line(x, y + 10, x, y - 70);
            strokeWeight(5);
            line(x - 10, y - 20, x - 27, y - 2); //mini branches
            line(x + 10, y - 30, x + 31, y - 12);
            image(getImage("avatars/leaf-green"), x + 20, y - 37, 30, 30); //laves scattered on the tree
            image(getImage("avatars/leaf-green"), x, y - 67, 30, 30);
            image(getImage("avatars/leaf-green"), x - 45, y - 57, 30, 30);
            image(getImage("avatars/leaf-green"), x, y - 10, 30, 30);
            image(getImage("avatars/leaf-green"), x - 50, y, 30, 30);
        };

        // the comic bacgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 165, 390, 33); //ground on the top
        rect(5, 365, 390, 33); //ground on the bottom

        drawTree(154, 90); //tree in first square
        drawTree(354, 290); //tree in fourth square

        //actual comic with characters and lines
        //square one characters
        image(getImage("avatars/old-spice-man"), 20, 100, 75, 75);
        image(getImage("avatars/spunky-sam"), 100, 100, 75, 75);
        fill(118, 184, 41);
        noStroke();
        rect(47, 138, 20, 13, 10); //covers mouth
        stroke(0, 0, 0);
        strokeWeight(1);
        arc(57, 148, 12, 10, 250, 290); //frown

        //square two characters
        image(getImage("avatars/old-spice-man"), 220, 100, 75, 75);
        image(getImage("avatars/spunky-sam"), 300, 100, 75, 75);

        //square three characters
        image(getImage("avatars/old-spice-man"), 20, 300, 75, 75);
        image(getImage("avatars/spunky-sam"), 100, 300, 75, 75);
        fill(118, 184, 41);
        noStroke();
        rect(47, 338, 20, 13, 10); //covers mouth
        stroke(0, 0, 0);
        strokeWeight(1);
        arc(57, 348, 12, 10, 240, 300); //frown

        //square four characters
        image(getImage("avatars/old-spice-man"), 220, 300, 75, 75);
        image(getImage("avatars/spunky-sam"), 300, 300, 75, 75);
        fill(118, 184, 41);
        noStroke();
        rect(247, 338, 20, 13, 10); //cover mouth
        stroke(0, 0, 0);
        strokeWeight(1);
        arc(257, 348, 12, 10, 240, 300); //frown

        noStroke();
        fill(255, 255, 255);
        ellipse(251, 331, 8, 8); //covers old eyes
        ellipse(264, 331, 8, 8);
        stroke(0, 0, 0);
        ellipse(251, 328.5, 2, 2); //pupils
        ellipse(264, 328.5, 2, 2);

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);
        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //square one dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("fantasy"), 12); //font
        fill(255, 255, 255);
        rect(14, 34, 175, 45, 12); //speech bubble
        fill(0, 0, 0);
        line(103, 80, 110, 96); //line to bubble
        text("See these leaves, Old Spice Man? \n  They're flying south for Winter!!!", 21, 55);

        //square two dialogue
        fill(255, 255, 255);
        rect(248, 41, 124, 55, 12); //speech bubble
        fill(0, 0, 0);
        line(300, 97, 290, 108); //line to bubble
        text("  What make you think \nthese leaves are flying \n   south, Spunky Sam?", 256, 60);

        //square three dialogue
        fill(255, 255, 255);
        rect(50, 224, 110, 65, 12); //speech bubble
        fill(0, 0, 0);
        line(92, 290, 101, 300); //line to bubble
        text(" When you look at a \nmap, north is up, and \n  south is down, isn't \n     it? Well, isn't it?", 57, 241);

        //square four dialogue
        fill(255, 255, 255);
        rect(230, 226, 154, 52, 12); //speech bubble
        fill(0, 0, 0);
        line(295, 279, 311, 289); //line to bubble
        text("Old Spice Man, you see these \n    leaves? These leaves are \n      flying south for Winter!!!", 240, 243);

    } else if (page === 13) {

        background(212, 112, 212);
        textSize(25);
        text("And here's the awkward \n    little comic after the \n           grand finale!", 70, 180);

    } else if (page === 14) {

        fill(255, 235, 235);
        background(46, 48, 82);

        image(getImage("avatars/old-spice-man"), -10, 266); //characters
        image(getImage("creatures/Hopper-Happy"), 100, 266);
        image(getImage("creatures/Hopper-Cool"), 230, 345, 50, 50);
        image(getImage("creatures/Hopper-Jumping"), 230, 280, 50, 50);
        image(getImage("avatars/spunky-sam"), 284, 266);

        // the comic backgrounds and setting
        background(117, 226, 245);
        noStroke();
        fill(44, 158, 27); //grassy green
        rect(5, 142, 390, 57); //ground on the top
        rect(5, 342, 390, 57); //ground on the bottom

        // the comic grid
        noFill();
        strokeWeight(10);
        stroke(0, 0, 0);

        rect(5, 5, 195, 192.5); // upper left
        rect(205, 5, 189.5, 192.5); // upper right
        rect(5, 202.5, 195, 192.5); // bottom left
        rect(205, 202.5, 189.5, 192.5); // bottom right

        //actual comic with characters and lines
        //square one characters
        image(getImage("avatars/orange-juice-squid"), 15, 85, 75, 75);

        //square two characters
        image(getImage("avatars/orange-juice-squid"), 226, 85, 75, 75);

        //square three characters
        image(getImage("avatars/orange-juice-squid"), 15, 285, 75, 75);

        //square four characters
        image(getImage("avatars/orange-juice-squid"), 226, 285, 75, 75);

        //function for the table
        var drawFan = function(x, y) {

            noStroke();
            fill(93, 124, 128);
            ellipse(x, y + 20, 70, 20); //fan base

            rect(x - 10, y - 30, 20, 50, 5); //fan holder

            fill(172, 179, 189);
            ellipse(x, y - 30, 25, 25); //circle inside fan

            bezier(x, y - 30, x + 54, y - 60, x + 54, y - 20, x + 35, y - 20); //four fan blades
            bezier(x, y - 30, x - 54, y - 60, x - 54, y - 20, x - 35, y - 20);
            bezier(x, y - 30, x - 29, y - 70, x + 2, y - 90, x + 12, y - 60);
            bezier(x, y - 30, x - 29, y + 10, x + 6, y + 30, x + 10, y);

            strokeWeight(4);
            stroke(138, 146, 158);
            fill(172, 179, 189, 150); //translucent fill
            ellipse(x, y - 30, 100, 100); //outer rim
            ellipse(x, y - 30, 40, 40); //inner rim

        };

        drawFan(140, 136); //four fans, one in each square
        drawFan(340, 136);
        drawFan(140, 336);
        drawFan(340, 336);
        
        //square one dialogue
        strokeWeight(1.7);
        stroke(0, 0, 0);
        textFont(createFont("fantasy"), 14); //font
        fill(255, 255, 255);
        rect(27, 41, 152, 31, 12); //speech bubble
        fill(0, 0, 0);
        line(75, 83, 80, 73); //line to bubble
        text("Look! It's one of my fans!", 36, 62);

        //square two dialogue
        fill(255, 255, 255);
        rect(227, 41, 127, 31, 12); //speech bubble
        fill(0, 0, 0);
        line(275, 83, 280, 73); //line to bubble
        text("I have many fans . . .", 236, 62);

        //square three dialogue
        fill(255, 255, 255);
        rect(7, 241, 195, 31, 12); //speech bubble
        fill(0, 0, 0);
        line(75, 283, 80, 273); //line to bubble
        text("Only one of them is an actual fan.", 13, 262);

        //square four dialogue
        fill(255, 255, 255);
        rect(227, 241, 131, 31, 12); //speech bubble
        fill(0, 0, 0);
        line(285, 283, 290, 273); //line to bubble
        text("The rest hate me.", 242, 262);

    } else if (page > 14) {

        background(161, 101, 230);
        stroke(201, 125, 201);
        strokeWeight(1);
        fill(207, 180, 207);

        //background pattern
        for (var i = 10; i < 400; i += 20) {
            for (var j = 10; j < 400; j += 20) {
                triangle(2 * i, 2 * j, i ^ 2 / 2, j ^ 2, 2 ^ i, 2 ^ j);
            }
        }
        fill(218, 217, 235);
        textFont(createFont("fantasy"), 50);
        text("Thank you for \n   reading my \n       comics.", 60, 157); //end text

    }

    //Puts an instruction screen on top of the original screen.
    if (instructions) {
        textFont(createFont("fantasy"), 10);

        fill(0, 100, 100, 100);
        rect(0, 0, 400, 400);
        fill(27, 27, 48);
        textSize(22);
        text("Press    ENTER    to open and \n      close the instructions\n\n          Press the right arrow \nor click to go to the next page\n\n         Press the left arrow \n           to go back a page", 70, 106); //text in the back
        fill(255, 255, 255);
        textSize(20);
        text("Press    ENTER    to open and \n      close the instructions.\n\n           Press the right arrow \nor click to go to the next page\n\n         Press the left arrow \n           to go back a page", 80, 112); //text in the fron

    }
};