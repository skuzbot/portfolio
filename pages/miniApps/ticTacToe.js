import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NewGameOrScore from '../../components/ticTacToe/NewGameOrScore';

export default class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 'X',
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      gameFinished: false,
      score: {
        X: 0,
        O: 0,
      },
      moves: 0,
    }
    this.handleCellClick = this.handleCellClick.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  handleCellClick(e) {
    e.preventDefault()
    if (e.target.value === '') {
      let [row, column] = [...e.target.name.split('-')]
      let prevBoard = [...this.state.board];
      let prevMoves = this.state.moves;
      prevMoves++;
      prevBoard[row][column] = this.state.currentPlayer;
      
      this.setState({
        board: prevBoard,
        moves: prevMoves,
      }, () => {
        console.log('this.state.moves :', this.state.moves);
        this.handlePlayerToggle();
        if (this.state.moves >= 5) {
          console.log('checking game win state from handleCellClick');
          this.checkForGameFinish();
        }
      })
    }
  }

  handlePlayerToggle() {
    this.state.currentPlayer === 'X' ? (
      this.setState({
        currentPlayer: 'O'
      })
    ) : (
      this.setState({
        currentPlayer: 'X'
      })
    )
  };
  
  checkForGameFinish() {
    //copy of state board
    let winFound = false;
    let winner = '';
    let prevScore = Object.assign({}, this.state.score);
    let curBoard = [...this.state.board];
    console.log('curBoard :', curBoard);

    //make a 90 degree rotated version to check columns
    let len = curBoard.length - 1;
    let curBoardRotated = curBoard.map((row, i) => (
      row.map((cell, j) => curBoard[len - j][i])
    ))
    console.log('curBoardRotated :', curBoardRotated);

    //define check rows function
    const checkRows = m => {
      m.forEach(row => {
        if (row[0] !== '' && row.every(v => v === row[0])) {
          console.log('winner found: ', row[0])
          winFound = true;
          winner = row[0]
        }
      })
    }

    //define check diag
    const checkDiag = m => {
      let diag = [];
      for (let i = 0; i < 3; i++) {
        diag.push(m[i][i]);
      }
      console.log('diag :', diag);
      if (diag[0] !== '' && diag.every(v => v === diag[0])) {
        winFound = true;
        winner = diag[0];
        console.log('winner found :', winner);
      }
    }

    //check board and rotated board for wins
    checkRows(curBoard);
    checkRows(curBoardRotated);
    checkDiag(curBoard);
    checkDiag(curBoardRotated);

    //update state if win is found
    if (winFound === true) {
      prevScore[winner]++;
      console.log('prevScore :', prevScore);
      this.setState({
        gameFinished: true,
        score: prevScore,
      }, () => {
        // ! checking score state
        console.log(this.state.score);
      })
    }

    if (this.state.moves === 9) {
      this.setState({
        gameFinished: true,
      })
    }
  }

  startNewGame() {
    console.log('new game requested')

    this.setState({
      currentPlayer: 'X',
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      gameFinished: false,
      moves: 0
    })
  }
  
  render() {
    return (
      <div className='container'>
        <Meta />
        <div className='content'>
          <Navbar />
          <div className='ticTacToe'>
            <div className='title'>Tic Tac Toe</div>
            <div className='players'>
              <div>
                <div className='player1'>Player X: {this.state.score.X}</div>
                <div className='player2'>Player O: {this.state.score.O}</div>
              </div>
              <NewGameOrScore
                gameFinished = {this.state.gameFinished}
                currentPlayer = {this.state.currentPlayer}
                startNewGame = {this.startNewGame}
                moves = {this.state.moves}
              />
              
            </div>
            <div className='board-container'>
              <div className='board-cell-0-0 cell'>
                <button 
                  name='0-0' 
                  value={this.state.board[0][0]}
                  onClick={(e) => this.state.gameFinished ? 
                  null :
                  this.handleCellClick(e)} 
                  className='cell-button button-0-0'>{this.state.board[0][0]}</button>

              </div>
              <div className='board-cell-0-1 cell'>
                <button 
                  name='0-1' 
                  value={this.state.board[0][1]}
                  onClick={(e) => this.state.gameFinished ? 
                  null :
                  this.handleCellClick(e)}
                  className='cell-button button-0-1'>{this.state.board[0][1]}</button>

              </div>

              <div className='board-cell-0-2 cell'>
                <button 
                  name='0-2'
                  value={this.state.board[0][2]}
                  onClick={(e) => this.state.gameFinished ? 
                  null :
                  this.handleCellClick(e)}
                  className='cell-button button-0-2'>{this.state.board[0][2]}</button>

              </div>
              <div className='board-cell-1-0 cell'>
                <button 
                  name='1-0' 
                  onClick={(e) => this.state.gameFinished ? 
                  null :
                  this.handleCellClick(e)}
                  className='cell-button button-1-0'>{this.state.board[1][0]}</button>

              </div>
              <div className='board-cell-1-1 cell'>
                <button 
                name='1-1'
                value={this.state.board[1][1]}
                onClick={(e) => this.state.gameFinished ? 
                null :
                this.handleCellClick(e)}
                className='cell-button button-1-1'>{this.state.board[1][1]}</button>

              </div>
              <div className='board-cell-1-2 cell'>
                <button 
                name='1-2'
                value={this.state.board[1][2]}
                onClick={(e) => this.state.gameFinished ? 
                null :
                this.handleCellClick(e)}
                className='cell-button button-1-2'>{this.state.board[1][2]}</button>

              </div>
              <div className='board-cell-2-0 cell'>
                <button  
                name='2-0'
                value={this.state.board[2][0]}
                onClick={(e) => this.state.gameFinished ? 
                null :
                this.handleCellClick(e)}
                className='cell-button button-2-0'>{this.state.board[2][0]}</button>

              </div>
              <div className='board-cell-2-1 cell'>
                <button  
                name='2-1'
                value={this.state.board[2][1]}
                onClick={(e) => this.state.gameFinished ? 
                null :
                this.handleCellClick(e)}
                className='cell-button button-2-1'>{this.state.board[2][1]}</button>

              </div>
              <div className='board-cell-2-2 cell'>
                <button 
                name='2-2'
                value={this.state.board[2][2]}
                onClick={(e) => this.state.gameFinished ? 
                null :
                this.handleCellClick(e)}
                className='cell-button button-2-2'>{this.state.board[2][2]}</button>

              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .ticTacToe {
            display: flex;
            margin-top: 20px;
            font-size: 1.8em;
            width: 100vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          .title {
            font-size: 2em;
          }

          .players {
            width: 40vw;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .board-container {
            margin-top: 40px;
            display: grid;
            grid-template-columns: auto auto auto;
            box-sizing: border-box;
          }

          .cell {
            padding: 0px;
            margin: 0px;
            width: 160px;
            height: 160px;
          }

          .cell-button {
            width: 100%;
            height: 100%;
            background-color: Transparent;
            background-repeat:no-repeat;
            border: none;
            cursor:pointer;
            overflow: hidden;
            outline:none;
            font-size: 2em;
          }

          .board-cell-0-0 {
            border-right: 1px black solid;
            border-bottom: 1px black solid;
          }
          .board-cell-0-1 {
            border-right: 1px black solid;
            border-bottom: 1px black solid;
            border-left: 1px black solid;
          }
          .board-cell-0-2 {
            border-bottom: 1px black solid;
            border-left: 1px black solid;
          }
          .board-cell-1-0 {
            border-top: 1px black solid;
            border-right: 1px black solid;
            border-bottom: 1px black solid;
          }
          .board-cell-1-1 {
            border: 1px black solid;
          }
          .board-cell-1-2 {
            border-top: 1px black solid;
            border-bottom: 1px black solid;
            border-left: 1px black solid;
          }
          .board-cell-2-0 {
            border-top: 1px black solid;
            border-right: 1px black solid;
          }
          .board-cell-2-1 {
            border-top: 1px black solid;
            border-right: 1px black solid;
            border-left: 1px black solid;
          }
          .board-cell-2-2 {
            border-top: 1px black solid;
            border-left: 1px black solid;
          }
        `}</style>
      </div>
    )
  }
}