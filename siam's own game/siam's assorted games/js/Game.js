
class Game {
  constructor(gameEnd) {
    this.boy = createSprite(50, 340, 20, 50);
    this.boy.addAnimation("running", boy_running);
    this.boy.scale = 0.3;

    this.robber = createSprite(1000, 380, 20, 50);
    this.robber.addAnimation("running", robber_running);
    this.robber.addAnimation("caught", robberCaught)
    this.robber.scale = 0.5;

    this.ground = createSprite(200, 600, 400, 20);
    this.ground.addImage("ground", groundImage);
    this.ground.scale = 0.3;

    this.invisibleGround = createSprite(200, 500, 1200, 10);
    this.invisibleGround.visible = false;

    this.obstaclesGroup = new Group()
this.soundplayed = false
  this.losesound = losesound
    score = 0;
    this.winSoundPlayed = false;
    this.gameEnd = gameEnd; // Initialize gameEnd object
    this.soundPlayed = false;
    this.mariojumpPlayed = false;
    this.mariojump = mariojump
    this.gameLoop();
  }

  gameLoop() {
    this.play();

    // Call the game loop recursively
    requestAnimationFrame(() => this.gameLoop());
  }


  play() {
    background(game1background);

    text("Score: " + score, 500, 50);

    this.spawnObstacles();

    this.ground.position.x -= 4;

   
    if (this.ground.position.x < 0) {
      this.ground.position.x = this.ground.width / 6.8;
    }

    
    score = score + 1;

 
    if (keyDown("space") && this.boy.position.y >= 400) {
      this.boy.velocityY = -40;
 
    this.mariojump.play(); 
  
    }

    this.boy.velocityY = this.boy.velocityY + 0.6;

    this.boy.collide(this.invisibleGround);

 

    if (score === 2500) {
      this.boy.velocityX = this.boy.velocityX + 5;
    }

    if (this.boy.collide(this.robber) && !this.winSoundPlayed) {
      winsound.play();  // Play the win sound
      this.winSoundPlayed = true;  // Set the flag to true so the sound doesn't play multiple times
      this.reset()
      this.robber.changeAnimation("caught");  // Change the robber's animation
    }

    gameEnd = new GameEnd();
    drawSprites();


    if (this.boy.collide(this.obstaclesGroup) && !this.soundPlayed) {
      losesound.play();  // Play the sound
      this.soundPlayed = true;  // Set the flag to true so the sound doesn't play multiple times
      gameEnd.showEndScreen();
      score = 0;
    }

  }

  



  reset() {

    obstacles = [];
    obstaclesGroup.forEach((obstacle) => obstacle.remove());
    obstaclesGroup.clear();
  

    score = 0;

   
    this.robber.remove();
    this.ground.remove();
    this.boy.remove();

    this.winSoundPlayed = false;
    menu();
    showButtons();
    game.delete()
  
  }

  spawnObstacles() {
    if (frameCount % 120 === 0) {
      var rand = Math.round(random(1, 4));
  
      switch (rand) {
        case 1:
          this.obstacle = createSprite(1000, 420, 10, 10);
          this.obstacle.addImage(obstacle1);
          this.obstacle.velocityX = -14;
  
          this.obstacle.depth = -10;
          this.obstaclesGroup.add(this.obstacle);
  
          this.obstacle.scale = 0.3;
          console.log("obstacle 1 spawned")
          break;
  
        case 4:
          this.obstacle = createSprite(1000, 440, 10, 10);
          this.obstacle.addImage(obstacle2);
          this.obstacle.velocityX = -14;
  
          this.obstacle.depth = -10;
          this.obstaclesGroup.add(this.obstacle);
  
          this.obstacle.scale = 0.3;
          break;
    
           
        default:
          break;
      }
    }
  }
}




function showButtons() {
  button.show();
  button2.show();
  button3.show();
}
   
  


