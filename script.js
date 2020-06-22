let game = {
  values : ["scissors", "paper", "rock"],
  moreRandomNumber: function(){
    //debugger;
    let random = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) - Math.floor(Math.random() * 4) ;
    if(random > 3){
      return 3
    }
    if(random < 0){
      return 0
    } else{
      return random;
    }
  },
  playRound: function(){
    let computerChoice = this.values[this.moreRandomNumber()]
    let userPrompt = prompt("rock, paper or scissors?");
    userChoice = userPrompt.toLocaleLowerCase();
    
    userScore = 0;
    computerScore = 0;

    if(userChoice === computerChoice){
      return 'draw play again'
    }

    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        userScore++;
        return 'user wins paper beats rock'
      }  
      if(computerChoice === 'scissors'){
        computerScore++;
        return 'computer wins scissors beats paper'
      } 
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        computerScore++;
        return 'computer wins paper beats rock'
      }  
      if(computerChoice === 'scissors'){
        userScore++;
        return 'user wins rock beats scissors'
      } 
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        computerScore++;
        return 'computer wins rock beats scissor'
      }  
      if(computerChoice === 'paper'){
        computerScore++;
        return 'computer wins paper beats scissors'
      } 
    }
  },
    playGame: function(){

  }
}

console.log(game.playRound());
//return randomly paper rock or scissors