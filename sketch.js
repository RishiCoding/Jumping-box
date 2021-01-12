var box;
var surface1, surface2, surface3, surface4;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box=createSprite(random(20,750), 300, 30, 30)
    surface1=createSprite(600, 50, 100, 50);
    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
}   
