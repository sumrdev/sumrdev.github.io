let circleAmount = document.getElementById("circleAmount");
let repelForce = document.getElementById("repelForce");
let attractForce = document.getElementById("attractForce");
let frictionForce = document.getElementById("frictionForce");
let dragForce = document.getElementById("dragForce");

let movers = [];

function setup() {
    var canvas = document.getElementById('canvas');
    var width = canvas.offsetWidth;
    var sketchCanvas = createCanvas(windowWidth, windowHeight);
    sketchCanvas.parent("canvas");

    for (let i = 0; i < 10; i ++) {
        movers[i]= new M (random(width),random(100,width-100)); 
    }   
    stroke("0")
    strokeWeight(5)
}



function draw() {
    
    //Resize and whipe canvas
    resizeCanvas(windowWidth, windowHeight);
    background(0);
    updateSliderValues();
    
    //Check for collotion
    for (let mover of movers) {
       mover.collition(movers);
    }

    //Check which mouse button is pressed
    for(let mover of movers){
        let gravity = createVector(0,gravityForce.value/100);
        mover.drag();
        mover.applyForce(gravity);
        if(mouseIsPressed && mouseButton === LEFT)
        {
            mover.repel();
        }

        if(mouseIsPressed && mouseButton === RIGHT)
        {
            mover.attract();
        }

        mover.friction();
        mover.update();
        mover.edges();
        mover.show();
    }
}

function updateSliderValues() {
    circleAmount = document.getElementById("circleAmount");
    let circleAmountValue = document.getElementById("circleAmountValue");
    circleAmountValue.innerHTML = circleAmount.value;
    if (circleAmount.value < movers.length) {
        movers.pop();
    } else if (circleAmount.value > movers.length) {
        movers.push(new M (random(width),random(100,width-100)));
    }
    
    gravityForce = document.getElementById("gravityForce");
    let gravityForceValue = document.getElementById("gravityForceValue");
    gravityForceValue.innerHTML = gravityForce.value;

    gravityForce.oninput = function() {
        gravityForceValue.innerHTML = this.value;
    }

    repelForce = document.getElementById("repelForce");
    let repelForceValue = document.getElementById("repelForceValue");
    repelForceValue.innerHTML = repelForce.value;

    circleAmount.oninput = function() {
        repelForceValue.innerHTML = this.value;
    }
    
    attractForce = document.getElementById("attractForce");
    let attractForceValue = document.getElementById("attractForceValue");
    attractForceValue.innerHTML = attractForce.value;

    circleAmount.oninput = function() {
        attractForceValue.innerHTML = this.value;
    }
    
    frictionForce = document.getElementById("frictionForce");
    let frictionForceValue = document.getElementById("frictionForceValue");
    frictionForceValue.innerHTML = frictionForce.value;

    circleAmount.oninput = function() {
        frictionForceValue.innerHTML = this.value;
    }
    
    dragForce = document.getElementById("dragForce");
    let dragForceValue = document.getElementById("dragForceValue");
    dragForceValue.innerHTML = dragForce.value;

    circleAmount.oninput = function() {
        dragForceValue.innerHTML = this.value;
    }
}

class M {
    constructor(x,y) {
        this.loc = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.dia = random(10,100);
        this.mass = 3.1415*this.dia/2^2;
        this.color = createVector(random(0,255),random(0,100),random(200,255));
    }

    repel() {
        //line(mouseX,mouseY,this.loc.x,this.loc.y);
        let wind = this.loc.copy();
        wind.sub(mouseX,mouseY);
        wind.setMag(repelForce.value/this.mass);
        this.applyForce(wind);
        //console.log(wind);
        console.log(this.mass)
    }

    attract() {
        //line(mouseX,mouseY,this.loc.x,this.loc.y);
        let wind = this.loc.copy();
        wind.sub(mouseX,mouseY);
        wind.setMag(attractForce.value*-1/this.mass);
        wind.div(this.loc-mouseX,mouseY);
        this.applyForce(wind);
         //console.log(wind);
    }

    friction() {
        if(this.loc.y == height - this.dia/2)
        {
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);

            let normal = 3.1415*this.dia/2;
            friction.setMag(frictionForce.value/100000*normal);
            //console.log(friction);
            this.applyForce(friction);
            let fric = friction;
            //console.log(fric);
        }
    }

    drag() {
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);

        let c = dragForce.value/10000;
        let speed = this.vel.mag();
        drag.setMag(c*speed*speed);
        this.applyForce(drag);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    edges() {
        if(this.loc.x>= width-this.dia/2)
        {
         this.loc.x = width-this.dia/2;
         this.vel.x *=-1
        }

        if(this.loc.x<=0+this.dia/2 )
        {
         this.loc.x = 0+this.dia/2;
         this.vel.x *=-1
        }

        if(this.loc.y>=height-this.dia/2)
        {
            this.loc.y = height-this.dia/2;
            this.vel.y *=-1;
        }

        if(this.loc.y<=0+this.dia/2 )
        {
            this.loc.y = 0+this.dia/2;
            this.vel.y *=-1;
        }
    }

    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.set(0,0);
    }

    show() {
        fill(this.color.x,this.color.y,this.color.z);
        circle(this.loc.x,this.loc.y,this.dia);

        let checkBox = document.getElementById("showVel");
        if (checkBox.checked == true){
            line(this.loc.x,this.loc.y,this.loc.x-this.vel.x*-5,this.loc.y-this.vel.y*-5);
        } 

    }

    collition(objects) {
        for(let object of objects) {
            let distance = dist(this.loc.x, this.loc.y, object.loc.x, object.loc.y);
            if (distance <= (this.dia/2)+(object.dia/2) && distance != 0) {
                
                let r1 = this.loc.copy().sub(object.loc.copy());
                let overlap = (this.dia/2)+(object.dia/2)-r1.mag();
                r1.setMag(overlap/2);

                this.loc.add(r1);

                let newVel;
                
                let v1 = this.vel.copy().sub(object.vel.copy());
                let p1 = this.loc.copy().sub(object.loc.copy());
                let del1 = (2*object.mass)/(object.mass+this.mass);
                let midDel1 = v1.copy().dot(p1.copy());
                let midDel2 = Math.pow(p1.mag(), 2);
                let del2 = midDel1/midDel2;
                let comb1 = del2*del1;
                let comb2 = p1.copy().mult(comb1);
                newVel = this.vel.copy().sub(comb2.copy());
                newVel = newVel.copy().sub(this.vel.copy());
                
                this.applyForce(newVel);
                
            }
        }
    }
}

