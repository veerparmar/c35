var ball;
var dataBase;
var position;
var ballPosition

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database(); // instance 
    console.log(dataBase);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    ballPosition = dataBase.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");

    if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0)
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1)
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,1)
    }
    }
    drawSprites();
}

function readPosition(data){ 
    position = data.val();
    console.log(position);
    ball.x = position.x;
    ball.y = position.y;
}

function showError(err){
    console.log("There is an error");
    
}


function WritePosition(x,y){
    
    dataBase.ref('ball/position').set({
    x : position.x + x,
    y : position.y + y
    })
    
}





