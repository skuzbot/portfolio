import react from 'react';

const resetButton = {
  display: 'inline-block',
  height: '50%',
  border: 'none',
  border: '1px solid black',
  'alignSelf': 'center',
  marginLeft: '10px',
}

const buttonContainer = {
  display: 'flex',
}

const NewGameOrScore = (props) => {
  let moves = props.moves;
  let gameFinished = props.gameFinished;
  let currentPlayer = props.currentPlayer;
  const startNewGame = props.startNewGame;
  if (moves === 9 && gameFinished) {
    return (
      <div style={buttonContainer}>
        <span>
          Game Tied! Play again?
        </span>
        <button style={resetButton} onClick={() => startNewGame()}>Reset</button>
      </div>
    )
  }
  if (moves > 0) {
    if (!gameFinished) {
      return (
        <div className='current-player'>Current Player: {currentPlayer}</div>
      )
    } else {
      return (
        <div style={buttonContainer}>
          <div>
            {`Player ${currentPlayer === 'X' ? 'O' : 'X'} Wins! New Game?`}
          </div>
          <button style={resetButton} onClick={() => startNewGame()}>Reset</button>
        </div>
      )
    }
  } else {
    return (
      <div className='current-player'>Current Player: {currentPlayer}</div>
    )
  }
}

export default NewGameOrScore