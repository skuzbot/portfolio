import { Component } from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import AlgorithmCard from '../components/AlgorithmCard';
import Footer from '../components/Footer';

export default class Algorithms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      algorithms: [
        'Rotate Matrix',
        'Roman to Number',
        'All Anagrams',
        'Sudoku Validator',
        'Bracket Validator',
        'Water Blocks',
        'Island Count',
        'Nth Fibonacci Number',
      ],
    }
  }

  render() {
    return (
      <div className='container'>
        <Meta/>
        <Navbar/>
        <div className='content'>
          <div className='message'>
            Solving coding toy-problems is one of my favorite passtimes. I built a UI for some of my favorites. Here they are!

          </div>
          <div className='algorithms-container'>
            {this.state.algorithms.map(algorithm => {
              return (
                <AlgorithmCard 
                  key={algorithm}
                  algorithm={algorithm}
                />
              )
            })}
          </div>
        </div>
        <Footer/>
        <style jsx>{`
          .container {
          }
          
          .algorithms-container {
            margin: 0 auto;
            width: 100vw;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content; space-evenly;
          }

          .content {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .message {
            margin-top: 5px;
            margin-right: auto;
            margin-left: auto;
          }
        `}</style>
        
      </div>
    );
  }
}
