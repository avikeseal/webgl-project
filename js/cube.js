//main js file for webGL code
//initializing webgl:

 //constants:
 const e = 1.602e-19; //elementary charge in C
 const z = 2; //charge of alpha particle
 const Z = 13; //Atomic number of aluminium
 const n = 6.02e28; //Number density of aluminium atoms
 const m0 = 9.109e-31; //Electron rest mass in kg
 const I = 150 * e; //Ionization energy (150 eV converted to joules)
 const c = 3.0e8; //speed of light in m/s
 const pi = Math.PI; //pi constant

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

function computeEnergyLoss(v) {
    const prefactor = (4* pi * Math.pow(e, 4) * Math.pow(z, 2) * Z * n) / (m0 * Math.pow(v, 2));
    const log_term1 = Math.log((2 * m0 * Math.pow(v, 2)) / I);
    const log_term2 = Math.log(1 - (Math.pow(v, 2) / Math.pow(c, 2))) + Math.pow(v, 2) / Math.pow(c, 2);

    return prefactor * (log_term1 - log_term2);
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
    gl.clear(gl.COLOR_BUFFER_BIT);

    console.log(computeEnergyLoss(1e7)); //Test the function inside the start
    console.log(computeEnergyLoss(2e8)); //Test with another velocity
    console.log("WebGL initialized successfully!");



    // Placeholder for further cube rendering
}


//call start on load
window.onload = start;