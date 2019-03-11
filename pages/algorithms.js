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
        <div className='content'>
          <Navbar/>
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
        `}</style>
        
      </div>
    );
  }
}
