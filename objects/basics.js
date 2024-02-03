// Object Oriented Programming

const circle = {
    radius: 1,
    position: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log("Draw");
    }
}

circle.draw();
console.log(circle.position.x, circle.position.y);