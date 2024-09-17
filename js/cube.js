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

