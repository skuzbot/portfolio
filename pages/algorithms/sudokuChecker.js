import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class SudokuChecker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sudoku: [
        ['7', '3', '5', '8', '1', '4', '2', '9', '6'],
        ['8', '9', '6', '2', '7', '5', '3', '1', '4'],
        ['2', '1', '4', '9', '6', '3', '8', '5', '7'],
        ['5', '8', '9', '4', '2', '7', '1', '6', '3'],
        ['3', '6', '2', '1', '8', '9', '7', '4', '5'],
        ['4', '7', '1', '3', '5', '6', '9', '8', '2'],
        ['9', '2', '3', '5', '4', '1', '6', '7', '8'],
        ['6', '4', '8', '7', '9', '2', '5', '3', '1'],
        ['1', '5', '7', '6', '3', '8', '4', '2', '9'],
      ],
      isSolved: true,
    }
  }

  componentDidMount() {
    this.generateSudokuMatrix();
    this.sudokuCheck();
  }

  componentDidUpdate() {
    
    this.sudokuCheck();
  }

  generateSudokuMatrix() {
    let el = document.getElementById('sudoku-matrix');
    for (let i = 0; i < 9; i++) {
      let row = document.createElement('div');
      row.className=`sudoku-row-${i}`;
      if (i === 2 || i === 5) {
        row.style['margin-bottom'] = '9px';
      }
      for (let j = 0; j < 9; j++) {
        let cell = document.createElement('input');
        cell.className = `sudoku-cell-${i}-${j}`;
        cell.type = 'text';
        cell.maxLength = '1';
        cell.value = this.state.sudoku[i][j];
        cell.style.width = '30px';
        cell.style.height = '30px';
        cell.style['text-align'] = 'center';
        cell.style.border = '1px solid black';
        cell.style['font-family'] = 'Fira Mono, monospace';
        cell.style['font-size'] = '.8em';
        cell.oninput = (e) => {
          e.target.value = e.target.value.replace(/[^1-9]/gi, '')
          this.handleCellChange(e)
        };
        cell.onclick = (e) => this.handleCellClick(e);
        if (j === 2) {
          cell.style['margin-right'] = '9px';
        }
        if (j === 6) {
          cell.style['margin-left'] = '9px';
        }
        row.appendChild(cell);
      }
      el.appendChild(row);
    }
  }

  handleCellChange(e) {
    let input = e.target.value;
    console.log('input :', input);
    let row = parseInt(e.target.className.charAt(12));
    let cell = parseInt(e.target.className.charAt(14));
    let prevMatrix = this.state.sudoku;
    prevMatrix[row][cell] = input;
    this.setState({
      sudoku: prevMatrix,
    })
  }

  handleCellClick(e) {
    e.target.value = '';
    this.handleCellChange(e);
  }

  sudokuCheck() {
    let o = true;
    let matrix = this.state.sudoku;

    //check if rows contain dupes
    matrix.forEach(row => {
      if (row.filter((v, i, a) => a.indexOf(v) === i).filter(v => v !== '').length !== row.length) {
        o = false;
      }
    });

    //rotate to check columns
    let rotated = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    rotated = rotated.map(i => (
      matrix.map(row => row[i])
    ));

    rotated.forEach(row => {
      if (row.filter((v, i, a) => a.indexOf(v) === i).filter(v => v !== '').length !== row.length) {
        o = false;
      }
    });

    //make and check sub grids;
    let subs = [];
    subs[0] = [matrix[0][0], matrix[0][1], matrix[0][2],
               matrix[1][0], matrix[1][1], matrix[1][2],
               matrix[2][0], matrix[2][1], matrix[2][2]];

    subs[1] = [matrix[0][3], matrix[0][4], matrix[0][5],
               matrix[1][3], matrix[1][4], matrix[1][5],
               matrix[2][3], matrix[2][4], matrix[2][5]];

    subs[2] = [matrix[0][6], matrix[0][7], matrix[0][8],
               matrix[1][6], matrix[1][7], matrix[1][8],
               matrix[2][6], matrix[2][7], matrix[2][8]];

    subs[3] = [matrix[3][0], matrix[3][1], matrix[3][2],
               matrix[4][0], matrix[4][1], matrix[4][2],
               matrix[5][0], matrix[5][1], matrix[5][2]];

    subs[4] = [matrix[3][3], matrix[3][4], matrix[3][5],
               matrix[4][3], matrix[4][4], matrix[4][5],
               matrix[5][3], matrix[5][4], matrix[5][5]];

    subs[5] = [matrix[3][6], matrix[3][7], matrix[3][8],
               matrix[4][6], matrix[4][7], matrix[4][8],
               matrix[5][6], matrix[5][7], matrix[5][8]];

    subs[6] = [matrix[6][0], matrix[6][1], matrix[6][2],
               matrix[7][0], matrix[7][1], matrix[7][2],
               matrix[8][0], matrix[8][1], matrix[8][2]];

    subs[7] = [matrix[6][3], matrix[6][4], matrix[6][5],
               matrix[7][3], matrix[7][4], matrix[7][5],
               matrix[8][3], matrix[8][4], matrix[8][5]];

    subs[8] = [matrix[6][6], matrix[6][7], matrix[6][8],
               matrix[7][6], matrix[7][7], matrix[7][8],
               matrix[8][6], matrix[8][7], matrix[8][8]];

    subs.forEach(row => {
      if (row.filter((v, i, a) => a.indexOf(v) === i).filter(v => v !== '').length !== row.length) {
        o = false;
      }
    });

    if (this.state.isSolved !== o) {
      this.setState({
        isSolved: o,
      })
    }
  };

  renderResult() {
    if (this.state.isSolved) {
      return (
        <div>Sudoku Solved!</div>
      )
    } else {
      return (
        <div>Invalid Solution</div>
      )
    }
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          <div className='sudoku'>
            Sudoku Board:
            <span className='note'>
              (I'll start you out with a valid solution. Edit to see changes)
            </span>
          <div id='sudoku-matrix'>
          </div>
          <div className='solved-status-display'>
          {this.renderResult()}
          </div>
          </div>
        <Footer/>
        <style jsx>{`
          .sudoku {
            margin-top: 20px;
            font-size: 1.8em;
            width: 100vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          #sudoku-matrix {
            margin-top: 20px;
          }

          .solved-status-display {
            margin-top: 20px;
          }

          .note {
            font-size: 0.4em;
          }
        `}</style>
      </div>
    )
  }
}

// /*
// Output:
// array of all anagrams
// Input:
// string
// Constrains/Conditions:

// Examples/Edge Cases:

// */


// // -Start of Code-                                                 ===
// sudokuCheck = (bs) => {
//   let o = 'solved';
//   let matrix = bs.split('\n');
//   matrix = matrix.map(row => (row.split('')));
//   console.log('matrix :\n', matrix);

//   //check if rows contain dupes
//   matrix.forEach(row => {
//     if (row.filter((v, i, a) => a.indexOf(v) === i).length !== row.length) {
//       o = 'invalid';
//     }
//   });

//   //rotate to check columns
//   let rotated = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//   rotated = rotated.map(i => (
//     matrix.map(row => row[i])
//   ));

//   rotated.forEach(row => {
//     if (row.filter((v, i, a) => a.indexOf(v) === i).length !== row.length) {
//       o = 'invalid';
//     }
//   });

//   //make and check sub grids;
//   let subs = [];
//   subs[0] = (bs.slice(0, 3) + bs.slice(10, 13) + bs.slice(20, 23)).split('');
//   subs[1] = (bs.slice(3, 6) + bs.slice(13, 16) + bs.slice(23, 26)).split('');
//   subs[2] = (bs.slice(6, 9) + bs.slice(16, 19) + bs.slice(26, 29)).split('');
//   subs[3] = (bs.slice(30, 33) + bs.slice(40, 43) + bs.slice(50, 53)).split('');
//   subs[4] = (bs.slice(33, 36) + bs.slice(43, 46) + bs.slice(53, 56)).split('');
//   subs[5] = (bs.slice(36, 39) + bs.slice(46, 49) + bs.slice(56, 59)).split('');
//   subs[6] = (bs.slice(60, 63) + bs.slice(70, 73) + bs.slice(80, 83)).split('');
//   subs[7] = (bs.slice(63, 66) + bs.slice(73, 76) + bs.slice(83, 86)).split('');
//   subs[8] = (bs.slice(66, 69) + bs.slice(76, 79) + bs.slice(86, 89)).split('');

//   subs.forEach(row => {
//     if (row.filter((v, i, a) => a.indexOf(v) === i).length !== row.length) {
//       o = 'invalid';
//     }
//   });

//   return o;
// };
// // -End of Code-                                                   ===

// // given tests:

// // const input = '895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241';
// const input = '895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241';
// /*
// 895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241
// */

// console.log(sudokuCheck(input));


