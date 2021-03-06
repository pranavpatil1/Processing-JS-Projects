var pixel = function(message, x, y, size, colors, textWidth, textHeight) {

    //colors the specified colors
    fill(colors);
    stroke(colors);
    strokeWeight(2);

    //moves to x and y
    pushMatrix();
    translate(x, y);

    //shinks to proper size, given most letters are 70 by 70
    scale(size / 70);

    var letter; //which letter you are on
    var letterX = -80; //the x pos of that letter (saying x and y are at (0, 0))
    var letterY = 0; //the y pos of that letter (saying x and y are at (0, 0))

    //goes through each letter in the string
    for (var a = 0; a < message.length; a++) {

        //letter variable changes to the cooresponding letter
        letter = message.charAt(a);

        //x pos increases by 80 to leave a 10 space (w/o scale) 
        letterX += 80;

        //checks if the x value of the letter is going to be past the specified maximum
        if (letterX > textWidth * 70 / size - 80) {

            //if so reset it to 0 
            letterX = 0;

            //if the letter is a space
            if (letter === " ") {

                letterX -= 50; //move the x pos of it back 50 (will move 30 later)

            }

            letterY += 120; //move a line down (leaving a 10 space)

        }

        //begin writing
        pushMatrix();

        //move to x and y of the specific letter
        translate(letterX, letterY);

        if (letter === "a" | letter === "b" | letter === "c" | letter === "d" | letter === "e" | letter === "f" | letter === "g" | letter === "h" | letter === "i" | letter === "j" | letter === "k" | letter === "l" | letter === "m" | letter === "n" | letter === "o" | letter === "p" | letter === "q" | letter === "r" | letter === "s" | letter === "t" | letter === "u" | letter === "v" | letter === "w" | letter === "x" | letter === "y" | letter === "z") {

            translate(0, 17);
            scale(0.75);

        }

        //goes and checks through multiple numbers and symbols
        if (letter === "a" | letter === "A") {

            rect(0, 20, 20, 20);
            rect(0, 40, 70, 10);
            rect(0, 50, 20, 20);
            rect(10, 10, 20, 10);
            rect(20, 0, 30, 10);
            rect(40, 10, 20, 10);
            rect(50, 20, 20, 20);
            rect(50, 50, 20, 20);

        } else if (letter === "b" | letter === "B") {

            rect(0, 0, 60, 10);
            rect(0, 10, 20, 20);
            rect(0, 30, 60, 10);
            rect(0, 40, 20, 20);
            rect(0, 60, 60, 10);
            rect(50, 10, 20, 20);
            rect(50, 40, 20, 20);

        } else if (letter === "c" | letter === "C") {

            rect(0, 20, 20, 30);
            rect(10, 10, 20, 10);
            rect(10, 50, 20, 10);
            rect(20, 0, 40, 10);
            rect(20, 60, 40, 10);
            rect(50, 10, 20, 10);
            rect(50, 50, 20, 10);

        } else if (letter === "d" | letter === "D") {

            rect(0, 0, 50, 10);
            rect(0, 10, 20, 50);
            rect(0, 60, 50, 10);
            rect(40, 10, 20, 10);
            rect(40, 50, 20, 10);
            rect(50, 20, 20, 30);

        } else if (letter === "e" | letter === "E") {

            rect(0, 0, 60, 10);
            rect(0, 10, 20, 20);
            rect(0, 30, 50, 10);
            rect(0, 40, 20, 20);
            rect(0, 60, 70, 10);

        } else if (letter === "f" | letter === "F") {

            rect(0, 0, 70, 10);
            rect(0, 10, 20, 20);
            rect(0, 30, 60, 10);
            rect(0, 40, 20, 30);

        } else if (letter === "g" | letter === "G") {

            rect(0, 20, 20, 30);
            rect(10, 10, 20, 10);
            rect(10, 50, 20, 10);
            rect(20, 0, 50, 10);
            rect(20, 60, 50, 10);
            rect(40, 30, 30, 10);
            rect(50, 40, 20, 20);

        } else if (letter === "h" | letter === "H") {

            rect(0, 0, 20, 30);
            rect(0, 30, 70, 10);
            rect(0, 40, 20, 30);
            rect(50, 0, 20, 30);
            rect(50, 40, 20, 30);

        } else if (letter === "i" | letter === "I") {

            //enlarged (widened) pixels to create uniformity in width (10 by 11.5)
            rect(0, 0, 70, 10);
            rect(0, 60, 70, 10);
            rect(23, 10, 23, 50);

        } else if (letter === "j" | letter === "J") {

            rect(0, 50, 20, 10);
            rect(10, 60, 50, 10);
            rect(50, 0, 20, 60);

        } else if (letter === "k" | letter === "K") {

            rect(0, 0, 20, 30);
            rect(0, 30, 40, 10);
            rect(0, 40, 50, 10);
            rect(0, 50, 20, 20);
            rect(30, 20, 20, 10);
            rect(30, 50, 30, 10);
            rect(40, 10, 20, 10);
            rect(40, 60, 30, 10);
            rect(50, 0, 20, 10);

        } else if (letter === "l" | letter === "L") {

            rect(0, 0, 20, 60);
            rect(0, 60, 70, 10);

        } else if (letter === "m" | letter === "M") {

            rect(0, 0, 20, 10);
            rect(0, 10, 30, 10);
            rect(0, 20, 70, 10);
            rect(0, 30, 20, 40);
            rect(30, 30, 10, 10);
            rect(40, 10, 30, 10);
            rect(50, 0, 20, 10);
            rect(50, 30, 20, 40);

        } else if (letter === "n" | letter === "N") {

            rect(0, 0, 20, 10);
            rect(0, 10, 30, 10);
            rect(0, 20, 40, 10);
            rect(0, 30, 20, 40);
            rect(30, 30, 40, 10);
            rect(40, 40, 30, 10);
            rect(50, 0, 20, 30);
            rect(50, 50, 20, 20);

        } else if (letter === "o" | letter === "O") {

            rect(0, 10, 20, 50);
            rect(10, 0, 50, 10);
            rect(10, 60, 50, 10);
            rect(50, 10, 20, 50);

        } else if (letter === "p" | letter === "P") {

            rect(0, 0, 60, 10);
            rect(0, 10, 20, 30);
            rect(0, 40, 60, 10);
            rect(0, 50, 20, 20);
            rect(50, 10, 20, 30);

        } else if (letter === "q" | letter === "Q") {

            rect(0, 10, 20, 50);
            rect(10, 0, 50, 10);
            rect(10, 60, 40, 10);
            rect(30, 40, 40, 10);
            rect(40, 50, 20, 10);
            rect(50, 10, 20, 30);
            rect(60, 60, 10, 10);

        } else if (letter === "r" | letter === "R") {

            rect(0, 0, 60, 10);
            rect(0, 10, 20, 30);
            rect(0, 40, 50, 10);
            rect(0, 50, 20, 20);
            rect(30, 50, 30, 10);
            rect(40, 30, 20, 10);
            rect(40, 60, 30, 10);
            rect(50, 10, 20, 20);

        } else if (letter === "s" | letter === "S") {

            rect(0, 10, 20, 20);
            rect(0, 50, 20, 10);
            rect(10, 0, 40, 10);
            rect(10, 30, 50, 10);
            rect(10, 60, 50, 10);
            rect(40, 10, 20, 10);
            rect(50, 40, 20, 20);

        } else if (letter === "t" | letter === "T") {

            //just like when widening I, 10 to 11.5
            rect(0, 0, 70, 10);
            rect(23, 10, 23, 60);

        } else if (letter === "u" | letter === "U") {

            rect(0, 0, 20, 60);
            rect(10, 60, 50, 10);
            rect(50, 0, 20, 60);

        } else if (letter === "v" | letter === "V") {

            rect(0, 0, 20, 40);
            rect(10, 40, 20, 10);
            rect(20, 50, 30, 10);
            rect(30, 60, 10, 10);
            rect(40, 40, 20, 10);
            rect(50, 0, 20, 40);

        } else if (letter === "w" | letter === "W") {

            rect(0, 0, 20, 30);
            rect(0, 30, 70, 20);
            rect(0, 50, 30, 10);
            rect(0, 60, 20, 10);
            rect(30, 20, 10, 10);
            rect(40, 50, 30, 10);
            rect(50, 0, 20, 30);
            rect(50, 60, 20, 10);

        } else if (letter === "x" | letter === "X") {

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

        } else if (letter === "y" | letter === "Y") {

            //just like I and T, y is widened by a scale of 1.15
            rect(0, 0, 23, 30);
            rect(11.5, 30, 46, 10);
            rect(23, 40, 23, 30);
            rect(46, 0, 23, 30);

        } else if (letter === "z" | letter === "Z") {

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
            rect(11.5, 10, 10, 10);
            rect(23, 0, 23, 60);

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

        } else if (letter === ":") {
            
            rect(0, 20, 20, 20);
            rect(0, 50, 20, 20);
            
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

        //lower case letter spacing

        if (letter === "a" | letter === "b" | letter === "c" | letter === "d" | letter === "e" | letter === "f" | letter === "g" | letter === "h" | letter === "i" | letter === "j" | letter === "k" | letter === "l" | letter === "m" | letter === "n" | letter === "o" | letter === "p" | letter === "q" | letter === "r" | letter === "s" | letter === "t" | letter === "u" | letter === "v" | letter === "w" | letter === "x" | letter === "y" | letter === "z") {

            letterX -= 18;

        }

        //exceptions
        if (letter === "(" | letter === ")" | letter === " ") { //with parenthesis or a space

            letterX -= 30; //decrease the x of the NEXT letter by 30

        } else if (letter === "." | letter === "," | letter === ":") { //period of comma

            letterX -= 50; //decrease the x of the NEXT letter by 50

        } else if (letter === "!") {

            letterX -= 20; //decrease the x of the NEXT letter by 20

        }

    }

    popMatrix();

};

//An array for each of the level maps. Each number represents a 40 by 40 square. 0 represents an open path, 1 a wall
var maps = [
    [
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [2, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    ],//level 1
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
        [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ],//level 2
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    ],//level 3... especially proud of this map :)
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],//level 4
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 0, 1, 1, 0, 1, 0, 2, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ], //level 5
    [
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ]//level 6
];

//which page you are on : home, level select, game, pause, end game
var screen = "home";

var endResult = "playing";

//which tower is selected, 1 = red, 2 = orange, 3 = purple, 4 = gear(upgrades)
var selection = 0;

//an empty array of blocks which will be filled with all of the 
var blocks = [];

//which level you are on
var mapNum = 0;

//whether or not the menu is open
var menu = false;

//a list of how the enemies will come in (used to organize)
var enemySort = [ //0 = blank spot, 1 = enemy 1 (red), 2 = enemy 2 (orange), 3 = enemy 3 (purple)
    
    //level 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    
    //level 2, if you can get through the beginning, the end will be easy, but reds by themselves will not get you through this one easily
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    
    //level 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    
    //level 4, no real strategy except SAVE UP FOR THE END
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 4, 0, 0, 4, 0, 0, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    
    //level 5, a steady stream of each type of enemy, which will force you to make only smart decisions
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 4],

    //level 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    
];

//a list of all the enemies (array per each level, keeping things uniform (uses mapNum everywhere))
var enemy = [
    [],
    [],
    [],
    [],
    [],
    []
];

//a list of all the towers
var towers = [];

//whether or not your mouse is clicking an open area (for towers)
var openSlot = true;

//array with all the bullets the towers shoot
var bullets = [];

var shakeTime = [];

//one frame delay so that all shots are aimed
var shootDelay = false;

//how many coins you have
var coins = 250;

//chance you get extra coins when an enemy falls
var chance = 0;

//x, y, health, original amount of health (of the castle at the end)
var endPos = [0, 0, 500, 500];

//first frame of a level
var first = true;

//first frame, but after first if (see code)
var secondFrame = true;

//if one of the directions is open when hitting a wall
var opening = false;

var titleShip = function(x, y) {
    
    pushMatrix();
    
    translate(x, y);
    
    noStroke();
    
    fill(107, 44, 13);
    rect(4, 6, 10, 28);
    
    fill(143, 97, 29);
    rect(10, 16, 2, 6);
    rect(10, 4, 2, 2);
    rect(12, 24, 2, 8);
    rect(12, 6, 2, 4);
    rect(14, 14, 2, 10);
    rect(2, 22, 2, 2);
    rect(4, 10, 8, 2);
    rect(4, 12, 2, 2);
    rect(4, 24, 2, 8);
    rect(4, 26, 10, 2);
    rect(4, 32, 10, 2);
    rect(4, 6, 2, 4);
    rect(6, 20, 4, 2);
    rect(6, 4, 2, 2);
    
    fill(255, 255, 255);
    rect(0, 20, 2, 2);
    rect(12, 10, 6, 2);
    rect(2, 18, 4, 2);
    rect(4, 14, 6, 4);
    rect(8, 12, 6, 2);
    
    fill(0, 0, 0);
    rect(0, 22, 2, 2);
    rect(10, 14, 4, 2);
    rect(14, 12, 4, 2);
    rect(2, 20, 4, 2);
    rect(6, 16, 4, 2);
    rect(8, 0, 2, 6);
    
    popMatrix();
    
};

//function for drawing a bunch of squares which are different shades of blue
var drawWater = function() {
    
    noStroke();
    //draws a 40 by 40 pixelated square of water
    for (var i = 0; i < 40; i += 2.5) {
    
        for (var j = 0; j < 40; j += 2.5) {
    
            fill(33 - random(20), 30 - random(18), 170 - random(20));
            rect(i, j, 3, 3);
    
        }
    
    }
    
};

//draws all the beginning drawings
{
//draws a 40 by 40 pixelated square of grass for the walls
noStroke();
//draws a pixelated bright bullet

fill(255, 0, 0); //bright red in the middle
rect(2.5, 2.5, 2.5, 2.5);
rect(5, 5, 2.5, 2.5);

fill(0, 21, 255); //blue corners
rect(0, 0, 2.5, 2.5);
rect(0, 7.5, 2.5, 2.5);
rect(7.5, 0, 2.5, 2.5);
rect(7.5, 7.5, 2.5, 2.5);

fill(13, 255, 0); //green in outline
rect(0, 2.5, 2.5, 5);
rect(2.5, 0, 5, 2.5);
rect(2.5, 7.5, 5, 2.5);
rect(7.5, 2.5, 2.5, 5);

fill(255, 0, 255); //pink mixing with red in middle
rect(2.5, 5, 2.5, 2.5);
rect(5, 2.5, 2.5, 2.5);
var bullet_image = get(0, 0, 10, 10);

strokeWeight(0.0001);//when you make an edit, the strokeweight becomes almost 0 no matter what, it fixed the glitch (TRY REMOVING THIS LINE AND MAKING A CHANGE)

//draws a 40 by 40 pixelated square of grass
for (var i = 0; i < 40; i += 2) {

    for (var j = 0; j < 40; j += 2) {

        fill(23 - random(7), 110 - random(20), 35 - random(20));
        rect(i, j, 5, 5);

    }

}

var grass = get(0, 0, 40, 40);

//begins drawing the different stages of the mario animation
drawWater();
var water1 = get(0, 0, 40, 40);

drawWater();
var water2 = get(0, 0, 40, 40);

drawWater();
var water3 = get(0, 0, 40, 40);

drawWater();
var water4 = get(0, 0, 40, 40);

//begins drawing title screen
background(0, 129, 0);
//green grass, with alterating colors
for (var i = 0; i < 600; i += 15) {
    
    for (var j = 0; j < 400; j += 15) {
        
        if ((i/15 + j/15)%2 === 0) {
            
            fill(0, 112, 0);//dark
            noStroke();
            rect(i, j, 15, 15);//rectangle
            
        }
        
    }
    
}

strokeWeight(0.0001);//when you make an edit, the strokeweight becomes almost 0 no matter what, it fixed the glitch (TRY REMOVING THIS LINE AND MAKING A CHANGE)

fill(24, 104, 153);
strokeWeight(6);
stroke(88, 62, 6);

//water on title screen
beginShape();

vertex(600, 400);
vertex(0, 400);
vertex(0, 360);
vertex(35, 330);
vertex(80, 330);
vertex(115, 305);
vertex(150, 305);
vertex(170, 285);
vertex(170, 235);
vertex(270, 135);
vertex(285, 135);
vertex(300, 120);
vertex(330, 120);
vertex(425, 215);
vertex(425, 260);
vertex(475, 310);
vertex(515, 310);
vertex(525, 320);
vertex(555, 320);
vertex(600, 360);

endShape(CLOSE);

strokeWeight(0.0001);//when you make an edit, the strokeweight becomes almost 0 no matter what, it fixed the glitch (TRY REMOVING THIS LINE AND MAKING A CHANGE)

strokeWeight(0.0001);//when you make an edit, the strokeweight becomes almost 0 no matter what, it fixed the glitch (TRY REMOVING THIS LINE AND MAKING A CHANGE)

fill(168, 168, 168);

//outline
rect(0, 0, 15, 400);
rect(585, 0, 15, 400);
rect(0, 0, 600, 15);
rect(0, 385, 600, 15);

//bottom rectangle outline
rect(165, 340, 270, 60);
//bottom rectangle inside
fill(0, 0, 0);
rect(180, 355, 240, 30);

titleShip(30, 350);
titleShip(70, 350);
titleShip(100, 350);
titleShip(130, 350);

titleShip(450, 350);
titleShip(490, 350);
titleShip(520, 350);

pixel("CLICK TO PLAY", 228, 365, 10);

pixel("TOWER DEFENDER", 68, 55, 30);

strokeWeight(0.0001);//when you make an edit, the strokeweight becomes almost 0 no matter what, it fixed the glitch (TRY REMOVING THIS LINE AND MAKING A CHANGE)

var title_background = get(0, 0, 600, 400);
}

keyReleased = function() {

    //keyCode 49 is clicking 1, and 52 is clicking 4. (it is the keyCode - 48)

    //when number 1 to 4 is clicked
    if (keyCode >= 49 & keyCode <= 52) {

        //if the you clicked a number which is already the selection
        if (selection === (keyCode - 48)) {

            selection = 0; //reset value to 0 (none)

        } else { //selection is different

            //if you have enough coins (specific to the key you clicked
            if ((keyCode === 49 & coins >= 50) | (keyCode === 50 & coins >= 125) | (keyCode === 51 & coins >= 175) | (keyCode === 52 & coins >= 300)) {

                //change it to the corresponding number
                selection = keyCode - 48;

            }

        }

    }

};

mouseReleased = function() {

    //when you click in each of the screens
    if (screen === "home") {

        //in the home screen, clicking anywhere will take you to the the level select screen
        screen = "level select";

    } else if (screen === "level select") {

        //if you click on the left box, it changes to the game screen and first map
        if (mouseX > 10 & mouseX < 190 & mouseY > 10 & mouseY < 190 & maps.length > 0) {

            screen = "game";
            mapNum = 0;

        } else if (mouseX > 210 & mouseX < 390 & mouseY > 10 & mouseY < 190 & maps.length > 1) {

            screen = "game";
            mapNum = 1;

        } else if (mouseX > 410 & mouseX < 590 & mouseY > 10 & mouseY < 190 & maps.length > 2) {

            screen = "game";
            mapNum = 2;

        } else if (mouseX > 10 & mouseX < 190 & mouseY > 210 & mouseY < 390 & maps.length > 3) {

            screen = "game";
            mapNum = 3;

        } else if (mouseX > 210 & mouseX < 390 & mouseY > 210 & mouseY < 390 & maps.length > 4) {

            screen = "game";
            mapNum = 4;

        } else if (mouseX > 410 & mouseX < 590 & mouseY > 210 & mouseY < 390 & maps.length > 5) {

            screen = "game";
            mapNum = 5;

        }

    } else if (screen === "game") {

        //if you click on the top right pause button it closes the menu and goes to the pause screen
        if (mouseX > 10 & mouseX < 30 & mouseY > 10 & mouseY < 30) {

            screen = "pause";
            menu = false;

        } else if (!menu & mouseX > 580 & mouseX < 600 & mouseY > 160 & mouseY < 240) { //if menu is closed and you click the SHOP rectangle at the right

            //open the menu
            menu = true;

        } else if (menu & mouseX > 480 & mouseX < 500 & mouseY > 160 & mouseY < 240) { //if menu is closed and you click the SHOP rectangle at the left side of the menu on the right side

            //close the menu
            menu = false;

        } else if (selection !== 0 & (!menu | (menu & mouseX < 500))) { //if a tower is selected and menu is closed or it is open with mouse off the menu

            //resets openSlot to false
            openSlot = false;

            //goes through bricks array
            for (var i = 0; i < blocks.length; i++) {

                //if the wall being clicked on has no tower
                if ((mouseX - (mouseX % 40)) === blocks[i][0] & (mouseY - (mouseY % 40)) === blocks[i][1] & !blocks[i][2]) {

                    //the spot is not open
                    openSlot = true;

                }

            }

            //if not a gear and you are clicking an open spot
            if (selection !== 4 & openSlot) {

                //decrease the coins if you have enough
                if (selection === 1 & coins >= 50) {

                    coins -= 50;

                } else if (selection === 2 & coins >= 125) {

                    coins -= 125;

                } else if (selection === 3 & coins >= 175) {

                    coins -= 175;

                }

                //if selection is a tower
                if (selection !== 0) {
                    
                    //x (0), y (1), type (2), current reload time (3) , direction (4), array place (5), aimX (6), aimY (7), max distance stores (8), upgrade level (9), range (10), time to reload (11), damage (12)

                    if (selection === 1) { //small range, quick reload, little damage

                        towers.push([mouseX - mouseX % 40, mouseY - mouseY % 40, selection, 1, 90, towers.length, mouseX, mouseY, 0, 0, 75, 25, 7]);

                    } else if (selection === 2) { //big range, medium reload, medium damage

                        towers.push([mouseX - mouseX % 40, mouseY - mouseY % 40, selection, 1, 90, towers.length, mouseX, mouseY, 0, 0, 150, 45, 20]);

                    } else if (selection === 3) { //small range, slow reload, high damage

                        towers.push([mouseX - mouseX % 40, mouseY - mouseY % 40, selection, 1, 90, towers.length, mouseX, mouseY, 0, 0, 90, 60, 40]);

                    }
                    
                    //adds value to shaketime to correspond with towers array bc it already has too much
                    shakeTime.push(0);
                    
                    //goes through all the walls
                    for (var i = 0; i < blocks.length; i++) {

                        //if the wall being clicked on already has a tower
                        if ((mouseX - (mouseX % 40)) === blocks[i][0] & (mouseY - (mouseY % 40)) === blocks[i][1]) {

                            //closes the spot for another tower
                            blocks[i][2] = true;
                            //resets selection to none
                            selection = 0;

                        }

                    }

                }

            } else if (!openSlot & selection === 4) { //if a gear and the spot has a tower

                //goes through the towers array
                for (var i = 0; i < towers.length; i++) {

                    //if you click on a tower (to check) and upgrade level is 0 or 1
                    if (towers[i][9] < 2 & towers[i][0] === (mouseX - mouseX % 40) & towers[i][1] === (mouseY - mouseY % 40)) {

                        //increase upgrade level by 1
                        towers[i][9] ++;
                        
                        //range (10), time to reload (11), damage (12)
                        if (towers[i][2] === 1) {
                            
                            towers[i][12] += 40; //does noticable damage
                            towers[i][10] += 20; //greatly changes range
                            
                        } else if (towers[i][2] === 2) {
                            
                            towers[i][11] -= 10; //less time to reload
                            towers[i][12] += 17; //damage moderately increased
                            
                        } else if (towers[i][2] === 3) {
                            
                            towers[i][10] += 25; //changes the range moderately
                            towers[i][11] -= 15; //WAY LESS TIME TO RELOAD
                            
                        }
                        
                        //resets selection to none
                        selection = 0;
                        //decreases coins for the proper amount (gears cost 300)
                        coins -= 300;

                    }

                }

            }

        } else if (menu) { //if menu is open

            //if x is inside the tower's x (width and x values are all same)
            if (mouseX > 505 & mouseX < 595) {

                //if top rectangle
                if (mouseY > 50 & mouseY < 130 & coins >= 50) {

                    //if selection is already 1, reset it to none
                    if (selection === 1) {

                        selection = 0;

                    } else { //otherwise change it to 1

                        selection = 1;

                    }

                } else if (mouseY > 140 & mouseY < 220 & coins >= 125) { //second rectangle

                    //if selection is already 2, reset it to none
                    if (selection === 2) {

                        selection = 0;

                    } else { //otherwise change it to 2

                        selection = 2;

                    }

                } else if (mouseY > 230 & mouseY < 310 & coins >= 175) { //third rectangle

                    //if selection is already 3, reset it to none
                    if (selection === 3) {

                        selection = 0;

                    } else { //otherwise change it to 3

                        selection = 3;

                    }

                } else if (mouseY > 320 & mouseY < 390 & coins >= 300) { //bottom rectangle

                    //if selection is already 4, reset it to none
                    if (selection === 4) {

                        selection = 0;

                    } else { //otherwise change it to 

                        selection = 4;

                    }

                }

            }

        }

    } else if (screen === "pause") {

        //changes text size of CONTINUE if mouse is on it
        if (mouseX > 250 & mouseX < 350 & mouseY > 185 & mouseY < 200) {

            screen = "game";

        }

        //changes text size of RESTART if mouse is on it
        if (mouseX > 255 & mouseX < 345 & mouseY > 205 & mouseY < 220) {

            screen = "game";
            first = true;
            
        }
        
        //changes text size of SELECT LEVEL if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 225 & mouseY < 240) {

            screen = "level select";

        }
        
        //changes text size of RETURN HOME if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 245 & mouseY < 260) {

            screen = "home";

        }
        
    } else if (screen === "end game") {

        //changes text size of RESTART if mouse is on it
        if (mouseX > 235 & mouseX < 355 & mouseY > 245 & mouseY < 260) {

            screen = "game";
            first = true;

        }
        
        //changes text size of SELECT LEVEL if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 265 & mouseY < 280) {

            screen = "level select";
            
        }
        
        //changes text size of RETURN HOME if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 285 & mouseY < 300) {

            screen = "home";

        }

    }

};

//a function for a octopus monster drawing
var monster = function(x, y, size, value) {
    
    pushMatrix();
    
    translate(x, y);
    scale(size/405);
    
    noStroke();
    //black outline
    fill(0, 0, 0);
    beginShape();
    
    vertex(15, 300);
    vertex(30, 300);
    vertex(30, 270);
    vertex(15, 270);
    vertex(15, 105);
    vertex(15, 105);
    vertex(30, 105);
    vertex(30, 90);
    vertex(45, 90);
    vertex(45, 75);
    vertex(60, 75);
    vertex(60, 60);
    vertex(75, 60);
    vertex(75, 45);
    vertex(90, 45);
    vertex(90, 30);
    vertex(120, 30);
    vertex(120, 15);
    vertex(150, 15);
    vertex(150, 0);
    vertex(255, 0);
    vertex(255, 15);
    vertex(285, 15);
    vertex(285, 30);
    vertex(315, 30);
    vertex(315, 45);
    vertex(330, 45);
    vertex(330, 60);
    vertex(345, 60);
    vertex(345, 75);
    vertex(360, 75);
    vertex(360, 90);
    vertex(375, 90);
    vertex(375, 105);
    vertex(390, 105);
    vertex(390, 270);
    vertex(375, 270);
    vertex(375, 300);
    vertex(390, 300);
    vertex(390, 330);
    vertex(405, 330);
    vertex(405, 375);
    vertex(390, 375);
    vertex(390, 390);
    vertex(330, 390);
    vertex(330, 375);
    vertex(315, 375);
    vertex(315, 390);
    vertex(255, 390);
    vertex(255, 375);
    vertex(240, 375);
    vertex(240, 390);
    vertex(165, 390);
    vertex(165, 375);
    vertex(150, 375);
    vertex(150, 390);
    vertex(90, 390);
    vertex(90, 375);
    vertex(75, 375);
    vertex(75, 390);
    vertex(15, 390);
    vertex(15, 375);
    vertex(0, 375);
    vertex(0, 330);
    vertex(15, 330);
    
    endShape(CLOSE);
    
    //actual monster
    fill(0, 136, 255);
    stroke(0, 136, 255);
    
    rect(165, 15, 75, 20);
    rect(135, 30, 135, 20);
    rect(105, 45, 195, 20);
    rect(90, 60, 225, 20);
    rect(75, 75, 255, 20);
    rect(60, 90, 285, 20);
    rect(45, 105, 315, 20);
    rect(30, 120, 345, 135);
    rect(45, 250, 315, 55);
    rect(30, 300, 60, 35);
    rect(105, 300, 60, 35);
    rect(180, 300, 45, 35);
    rect(240, 300, 60, 35);
    rect(315, 300, 60, 35);
    rect(15, 330, 60, 45);
    rect(90, 330, 60, 45);
    rect(165, 330, 75, 45);
    rect(255, 330, 60, 45);
    rect(330, 330, 60, 45);
    
    //these eyes also show health
    //left eye
    noStroke();
    fill(0, 0, 0);
    rect(75, 165, 60, 60);
    fill(255, 0, 0);
    rect(75, 225 - 60*enemy[mapNum][value][4]/2000, 60, 60*enemy[mapNum][value][4]/2000);
    fill(0, 136, 255);
    rect(90, 180, 15, 15);
    
    //right eye
    fill(0, 0, 0);
    rect(270, 165, 60, 60);
    fill(255, 0, 0);
    rect(270, 225 - 60*enemy[mapNum][value][4]/2000, 60, 60*enemy[mapNum][value][4]/2000);
    fill(0, 136, 255);
    rect(285, 180, 15, 15);
    
    //mouth
    fill(0, 0, 0);
    rect(165, 195, 75, 75);
    fill(0, 136, 255);
    rect(180, 210, 45, 65);
    
    popMatrix();
    
};

//a function for a gear
var gear = function(x, y) {

    stroke(0, 0, 0);
    strokeWeight(2);
    pushMatrix();

    //fit perfectly in a 40 by 40 spot
    scale(2 / 3); //make it smaller
    translate((x - 26) * 3 / 2, (y - 34) * 3 / 2); //move it to the x and y values specified

    //actual outside gear
    fill(-1);

    beginShape();

    vertex(28, 37);
    vertex(22, 30);
    vertex(29, 25);
    vertex(36, 33);
    vertex(47, 33);
    vertex(53, 23);
    vertex(60, 29);
    vertex(55, 36);
    vertex(61, 47);
    vertex(68, 47);
    vertex(68, 55);
    vertex(61, 55);
    vertex(55, 64);
    vertex(58, 73);
    vertex(51, 76);
    vertex(46, 66);
    vertex(38, 66);
    vertex(32, 75);
    vertex(25, 72);
    vertex(29, 64);
    vertex(23, 54);
    vertex(14, 54);
    vertex(14, 47);
    vertex(23, 47);

    endShape(CLOSE);

    //inside hexagon making inside look empty
    fill(-15794176);

    beginShape();

    vertex(34, 41);
    vertex(50, 41);
    vertex(55, 51);
    vertex(50, 60);
    vertex(34, 60);
    vertex(29, 51);

    endShape(CLOSE);

    popMatrix();

};

//a function for drawing a tower using tiny pixels
var drawPixelTower = function(x, y, type, upgrade_level) {

    pushMatrix();

    translate(x, y);

    noStroke();

    //main tower (dark gray)
    fill(122, 122, 122);
    rect(12, 12, 16, 28);

    //light gray bricks
    fill(176, 176, 176);
    rect(12, 18, 2, 2); //left column
    rect(12, 26, 2, 2);
    rect(12, 34, 2, 2);
    rect(14, 14, 4, 2); //second column of bricks
    rect(14, 22, 4, 2);
    rect(14, 30, 4, 2);
    rect(14, 38, 4, 2);
    rect(16, 18, 4, 2); //third column of bricks
    rect(16, 26, 4, 2);
    rect(16, 34, 4, 2);
    rect(20, 14, 4, 2); //fourth column of bricks
    rect(20, 22, 4, 2);
    rect(20, 30, 4, 2);
    rect(20, 38, 4, 2);
    rect(22, 18, 4, 2); //second to last column of bricks
    rect(22, 26, 4, 2);
    rect(22, 34, 4, 2);
    rect(26, 14, 2, 2); //right most column of bricks
    rect(26, 22, 2, 2);
    rect(26, 30, 2, 2);
    rect(26, 38, 2, 2);

    if (type === 1) {

        fill(255, 0, 0); //red for red tower

    } else if (type === 2) {

        fill(255, 183, 0); //orange for orange tower

    } else if (type === 3) {

        fill(191, 0, 255); //purple for purple tower

    }

    //top tower
    rect(12, 6, 4, 2);
    rect(18, 6, 4, 2);
    rect(24, 6, 4, 2);
    rect(30, 6, 2, 2);
    rect(8, 6, 2, 2);
    rect(8, 8, 24, 4);

    //pixels here so small it gives a waving effect, with the pixel look
    if (upgrade_level > 0) {

        rect(13, 20, 7, 2);
        rect(14, 22, 5, 2);
        rect(14, 24, 4, 2);
        rect(15, 26, 2, 2);
        rect(15, 28, 1, 2);

    }
    if (upgrade_level > 1) {

        rect(20, 15, 7, 2);
        rect(21, 17, 5, 2);
        rect(21, 19, 4, 2);
        rect(22, 21, 2, 2);
        rect(22, 23, 1, 2);

    }

    popMatrix();

};

//function for each tower
var drawTower = function(x, y, type, direction, rotate, value) {

    noStroke();
    //rotates toward aimX and aimY
    if (rotate) {

        //changes the direction
        if (x <= towers[value][6]) { //if target to the right

            towers[value][4] = 90 + atan((towers[value][7] - y) / (towers[value][6] - x)); //opposite/adjacent

        } else { //if target to the left

            towers[value][4] = -45 + atan((towers[value][7] - y) / (towers[value][6] - x)); //rise/run

        }

    }

    //if the mouse is inside the 40 by 40 rectangle centered at x and y
    if (mouseX > (x - 20) & mouseX < (x + 20) & mouseY > (y - 20) & mouseY < (y + 20)) {

        if (value === 9001) {

            fill(0, 255, 17, 100);
            //if the tower type is one
            if (type === 1) {

                ellipse(x, y, 150, 150); //draw a circle with radius 75

            } else if (type === 2) { //tower type is two

                ellipse(x, y, 300, 300); //draw a circle with radius 150

            } else if (type === 3) { //tower type is three
                
                ellipse(x, y, 180, 180);
                
            }

        } else {

            fill(0, 255, 17, 100);
            ellipse(x, y, towers[value][10] * 2, towers[value][10] * 2);

        }

    }
    if (type === 4) {

        gear(x, y); //draws a gear

    } else {
        
        //otherwise draws a pixel tower
        if (value !== 9001) { //choosing where to place
            
            if (shakeTime[value] !== 0) { //if the tower just shot
                
                drawPixelTower(x - 20 + random(-3, 3), y - 20 + random(-3, 3), type, towers[value][9]); //shakes a little
                
            } else {
                
                drawPixelTower(x - 20, y - 20, type, towers[value][9]); //otherwise it is not moving
                
            }

        } else { //on the ground

            drawPixelTower(x - 20, y - 20, type, 0);

        }

    }

};

var flip; //a variable for the drawShip function (global variable)

//function to draw the enemies coming in
var drawShip = function(x, y, type, direction) {
    
    if (direction === "left") {
        
        flip = true;
        
    } else {
        
        flip = false;
        
    }
    
    pushMatrix();
    
    //moves it to designated x and y, and scales it to fit in a 40 by 40 square
    if (flip) { //facing left
        
        translate(x + 43, y); //moves to the right
        scale(-2.5, 2.5); //flips
        
    } else { //facing right
        
        translate(x, y);
        scale(2.5);
        
    }
    
    if (type === 1) { //medium speed, weak boat (enemy 1)
        
        noStroke();
        fill(199, 180, 151); //draws the sail
        rect(8, 2, 1, 2);
        rect(8, 3, 2, 2);
        rect(8, 4, 3, 2);
        rect(8, 5, 4, 2);
        rect(8, 6, 5, 2);
        rect(8, 7, 6, 2);
        rect(8, 8, 7, 1);
        
        fill(97, 97, 97); //draws the sail holder things (CANT THINK OF THE NAME!!!)
        rect(7, 2, 1, 9);
        
        stroke(77, 52, 25); //temporaryily adds stroke to get rid of spaces between blocks
        strokeWeight(0.5);
        
        fill(77, 52, 25); //brown actual boat
        rect(0, 11, 16, 1);
        rect(1, 12, 14, 1);
        rect(2, 13, 12, 1);
        rect(3, 14, 10, 1);
        
        noStroke();
        
    } else if (type === 2) {
        
        ///flips it around bc i drew it the wrong way... oops - also moves it down
        translate(16, 7);
        scale(-1, 1);
        
        noStroke();
        
        //draws boats railing, medium grey
        fill(102, 102, 102);
        rect(0, 5, 16, 1);
        
        //most of boat, light grey
        fill(168, 168, 168);
        rect(1, 6, 15, 1);//bottom
        rect(2, 6, 14, 2);
        rect(6, 2, 8, 3);//top part
        rect(8, 0, 5, 1);
        rect(11, 0, 2, 2);
        rect(14, 2, 1, 1);
        
        fill(61, 61, 61);//dark grey
        rect(4, 4, 2, 1);//front of ship
        rect(5, 3, 2, 2);
        rect(8, 3, 1, 2);//middle of ship
        rect(10, 3, 1, 2);
        
    } else { //the strong boat
        
        translate(0, 5);//moves up
        
        noStroke();
        fill(0, 0, 0);//black outline to main ship
        rect(1, 4, 18, 1);
        rect(0, 5, 17, 1);
        rect(0, 6, 16, 1);
        rect(0, 7, 15, 1);
        rect(0, 8, 14, 1);
        rect(1, 9, 12, 1);
        
        fill(87, 66, 35); //brown fill in
        rect(1, 5, 15, 1);
        rect(1, 6, 14, 1);
        rect(1, 7, 13, 1);
        rect(1, 8, 12, 1);
        
        fill(161, 131, 87); //light grey spots for a cool army feel
        rect(3, 8, 4, 1);
        rect(5, 7, 7, 1);
        rect(2, 6, 2, 1);
        rect(12, 5, 2, 1);
        
        fill(20, 80, 102);//dark blue seats or idk, they looked cool
        rect(2, 3, 4, 1);
        rect(7, 3, 4, 1);
        rect(5, 2, 1, 1);
        rect(10, 2, 1, 1);
        
    }
    
    popMatrix();
    
};

//a function for the castle that the ships have to make it to
var drawCastle = function(x, y, type) {

    noStroke();
    pushMatrix();
    translate(x, y); //moves to the designated x and y position

    //brown background
    fill(166, 151, 105);
    rect(12, 4, 40, 28);
    rect(8, 32, 52, 28);

    //black part/outline
    fill(0, 0, 0);
    rect(8, 0, 12, 4);
    rect(24, 0, 16, 4);
    rect(44, 0, 12, 4);
    rect(8, 4, 4, 20);
    rect(16, 4, 12, 4);
    rect(36, 4, 12, 4);
    rect(52, 4, 4, 20);
    rect(0, 24, 16, 4);
    rect(20, 12, 8, 8);
    rect(36, 12, 8, 8);
    rect(24, 24, 16, 4);
    rect(48, 24, 16, 4);
    rect(12, 32, 16, 4);
    rect(36, 32, 16, 4);
    rect(12, 28, 4, 4);
    rect(24, 28, 4, 4);
    rect(36, 28, 4, 4);
    rect(48, 28, 4, 4);
    rect(0, 28, 4, 32);
    rect(60, 28, 4, 32);
    rect(0, 60, 64, 4);
    rect(28, 36, 8, 4);
    rect(24, 40, 16, 20);

    //white part
    fill(255, 255, 255);
    rect(12, 4, 4, 20);
    rect(28, 4, 8, 4);
    rect(48, 4, 4, 4);
    rect(16, 24, 4, 8);
    rect(28, 28, 8, 4);
    rect(52, 28, 8, 4);
    rect(4, 28, 4, 32);
    rect(8, 28, 4, 4);
    rect(40, 40, 4, 20);
    rect(36, 36, 4, 4);

    popMatrix();

};

draw = function() {

    //splits based on which screen
    if (screen === "home") {

        //dark blue-ish background
        image(title_background, 0, 0);

        first = true;

    } else if (screen === "level select") {

        //black background
        background(0, 0, 0);

        for (var i = 0; i < maps.length; i++) {

            //white rectangle
            noStroke();
            fill(255, 255, 255);
            rect(200 * (i%3) + 10, 10 + 200*floor(i/3), 180, 180);

            //draws outline rectangle of level map
            stroke(0, 0, 0);
            rect(200 * (i%3) + 25, 70 + 200*floor(i/3), 150, 100);

            //sets first to true (makes it reset the level at the beginning)
            first = true;

            //goes through each item in the maps array
            for (var k = 0; k < 10; k++) {

                for (var j = 0; j < 15; j++) {

                    noStroke();
                    //if the value is 1 (a wall) draw a black rectangle
                    if (maps[i][k][j] === 1) {

                        fill(0, 0, 0);
                        rect(200 * (i%3) + 25 + j * 10, 70 + k * 10 + 200*floor(i/3), 10, 10);

                    }
                    //if the value is 2 (the end) draw a red rectangle
                    if (maps[i][k][j] === 2) {

                        fill(255, 0, 0);
                        rect(200 * (i%3) + 25 + j * 10, 70 + k * 10 + 200*floor(i/3), 10, 10);

                    }

                }

            }

            //title
            pixel("LEVEL " + (i + 1), 200 * (i%3) + 25, 30 + 200*floor(i/3), 20, color(0, 0, 0));

        }

    } else if (screen === "game") {

        //blue background, representing the path (river)
        for (var i = 0; i < width; i += 40) {

            for (var j = 0; j < height; j += 20) {

                if (frameCount % 64 < 16) {

                    image(water1, i, j);

                } else if (frameCount % 64 < 32) {

                    image(water2, i, j);

                } else if (frameCount % 64 < 48) {

                    image(water3, i, j);

                } else {

                    image(water4, i, j);

                }

            }

        }

        //first frame of a level
        if (first) {

            //resets coin value
            coins = 250;
            
            //closes menu
            menu = false;
            
            //resets selection to none
            selection = 0;

            //deletes everything in the towers array and corresponding shakeTime
            for (var i = towers.length; i > 0; i--) {

                towers.pop();
                shakeTime.pop();

            }

            //deletes everything in the bullets array
            for (var i = bullets.length; i > 0; i--) {

                bullets.pop();

            }

            //deletes all values in blocks array
            for (var i = blocks.length; i > 0; i--) {

                blocks.pop();

            }

            //goes through each item in the maps array
            for (var i = 0; i < 10; i++) {

                for (var j = 0; j < 15; j++) {

                    //if the value is 0 (a wall) add an array to the blocks array at a specific spot
                    if (maps[mapNum][i][j] === 1) {

                        //x, y, whether or not a tower has been placed there
                        blocks.push([j * 40, i * 40, false]);

                    } else if (maps[mapNum][i][j] === 2) {

                        //x, y, current health, original health
                        endPos = [j * 40, i * 40, 500, 500];

                    }

                }

            }

            //deletes all enemies
            for (var i = enemy[mapNum].length; i > 0; i--) {

                enemy[mapNum].pop();
            }

            //adds enemies based on level
            for (var i = 0; i < enemySort[mapNum].length; i ++) {
                
                if (enemySort[mapNum][i] === 1) {

                    //x, y, type, initial direction, health, speed, distance, initial health
                    enemy[mapNum].push([620 + i * 40, 20, 0, "left", 75, 1.25, 0, 75]);
                    
                } else if (enemySort[mapNum][i] === 2) {

                    //x, y, type, initial direction, health, speed, distance, initial health
                    enemy[mapNum].push([620 + i * 40, 20, 1, "left", 60, 2, 0, 60]);
                    
                } else if (enemySort[mapNum][i] === 3) {

                    //x, y, type, initial direction, health, speed, distance, initial health
                    enemy[mapNum].push([620 + i * 40, 20, 2, "left", 200, 0.75, 0, 200]);
                    
                } else if (enemySort[mapNum][i] === 4) { //ultimate boss, only appears in last level

                    //x, y, type, initial direction, health, speed, distance, initial health
                    enemy[mapNum].push([620 + i * 40, 20, 3, "left", 2000, 0.5, 0, 2000]);
                    
                }

            }

            //so that this only occurs once to avoid a for loop error :)
            first = false;
            secondFrame = true;

        }

        //goes through the array of blocks and draws a white 40 by 40 square
        for (var i = 0; i < blocks.length; i++) {

            image(grass, blocks[i][0], blocks[i][1]);

        }

        //goes through each of the values in enemy at the specific level (mapNum)
        for (var i = 0; i < enemy[mapNum].length; i++) {

            //draws a ship, when on screen
            if (enemy[mapNum][i][0] < 650) {
                
                //drawn so that it goes equal to 0 (mod 2.5) so it fits perfectly in each pixel
                if (enemy[mapNum][i][2] !== 3) {
                    
                    drawShip(enemy[mapNum][i][0] - 20 - enemy[mapNum][i][0]%2.5, enemy[mapNum][i][1] - 20 - enemy[mapNum][i][1]%2.5, enemy[mapNum][i][2] + 1, enemy[mapNum][i][3]);
                    
                } else {
                    
                    monster(enemy[mapNum][i][0] - 20 - enemy[mapNum][i][0]%2.5, enemy[mapNum][i][1] - 20 - enemy[mapNum][i][1]%2.5, 50, i);
                    
                }

            }
            
            noStroke();
            
            if (enemy[mapNum][i][2] !== 3) {
            
                fill(0, 0, 0);
                rect(enemy[mapNum][i][0] - 10, enemy[mapNum][i][1] - 20, 20, 5);
                
                fill(0, 255, 0);
                rect(enemy[mapNum][i][0] - 10, enemy[mapNum][i][1] - 20, enemy[mapNum][i][4] / enemy[mapNum][i][7] * 20, 5);
                
            }

            //changes x and y values depending on the direction it is supposed to be going

            if (enemy[mapNum][i][0] <= 620 & enemy[mapNum][i][0] >= -20 & enemy[mapNum][i][1] <= 420 & enemy[mapNum][i][1] >= -20) {

                if (enemy[mapNum][i][3] === "left") {

                    enemy[mapNum][i][0] -= enemy[mapNum][i][5];

                } else if (enemy[mapNum][i][3] === "right") {

                    enemy[mapNum][i][0] += enemy[mapNum][i][5];

                } else if (enemy[mapNum][i][3] === "up") {

                    enemy[mapNum][i][1] -= enemy[mapNum][i][5];

                } else if (enemy[mapNum][i][3] === "down") {

                    enemy[mapNum][i][1] += enemy[mapNum][i][5];

                }

            } else {

                if (enemy[mapNum][i][3] === "left") {

                    enemy[mapNum][i][0] --;

                } else if (enemy[mapNum][i][3] === "right") {

                    enemy[mapNum][i][0] ++;

                } else if (enemy[mapNum][i][3] === "up") {

                    enemy[mapNum][i][1] --;

                } else if (enemy[mapNum][i][3] === "down") {

                    enemy[mapNum][i][1] ++;

                }

            }

            if (enemy[mapNum][i][0] > 0 & enemy[mapNum][i][0] < 600 & enemy[mapNum][i][1] > 0 & enemy[mapNum][i][1] < 400) {

                enemy[mapNum][i][6] += enemy[mapNum][i][5];

            }

            //if it is in the very middle of a 40 by 40 square
            if (abs(enemy[mapNum][i][0] % 40 - 20) < enemy[mapNum][i][5]/2 & abs(enemy[mapNum][i][1] % 40 - 20) < enemy[mapNum][i][5]/2) {
                
                if (enemy[mapNum][i][0] % 20 < 10) {
                    
                    enemy[mapNum][i][0] -= enemy[mapNum][i][0] % 20;
                    
                } else {
                    
                    enemy[mapNum][i][0] += (20 - enemy[mapNum][i][0] % 20);
                    
                }
                if (enemy[mapNum][i][1] % 20 < 10) {
                    
                    enemy[mapNum][i][1] -= enemy[mapNum][i][1] % 20;
                    
                } else {
                    
                    enemy[mapNum][i][1] += (20 - enemy[mapNum][i][1] % 20);
                    
                }
                
                //goes through each of the blocks
                for (var j = 0; j < blocks.length; j++) {

                    //splits depending on direction
                    if (enemy[mapNum][i][3] === "left") {

                        //if there is a block to the direct left and the same y or if it's at the left edge
                        if ((blocks[j][0] === (enemy[mapNum][i][0] - 60) & (blocks[j][1] === (enemy[mapNum][i][1] - 20))) | enemy[mapNum][i][0] === 20) {

                            //resets the variable opening to true
                            opening = true;

                            //goes through the entire blocks array
                            for (var k = 0; k < blocks.length; k++) {

                                //checks if there is a block with the same x but above or if it is at the top
                                if ((blocks[k][0] === (enemy[mapNum][i][0] - 20) & blocks[k][1] === (enemy[mapNum][i][1] - 60)) | enemy[mapNum][i][1] === 20) {

                                    //if it can't go up, change opening to false
                                    opening = false;

                                }

                            }

                            //based on whether or not there is a wall above, change direction to up or down
                            if (opening) {

                                enemy[mapNum][i][3] = "up";

                            } else {

                                enemy[mapNum][i][3] = "down";

                            }

                        }

                    } else if (enemy[mapNum][i][3] === "right") {

                        //if there's a block to the direct right and the same y or if it's at the right edge
                        if ((blocks[j][0] === (enemy[mapNum][i][0] + 20) & (blocks[j][1] === (enemy[mapNum][i][1] - 20))) | enemy[mapNum][i][0] === 580) {

                            //resets variable opening to true 
                            opening = true;

                            //goes through the entire blocks array
                            for (var k = 0; k < blocks.length; k++) {

                                //checks if there is a block with the same x but above
                                if ((blocks[k][0] === (enemy[mapNum][i][0] - 20) & blocks[k][1] === (enemy[mapNum][i][1] - 60)) | enemy[mapNum][i][1] === 20) {

                                    //if it can't go up, change opening to false
                                    opening = false;

                                }

                            }

                            //changes direction based on whether or not it can go up
                            if (opening) {

                                enemy[mapNum][i][3] = "up";

                            } else {

                                enemy[mapNum][i][3] = "down";

                            }

                        }

                    } else if (enemy[mapNum][i][3] === "down") {

                        //if there's a block with the same x and directly below or at the bottom edge
                        if ((blocks[j][0] === (enemy[mapNum][i][0] - 20) & (blocks[j][1] === (enemy[mapNum][i][1] + 20))) | enemy[mapNum][i][1] === 380) {

                            opening = true;
                            for (var k = 0; k < blocks.length; k++) {

                                if ((blocks[k][0] === (enemy[mapNum][i][0] + 20) & blocks[k][1] === (enemy[mapNum][i][1] - 20)) | enemy[mapNum][i][0] === 580) {

                                    opening = false;

                                }

                            }

                            if (opening) {

                                enemy[mapNum][i][3] = "right";

                            } else {

                                enemy[mapNum][i][3] = "left";

                            }

                        }

                    } else if (enemy[mapNum][i][3] === "up") {

                        if ((blocks[j][0] === (enemy[mapNum][i][0] - 20) & (blocks[j][1] === (enemy[mapNum][i][1] - 60))) | enemy[mapNum][i][1] === 20) {

                            opening = true;
                            for (var k = 0; k < blocks.length; k++) {

                                if ((blocks[k][0] === (enemy[mapNum][i][0] + 20) & blocks[k][1] === (enemy[mapNum][i][1] - 20)) | enemy[mapNum][i][0] === 580) {

                                    opening = false;

                                }

                            }

                            if (opening) {

                                enemy[mapNum][i][3] = "right";

                            } else {

                                enemy[mapNum][i][3] = "left";

                            }

                        }

                    }

                }

            }

            //if the enemy reaches the end
            if (enemy[mapNum][i][1] === (endPos[1] + 20) & enemy[mapNum][i][0] === (endPos[0] + 20)) {

                //decrease castle health by the enemy's remaining health
                endPos[2] -= enemy[mapNum][i][4];

                //resets the castle's health to 0
                if (endPos[2] <= 0) {

                    endPos[2] = 0;

                    //game over, you lost
                    endResult = "lose";
                    screen = "end game";

                }

                if (enemy[mapNum].length > 1) {

                    enemy[mapNum].splice(i, 1);

                } else {

                    screen = "end game";

                    //if the castle has health, you win
                    if (endPos[2] > 0) {

                        endResult = "win";

                    } else { //if that last enemy destroyed the castle, you lost

                        endResult = "lose";

                    }

                }

            }

            //goes through bullets array to see if any have collided
            for (var j = 0; j < bullets.length; j++) {

                if (dist(enemy[mapNum][i][0], enemy[mapNum][i][1], (bullets[j][0] + bullets[j][3] * cos(bullets[j][2] + 180)), bullets[j][1] + bullets[j][3] * sin(bullets[j][2] + 180)) < 40) {

                    enemy[mapNum][i][4] -= bullets[j][5];

                    //sends the bullet off the screen
                    bullets[j][3] = 1000;

                }

            }

            //if health is less than 0, delete from array
            if (enemy[mapNum][i][4] <= 0) {

                chance = random(10);
                if (enemy[mapNum][i][2] === 0) {

                    coins += 5;

                    if (chance < 1) {

                        coins += floor(random(1, 3)) * 5;

                    }

                } else if (enemy[mapNum][i][2] === 1) {

                    coins += 5;

                    if (chance < 1) {

                        coins += floor(random(2, 4)) * 5;

                    }

                } else if (enemy[mapNum][i][2] === 2) {

                    coins += 10;

                    if (chance < 1) {

                        coins += floor(random(3, 5)) * 5;

                    }

                } else if (enemy[mapNum][i][2] === 3) {

                    coins += 25;

                    if (chance < 1) {

                        coins += floor(random(5, 10)) * 5;

                    }

                }
                if (enemy[mapNum].length > 1) {

                    enemy[mapNum].splice(i, 1);

                } else {

                    screen = "end game";
                    endResult = "win";

                }

            }

        }

        //goes through the array of bullets
        for (var i = 0; i < bullets.length; i++) {

            //draws the bullet (red to stand out)
            fill(255, 0, 0);
            image(bullet_image, bullets[i][0] + bullets[i][3] * cos(bullets[i][2] + 180) - 5, bullets[i][1] + bullets[i][3] * sin(bullets[i][2] + 180) - 5);

            bullets[i][3] += bullets[i][4];

            if ((bullets[i][0] + bullets[i][3] * cos(bullets[i][2] + 180)) > 620 | (bullets[i][0] + bullets[i][3] * cos(bullets[i][2] + 180)) < -20 | (bullets[i][1] + bullets[i][3] * sin(bullets[i][2] + 180)) < -20 | (bullets[i][1] + bullets[i][3] * sin(bullets[i][2] + 180)) > 420) {

                if (bullets.length > 1) {

                    bullets.splice(i, 1);
                    i --;

                } else {

                    bullets.pop();

                }

            }

        }

        //goes through each of the values in the towers array
        for (var i = 0; i < towers.length; i++) {

            //x, y, tower type, direction, rotate?, item in array
            drawTower(towers[i][0] + 20, towers[i][1] + 15, towers[i][2], towers[i][4], true, towers[i][5]);
            
            if (shakeTime[i] > 0) {
                
                shakeTime[i] --;
                
            }

            //resets direction max to 0
            towers[i][8] = 0;

            //goes through enemy array at the specific level
            for (var j = 0; j < enemy[mapNum].length; j++) {
                
                //if the distance traveled is more than the amount stored and it is close enough
                if (enemy[mapNum][j][6] > towers[i][8] & dist(enemy[mapNum][j][0], enemy[mapNum][j][1], towers[i][0] + 20, towers[i][1] + 20) < (towers[i][10] + 20)) {

                    //change aimX and aimY to enemy x and y
                    towers[i][6] = enemy[mapNum][j][0];
                    towers[i][7] = enemy[mapNum][j][1];
                    towers[i][8] = enemy[mapNum][j][6];

                }

            }

            if (towers[i][3] === 0 & towers[i][8] !== 0) {

                if (shootDelay) {

                    //x, y, rotation, distance from x y, speed, damage, 
                    bullets.push([towers[i][0] + 20, towers[i][1] + 20, towers[i][4], 1, 25, towers[i][12]]);
                    
                    //makes the tower shake
                    shakeTime[i] = 5;
                    
                    //current reload time resets to time to reload
                    towers[i][3] = towers[i][11];

                    shootDelay = false;

                } else {

                    shootDelay = true;

                }

            } else if (towers[i][3] > 0) {

                towers[i][3] --;

            }

        }

        //castle
        drawCastle(endPos[0] - 12, endPos[1] - 10);

        //health meter backgrouond
        fill(0, 0, 0);
        rect(endPos[0], endPos[1] + 25, 40, 10);

        //health meter actual health bar
        fill(0, 255, 26);
        rect(endPos[0], endPos[1] + 25, endPos[2] / endPos[3] * 40, 10);

        //pause button
        fill(255, 255, 255, 200);
        rect(10, 10, 20, 20);
        rect(13, 13, 5, 14);
        rect(22, 13, 5, 14);

        if (menu) { //if menu is open

            //dark gray menu bar background
            fill(77, 77, 77);
            rect(500, 0, 100, 400);

            //title
            pixel("SHOP", 517, 15, 15);

            //gray backgrounds
            fill(143, 143, 143);
            if (coins < 50) { //dark gray everything if coins less than 50

                fill(51, 51, 51);

            }
            rect(505, 50, 90, 80); //top rectangle
            if (coins < 125) { //dark gray everything if coins less than 125

                fill(51, 51, 51);

            }
            rect(505, 140, 90, 80); //second rectangle
            if (coins < 175) { //dark gray everything if coins less than 175

                fill(51, 51, 51);

            }
            rect(505, 230, 90, 80); //third rectangle
            if (coins < 300) { //dark gray everything if coins less than 300

                fill(51, 51, 51);

            }
            rect(505, 320, 90, 70); //bottom rectangle
            
            //red tower
            drawPixelTower(510, 78, 1, 0);
            //orange tower
            drawPixelTower(510, 168, 2, 0);
            //purple tower
            drawPixelTower(510, 258, 3, 0);
            //gear
            gear(525, 364);
            
            //titles for towers
            pixel("RED TOWER", 511, 65, 8);
            pixel("ORANGE      TOWER", 520, 150, 7, color(255, 255, 255), 60);
            pixel("PURPLE      TOWER", 520, 240, 7, color(255, 255, 255), 60);
            pixel("UPGRADE", 513, 331, 9);

            //prices for towers
            pixel("50 C", 545, 95, 6);
            pixel("125 C", 545, 185, 6);
            pixel("175 C", 545, 275, 6);
            pixel("300 C", 555, 355, 6);

            //hotkeys
            pixel("Hotkey: 1", 545, 106, 6);
            pixel("Hotkey: 2", 545, 196, 6);
            pixel("Hotkey: 3", 545, 286, 6);
            pixel("Hotkey: 4", 545, 366, 6);
            
            noStroke();
            //button blue background
            fill(255, 255, 255);
            rect(480, 160, 20, 80);

            pixel("SHOP", 486, 157, 9, color(50, 0, 255), 0);

        } else { //if no menu

            //button blue background
            fill(255, 255, 255);
            rect(580, 160, 20, 80);

            pixel("SHOP", 586, 157, 9, color(55, 0, 255), 0);

        } //end of the not menu stage

        //how many coins you have
        pixel(coins + " C", 50, 14, 12);

        //draws a tower at mouse when you have selected something
        if (selection !== 0) {

            //x, y, type, direction, rotate, value (in this case is none)
            drawTower(mouseX, mouseY, selection, 0, false, 9001);

        }

        //covered with a semi transparent gray screen, to simulate the cover of the arcade game and the not so good brightness
        fill(140, 140, 140, 60);
        noStroke();
        rect(0, 0, 600, 400);

    } else if (screen === "pause") {

        //gray background
        fill(122, 122, 122);
        rect(80, 80, 440, 240);

        //main title text
        pixel("PAUSED", 220, 140, 25, color(255, 255, 255));

        //changes text size of CONTINUE if mouse is on it
        if (mouseX > 250 & mouseX < 350 & mouseY > 185 & mouseY < 200) {
            
            pixel("CONTINUE", 235, 188, 15, color(255, 255, 255));

        } else {

            pixel("CONTINUE", 250, 190, 11, color(255, 255, 255));

        }

        //changes text size of RESTART if mouse is on it
        if (mouseX > 255 & mouseX < 345 & mouseY > 205 & mouseY < 220) {

            pixel("RESTART", 240, 208, 15, color(255, 255, 255));

        } else {

            pixel("RESTART", 255, 210, 11, color(255, 255, 255));

        }
        
        //changes text size of SELECT LEVEL if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 225 & mouseY < 240) {

            pixel("SELECT LEVEL", 205, 228, 15, color(255, 255, 255));

        } else {

            pixel("SELECT LEVEL", 225, 230, 11, color(255, 255, 255));

        }
        
        //changes text size of RETURN HOME if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 245 & mouseY < 260) {

            pixel("RETURN HOME", 210, 248, 15, color(255, 255, 255));

        } else {

            pixel("RETURN HOME", 230, 250, 11, color(255, 255, 255));

        }
        
    } else if (screen === "end game") {

        background(56, 47, 47);
        
        if (endResult === "win") {

            pixel("YOU WON!", 140, 100, 40);

        } else {

            pixel("GAME OVER", 105, 100, 40);

        }

        //changes text size of RESTART if mouse is on it
        if (mouseX > 235 & mouseX < 355 & mouseY > 245 & mouseY < 260) {

            pixel("PLAY AGAIN", 220, 248, 15, color(255, 255, 255));

        } else {

            pixel("PLAY AGAIN", 235, 250, 11, color(255, 255, 255));

        }
        
        //changes text size of SELECT LEVEL if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 265 & mouseY < 280) {

            pixel("SELECT LEVEL", 205, 268, 15, color(255, 255, 255));

        } else {

            pixel("SELECT LEVEL", 225, 270, 11, color(255, 255, 255));

        }
        
        //changes text size of RETURN HOME if mouse is on it
        if (mouseX > 230 & mouseX < 370 & mouseY > 285 & mouseY < 300) {

            pixel("RETURN HOME", 210, 288, 15, color(255, 255, 255));

        } else {

            pixel("RETURN HOME", 230, 290, 11, color(255, 255, 255));

        }
        
    } //end of screen

}; //end of draw()