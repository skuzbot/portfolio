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
    }
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
              <div className='player1'>Player X: {this.state.xScore}</div>
              <div className='player2'>Player O: {this.state.oScore}</div>
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
            flex-direction: row;
          }
        `}</style>
      </div>
    )
  }
}