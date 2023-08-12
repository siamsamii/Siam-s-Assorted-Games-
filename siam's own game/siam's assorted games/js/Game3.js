class Game3 {
    constructor(ropeclass) {
      this.mouse = null;
      this.plank;

      this.ground;
  this.rope
  this.con
  this.con2

  this.mousehole = null;
  this.ropeclass = ropeclass
  this.drop = () => {
    this.rope.break();  // Call the break function of rope2
   this.con.dettach()
    this.con = null;
    this.bubble

  
    this.cheesewedge 
    this.cheesewedge2 
    this.cheesewedge3

    this.blower
    this.wall
    this.wall2
    this.wall3

    this.bubbleSound = bubbleSound;
this.bubbleSound.setLoop(false);
  };

  this.drop2 = () => {
    this.rope2.break();  // Call the break function of rope2
   this.con2.dettach()
    this.con2 = null;
  };
    }

setup(){
  const { Engine, World, Bodies, Events } = Matter; 
  engine = Engine.create();
  world = engine.world;
 

  var mouseOptions = {
    restitution: 0.8
  }
  
  var wallOptions = {
    isStatic: true
  }
  this.ground = new Ground(250,height-10,width,20);
  this.mouse = Bodies.circle(200,400,15,mouseOptions);
  World.add(world,this.mouse);

  this.rope = new Rope(4,{x:450,y:220});
  this.rope2 = new Rope(8,{x:200,y:120});
  this.con = new Link(this.rope,this.mouse);
  this.con2 = new Link(this.rope2,this.mouse);

  this.button = createImg("assets/cut_btn.png");
  this.button.position(200, 120);
  this.button.size(50, 50);
  this.button.mouseClicked(this.drop2);

  this.button2 = createImg("assets/cut_btn.png");
  this.button2.position(415,220);
  this.button2.size(50,50);
  this.button2.mouseClicked(this.drop);


  this.blower = createImg("assets/blower.png");
  this.blower.position(0, 200);
  this.blower.size(200, 100);
  this.blower.mouseClicked(this.blow.bind(this)); 

  this.bubble = createSprite(230,460,20,20);
  this.bubble.addImage(bubbleimg);
  this.bubble.scale = 0.1;

  this.mousehole = createSprite(950, 130, 20, 20)
 this.mousehole.addImage(mousehole)
 this.mousehole.scale = 0.1

 this.cheesewedge = createSprite(230,460,20,20)
 this.cheesewedge.addImage(cheeseimg)
 this.cheesewedge.scale = 0.1
 
 this.cheesewedge2 = createSprite(600,250,20,20)
 this.cheesewedge2.addImage(cheeseimg)
 this.cheesewedge2.scale = 0.1

 this.cheesewedge3 = createSprite(750,150,20,20)
 this.cheesewedge3.addImage(cheeseimg)
 this.cheesewedge3.scale = 0.1


this.wall3 = Bodies.rectangle(950,150,20,50, wallOptions)
World.add(world,this.wall3)

   this.gameLoop();

   this.bubbleSoundPlayed = false; 
}
  gameLoop() {
  
    this.draw();
    requestAnimationFrame(() => this.gameLoop());
  }

 draw() 
  {
    background(51);
    image(bg_img,0,0,width,height);
    Engine.update(engine);

    push();
    imageMode(CENTER);
    if(this.mouse!=null){
      image(mouse,this.mouse.position.x,this.mouse.position.y,70,70);
    }
    pop();
    push();
    fill("blue"); 
    rectMode(CENTER);
    if (this.wall != null) {
      rect(this.wall.position.x, this.wall.position.y, 140, 20);
    }
    pop();

    push();
    fill("blue"); 
    rectMode(CENTER);
    if (this.wall2 != null) {
      rect(this.wall2.position.x, this.wall2.position.y, 20, 140);
    }
    pop();

    push();
    fill("blue"); 
    rectMode(CENTER);
    if (this.wall3 != null) {
      rect(this.wall3.position.x, this.wall3.position.y, 140, 20);
    }
    pop();
  
    this.rope.show();
    this.rope2.show();

    if (this.collide(this.mouse, this.cheesewedge, 20) == true) {
   this.cheesewedge.remove()
    }
    if (this.collide(this.mouse, this.cheesewedge2, 80) == true) {
      this.cheesewedge2.remove()
       }
       if (this.collide(this.mouse, this.cheesewedge3, 80) == true) {
        this.cheesewedge3.remove()
         }
            
    if (this.collide(this.mouse, this.mousehole, 80) == true)
    {
        // Clear the existing bodies and arrays
      winsound.play()
        World.remove(world, this.mouse);
    this.mouse = null;

    World.remove(world, this.rope);

    this.con = null;

    World.remove(world, this.rope2);

    this.con2 = null;

    World.remove(world, this.wall3);

    this.bubble.remove();
    this.mousehole.remove();
    this.cheesewedge.remove()

    this.hideimgs();
       
        World.clear(world);
        Engine.clear(engine);
        // Call the menu function and showButtons function
    
        background("blue")
      
        menu();
        showButtons();
        game3.delete()
      }
    


    if(this.collide(this.mouse,this.bubble,40) == true)
    {
      engine.world.gravity.y = -0.003;
      this.bubble.position.x = this.mouse.position.x;
      this.bubble.position.y = this.mouse.position.y;
    
      if (!this.bubbleSoundPlayed) {
        this.bubbleSoundplay(); // Play the bubble sound
        this.bubbleSoundPlayed = true; // Set the flag to true
      }
    }
  
    

    drawSprites();
  
  }
  bubbleSoundplay(){
    this.bubbleSound.play()

  }
  collide(body, sprite, x){
    if (body != null && sprite != null) {
      var d = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y);
      if (d <= x) {
        return true; 
      } else {
        return false;
      }
    }
  }

  blow() {
    if (this.mouse) { 
      Body.applyForce(this.mouse, this.mouse.position, { x: 0.009, y: 0 });
      leafblower.play()
      leafblower.setVolume(0.1)
    }
  }
 drop()
{
  this.rope.break();
  World.remove(engine.world,this.con);
  this.con = null; 
}
drop2()
{
  this.rope2.break(this.ropeclass);
  this.con2.dettach();
  this.con2 = null; 
}
hideimgs(){
  this.button.hide()
  this.button2.hide()
  this.blower.hide()
}
}







