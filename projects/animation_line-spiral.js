draw = function() {
    
    background(0, 123, 255);
    
    noFill();
    strokeWeight(1);
    stroke(255, 255, 255, 100);
    
    var num = frameCount*5;
    
    for (var i = 0; i <= 400; i += 20) {
        
        for (var j = 0; j <= 400; j += 20) {
            
            stroke(255, 255, 255, 100);
            var x = i + 10;
            var y = j + 10;
            
            line(i, j, i + 40*cos(num + dist(i, j, 200, 200)*2), j + 40*sin(num + dist(i, j, 200, 200)*2));
            
            line(x, y, x + 40*cos(num + dist(x, y, 200, 200*2)), y + 40*sin(num + dist(x, y, 200, 200)*2));
            
        }
        
    }
    
};