let pos;
let vel;
let acc;
let force;
let grav;
let wind;
let friction;

function setup()
{
    createCanvas(windowWidth,windowHeight);
    pos = createVector(width/2,height/2);
    vel = createVector(0,0);
    acc = createVector(0,0);
}



function draw()
{
    background(0);

    grav = createVector(0,1);
    applyForce(grav);
    
    wind = createVector(0.0,0);
    applyForce(wind);
    
    friction = createVector(vel.x,vel.y);
    friction.normalize();
    friction.mult(-1);

    let c = -0.01;
    friction.mult(c);
    applyForce(c);

    update();
    show();
}


    function applyForce(force)
    {
        acc.add(force)
    }

    function update()
    {
        pos.add(vel);
        vel.add(acc);
        acc.mult(0);

        if(pos.x < 0 || pos.x > width)
        {
            vel.x= vel.y *-1
        }

        if(pos.y < 0 || pos.y > height)
        {
            vel.y= vel.y *-1
        }
    }


    function show()
    {
        ellipse(pos.x,pos.y,40);
    }