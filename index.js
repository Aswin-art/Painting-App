const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 700
canvas.height = 500

localStorage.setItem('color', 'black')

let painting = false
function startPosition(e){
    painting = true
    draw(e)
}

function finishedPosition(){
    painting = false
    ctx.beginPath()
}

function draw(e){
    if(!painting){
        return
    }
    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    ctx.lineTo(e.clientX, e.clientY)
    ctx.moveTo(e.clientX, e.clientY)
    ctx.strokeStyle = localStorage.getItem('color')
    ctx.stroke()
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', finishedPosition)
canvas.addEventListener('mousemove', draw)

document.querySelector('.btn-red').addEventListener('click', function(){
    localStorage.setItem('color', 'red')
})
document.querySelector('.btn-green').addEventListener('click', function(){
    localStorage.setItem('color', 'green')
})
document.querySelector('.btn-blue').addEventListener('click', function(){
    localStorage.setItem('color', 'blue')
})
document.querySelector('.btn-orange').addEventListener('click', function(){
    localStorage.setItem('color', 'orange')
})
document.querySelector('.btn-clear').addEventListener('click', clear)