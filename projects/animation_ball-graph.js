var path = [[], [], [], [], []];
var pathSpeed = [16, 8, 32, 32, 8]; //a power of 2

var player = [[200, 200, 0, 0], [200, 200, 0, 0], [200, 200, 0, 0], [200, 200, 0, 0], [200, 200, 0, 0]];
var first = [true, true, true, true, true];

for (var i = 0; i < 360; i += 36) {
    
    if ((i/36) % 2 === 0) {
        
        path[0].push([50 + round(40*cos(i)), 50 + round(40*sin(i))]);
        
    } else {
        
        path[0].push([50 + round(20*cos(i)), 50 + round(20*sin(i))]);
        
    }
    
}

for (var i = 1; i < 360; i += 20) {
    
    path[1].push([150 + round((5*sin(i*3) + 25)*cos(i)), 125 + round((5*sin(i*3) + 25)*sin(i))]);
    
}

for (var i = 0; i < 360; i += 120) {
    
    path[2].push([50 + round(30*cos(i)), 200 + round(30*sin(i))]);
    
}

for (var i = 30; i < 360; i += 60) {
    
    path[3].push([150 + round(30*cos(i)), 275 + round(30*sin(i))]);
    
}
for (var i = 30; i > 0; i -= 5) {
    
    path[4].push([50 + i, 390 - i]);
    
}
for (var i = 0; i < 31; i += 5) {
    
    path[4].push([50 - i, 390 - i]);
    
}
for (var i = 135; i < 360; i += 20) {
    
    path[4].push([30 + round(20*cos(i)), 340 + round(20*sin(i))]);
    
}
for (var i = 180; i < 405; i += 20) {
    
    path[4].push([70 + round(20*cos(i)), 340 + round(20*sin(i))]);
    
}


background(0, 0, 0);

draw = function() {
    
    fill(54, 57, 112);
    rect(0, 0, 200, 400);
    
    noStroke();
    
    fill(255, 255, 255);
    
    for (var j = 0; j < path.length; j ++) {
        
        for (var i = 0; i < path[j].length; i ++) {
            
            fill(0, 255, 38);
            ellipse(path[j][i][0], path[j][i][1], 2, 2);
            
        }
        
        for (var i = 0; i < (path[j].length - 1); i ++) {
            
            if (first[j]) {
                
                player[j][0] = path[j][0][0];
                player[j][1] = path[j][0][1];
                
                first[j] = false;
                
            } else {
                
                if (player[j][0] === path[j][i][0] & player[j][1] === path[j][i][1]) {
                    
                    player[j][2] = -(player[j][0] - path[j][i + 1][0])/pathSpeed[j];
                    player[j][3] = -(player[j][1] - path[j][i + 1][1])/pathSpeed[j];
                
                }
                
                if (player[j][0] === path[j][path[j].length - 1][0] & player[j][1] === path[j][path[j].length - 1][1]) {
                    
                    player[j][2] = -(player[j][0] - path[j][0][0])/pathSpeed[j];
                    player[j][3] = -(player[j][1] - path[j][0][1])/pathSpeed[j];
                    
                }
                
            }
            
        }
        
        fill(255, 255, 255);
        
        ellipse(player[j][0], player[j][1], 5, 5);
        
        player[j][0] += player[j][2];
        player[j][1] += player[j][3];
        
        ellipse(frameCount/2.5 + 200, player[j][1], 5, 5);
        
    }
    
};