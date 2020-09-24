let enemy = [];
let enemyD = [];
let enemyC = [];
let enemyS;
let directionChoices = [-1,1];
let enemyN = 40;
let spawn = [];
function setup()
{
    createCanvas(windowWidth,windowHeight);
    noCursor();
    for(let i = 0; i<enemyN; i++)
    {
        

        for(let i = 0-enemyS/2; i<width+enemyS/2; i++)
        {
            spawn.push(createVector(i,0));
            
        }
        
        for(let i = 0-enemyS/2; i<height+enemyS/2; i++)
        {
            spawn[i] = i;
            
        }
        
        enemy[i] = createVector(random(spawn.x),random(spawn.y));
        enemyC[i] = createVector(random(100,255),random(100,255),random(100,255));
        enemyD[i] = createVector(random(directionChoices),random(directionChoices));
       
    }


}

function draw()
{
    resizeCanvas(windowWidth,windowHeight);
    background(0);
   fill(255);   
    ellipse(mouseX,mouseY,enemyS);
    for(let i = 0; i<enemyN; i++)
    {
        fill(enemyC[i].x,enemyC[i].y,enemyC[i].z);
        ellipse(enemy[i].x,enemy[i].y,enemyS);
        enemy[i]=enemy[i].add(enemyD[i]);
    if(enemy[i].x >=width+enemy[i].z/2 || enemy[i].x <=0-enemy[i].z/2)
        {
            enemy[i] = createVector(random(30,width-30),random(30,height-30),random(5,50));
         }
    }
}