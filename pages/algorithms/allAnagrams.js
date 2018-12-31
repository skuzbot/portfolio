import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class AllAnagrams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stringInput: '',
      anagrams: [],
    }
  }

  handleStringInput(e) {
    let str = e.target.value;
    let anagrams = this.AllAnagrams(str);
    this.setState({
      stringInput: str,
      anagrams: anagrams,
    })
  }

  AllAnagrams(str, out = [], arr = str.split``) {
    let perm;
    (perm = (arr, acc = []) => {
      for (let i = 0; i < arr.length; i++) {
        let cur = arr.splice(i, 1);
        if (!arr.length) {
          out.push(acc.concat(cur).join ``);
        }
        perm(arr.slice(), acc.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
    })(arr);

    return out.filter((v, i, a) => a.indexOf(v) === i);
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          All Anagrams
          <div className='anagrams'>
            Enter a string:
            <input 
              type='text'
              maxLength='7'
              onChange={(e) => this.handleStringInput(e)}
              className='string-input'/>
            <div>{this.state.stringInput}</div>
            <div className='anagrams-output'>{JSON.stringify(this.state.anagrams)}</div>
          </div>
        <Footer/>
        <style jsx>{`
          .anagrams {
            margin: 20px 0;
            width: 100vw;
            display: flex;
            font-size 2em;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          .anagrams-output {
            max-width: 100vw;
            overflow-wrap: break-word;
            white-space: pre-wrap;

          }

          input {
            height: 80px;
            width: 320px;
            text-align: center;
            font-size: 1.5em;
            border: 1px black solid;
            font-family: 'Fira Mono', monospace;
          }
        `}</style>
      </div>
    )
  }
}

// /*
// Output:
//   array of all anagrams

// Input:
//   string

// Constrains/Conditions:
//   none

// Examples/Edge Cases:
//   'abc' -> ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

// */
// // -Start of Code-
// allAnagrams = (str, out = [], arr = str.split``) => {

//   //inner recursive permutatin function
//   (perm = (arr, acc = []) => {
//     //loops arr length
//     for (let i = 0; i < arr.length; i++) {
//       //cur - base single char at index i that perm will be built on | i = 0 [a, b, c] -> a | i = 1 [a, b, c] -> b | etc...
//       let cur = arr.splice(i, 1);
//       //if we've gone through the whole array we push the acc to output | acc = [abc], arr = [] |
//       if (!arr.length) {
//         out.push(acc.concat(cur).join ``);
//       }
//       //recurse on a copy of the array and the accumulator + current
//       perm(arr.slice(), acc.concat(cur));
//       //adds first char of cur back into array to be reused
//       arr.splice(i, 0, cur[0]);
//     }
//   })(arr);

//   //filters dups
//   return out.filter((v, i, a) => a.indexOf(v) === i);
// };
// // -End of Code-

// // tests:

// const input = 'abc'; //[ "abc", "acb", "bac", "bca", "cab", "cba" ]

// console.log(allAnagrams(input));
// console.log(allAnagrams(input).length);