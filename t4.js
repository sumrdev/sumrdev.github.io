let y = 500;
let speedy = 5;

function setup()
{
    createCanvas(windowWidth,windowHeight);
}


function draw()
{
    resizeCanvas(windowWidth,windowHeight);
    background(0);
    let x = windowWidth/2;
    ellipse(x,y,25);
    
    if(y>=height || y<=0)
    {
        speedy*=-1;
    }
y+=speedy;
}