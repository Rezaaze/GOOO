let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10 )

const getAbsoluteDistance = (distance1, targetNumber) => {
  distance1 -= targetNumber;
  return Math.abs(distance1) 
};

const compareGuesses = (userGuess, computerGuess,targetNumber) => {
  if (userGuess < 0 || userGuess > 9){
    window.alert('It\'s not possible to set the number out of range')
  }else{
    userGuess = getAbsoluteDistance(userGuess,targetNumber)
    computerGuess = getAbsoluteDistance(computerGuess,targetNumber)
    if (userGuess < computerGuess){
      return true
    }else if (computerGuess < userGuess){
      return false
    }else{
      return true
    }
  };
    
};

const updateScore = winner =>{
  switch (winner){
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
    default:
      break;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};


console.log(compareGuesses(3,5,4))