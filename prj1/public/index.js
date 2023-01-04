function start(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.rect(20, 20, 100, 100);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}