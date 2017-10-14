frameRate(Infinity);

var points = [];

var minimum = 0;

for (var i = 0; i < 400; i += 1) {
    
    points.push(0);
    
}

var first = true;

var screenshot;

draw = function() {
    
    noFill();
    
    strokeWeight(5);
    
    minimum = Infinity;
    for (var i = 0; i < points.length; i ++) {
        
        points[i] = 200*noise(i/120, frameCount/250) - 150 + frameCount/5;
        if (points[i] < minimum) {
            
            minimum = points[i];
            
        }
        
    }
    
    for (var i = 0; i < points.length; i ++) {
        
        stroke(0, (points[i] - minimum)*20, 255, 200 + 55/400*points[i]);
        
        if (points[i] < (minimum + 30)) {
            
            //change 200 to 90 for a mountains
            stroke(100 - 155*(points[i] - minimum)/50, 90 - 165*(points[i] - minimum)/50, 50 - 205*(points[i] - minimum)/30);
            point(i, points[i]);
            
        } else {
            
            stroke(37, 115 - 10*(points[i] - minimum - 30), 143);
            point(i, points[i]);
            
        }
        
    }
    
    smooth();
    
};