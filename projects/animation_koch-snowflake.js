var one = [[200 + 150*cos(90), 200 + 150*sin(90), 0, 0], [200 + 150*cos(210), 200 + 150*sin(210), 0, 0], [200 + 150*cos(330), 200 + 150*sin(330), 0, 0]];
var two = one;
var newIter = false;

draw = function() {
    
    if (newIter) {
        
        two = [[0, 0, 0, 0]];
        two.pop();
        
        for (var i = 0; i < one.length; i ++) {
            
            if (i === (one.length - 1)) {
                
                one[i][2] = -(one[i][0] - one[0][0]);
                one[i][3] = -(one[i][1] - one[0][1]);
                
            } else {
                
                one[i][2] = -(one[i][0] - one[i + 1][0]);
                one[i][3] = -(one[i][1] - one[i + 1][1]);
                
            }
            
            two.push([one[i][0], one[i][1], 0, 0]);
            two.push([one[i][0] + one[i][2]/3, one[i][1] + one[i][3]/3, 0, 0]);
            if (one[i][2] < 0) {
                
                two.push([one[i][0] + one[i][2]/2 - one[i][3]*sqrt(3)/4.2*cos(135), one[i][1] + one[i][3]/2 - one[i][2]*sqrt(3)/4.2*sin(135), 0, 0]);
                
            } else {
                
                two.push([one[i][0] + one[i][2]/2 - one[i][3]*sqrt(3)/4.2*cos(135), one[i][1] + one[i][3]/2 - one[i][2]*sqrt(3)/4.2*sin(135), 0, 0]);
                
            }
            two.push([one[i][0] + 2*one[i][2]/3, one[i][1] + 2*one[i][3]/3, 0, 0]);
            
        }
        
        one = two;
        newIter = false;
        
    }
    
    if (frameCount%50 === 0) {
        
        newIter = true;
        
    } else if (frameCount%250 > 200) {
        
        one = [[200 + 150*cos(90), 200 + 150*sin(90), 0, 0], [200 + 150*cos(210), 200 + 150*sin(210), 0, 0], [200 + 150*cos(330), 200 + 150*sin(330), 0, 0]];
        two = one;
        
    } else {
        
        newIter = false;
        
    }
    
    background(0, 0, 0);
    
    stroke(255, 255, 255);
    line(two[0][0], two[0][1], two[two.length - 1][0], two[two.length - 1][1]);
    strokeWeight(0.5);
    for (var i = 0; i < (two.length - 1); i ++) {
        
        line(two[i][0], two[i][1], two[i + 1][0], two[i + 1][1]);
        
    }
    
};
