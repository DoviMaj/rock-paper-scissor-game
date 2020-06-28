let userScore = 0;
let computerScore = 0;
let gameEnded = false;
  
let ul = document.querySelector("ul");
ul.addEventListener('click', function(event){
  //debugger;
  event.target.classList.add("clicked")
  if(!gameEnded){
    game.playGame();
  }
})

let game = {
  values : ["scissor", "paper", "rock"],

  moreRandomNumber: function(){
    //debbuger;
    let random = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) - Math.floor(Math.random() * 4) ;
    if(random > 2){
      return 2
    }
    if(random < 0){
      return 0
    } else{ 
      return random;
    }
  },
  userChoice: function(){
    //debugger;
    let ul = document.querySelector("ul");
    for(var i = 0; i < ul.childNodes.length; i++){
      if(ul.childNodes[i].nodeName !== '#text'){
        if(ul.childNodes[i].classList.contains('clicked')){
          return ul.childNodes[i].innerHTML.toLowerCase();
        }
      }
    };
  },
  computerChoice: function(){
    return this.values[this.moreRandomNumber()];
  },
  playGame: function(){
    //debbuger;
    let computerChoice = this.computerChoice();
    userChoice = this.userChoice();
    view.computerChoice(computerChoice);
    view.userChoice(userChoice);
    
    //debugger;
    if((userChoice === 'paper' && computerChoice === 'rock' )
    || (userChoice === 'rock' && computerChoice === 'scissor')){
      ++userScore;
      view.results(`You win`);
    } else if(userChoice === computerChoice){
      view.results(`Its a tie`); 
    } 
    else {
      ++computerScore;
      view.results(`Computer wins`);
    }
    view.score(userScore, computerScore);
    let ul = document.querySelector("ul");
    ul.childNodes.forEach(function(li){
      if(li.nodeName !== '#text'){
        if(li.classList.contains('clicked')){
          li.classList.remove("clicked")
        }
      }
    })
    if (computerScore === 5 || userScore === 5){
      if(computerScore > userScore){
        view.results(`Game Over! Computer wins!`);
        view.restart(); 
        gameEnded = true;
      }
      else{
        view.results(`You win!`);
        view.restart(); 
        gameEnded = true;
      }
    }
  }
}

let view = {
  computerChoice: function(computerChoice){
    let displayDiv = document.querySelector('div');
    let computerChoiceDisplay = document.createElement('li');
    computerChoiceDisplay.innerHTML = `CP: ${computerChoice}`;
    computerChoiceDisplay.id = 'computer-choice'
    computerChoiceDisplay.className = 'dashboardItems';
    displayDiv.childNodes.forEach(function(li){
      if(li.id === 'computer-choice'){
        li.remove();
      }
    })
    displayDiv.appendChild(computerChoiceDisplay);
  },
  userChoice: function(userChoice){
    //debbuger;
    let displayDiv = document.querySelector('div');
    let userChoiceElement = document.createElement('li');
    userChoiceElement.innerHTML = `You: ${userChoice}`;
    userChoiceElement.id = 'user-choice'
    userChoiceElement.className = 'dashboardItems';
    displayDiv.childNodes.forEach(function(li){
      if(li.id === 'user-choice'){
        li.remove();
      }
    })
    displayDiv.appendChild(userChoiceElement);
  },
  score: function(userScore, computerScore){
    let displayDiv = document.querySelector('div');
    let displayScore = document.createElement('li');
    displayScore.innerHTML = `CP: ${computerScore} VS You: ${userScore}`;
    displayScore.id = 'display-score';
    displayScore.className = 'dashboardItems';
    displayDiv.childNodes.forEach(function(li){
      if(li.id === 'display-score'){
        li.remove();
      }
    })
    displayDiv.appendChild(displayScore);
  },
  results: function(results){
    let displayDiv = document.querySelector('div');
    let displayResults = document.createElement('li');
    displayResults.innerHTML = `${results}`;
    displayResults.id = 'display-results'
    displayResults.className = 'dashboardItems';
    displayDiv.childNodes.forEach(function(li){
      if(li.id === 'display-results'){
        li.remove();
      }
    })
    displayDiv.appendChild(displayResults);
  },
  restart: function(){
    let displayDiv = document.querySelector('div');
    let reloadButton = document.createElement('li');
    reloadButton.id = 'reload-button';
    reloadButton.className = 'dashboardItems';
    reloadButton.innerHTML = `Restart Game`;
    reloadButton.addEventListener('click', function(){
      location.reload();
      return false;
    })
    displayDiv.childNodes.forEach(function(li){
      if(li.id === 'reload-button'){
        li.remove();
      }
    })
    displayDiv.appendChild(reloadButton);
  }
}



// requirements v2
// should have button for each You choice (x)
// should have event listener on ul (x)
// when You clicks on choice should run the game (x)
// should get value from choice.tostring and store in variable inside function (x)
// wait for user click to play round(x)
// should display computer choice in div (x)
// should display user choice in div (x)

// should display results in div (x)
// should display score in span (x)
// refactor if statements (x)
// view.restart() should display a button that refresh the page (x)
// should have a nice font family and background color(x)
// check bugg on score in the last round (X)
// user is stuck on rock (x)