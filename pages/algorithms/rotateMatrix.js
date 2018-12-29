import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class RotateMatrix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 3,
    }
  }

  componentDidMount() {
    this.generateMatrix();
  }

  generateMatrix() {
    let n = this.state.n;
    let el = document.getElementById('matrix');
    for (let i = 0; i < n; i++) {
      let row = document.createElement('div');
      row.className = 'matrix-row';
      for (let j = 0; j < n; j++) {
        let cell = document.createElement('div');
        cell.className = 'matrix-cell'
        cell.innerText = (i * n) + j;
        row.appendChild(cell);
      }
      el.appendChild(row);
    }
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          Rotate Matrix

          <div className='rotate'>
            <div id='matrix'>
              matrix
            </div>

          </div>
        <Footer/>
        <style jsx>{`
          .matrix {
            width: 100vw;
            display: flex;
            align-items: center;
            Justify-content: space-between;
          }
        `}</style>
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