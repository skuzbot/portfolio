import { Component } from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default class RotateMatrix extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          Rotate Matrix
        <Footer/>
      </div>
    )
  }
}


/*
Output:
  a rotated version of the input matrix
Input:
  a matrix of numbers
Constrains/Conditions:

Examples/Edge Cases:

// -Start of Code-                                                 ===
rotateMatrix = (matrix) => {
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    output.push(i);
  }
  output = output.map(index => (
    matrix.map(row => row[index])
    ));
    
    output.forEach(row => {
      row.reverse();
    });
    
    return output;
  };
  // -End of Code-                                                   ===
  
  // given tests:
  
  const input = [
    [1, 2],
    [3, 4]
  ];
  
  */
  /* output:
  [
    [3, 1],
    [4, 2]
  ]
  
  const input2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  */
  /* output:
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]
  
  [
    ['*', 1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, '*']
  ]
  
  console.log(rotateMatrix(input));
  console.log(rotateMatrix(input2));
*/