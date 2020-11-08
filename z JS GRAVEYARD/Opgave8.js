let Player1;
let Player2;
let Rad;
let cRad;
let nCheese = 5;
let Cheese = [];
let speed = 5;
let ScoreP1 = 0;
let ScoreP2 = 0;
let STW = 20 ;
let MW1 = 0;
let MW2 = 0;

function setup()
{
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER);
    Player1 = createVector(random(30,width-30),random(30,height-30));
    Player2 = createVector(random(30,width-30),random(30,height-30));
    for(let i = 0; i<nCheese; i++)
    {
        Cheese[i] = createVector(random(30,width-30),random(30,height-30));
    }
}

function draw() 
{
resizeCanvas(windowWidth,windowHeight);
Rad = windowWidth/32;
cRad = windowWidth/64;
strokeWeight(0);
background(0);
fill("#FF0000");
ellipse(Player1.x, Player1.y,Rad);
fill("#0000FF");
rect(Player2.x,Player2.y,Rad);
fill("#FFff00");
for(let i = 0; i<nCheese; i++)
{
    ellipse(Cheese[i].x,Cheese[i].y,cRad);
}
    Player1Mov();
    Player2Mov();
    CollisionCircle();
    Score();    
}

function Player1Mov ()
{
    let direction = createVector(0,0);
    direction.x=keyIsDown(68)-keyIsDown(65);
    direction.y=keyIsDown(83)-keyIsDown(87);
    direction.normalize();
    Player1 = Player1.add(direction.mult(speed));

    if(Player1.x>width-Rad/2 )
    {
    Player1.x=width-Rad/2;
    }
    
    if(Player1.x<0+Rad/2 )
    {
    Player1.x=0+Rad/2;
    }
    
    if(Player1.y>height-Rad/2 )
    {
    Player1.y=height-Rad/2;
    }
    
    if(Player1.y<0+Rad/2 )
    {
    Player1.y=0+Rad/2;
    }




}
//|| Player1.x<=0+Rad

function Player2Mov ()
{
    let direction = createVector(0,0);
    direction.x=keyIsDown(39)-keyIsDown(37);
    direction.y=keyIsDown(40)-keyIsDown(38);
    direction.normalize();

    Player2 = Player2.add(direction.mult(speed));

    
    if(Player2.x>width-Rad/2 )
    {
    Player2.x=width-Rad/2;
    }
    
    if(Player2.x<0+Rad/2 )
    {
    Player2.x=0+Rad/2;
    }
    
    if(Player2.y>height-Rad/2 )
    {
    Player2.y=height-Rad/2;
    }
    
    if(Player2.y<0+Rad/2 )
    {
    Player2.y=0+Rad/2;
    }

}

function CollisionCircle()
{
    for(let i = 0; i < nCheese; i ++)
    {
        if(dist(Player1.x,Player1.y,Cheese[i].x,Cheese[i].y) <=Rad/2+cRad/2)
        {
            console.log("Collision");
            Cheese[i] = createVector(random(30,width-30),random(30,height-30));
            ScoreP1 ++;
           
        }
    }

    for(let i = 0; i < nCheese; i ++)
    {
        if(dist(Player2.x,Player2.y,Cheese[i].x,Cheese[i].y) <=Rad/2+cRad/2 
        || dist(Player2.x+Rad/2,Player2.y-Rad/2,Cheese[i].x,Cheese[i].y) <=cRad/2
        || dist(Player2.x-Rad/2,Player2.y+Rad/2,Cheese[i].x,Cheese[i].y) <=cRad/2
        || dist(Player2.x-Rad/2,Player2.y-Rad/2,Cheese[i].x,Cheese[i].y) <=cRad/2)
        {
            console.log("Collision");
            Cheese[i] = createVector(random(30,width-30),random(30,height-30));
            ScoreP2 ++;
            
           

        }
    }
}

function Score()
{
    
    fill(255);
    textSize(40);   
    fill("#ff0000")
    textAlign(CENTER,CENTER);
    text(ScoreP1,windowWidth/2-50,windowHeight/16);
    fill(255);
    text("|",windowWidth/2,windowHeight/16);
    fill("#0000ff");
    text(ScoreP2,windowWidth/2+40,windowHeight/16);
    fill("#ff0000")
    text(MW1,windowWidth/2-50,windowHeight/10);
    fill(255);
    text("|",windowWidth/2,windowHeight/10);
    fill("#0000ff");
    text(MW2,windowWidth/2+40,windowHeight/10);
  
    
    if( ScoreP2 >=STW)
    {
        textSize(200);  
        fill("#0000ff");
       background(0); 
       text("BLÅ VINDER",windowWidth/2,windowHeight/2);
       if(keyIsDown(82))
       {    
           ScoreP1 = 0;
           ScoreP2 = 0;
           MW2 ++;
       }
    }

    if(ScoreP1 >= STW )
    {
        textSize(200); 
        fill("#ff0000");
       background(0); 
       text("RØD VINDER",windowWidth/2,windowHeight/2);
       if(keyIsDown(82))
       {    
           ScoreP1 = 0;
           ScoreP2 = 0;
           MW1 ++;
       }
      
    }
}

