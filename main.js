function preload(){

}

function setup() {
     canvas = createCanvas(640, 480); 
     canvas.center(); 
     video = createCapture(VIDEO); 
     video.hide(); 
     tint_color = ""; 
    }


function draw(){
image(video,230,150,220,200);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(50,440,80);
circle(590,50,80);
circle(590,440,80);
fill(0,0,255)
stroke(0,0,255)
rect(90,420,460,20)
rect(90,40,460,20);
rect(40,90,20,310);
rect(580,90,20,310);
}

function take_snapshot(){
save("my_picture.png");
}

