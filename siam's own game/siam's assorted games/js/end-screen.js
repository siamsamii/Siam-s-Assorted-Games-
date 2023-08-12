class GameEnd {
    constructor() {
      this.obstaclesGroup = createGroup();
  
    }
  
    // Receive obstaclesGroup as an argument in the checkCollision function
    checkCollision(boy, obstaclesGroup) {
      for (let i = 0; i < obstaclesGroup.length; i++) {
        let obstacle = obstaclesGroup[i];
        if (boy.collide (obstacle)) {
          // Call the showEndScreen() method of the gameEnd object
          gameEnd.showEndScreen();
          score = 0
          return true;
        }
      }
      return false;
    }
    showEndScreen() {
        alert("Game Over!");
        this.reset();
      }
    
      reset() {
        game.reset();
      }


      showEndScreen2() {
        alert("Game Over!");
        this.reset2();
      }
     reset2(){
      game2.reset()
     }


  }
  


 