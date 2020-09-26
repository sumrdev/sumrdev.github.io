

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
    stroke(0);
   rect(width/2,height/2,width/2,height/2)

   strokeWeight(4);
    for(let i = 1; i<=7; i ++ )
    {
        line(width*i/14+(width/4),height/4,width*i/14+(width/4),height*0.75)
    }
    noStroke();
    fill(0);
    for(let i = 2; i<=3; i ++){
    rect((width*i/14+(width/4.65))-width/28,height/2.5-height/15,width/28,width/3.3);

    for(let i = 5; i<=7; i ++){
        rect((width*i/14+(width/4.65))-width/28,height/2.5-height/15,width/28,width/3.3);
}
}
stroke("#ff0000");
point(width/4,height/2);
point(width/9+(width/4.65),height/2)

}

function mouseClicked()
{
    if(mouseX<=width/14+(width/4.65) && mouseX >= width/4 && mouseY >=height/2-height/4 && mouseY <=height/2+height/4 ){
    console.log("hej");
    
    if(mouseX<=width/14+(width/4.65) && mouseX >= width/4 && mouseY >=height/2-height/4 && mouseY <=height/2+height/4 )
    {

    }
}
}
