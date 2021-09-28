//Dette er Marcus kildals orginale ball game kode (ferdig den 27.09.2020) jeg har laget denne helt selv mens jeg har søkt på nette hvordan å løse de problemene. jeg føler jeg ikke har fott forklart det jeg vil på koden min mest fordi det er slitsomt å skrive ved å forklare fordi jeg har dyslexi. så jeg kommer til å forklare enda mere ting på filmen


//her er x og y posisonene for ballen

let x = 320;
let y = 180;

//her er hastigheten
let xspeed = 4;
let yspeed = 3;

//størelsen på ballen
let radiusball = 10;

// dette er farge variablen min
let color1 ='rgb(255)'
let color2 ='rgb(255)'
// det er posiosnene til mine to (rects) som er player 1 og 2
let Player1 = 155;
let Player2 = 155;

// dette er lengden på min rect
let playerLengde = 60;
//dette er bredden på min rect
let playerBredde = 10;

//her er poeng variablen
let PlayerOneScore = 0 ;
let PlayerTwoScore = 0 ;

//disse to variablene er for lyd efektene mine
let ballsound;
let vinner;

//dette er for hvis du vil ta flere runder så kan du bare trykke på "space"
let start=1;

//______________________________________________________________________
//her er det som bester vilken lyd filer den skal ha i spille
function preload(){
ballsound = loadSound('Blop Sound Effect.wav')
vinner = loadSound('Anime wow - sound effect.mp3')
}


//______________________________________________________________________
//i under her er 2 funtioner den med setup har en som står hvor lange å bred bakgrunnen skulle være
function setup() {
  createCanvas(640, 360);
  angleMode(DEGREES)
  
}
//dette er er en ny function å under der ser du hva background fargen skal være
function draw() {
  background(0,153,0);




  //____________________________________________________________________
//dette er text størelsen
  textSize(50);
  
//her er texten skal ligge i miten gjør det lettere å finne nøyaktig posison
  textAlign(CENTER);
  
//her er hvor texten skal være å hva det skal stå på teksten fra en av variablene over
  text(PlayerOneScore, 160, 50);
  text(PlayerTwoScore, 480, 50);
  
//under her er det hvis det blir mere en 10 poeng skal den resrate å en lite lyd fil skal spilles av
  if (PlayerOneScore === 10 || PlayerTwoScore === 10){
    vinner.play()
    PlayerOneScore = 0
    PlayerTwoScore = 0
    
    start=0
  
  }
//dette here gjør at når det blir 10 mål så kan du trykke (space knappen for å starte på nytt ved hjelp av koden over der det står (star = 0))
  if (keyIsDown(32)) {
    start = 1
  }
//____________________________________________________________________
//alt fra min push til pop er det som styrer hvordan banen skal se ut
  push()
    noFill()
    stroke(255,252,252)
    strokeWeight(5)
  
// 1 er firkanten rund helle banen 2 er linjen i miten 3 er siklen i midten
    rect(10,10,width-20,height-20)
    line(width/2,0,width/2,height)
    arc(320,180,80,80,0,360)
  
  //prikken i mitden
    stroke(255)
    strokeWeight(10)
    point(320,180)
  
  //prikken i venstre boksen
    stroke(255)
    strokeWeight(10)
    point(55,180)
  
  //priken i høyere boksen
    stroke(255)
    strokeWeight(10)
    point(585,180)
  pop()
  
  //hvordan det skal se ut 
  push()
    stroke(255,252,252)
    strokeWeight(5)
    noFill()
  
  //mine frikanter de 2 første er firkantene til venstre å de andre til
    rect(10,150,30,70)
    rect(10,120,60,130)
    rect(600,150,30,70)
    rect(565,120,65,130)
  pop()
  
  //____________________________________________________________________
  //dette er den recten som bestemer til venstre
  fill(color1)
  rect(14,Player1,playerBredde,playerLengde)
  
  //dette er den recten som bestemer til høyere
  fill(color2)
  rect(616,Player2,playerBredde,playerLengde)
  
  //her er størelsen på ballen å hvor posisonen er.
  fill(0)
  ellipse(x, y, radiusball*2, radiusball*2);
  
  //dette er de hvite oppå ballen son at ballen skal se ut som en fotball
  fill(255)
  arc(x, y, radiusball*2, radiusball*2,0,90);
  arc(x, y, radiusball*2, radiusball*2,180,270);
  //her er hvis jeg trykker space så får ballen beveget seg
  if (start == 1){
    x += xspeed;
    y += yspeed;
  }
  //____________________________________________________________________
  //hvis ballen treffer venstre veggen for andre spilleren poeng å ballen spawner i mitten
  if (x > width -15 - radiusball ) {
    x = 320
    PlayerOneScore += 1
    
  }
  //hvis ballen treffer høyere veggen for andre spilleren poeng å ballen spawner i mitten 
  if ( x < radiusball + 15) {
    x = 320
    PlayerTwoScore += 1
    
  }
  //dette her gjør at ballen endrer vei når radiusen av ballen er for langt inn i veggen å de tallene er det som bestemmer hvor ballen skal snu
  if (y > height -15 - radiusball || y < radiusball +10) {
    yspeed = -yspeed;
  }


  
  //____________________________________________________________________
  //her gjøre son at begge brikene ikke går lengre en det de kan gå så hvis de går over den pixlen blir de sent til bake
  if (Player1 <= 15 ) {
    Player1 = 13
  }
   if (Player1 >= 285 ) {
    Player1 = 287
  }
  
    if (Player2 <= 15 ) {
    Player2 = 13
  }
  
   if (Player2 >= 285 ) {
    Player2 = 287
  }
  //____________________________________________________________________
  ////her er det som for boksene til å bevege seg samtidig som jeg bytter farge vær gang den beveger seg. å tall 87 = W å 83 = S
  if (keyIsDown(87)) {
    Player1 = Player1 - 4;
    let rod = random(255)
    let gronn = random(255)
    let bla = random(255)
    color1 = color(rod,gronn,bla) 
  } 
  if (keyIsDown(83)) {
    Player1 = Player1 + 4;
    let rod = random(255)
    let gronn = random(255)
    let bla = random(255)
    color1 = color(rod,gronn,bla) 
  }
  
  
   if (keyIsDown(UP_ARROW)) {
    Player2 = Player2 - 4
    let rod = random(255)
    let gronn = random(255)
    let bla = random(255)
    color2 = color(rod,gronn,bla) 
  }

  if (keyIsDown(DOWN_ARROW)) {
   Player2 = Player2 + 4
    let rod = random(255)
    let gronn = random(255)
    let bla = random(255)
    color2 = color(rod,gronn,bla) 
  }
  //____________________________________________________________________
  //det er her koden er for at ballen spretter av player1 og 2 å når de treffer lager den en liten lyd
  if ( y > Player1 && y < Player1 + playerLengde && x < radiusball + 25) {
    xspeed = -xspeed;
    ballsound.play()
  }

  
  if ( y > Player2 && y < Player2 + playerLengde && x > width -25 - radiusball ) {
    xspeed = -xspeed;   
    ballsound.play()
  
  }
  
}