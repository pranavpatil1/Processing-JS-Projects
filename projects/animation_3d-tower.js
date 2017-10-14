//Do you see the 3D effect? It's supposed to be a jello-like version of a pyramid of some kind :)

frameRate(Infinity);

draw = function() {
    
    noStroke();
    
    //background(0, 0, 255);
    
    for (var i = -2; i < 18; i ++) {
        
        for (var j = -2; j < 18; j ++) {
            
            fill(0, 0, 0);
            if ((i + j) % 2 === 0) {
                
                fill(255, 255, 255);
                
            }
            
            rect(i*25 + 25*sin(frameCount*1.2 + dist(i*25 + 12.5, j*25 + 12.5, 200, 200)), j*25 + 25*sin(frameCount + dist(i*25 + 12.5, j*25 + 12.5, 200, 200)), 25, 25);
            
        }
        
    }

};