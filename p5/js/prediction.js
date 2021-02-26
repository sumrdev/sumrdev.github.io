
let N = 600;
let a = 3;
let y = 0.8;
let tDelta = 0.1;
let startInfected = 1;

let currentT = 0;
let currentS = N - startInfected;
let currentI = startInfected;
let currentR = 0;

let pTime = [];
let pSusceptible = [];
let pInfected = [];
let pRecovered = [];


let predictionArrays = [pTime, pSusceptible, pInfected, pRecovered];



function dS(S, I) {
    return -a/N*S*I;
}

function dI(S, I) {
    return a/N*S*I-y*I;
}

function dR(I) {
    return y*I;
}


for(let i = 0; i <= 200; i++) {
    pTime.push(Math.round(currentT*10)/10);
    pSusceptible.push(currentS);
    pInfected.push(currentI);
    pRecovered.push(currentR);

    newS = dS(currentS, currentI)*tDelta+currentS;
    newI = dI(currentS, currentI)*tDelta+currentI;
    newR = dR(currentI)*tDelta+currentR;

    currentS = newS;
    currentI = newI;
    currentR = newR;
    currentT += tDelta;
}



