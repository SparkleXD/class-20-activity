function setup() {

  createCanvas(800,400);

  move=createSprite(400, 200, 50, 50);
  fixed = createSprite(200,200,50,50)
}

function draw() {
  background("blue")  
  drawSprites();

move.y=mouseY
move.x=mouseX


if(move.x-fixed.x < move.width/2+fixed.width/2 && fixed.x-move.x < move.width/2+fixed.width/2 && 
  move.y-fixed.y < move.width/2+fixed.width/2 && fixed.y-move.y < move.width/2+fixed.width/2)
{
 move.shapeColor="red"
fixed.shapeColor="red"
}
else {

  move.shapeColor="green"
  fixed.shapeColor="green"

}







}