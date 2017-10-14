// Mandelbrot set!
// collab between me and bzw77 - click to zoom!!
// if too laggy, you have few options:
// - increase [step]
// - decrease [drawits]
// - decrease [max_iterations]
// to navigate around the mandelbrot set, use 
// [offx], [offy] to pan around and [zoom] to zoom in and out

frameRate(11111111111);

var offx= -50; // offset along x axis for the drawing
var offy= 0; // offset along y axis for the drawing
var zoom= 1; // zoom level. Increase for more zoom! If zoom is too high, you may have to also increase max_iterations to see more detail
var step= 0.005; // detail of the drawing. Higher = more detail, but slower
var max_iteration= 20000; // max number of iterations per pixel. Higher = more detail, but slower
var drawits= 1000; // number of points evaluated per single draw() call. Increase to draw faster, but more expensive.

noStroke();

var iterations_at = function(cx, cy) {
    var iteration = 0;
    var ozx;
    var length;
    var zx = 0, zy = 0;
    do {
        ozx = zx;
        zx = zx*zx - zy*zy + cx;
        zy = 2*ozx*zy + cy;
        iteration++;
        length = zx*zx+zy*zy;
    } while ((length < 4) && (iteration < max_iteration));
    return iteration;
};

// all action for mandelbrot set happens in box [-2, 2] x [-2, 2]
var effzoom= 1.0/zoom;
var x=-2.0;
var y=-2.0;
var boxrange= 4; // size of the box, in complex plane
var gstep= step/boxrange*400; // gstep is short for graphics step. This is calculating how large every drawing rectangle will be
var draw = function() {
    
    // let's evaluate drawits number of points every draw() iteration
    for(var i=0;i<drawits;i++) {
        
        // increment x and y to consider the next pixel
        y+= step;
        if(y>2) {
            y= -2;
            x+= step;
        }
        if(x>2){
            x= -2;
            y= -2;
        }
        
        // transform based on zoom and offset of the "camera"
        var tx= effzoom*x + 0.01*offx; // transformed x
        var ty= effzoom*y + 0.01*offy; // transformed y
        var iters= iterations_at(tx, ty);
        
        colorMode(HSB);
        
        // compute color from iterations and draw a small rectangle
        var col = 20*(max_iteration - iters)/max_iteration*max_iteration%255;
        fill(255-col, 255-col/2, col*2);
        rect((x+2)/boxrange*width,(y+2)/boxrange*height, gstep,gstep);
        
    }
};

mouseClicked=function(){
    offx+=(mouseX-200) * effzoom;
    offy+=(mouseY-200) * effzoom;
    zoom*=10;
    effzoom= 1.0/zoom;
    x=-2.0;
    y=-2.0;
};