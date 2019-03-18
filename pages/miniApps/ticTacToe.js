import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 'X',
      board: [
        [[''], [''], ['']],
        [[''], [''], ['']],
        [[''], [''], ['']]
      ],
      gameFinished: false,
      xScore: 0,
      oScore: 0,
      moves: 0,
    }
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick(e) {
    e.preventDefault()
    if (e.target.value === '') {
      let [row, column] = [...e.target.name.split('-')]
      let prevBoard = [...this.state.board];
      let prevMoves = this.state.moves;
      prevMoves++;
      prevBoard[row][column] = this.state.currentPlayer;
      
      console.log('prevBoard :', prevBoard);
      this.setState({
        board: prevBoard,
        moves: prevMoves,
      }, () => {
        console.log('this.state.moves :', this.state.moves);
        this.handlePlayerToggle();
      })
    }
    console.log('e.target.value :', e.target.value);
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
                <div className='player1'>Player X: {this.state.xScore}</div>
                <div className='player2'>Player O: {this.state.oScore}</div>
              </div>
              <div className='current-player'>Current Player: {this.state.currentPlayer}</div>
            </div>
            <div className='board-container'>
              <div className='board-cell-0-0 cell'>
                <button 
                  name='0-0' 
                  value={this.state.board[0][0]}
                  onClick={(e) => this.handleCellClick(e)} 
                  className='cell-button button-0-0'>{this.state.board[0][0]}</button>

              </div>
              <div className='board-cell-0-1 cell'>
                <button 
                  name='0-1' 
                  value={this.state.board[0][1]}
                  onClick={(e) => this.handleCellClick(e)} 
                  className='cell-button button-0-1'>{this.state.board[0][1]}</button>

              </div>

              <div className='board-cell-0-2 cell'>
                <button 
                  name='0-2'
                  value={this.state.board[0][2]}
                  onClick={(e) => this.handleCellClick(e)} 
                  className='cell-button button-0-2'>{this.state.board[0][2]}</button>

              </div>
              <div className='board-cell-1-0 cell'>
                <button 
                  name='1-0' 
                  onClick={(e) => this.handleCellClick(e)} 
                  className='cell-button button-1-0'>{this.state.board[1][0]}</button>

              </div>
              <div className='board-cell-1-1 cell'>
                <button 
                name='1-1'
                value={this.state.board[1][1]}
                onClick={(e) => this.handleCellClick(e)} 
                className='cell-button button-1-1'>{this.state.board[1][1]}</button>

              </div>
              <div className='board-cell-1-2 cell'>
                <button 
                name='1-2'
                value={this.state.board[1][2]}
                onClick={(e) => this.handleCellClick(e)} 
                className='cell-button button-1-2'>{this.state.board[1][2]}</button>

              </div>
              <div className='board-cell-2-0 cell'>
                <button  
                name='2-0'
                value={this.state.board[2][0]}
                onClick={(e) => this.handleCellClick(e)} 
                className='cell-button button-2-0'>{this.state.board[2][0]}</button>

              </div>
              <div className='board-cell-2-1 cell'>
                <button  
                name='2-1'
                value={this.state.board[2][1]}
                onClick={(e) => this.handleCellClick(e)} 
                className='cell-button button-2-1'>{this.state.board[2][1]}</button>

              </div>
              <div className='board-cell-2-2 cell'>
                <button 
                name='2-2'
                value={this.state.board[2][2]}
                onClick={(e) => this.handleCellClick(e)} 
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
            flex-direction: row;
            justify-content: space-between;
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