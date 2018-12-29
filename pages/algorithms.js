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
        'Roman Numberal to Number',
        'All Anagrams',
        'Sudoku Validator',
        'Parentheses Validator',
        'Water Blocks',
        'Shuffle Deck',
        '8',
      ],
    }
  }

  render() {
    return (
      <div className='container'>
        <Meta/>
        <Navbar/>
        Algorithms here:
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
        <Footer/>
        <style jsx>{`
          .algorithms-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content; space-between;
          }
        `}</style>
        
      </div>
    );
  }
}
