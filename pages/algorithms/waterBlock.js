import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class WaterBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      x: 5,
      y: 5,
    }
  }

  componentDidMount() {
    if (this.state.loaded === false) {
      this.generateMatrix()
    }
  }
  
  generateMatrix() {
    let x = this.state.x
    let y = this.state.y
    let el = document.getElementById('matrix');
    for (let i = 0; i < x; i++) {
      let row = document.createElement('div');
      row.className = `matrix-row${i}`
      for (let j = 0; j < y; j++) {
        let cell = document.createElement('button')
        cell.className = `matrix-cell-${i}-${j}`
        cell.name = 'air';
        cell.style.width = '40px';
        cell.style.height = '40px';
        cell.style.border = '1px solid black';
        cell.style.margin = '1px 3px';
        row.appendChild(cell);
        cell.onclick = e => this.handleCellToggle(e);
      }
      el.appendChild(row);
    }
    this.setState({
      loaded: true
    })
  }

  // applyMatrixToState() {
  //   tempMatrix = []
  // }

  handleCellToggle(e) { // todo
    let type = e.target.name;
    let row = e.target.className.split('-')[2];
    let col = e.target.className.split('-')[3]; 
  }

  handleMatrixResize(e) {
    
    let axis = e.target.name.split('-')[0]
    let direction = e.target.name.split('-')[1];

    const removeMatrix = () => {
      let el = document.getElementById('matrix');
      while(el.lastChild) {
        el.removeChild(el.lastChild);
      }
    }
    
    if (axis === 'height') {
      let prevHeight = this.state.x;
      let newHeight = direction === 'increase' ? prevHeight + 1 : prevHeight - 1;
      
      if (newHeight < 11 && newHeight > 1) {
        removeMatrix();
        this.setState({
          x: newHeight
        }, () => this.generateMatrix())
      }
    } else {
      let prevWidth = this.state.y;
      let newWidth = direction === 'increase' ? prevWidth + 1 : prevWidth - 1;
      
      if (newWidth < 21 && newWidth > 2) {
        removeMatrix();
        this.setState({
          y: newWidth
        }, () => this.generateMatrix())
      }
    }
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          <div className='waterBlock'>
            Water Blocks
            <span className='note'>(Toggle cells between blocks and air. Make it rain to see how much water is retained in the blocks.)</span>
            <div className='x-y-buttons'>
              height:
              <button className='matrix-button' name='height-increase' onClick={(e) => this.handleMatrixResize(e)}>▲</button>
              <button className='matrix-button' name='height-decrease' onClick={(e) => this.handleMatrixResize(e)}>▼</button>
              width:
              <button className='matrix-button' name='width-decrease' onClick={(e) => this.handleMatrixResize(e)}>◀</button>
              <button className='matrix-button' name='width-increase' onClick={(e) => this.handleMatrixResize(e)}>▶</button>
            </div>
            <div id='matrix'></div>
          </div>
        <Footer/>
        <style jsx>{`
          .waterBlock {
            margin-top: 20px;
            font-size: 1.8em;
            width: 100vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          #matrix {
            margin-top: 20px;
          }

          .x-y-buttons {
            display: flex;
            align-items: center;
            margin-top: 20px;
            font-size: .7em;
          }

          .matrix-button {
            width: 25px;
            height: 25px;
            border: 1px solid black;
            margin-right: 10px;

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
// Water Blocks

// You are given an input array where each element represents the height of a line of towers.

// The width of every tower is 1.
// It starts raining.How much water is collected between the towers ?
//   Eg.Input : [5, 2, 3, 2, 1, 3]
// Output: 4
// Visualization:

//   '-' is water
//   '#' is a block

//   #
//   #
//   # - # - - #
//   # # # # - #
//   # # # # # #

//         #
//   # - - #
//   # # - #
//   # # # #

//   Remember the rules of how to answer technical prompts.Try and go from a working naive solution to a working ideal solution.
// */

// // -Start of Code-                                                 ===
// waterBlocks = (b, w = 0) => {

//   //loop through blocks skipping first and last
//   for (let i = 1; i < b.length - 1; i++) {
//     //find the highest block on the left side
//     hiLeft = Math.max(...b.slice(0, i));
//     //get the highest block on the right side
//     hiRight = Math.max(...b.slice(i + 1));
//     //find the minimum between two highest
//     min = Math.min(hiLeft, hiRight);
//     //check if i is at least 1 less than min
//     if (b[i] < min) {
//       //water is space between min and i
//       w += min - b[i];
//     }
//   }
//   return w;
// };
// // -End of Code-                                                   ===

// // given tests:

// const input = [3, 2, 1, 4];

// console.log(waterBlocks(input));