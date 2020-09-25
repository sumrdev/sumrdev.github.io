

function setup()
{
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER);
}

function draw()
{
    resizeCanvas(windowWidth,windowHeight)
    background(0);
    fill(255);
   rect(width/2,height/2,width/2,height/2)
   stroke(0);
   strokeWeight(4);
    for(let i = 1; i<=7; i ++ )
    {
        line(width*i/14+(width/4),height/4,width*i/14+(width/4),height*0.75)
    }
    
  
}