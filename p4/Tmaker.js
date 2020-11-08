let a; 
let b; 
let c ;

function setup()
{
    var canvas = document.getElementById("cinema");
    var width = canvas.offsetWidth;
    var sketchCanvas = createCanvas(width,width/(16/9));
    sketchCanvas.parent("cinema")
    translate(width/2,height/2);

    noFill();
    stroke(255);
    strokeWeight(3);
    console.log("ran");
    Tmaker();


}

function Tmaker(a,b,c)
{
    if(document.getElementById('button').clicked == true)
    {
    //    Tmaker(a,b,c);
        console.log("hello")
        alert("bean");
        a = document.getElementById("a").value;
        b = document.getElementById("a").value;
        c = document.getElementById("a").value;

        let tri = [c,b,a];
        let triVector = [createVector(0,0),createVector(0,tri[2])];
    
        if(tri[2]<tri[0]+tri[1])
        {
            let C1 = (tri[2]*tri[2]+tri[0]*tri[0]-tri[1]*tri[1])/(2*tri[2]);
            let C2 = Math.sqrt(tri[0]*tri[0]-C1*C1);
            triVector.push(createVector(C1,C2));
            translate(-a/2,C2/2);
            triangle(triVector[2].x, triVector[2].y*-1, triVector[0].x,triVector[0].y,triVector[1].y,triVector[1].x);console.log(triVector);
            console.log(-a/2,C2/2);
        }
        else
        {
            console.log("Illegal move");
        }
    }

}