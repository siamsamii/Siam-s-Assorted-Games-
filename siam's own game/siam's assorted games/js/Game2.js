
class Game2 {
  constructor() {
    this.player = null;
    this.killPlatforms = [];
    this.platforms = [];
    this.bouncyPlatforms = []
    this.wincond = null;
  this.jumpsound = jumpsound
  this.diedsound = diedsound
  }

  setup() {
    const { Engine, World, Bodies, Events } = Matter;
 
    engine = Engine.create();
    world = engine.world

  
    // Create the player
    let playerX = 25
    let playerY = 450
    this.playerWidth = 40;
    this.playerHeight = 60;

    let playerOptions = {
    friction : 0.5
    
    };
    this.player = Bodies.rectangle(playerX, playerY, this.playerWidth, this.playerHeight, playerOptions);
    World.add(world, this.player);
    this.player.velocity.x = 0;
    this.player.velocity.y = 0;

this.killPlatforms = []
this.platforms = [];
this.bouncyPlatforms = []
    let platformOptions = {
      isStatic: true,
    };
//1
let platform1 = Bodies.rectangle(25, 520, 60, 10, platformOptions);
this.platforms.push(platform1);
World.add(world, platform1);

//2
let platform2 = Bodies.rectangle(150,460,60,10, platformOptions);
this.platforms.push(platform2);
World.add(world, platform2);
//3
let platform3 = Bodies.rectangle(25,380,60,10, platformOptions);
this.platforms.push(platform3);
World.add(world, platform3)
//4
let platform4 = Bodies.rectangle(150,300,60,10, platformOptions);
this.platforms.push(platform4);
World.add(world, platform4)
//5
let platform5 = Bodies.rectangle(25,220,60,10, platformOptions);
this.platforms.push(platform5);
World.add(world, platform5);
//6
let platform6 = Bodies.rectangle(150,140,60,10, platformOptions);
this.platforms.push(platform6);
World.add(world, platform6);
//7
let killPlatform1 = Bodies.rectangle(190,550,10,850, platformOptions);
this.killPlatforms.push(killPlatform1);
World.add(world, killPlatform1);
//8
let bouncyPlatform1 = Bodies.rectangle(300,530,40,40, platformOptions);
this.bouncyPlatforms.push(bouncyPlatform1); 
World.add(world, bouncyPlatform1);
//9
let killplatform2 = Bodies.rectangle(430,550,20,400, platformOptions);
this.killPlatforms.push(killplatform2);
World.add(world, killplatform2);
//10
let platform10 = Bodies.rectangle(550,550,200,50, platformOptions);
this.platforms.push(platform10);
World.add(world, platform10);
//11
let bouncyPlatform2 = Bodies.rectangle(750,550,40,40, platformOptions);
this.bouncyPlatforms.push(bouncyPlatform2); 
World.add(world, bouncyPlatform2);
//12
let bouncyPlatform3 = Bodies.rectangle(930,350,40,40, platformOptions);
this.bouncyPlatforms.push(bouncyPlatform3); 
World.add(world, bouncyPlatform3);
//13
let killplatform3 = Bodies.rectangle(750,300,40,40, platformOptions);
this.killPlatforms.push(killplatform3);
World.add(world, killplatform3);
//14
let platform14 = Bodies.rectangle(550,200,350,10, platformOptions);
this.platforms.push(platform14);
World.add(world, platform14);
//15
let platform15 = Bodies.rectangle(400,100,10,-200, platformOptions);
this.platforms.push(platform15);
World.add(world, platform15);
//16
let platform16 = Bodies.rectangle(900,100,800,10, platformOptions);
this.platforms.push(platform16);
World.add(world, platform16);

let killplatform4 = Bodies.rectangle(800,600,200000,20, platformOptions);
this.killPlatforms.push(killplatform4);
World.add(world, killplatform4);

this.windcond = Bodies.rectangle(1050, 70, 50, 50)
World.add(world, this.windcond)





let wincondOptions = {
  isStatic:true
}
this.wincond = Bodies.rectangle(1050, 70, 50, 50,wincondOptions)
World.add(world,this.wincond)

let force = { x: 0, y: 0 };
Body.applyForce(this.player, this.player.position, force);

this.platforms = Array.from(this.platforms);
this.killPlatforms = Array.from(this.killPlatforms)
this.bouncyPlatforms = Array.from(this.bouncyPlatforms)

Events.on(engine, 'collisionStart', (event) => {
  event.pairs.forEach((collision) => {
    if (collision.bodyA === this.player || collision.bodyB === this.player) {
      let otherBody = collision.bodyA === this.player ? collision.bodyB : collision.bodyA;

      if (this.platforms.includes(otherBody)) {
   
        this.player.canJump = true;
        this.player.bounce = false;
      } else if (this.bouncyPlatforms.includes(otherBody)) {

        Body.applyForce(this.player, this.player.position, { x: 0, y: -0.1 }); 
        this.player.canJump = false;
        this.player.bounce = true;
      } else if (this.killPlatforms.includes(otherBody)) {
  this.diedsound.play()
        this.reset();
      }
      else if (this.wincond === otherBody) {
        winsound.play()
        this.reset();

    }
    }
  });
});
Events.on(engine, 'collisionEnd', (event) => {
  event.pairs.forEach((collision) => {
    if (collision.bodyA === this.player || collision.bodyB === this.player) {
      let otherBody = collision.bodyA === this.player ? collision.bodyB : collision.bodyA;
      if (this.platforms.includes(otherBody)) {
    
        this.player.canJump = false;
      }
    }
  });
});


   // Start the game loop
    this.gameLoop();
  }

  gameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.gameLoop());
  }

  reset() {

    this.killPlatforms = [];


    World.remove(world, this.player);
    this.player = null;


    this.platforms.forEach((platform) => World.remove(world, platform));
    this.platforms = [];


    menu();
    showButtons();
  }
showButtons() {
    button.show();
    button2.show();
    button3.show();
  }

  draw() {
    rectMode(CENTER)
    background(0);
    

    if (this.player) this.drawPlayer();
   if(this.platforms) this.drawPlatforms(); 
      if (this.wincond) this.drawWin();
      if(this.drawPlatforms) this.drawPlatforms2();
      if(this.drawPlatforms) this.drawPlatforms3();
      if(this.drawPlatforms) this.drawPlatforms4();
      if(this.drawPlatforms) this.drawPlatforms5();
      if(this.drawPlatforms) this.drawPlatforms6();
      if(this.drawPlatforms) this.drawPlatforms7();
      if(this.drawPlatforms) this.drawPlatforms8();
      if(this.drawPlatforms) this.drawPlatforms9();
      if(this.drawPlatforms) this.drawPlatforms10();
      if(this.drawPlatforms) this.drawPlatforms11();
      if(this.drawPlatforms) this.drawPlatforms12();
      if(this.drawPlatforms) this.drawPlatforms13();
      if(this.drawPlatforms) this.drawPlatforms14();
      if(this.drawPlatforms) this.drawPlatforms15();
      if(this.drawPlatforms) this.drawPlatforms16();
      
      rectMode(CENTER)
  

        
      

  
    
    
}

  update() {
    let force = { x: 0, y: 0 };
    if (keyIsDown(LEFT_ARROW)) {
      force.x = -0.001;
    } else if (keyIsDown(RIGHT_ARROW)) {
      force.x = 0.001;
    }
    Body.applyForce(this.player, this.player.position, force);

    Body.applyForce(this.player, this.player.position, { x: 0, y: 0.0001 })
    // Apply upward impulse for jumping
    if (keyIsDown(UP_ARROW) && this.player.canJump) {
      Body.applyForce(this.player, this.player.position, { x: 0, y: -0.08 });
      this.player.canJump = false; 
      this.jumpsound.play()
    }
    if (this.player.bounce){
      Body.applyForce(this.player, this.player.position, { x: 0, y: -0.001 });
      this.player.canJump = false; 
    }
  }

 

  

  



  drawPlayer() {
    rectMode(CENTER)
    fill(255);
    rect(this.player.position.x, this.player.position.y, this.playerWidth, this.playerHeight);
    rectMode(CENTER)
  }

  drawWin() {
    fill("yellow");
    rect(1050, 70, 50, 50);
  }
  drawPlatforms(){
    fill("blue")
   rect(25,520,60,10)
  }
  drawPlatforms2(){
    fill("blue")
   rect(150,460,60,10)
  }
  drawPlatforms3(){
    fill("blue")
   rect(25,380,60,10)
  }
  drawPlatforms4(){
    fill("blue")
   rect(150,300,60,10)
  }
  drawPlatforms5(){
    fill("blue")
   rect(25,220,60,10)
  }
  drawPlatforms6(){
    fill("blue")
   rect(150,140,60,10)
  }
// change to kill platform eventually
  drawPlatforms7(){
    fill("red")
   rect(190,550,10,850)
  }
//change to bouncy platform eventually
  drawPlatforms8(){
    fill("green")
   rect(300,530,40,40)
  }
  // change to kill platform eventually
  drawPlatforms9(){
    fill("red")
   rect(430,550,20,400)
  }
  drawPlatforms10(){
    fill("blue")
   rect(550,550,200,50)
  }
  drawPlatforms11(){
    fill("green")
   rect(750,550,40,40)
  }
  drawPlatforms12(){
    fill("green")
   rect(930,350,40,40)
  }
  //eventually make this moving
  drawPlatforms13(){
    fill("red")
   rect(750,300,40,40)
  }
  drawPlatforms14(){
    fill("blue")
   rect(550,200,350,10)
  }
  drawPlatforms15(){
    fill("blue")
   rect(400,100,10,-200)
  }
  drawPlatforms16(){
    fill("blue")
   rect(900,100,800,10)
  }
 
  drawPlatforms16(){
    fill("red")
   rect(800,600,200000,20)
  }


  
}

