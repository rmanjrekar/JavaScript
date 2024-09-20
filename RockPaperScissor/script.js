let scores = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {

  if (playerChoice == computerChoice) {
    return 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    scores['playerScore']++
    return 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    scores['playerScore']++
    return 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    scores['playerScore']++
    return 1
  } else {
    scores['computerScore']++
    return -1
  }

}

function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if (score == -1) {
    resultDiv.innerText = 'You Lose!'
  } else if (score == 1) {
    resultDiv.innerText = 'You Win!'
  } else {
    resultDiv.innerText = 'It\'s a Draw!'
  }

  handsDiv.innerText = `Player: ${playerChoice} vs Computer: ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${scores['playerScore']} | Computer Score: ${scores['computerScore']}`
}

function onClickRPS(playerChoice) {
  console.log('playerChoice', playerChoice)
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  console.log('Scores', scores)
  showResult(score, playerChoice, computerChoice)
}


function playGame() {

  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()

}

function endGame() {
  scores['computerScore'] = 0
  scores['playerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()