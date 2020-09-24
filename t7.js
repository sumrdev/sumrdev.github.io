

function draw()
{
    createCanvas(windowWidth,windowHeight);
    background(0);
    fill(255);
    textSize(windowWidth/2);
    textAlign(CENTER, CENTER);
    console.log(keyCode);

        if(keyIsDown( 65))
    {
        text("A",windowWidth/2,windowHeight/2);
        console.log("A"); 
    }

    if(keyIsDown (86))    
    {
        text("V",windowWidth/2,windowHeight/2);
        console.log("V");
    }

}
