stroke(0, 0, 0);

noFill();

var amt = 0;
var a = 100;

frameRate(120);

background(0, 0, 0);

var tri = function(x, y, height) {
    
    triangle(
        x - (amt%a/a)*height/sqrt(3), y - height/2 + (amt%a/a)*height, 
        x - height/sqrt(3) + (amt%a/a)*(2*height)/sqrt(3), y + height/2, 
        x + height/sqrt(3) - (amt%a/a)*height/sqrt(3), y + height/2 - (amt%a/a)*height
    );
    
};

//i is from 1 to 2
/*
strokeWeight(0.6);
stroke(255, 255, 255);

for (var i = 1; i < 3; i ++) {
    
    for (var j = 0; j < (3^i); j ++) {
        
        if (j%3 === 0) {
            
            tri(200, 200 - 200*sqrt(3)/(Math.pow(2, i+1)), 200*sqrt(3)/Math.pow(2, i));
            
        } else if (j%3 === 1) {
            
            tri(200 - 200/(Math.pow(2, i + 1)), 200 + 200*sqrt(3)/(Math.pow(2, i+1)), 200*sqrt(3)/(Math.pow(2, i)));
            
        } else {
            
            tri(200 + 200/(Math.pow(2, i + 1)), 200 + 200*sqrt(3)/(Math.pow(2, i+1)), 200*sqrt(3)/(Math.pow(2, i)));
            
        }
        
    }
    
}*/

draw = function() {
    
    if (amt <= a) {
        
        strokeWeight(0.6);
        
        stroke(255, 255, 255);
        tri(200, 200, 200*sqrt(3));
        
    } else if (amt <= 2*a) {
        
        strokeWeight(0.4);
        
        stroke(0, 255, 0);
        tri(200, 200 - 100*sqrt(3)/2, 100*sqrt(3));
        tri(200 + 100, 200 + 100*sqrt(3)/2, 100*sqrt(3));
        tri(200 - 100, 200 + 100*sqrt(3)/2, 100*sqrt(3));
        
    } else if (amt <= 3*a) {
        
        strokeWeight(0.2);
        
        stroke(0, 0, 255);
        tri(200, 200 - 100*sqrt(3)/2 - 100*sqrt(3)/4, 50*sqrt(3));
        tri(200 + 50, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4, 50*sqrt(3));
        tri(200 - 50, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4, 50*sqrt(3));
        
        tri(200 + 100, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4, 50*sqrt(3));
        tri(200 + 100 + 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4, 50*sqrt(3));
        tri(200 + 100 - 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4, 50*sqrt(3));
        
        tri(200 - 100, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4, 50*sqrt(3));
        tri(200 - 100 + 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4, 50*sqrt(3));
        tri(200 - 100 - 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4, 50*sqrt(3));
        
    } else if (amt <= 4*a) {
        
        strokeWeight(0.1);
        
        stroke(255, 255, 0);
        tri(200, 200 - 100*sqrt(3)/2 - 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 25, 200 - 100*sqrt(3)/2 - 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 25, 200 - 100*sqrt(3)/2 - 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 + 50, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 50 + 25, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 50 - 25, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 - 50, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 50 + 25, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 50 - 25, 200 - 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 + 100, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 100 + 25, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 100 - 25, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 + 100 + 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 100 + 50 + 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 100 + 50 - 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 + 100 - 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 100 - 50 + 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 + 100 - 50 - 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 - 100, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 100 + 25, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 100 - 25, 200 + 100*sqrt(3)/2 - 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 - 100 + 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 100 + 50 + 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 100 + 50 - 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
        tri(200 - 100 - 50, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 - 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 100 - 50 + 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        tri(200 - 100 - 50 - 25, 200 + 100*sqrt(3)/2 + 100*sqrt(3)/4 + 100*sqrt(3)/8, 25*sqrt(3));
        
    }
    
    amt = (amt + 1);
    
    //tfw i didnt use recursion
    
};