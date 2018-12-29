import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class SudokuChecker extends Component {
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
          Sudoku Checker
        <Footer/>
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