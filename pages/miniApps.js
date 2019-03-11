import { Component } from 'react';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import MiniAppCard from '../components/MiniAppCard';
import Footer from '../components/Footer';

export default class MiniApps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      miniApps: [
        'Word View',
        'Tic Tac Toe',
        'Calculator',
        'Connect Four',
        'Shopping Cart',
        'Game of Life',
        'Checkers',
        'Wiki Article'
      ]
    }
  }

  render() {
    return (
      <div className='container'>
        <Meta />
        <div className='content'>
          <Navbar />
          <div className='mini-apps-container'>
            {this.state.miniApps.map(miniApp => {
              return (
                <MiniAppCard
                  key={miniApp}
                  miniApp={miniApp}
                />
              )
            })}
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .container {
          }

          .mini-apps-container {
            margin: 0 auto;
            width: 100vw;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content; space-evenly;
          }
        `}</style>
      </div>
    )
  }
}