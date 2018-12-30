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
      outputMatrix: [],
      regex: /\],\[/g,
    }
  }

  componentDidMount() {
    this.generateMatrix();
  }

  componentDidUpdate() {
    if (this.state.inputMatrix.length !== this.state.n) {
      console.log('this.state.inputMatrix :', this.state.inputMatrix);
      this.generateMatrix();
    }
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
        cell.maxLength = '1';
        cell.value = ((i * n) + j) % 10;
        cell.style.width = '80px';
        cell.style.height = '40px';
        cell.style['text-align'] = 'center';
        cell.style.border = '1px solid black';
        cell.style['font-family'] = 'Fira Mono, monospace';
        cell.style['font-size'] = '1.4em';
        cell.oninput = (e) => this.handleCellValueChange(e);
        row.appendChild(cell);
      }
      el.appendChild(row);
    }
    this.displayInputMatrix();
  }

  handleNChange(e) {
    e.preventDefault();
    let n = this.state.n;
    let el = document.getElementById('matrix');
    while (el.lastChild) {
      el.removeChild(el.lastChild);
    }
    if (n >= 0) {
      if (e.target.name === 'increase') {
        n += 1;
        this.setState({
          n: n,
          outputMatrix: [],
        })
      } else if (n >= 1) {
        n -= 1;
        this.setState({
          n: n,
          outputMatrix: [],
        })
      }
    }
  }

  displayInputMatrix() {
    let tempMatrix = [];
    let matrix = document.getElementById('matrix');
    let rows = matrix.children;
    let arrRows = Array.from(rows, row => row.children);
    arrRows.forEach(row => {
      let arrCells = Array.from(row, cell => cell.value)
      tempMatrix.push(arrCells);
    })
    this.setState({
      inputMatrix: tempMatrix,
      outputMatrix: []
    })
  }

  handleCellValueChange(e) {
    e.preventDefault();
    console.log('e.target.value :', e.target.value);
    this.displayInputMatrix();
  }

  rotateMatrix() {
    let matrix;
    if (this.state.outputMatrix.length === 0) {
      matrix = this.state.inputMatrix;
    } else {
      matrix = this.state.outputMatrix;
    }
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

    this.setState({
      outputMatrix: output,
    })
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
            <div className='display'>
              input:
              <div className='input-matrix'>
                {JSON.stringify(this.state.inputMatrix)
                  .replace(this.state.regex, ']\n[')
                  .replace('[[', '[')
                  .replace(']]', ']')
                }
              </div>
              <button 
                className='rotate-button'
                onClick={() => this.rotateMatrix()}>
                  ⟳
              </button>
              output:
              <div className='output-matrix'>
                {JSON.stringify(this.state.outputMatrix)
                  .replace(this.state.regex, ']\n[')
                  .replace('[[', '[')
                  .replace(']]', ']')
                }
              </div>
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

          .input-matrix, .output-matrix {
            white-space: pre-wrap;
            text-align: justify;
          }

          .display {
            width: 50vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          }

          input[type=text] {
            background-color: #bbb5c3;
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