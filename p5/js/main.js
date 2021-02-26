let h = [];
let population = 600;
let size = 23;

let time = [];
let susceptible = [];
let infected = [];
let recovered = [];
let dead = [];
let removed = [];
let maxDatapoints = 50;

let arrays = [time, susceptible, infected, recovered, dead, removed];
//var modal;
function setup()
{
    var canvas = document.getElementById('canvas');
    //modal = document.getElementById('exampleModalCenter');
    var width = canvas.offsetWidth;
    var sketchCanvas = createCanvas(windowWidth, windowHeight);
    sketchCanvas.parent("canvas");
    frameRate(60);
    for(let i = 0; i < population; i++){
        newHuman();
    }
    h[0].status = 2;
}

function draw() {
    resizeCanvas(windowWidth, windowHeight);
    background(100);
    let SIR = getSIR();

    for(let i = 0; i < population; i++){
        h[i].display();
        h[i].move();
        if (h[i].status == 2) {
            h[i].countDown();
        }
        h[i].collisionWall();
        h[i].collisionHuman();
        h[i].afterLife();

        if(frameCount % 60)
        {
            h[i].fate()
        }
    }
    
    //save data
    if (frameCount % 30 == 0 && frameCount/30<maxDatapoints) {
        if(SIR[1] != 0) {
            maxDatapoints = frameCount/30+2;
        }
        time.push(frameCount/30);
        susceptible.push(SIR[0]);
        infected.push(SIR[1]);
        recovered.push(SIR[2]);
        dead.push(SIR[3]);
        removed.push(SIR[2]+SIR[3])
        simulationChartSIRD.update();
        simulationChartSIR.update();
    }
    
    //text(susceptible[(susceptible.length-1)],10,30);
    fill(255);
    text("Susceptible: " + SIR[0], 10, 30);
    text("Infected: " + SIR[1], 10, 50);
    text("Recovered: " + SIR[2], 10, 70);
    text("Dead: " + SIR[3], 10, 90);
    text("CREDIT TIL JOGGE OG DAVID",10,110);
}

function newHuman() {
    h.push(new human());
}

function getSIR() {
    let SIR = [0,0,0,0];

    for(human of h) {
        if(human.status == 1) {
            SIR[0] += 1;
        } else if (human.status == 2) {
            SIR[1] += 1;
        } else if (human.status == 3) {
            SIR[2] += 1;
        } else if (human.status == 4) {
            SIR[3] += 1;
        } else {
            console.log("Something went wrong with the status of a human...");
        }
    }
    
    return SIR;
}

function keyReleased() {
    if (keyCode == 71) {
        $("#exampleModalCenter").modal("toggle");
        //modal.modal("toggle");
    }
}