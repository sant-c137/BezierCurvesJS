const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function Draw(x1, y1, x2, y2) {
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

const sizeOfCanvas = 500;

function BezierCurve1 (value){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var numbersOfLines = 500;
    var increaseOfLine = sizeOfCanvas / value;
    var x1 = 0, y1 = 0;
    var x2 = increaseOfLine, y2 = sizeOfCanvas;
    
    for (let i = 0; i < numbersOfLines; i++) {
    
        Draw(x1,y1,x2,y2);
    
        y1 += increaseOfLine;
        x2 += increaseOfLine;
        
    }
}


function BezierCurve2 (increaseOfLine){
    var numbersOfLines = 500;
    x1 = 0, y1 = 0;
    x2 = sizeOfCanvas, y2 = increaseOfLine;

    for (let i = 0; i < numbersOfLines; i++) {

        Draw(x1,y1,x2,y2);

        x1 += increaseOfLine;
        y2 += increaseOfLine;
        
    }
}

function BezierCurve3 (increaseOfLine){
    var numbersOfLines = 500;
    x1 = sizeOfCanvas, y1 = 0;
    x2 = sizeOfCanvas, y2 = sizeOfCanvas;

    for (let i = 0; i < numbersOfLines; i++) {

        Draw(x1,y1,x2,y2);

        y1 += increaseOfLine;
        x2 -= increaseOfLine;
        
    }
}
function BezierCurve4 (increaseOfLine){
    var numbersOfLines = 500;
    x1 = sizeOfCanvas, y1 = 0;
    x2 = 0, y2 = increaseOfLine;

    for (let i = 0; i < numbersOfLines; i++) {

        Draw(x1,y1,x2,y2);

        x1 -= increaseOfLine;
        y2 += increaseOfLine;
        
    }
}


