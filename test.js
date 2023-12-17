function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}
function randomNumberFloat(min, max) {
    return (Math.random() * (max - min + 1)) + parseFloat(min);
}
function get(id) {
    try {
        return document.getElementById(id);
    } catch (error) {
        console.error("Error in get function:", error);
        return null;
    }
}
document.addEventListener("DOMContentLoaded", function() {
         // Get the canvas element and check if it exists
const canvas = get('myCanvas');
if (!canvas) {
console.error("Canvas element with ID 'canvas' not found.");
return;
}

// Get the 2D rendering ctx
const ctx = canvas.getContext('2d');

//Initial generation
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399)); 
// Regen button
get('regen').onclick = function() {
ctx.fillStyle = 'black';
ctx.fillRect(0,0,800,800);
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'red';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'orange';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'yellow';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'green';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'blue';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'indigo';
ctx.fillRect(randomNumber(1,399), randomNumber(1,399), randomNumber(1,399), randomNumber(1,399));
ctx.fillStyle = 'violet';
ctx.fillRect(randomNumber(1,399),randomNumber(1,399), randomNumber(1,399), randomNumber(1,399)); 

};
});