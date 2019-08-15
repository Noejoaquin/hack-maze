console.log('hello');
const canvas = document.getElementById('maze')
const context = canvas.getContext("2d");
context.fillStyle = 'blue';
context.fillRect(250, 50, 100, 100);
context.font = "12px Arial";
context.fillText("Hello World",10,50);
