//Create variables here
var dog;
var food;


function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350,50,100);
  food=new food1();
}


function draw() {  
  food.display();
  drawSprites();
  //add styles here
  
  
}
function food1(){
  foodstock=database.ref('food')
  foodstock.on("value",readStock);



}
function readStock(data){
  food=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
database.ref('/').update({
  petfood:x
})
}




