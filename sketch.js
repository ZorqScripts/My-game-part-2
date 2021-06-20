var wall1;
var score = 0;
var gameState = 0;

function setup() {
  createCanvas(displayWidth+150,displayHeight);
  wall1 = new wall(0,0,70,70);  
  wall2 = new wall(0,120,180,10);
  wall3 = new wall(260,0,20,300);
  wall4 = new wall(50,180,20,200);
  wall5 = new wall(0,372,69,9);
  wall6 = new wall(160,180,20,300);
  wall7 = new wall(180,470,200,10);
  wall8 = new wall(280,100,200,10);
  wall9 = new wall(555,0,20,250);
  wall10 = new wall(420,240,150,10);
  wall11 = new wall(335,176,20,170);
  wall12 = new wall(0,590,380,20);  
  wall13 = new wall(360,595,20,100);
  wall14 = new wall(56,610,40,70);
  wall15 = new wall(260,700,40,80);
  wall16 = new wall(271,407,250,10);
  wall17 = new wall(491,410,30,200);
  wall18 = new wall(615,360,40,410);
  wall19 = new wall(415,358,350,10);
  wall20 = new wall(450,300,30,10);
  wall21 = new wall(615,300,40,10);
  wall22 = new wall(800,430,40,270);
  wall23 = new wall(770,420,160,10);
  wall24 = new wall(650,485,80,10);
  wall25 = new wall(650,650,80,10);
  wall26 = new wall(730,565,80,10);
  wall27 = new wall(700,50,30,220);
  wall28 = new wall(575,147,150,10);
  wall29 = new wall(910,0,20,420);
  wall30 = new wall(728,85,100,10);
  wall31 = new wall(825,200,100,10);
  wall32 = new wall(825,300,100,10);
  wall33 = new wall(838,600,80,10);
  wall34 = new wall(910,500,20,200);
  wall35 = new wall(990,90,20,1000);
  wall36 = new wall(1140,0,20,100);
  wall37 = new wall(1077,84,200,150);
  wall38 = new wall(1300,700,70,70);
  wall39 = new wall(1205,688,20,100);
  wall40 = new wall(1150,605,230,20);
  wall41 = new wall(1070,450,20,250);
  wall42 = new wall(1070,440,150,10);
  wall43 = new wall(1285,310,20,220);
  wall44 = new wall(1215,520,70,10);
  wall45 = new wall(1305,310,65,10);
  wall46 = new wall(1135,235,20,210);
  wall47 = new wall(1370,0,10,900);

  coin1 = new coin(315,25);
  coin2 = new coin(610,75);
  coin3 = new coin(1192,20);
  coin4 = new coin(853,538);
  coin5 = new coin(15,700);
  coin6 = new coin(1314,334);
  coin7 = new coin(450,670);
  coin8 = new coin(185,16);
  coin9 = new coin(35,470);


  wall50 = new wall(20,20,20,20);

  button = createButton('Skip');
  button.position(1400,713);
  
  console.log(displayHeight);
}

function draw() {
  background('lightblue');  
  textSize(20);
  text("Score : " + score,1390,30);
  text(mouseX +","+mouseY,mouseX,mouseY);
  if(gameState === 0){ 
  fill('yellow');
  wall38.display();
  wall1.display();
  fill('black');
  wall2.display();
  wall3.display();  
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();
  wall37.display();
  wall39.display();
  wall40.display();
  wall41.display();
  wall42.display();
  wall43.display();
  wall44.display();
  wall45.display();
  wall46.display();
  wall47.display();

  coin1.display();
  coin2.display();
  coin3.display();
  coin4.display();
  coin5.display();
  coin6.display();
  coin7.display();
  coin8.display();
  coin9.display();

  button.mousePressed(function(){
    score += 90
  }    
  )   
  if(score === 90){
    gameState = 1;
  }
  }
    if(gameState === 1){
      wall50.display();
    }  
}


  