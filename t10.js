let Target = [];
let nTarget = 5;
let Score = 0;
let size = 50;

function setup()
{
    createCanvas(windowWidth,windowHeight);

    for(let i = 0; i<nTarget; i++)
    {
        Target[i] = createVector(random(30,width-30),random(30,height-30));
    }
    cursor('crosshair.png',16,16);

}

function draw()
{
    fill (255);
    textSize(40);
    resizeCanvas(windowWidth,windowHeight);
    background(0);
    text(Score,windowWidth/2,windowHeight/16);
    for(let i = 0; i<nTarget; i++)
{
    ellipse(Target[i].x,Target[i].y,size);
}
}

function mousePressed()
{   
     for(let i = 0; i < nTarget; i ++)
        {
        if(dist(mouseX,mouseY,Target[i].x,Target[i].y) <size/2)
            {
                Target[i] = createVector(random(30,width-30),random(30,height-30)); 
                Score ++;

            }
        }
}