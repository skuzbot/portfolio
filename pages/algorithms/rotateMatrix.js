import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class RotateMatrix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 3,
      inputMatrix: [],
    }
  }

  componentDidMount() {
    this.generateMatrix();
  }

  componentDidUpdate() {
    this.generateMatrix();
  }

  generateMatrix() {
    let n = this.state.n;
    let el = document.getElementById('matrix');
    for (let i = 0; i < n; i++) {
      let row = document.createElement('div');
      row.className = 'matrix-row';
      for (let j = 0; j < n; j++) {
        let cell = document.createElement('input');
        cell.className = 'matrix-cell';
        cell.type = 'text';
        cell.pattern = /[0-9]/;
        cell.maxLength = '3';
        cell.value = (i * n) + j;
        cell.style.width = '80px';
        cell.style.height = '40px';
        cell.style['text-align'] = 'center';
        cell.style.border = '1px solid black';
        cell.style['font-family'] = 'Fira Mono, monospace';
        cell.style['font-size'] = '1.4em';
        row.appendChild(cell);
      }
      el.appendChild(row);
    }
  }

  handleNChange(e) {
    e.preventDefault();
    let n = this.state.n;
    let el = document.getElementById('matrix');
    if (n >= 0) {
      while (el.lastChild) {
        el.removeChild(el.lastChild);
      }
      if (e.target.name === 'increase') {
        n += 1;
        this.setState({
          n: n,
        })
      } else if (n >= 1) {
        n -= 1;
        this.setState({
          n: n,
        })
      }
    }
  }

  

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          Rotate Matrix
          <div className='rotate'>
            Matrix
            <button name='increase' onClick={e => this.handleNChange(e)}>
              ▲
            </button>
            <button name='decrease' onClick={e => this.handleNChange(e)}>
              ▼
            </button>
            <div id='matrix'>
            </div>

          </div>
        <Footer/>
        <style jsx>{`
          .rotate {
            width: 100vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            margin: 0;
            -webkit-appearance: none;
          }

          button {
            height: 50%;
            border: none;
            display: block;
            border: 1px solid black;
            margin: 8px;
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