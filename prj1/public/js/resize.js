const canvas = document.getElementById('myCanvas')
const c = canvas.getContext('2d')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function randomPos(){
    return [
        Math.floor(Math.random() * canvas.width),
        Math.floor(Math.random() * canvas.height)
    ]
}

function randomColor(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    return "rgba(" + r + "," + g + "," + b + ", 1.0)"
}

// Rectangles
c.fillStyle = 'rgba(100, 100, 0, 1.0)'
c.fillRect(100, 100, 100, 100)
c.fillRect(400, 100, 100, 100)
c.fillRect(100, 400, 100, 100)


// Lines
c.beginPath()
c.moveTo(100, 100)
c.lineTo(100, 600)
c.lineTo(600, 100)
c.lineTo(100, 100)
c.strokeStyle = "blue"
c.stroke()


// Arc
c.beginPath()
let tuple = randomPos()
c.strokeStyle = randomColor()
c.moveTo(tuple[0], tuple[1])
c.arc(tuple[0], tuple[1], 30, 0, 3*Math.PI / 4, false)
c.lineTo(tuple[0], tuple[1])
c.stroke()

// Arc
c.beginPath()
tuple = randomPos()
c.strokeStyle = randomColor()
c.moveTo(tuple[0], tuple[1])
c.arc(tuple[0], tuple[1], 30, 0, 3*Math.PI / 4, false)
c.lineTo(tuple[0], tuple[1])
c.stroke()
// Arc / Circle
// Arc
c.beginPath()
tuple = randomPos()
c.strokeStyle = randomColor()
c.moveTo(tuple[0], tuple[1])
c.arc(tuple[0], tuple[1], 30, 0, 3*Math.PI / 4, false)
c.lineTo(tuple[0], tuple[1])
c.stroke()
// Arc / Circle

