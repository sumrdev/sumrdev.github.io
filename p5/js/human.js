class human {
    constructor() {
        this.loc = createVector(random(size,width-size),random(size,height-size));
        this.vel = createVector(random(-5, 5), random(-5, 5));
        this.size = size;
        this.status = 1;
        this.survivalRate = Math.floor(random(0, 99));
        this.timer = Math.floor(Math.pow(4, random(2, 5.3))+50);
        this.infDate;
        this.mass = 1;
        this.r = 0;
        this.g = 150;
        this.b = 255;
    }

    display() {
        noStroke();
        fill(this.r,this.g,this.b);
        if(this.status == 1){
            if(this.r >= 0){
                this.r -=5;
            }
            if(this.g>=150){
                this.g-=5;
            }
        }
        if(this.status == 2){
            if(this.r <= 255){
                this.r +=5;
            }
            if(this.g>=0){
                this.g-=5;
            }
            if(this.b>=0){
                this.b-=5;
            }
        }
        if(this.status == 3){
            if(this.r >= 0){
                this.r -=5;
            }
            if(this.g<=255){
                this.g+=5;
            }
            if(this.b>=0){
                this.b-=5;
            }
        }
        if(this.status == 4) {
            if(this.r >= 0) {
                this.r -=5;
            }
            if(this.g >= 0) {
                this.g -=5;
            }
            if(this.b >= 0) {
                this.b -=5;
            }
            if(this.size > 10) {
                this.size -=1;
            }
        }

/*
        if(this.status == 1){
            fill(0,150,255);
        }
        if(this.status == 2){
            fill(255,0,0);
        }
        if(this.status == 3){
            fill(0,255,0);
        }
        if(this.status == 4){
            fill(0);
        }
*/

    ellipse(this.loc.x, this.loc.y, this.size);
        
    }

    move() {
        this.loc.add(this.vel);

    }

    countDown() {
        this.timer -=1;
    }

    fate() {
        if(this.status == 2 &&  1 > this.timer){
            if(this.survivalRate >= 24){
                this.status = 3;
            }

            else if(this.survivalRate <= 25){
                this.status = 4;
            }
        }
    }

    afterLife() {
        for(let i = 0; i < h.length; i++) {
            if(h[i].status == 4) {
                h[i].vel.mult(0);
            }
        }
    }

    collisionWall() {
        
        //Collision with right and left wall.
        if (this.loc.x - this.size/2 <= 0) {
            this.vel.x = -this.vel.x;
            this.loc.x = 0 + this.size/2;
        } else if (this.loc.x + this.size/2 >= width) {
            this.vel.x = -this.vel.x;
            this.loc.x = width - this.size/2;
        }

        //Collision with top and bottom wall.
        if (this.loc.y - this.size/2 <= 0) {
            this.vel.y = -this.vel.y;
            this.loc.y = 0 + this.size/2;
        } else if (this.loc.y + this.size/2 >= height) {
            this.vel.y = -this.vel.y;
            this.loc.y = height - this.size/2;
        }
    }

    collisionHuman() {
        for (let i = 0; i < h.length; i++) {
            if (dist(this.loc.x, this.loc.y, h[i].loc.x, h[i].loc.y) - this.size/2 - h[i].size/2 < 0 && h[i].status != 4 && this.status != 4) {
                //Prevents a human to be compared to itself.
                if (this === h[i]) continue;

                if(h[i].status == 2 && this.status == 1 || h[i].status == 1 && this.status == 2){
                    this.status = 2;
                    h[i].status = 2;
                }
                
                //Calculates each humans new direction.
                let xVelocityDiff = this.vel.x - h[i].vel.x;
                let yVelocityDiff = this.vel.y - h[i].vel.y;

                let xDist = h[i].loc.x - this.loc.x;
                let yDist = h[i].loc.y - this.loc.y;

                //Prevent accidental overlap of particles.
                if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                    // Grab angle between the two colliding particles
                    let angle = -Math.atan2(h[i].loc.y - this.loc.y, h[i].loc.x - this.loc.x);

                    // Store mass in var for better readability in collision equation
                    let m1 = this.mass;
                    let m2 = h[i].mass;

                    // Velocity before equation
                    let u1 = this.rotateVel(this.vel, angle);
                    let u2 = this.rotateVel(h[i].vel, angle);

                    // Velocity after 1d collision equation
                    let v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                    let v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

                    // Final velocity after rotating axis back to original location
                    let vFinal1 = this.rotateVel(v1, -angle);
                    let vFinal2 = this.rotateVel(v2, -angle);

                    // Swap particle velocities for realistic bounce effect
                    this.vel.x = vFinal1.x;
                    this.vel.y = vFinal1.y;

                    h[i].vel.x = vFinal2.x;
                    h[i].vel.y = vFinal2.y;
                }
            }
        }
    }

    rotateVel(velocity, angle) {
        const rotatedVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };
    
        return rotatedVelocities;
    }
}