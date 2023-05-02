console.log("Hello! Welcome to RomeroDesign.net, my protfolio site!");

function menuToggle(){
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}