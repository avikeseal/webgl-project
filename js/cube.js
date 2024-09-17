//main js file for webGL code
//initializing webgl:
function initWebGL(canvas) {
    //this gl object will allow us to interact with the webgl api
    //and draw on the canvas
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if(!gl) {
        alert("Unable to initialize WebGL. Your browser may not support it");
        return null;

    }
    return gl;
}

//setting up the webgl context and clear color:
function start() {
    const canvas = document.getElementById("glcanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gl = initWebGL(canvas);
    if (!gl) return;

    //clear to black:
    gl.clearColor(0.0,0.0,0.0,1.0); 
    gl.clear(gl.COLOR_BUFFER_bit);

    // Placeholder for further cube rendering
}

//call start on load
window.onload = start;