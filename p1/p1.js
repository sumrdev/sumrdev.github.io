let enemy = [];
let enemyN = 100;
let enemyS = [];
let enemyD = [];
let enemyC = [];
let Player =25;
let Lose = 0;
let enemyMS = 600;
let gameStatus = "waitToStart";

function setup()
{
    var canvas = document.getElementById("cinema");
    var width = canvas.offsetWidth;
    var sketchCanvas = createCanvas(width,width/(16/9));
    sketchCanvas.parent("cinema")
    frameRate(60);
    noStroke();
    for(let i = 0; i<enemyN; i++)
{
    spawnEnemy(i);
}
noCursor();
console.log("hej");
}

function draw()
{
    
    background(0);
    fill(255);   
    ellipse(mouseX,mouseY,Player);  

    
    if(gameStatus == "Running")
    {
        for(let i = 0; i<enemyN; i++)
        {
            fill(enemyC[i].x,enemyC[i].y,enemyC[i].z);
            ellipse(enemy[i].x,enemy[i].y,enemyS[i]);
            enemy[i]=enemy[i].add(enemyD[i]);

            if(enemy[i].x >=width +enemyS[i]/2||enemy[i].x <=0-enemyS[i]/2 || enemy[i].y >=height+20 +enemyS[i]/2 || enemy[i].y <=-enemyS[i]/2 )
            {
                spawnEnemy(i);
            }

            if((dist(mouseX,mouseY,enemy[i].x,enemy[i].y)) <= Player/2 + enemyS[i]/2 && enemyS[i] <= Player)
            {
                spawnEnemy(i);
                Player +=5;
                

            }

            if((dist(mouseX,mouseY,enemy[i].x,enemy[i].y)) <= Player/2 + enemyS[i]/3 && enemyS[i] > Player)
            {
                gameStatus = "Lost";
                Player = 25;
            }


            if(Player-400 >=enemyMS)
            {
                gameStatus = "Win"
                Player = 25;
            }

        }
        fill(255);
        textAlign(CENTER);
        textSize(100);
        text((Player/5)-4,width-100,height/12);
    }

    else if(gameStatus == "waitToStart")
    {
        fill(255);
        textAlign(CENTER);
        textSize(60);
        text("CLICK TO START",width/2,height/2);
    }

    else if(gameStatus == "Lost")
    {
        fill(255);
        textAlign(CENTER);
        textSize(60);
        text("YOU LOST",width/2,height/6);
        text("CLICK TO START",width/2,height/2);
    }

    else if(gameStatus == "Win")
    {
        fill(255);
        textAlign(CENTER);
        textSize(60);
        text("YOU WON!",width/2,height/6);
        text("CLICK TO START",width/2,height/2);
    }

}


function mouseClicked()
{
    if(gameStatus == "waitToStart" )
    {
        gameStatus = "Running";
    }   
    
    if(gameStatus == "Lost" )
    {
        enemy=[];
        enemyS=[];
        enemyD=[];
        enemyC=[];
        for(let i = 0; i<enemyN; i++)
        {
            spawnEnemy(i);
        }

        gameStatus = "Running";
    }   

    if(gameStatus == "Win")
    {
        enemy=[];
        enemyS=[];
        enemyD=[];
        enemyC=[];
        for(let i = 0; i<enemyN; i++)
        {
            spawnEnemy(i);
        }

        gameStatus = "Running";
    }
}

function spawnEnemy(i)
{
    enemyS[i]=min(enemyMS,random(Player-9,Player+125));
    side = Math.floor(random(0,4));
    if (side == 0) {
        enemy[i]=createVector(random(0,width),-enemyS[i]/2);
    } else if (side == 1) {
        enemy[i]=createVector(0-enemyS[i]/2,random(height));
    } else if (side == 2) {
        enemy[i]=createVector(width+enemyS[i]/2,random(0,height));
    } else if (side == 3) {
        enemy[i]=createVector(random(0,width),height+enemyS[i]/2);
    }
    enemyD[i]=createVector(random(-1,1),random(-1,1)); 
    enemyC[i] = createVector(random(0,255),random(0,255),random(200,255)); 
}