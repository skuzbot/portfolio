import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class SudokuChecker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sudoku: [
        [7, 3, 5, 8, 1, 4, 2, 9, 6],
        [8, 9, 6, 2, 7, 5, 3, 1, 4],
        [2, 1, 4, 9, 6, 3, 8, 5, 7],
        [5, 8, 9, 4, 2, 7, 1, 6, 3],
        [3, 6, 2, 1, 8, 9, 7, 4, 5],
        [4, 7, 1, 3, 5, 6, 9, 8, 2],
        [9, 2, 3, 5, 4, 1, 6, 7, 8],
        [6, 4, 8, 7, 9, 2, 5, 3, 1],
        [1, 5, 7, 6, 3, 8, 4, 2, 9],
      ]
    }
  }

  componentDidMount() {
    this.generateSudokuMatrix();
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
        cell.oninput = (e) => e.target.value = e.target.value.replace(/[^1-9]/g, '');
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

  }

  handleCellClick(e) {
    e.target.value = '';
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          Sudoku Checker
          <div className='sudoku'>
            Sudoku Board:
            <span className='note'>
              (I'll start you out with a valid solution. Edit to see changes)
            </span>
          <div id='sudoku-matrix'>
          </div>
          <div className='test'>{this.state.sudoku}</div>
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

          #sudoku-matrix div:nth-child(3n+3) {
            margin: 5px;
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


