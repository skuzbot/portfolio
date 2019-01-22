import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class IslandCount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      width: 12,
      height: 8,
      map: [],
      count: 0,
    }
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.generateMap();
      this.applyMapToState();
    }
  }

  generateMap() {
    let width = this.state.width;
    let height = this.state.height;
    let map = document.getElementById('map');
    for (let i = 0; i < height; i++) {
      let row = document.createElement('div');
      row.className = `map-row-${i}`;
      for (let j = 0; j < width; j++) {
        let cell = document.createElement('button');
        cell.className = `map-cell-${i}-${j}`;
        cell.name = 'water';
        cell.maxLength = '1';
        cell.style.width = '40px';
        cell.style.height = '40px';
        cell.style['text-align'] = 'center';
        cell.style.border = '1px solid black';
        cell.style['font-family'] = 'Fira Mono, monospace';
        cell.style['font-size'] = '.8em';
        cell.style.margin = '1px 2px';
        cell.style['background-color'] = '#e3f2fd';
        cell.onclick = (e) => this.handleCellToggle(e);

        row.appendChild(cell);
      }
      map.appendChild(row);
    }
    this.setState({
      loaded: true
    })
  }
  
  applyMapToState() {
    const tempMap = [];
    const map = document.getElementById('map');
    const rows = map.children;
    const tempRows = Array.from (rows, row => row.children);
    tempRows.forEach(row => {
      let tempCells = Array.from(row, cell => cell.name);
      tempMap.push(tempCells)
    })
    this.setState({
      map: tempMap
    })

  }

  handleCellToggle(e) {
    let type = e.target.name;
    let row = e.target.className.split('-')[2];
    let cell = e.target.className.split('-')[3];
    let prevMap = this.state.map.slice();
    
    if (type === 'water' || type === 'sunk') {
      e.target.name = 'land';
      e.target.style['background-color'] = '#c8e6c9'
      prevMap[row][cell] = 'land';
      this.setState({
        map: prevMap,
      })
      
    } else if (type === 'land') {
      e.target.name = 'water';
      e.target.style['background-color'] = '#e3f2fd';
      prevMap[row][cell] = 'water';
      this.setState({
        map: prevMap,
      })
    }

  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          Island Count

          <div className='island-count'>
            Island Count <span className='note'>(Toggle map cells to change between land and water. Islands do not connect diagonally)</span>
          <div id='map'>
          </div>
          <div className='island-count-output'>{this.state.count}</div>
          </div>
        <Footer/>
        <style jsx>{`
          .island-count {
            margin-top: 20px;
            font-size: 1.8em;
            width: 100vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          #map {
            margin-top: 20px;
            button: {
              outline:
            }
          }

          button:focus {
            outline: none;
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

// Input:

// Constrains/Conditions:

// Examples/Edge Cases:


// */
// // -Start of Code-                                                 ===
// countIslands = (mapStr) => {
//   let count = 0;
//   let map = mapStr.split('\n').map(row => row.split(''));

//   const isOnMap = (row, col) => {
//     return ((row >= 0 && row < map.length) && (col >= 0 && col < map[0].length));
//   };

//   const isLand = (row, col) => {
//     if (!isOnMap(row, col)) {
//       return false;
//     }
//     return (map[row][col] === '0');
//   };

//   const sinkLand = (row, col) => {
//     map[row][col] = '.';
//   };

//   const islandRecurse = (row, col) => {
//     if (isLand(row, col)) {
//       sinkLand(row, col);
//     }
//     if (isLand(row + 1, col)) {
//       sinkLand(row + 1, col);
//       islandRecurse(row + 1, col);
//     }
//     if (isLand(row - 1, col)) {
//       sinkLand(row - 1, col);
//       islandRecurse(row - 1, col);
//     }
//     if (isLand(row, col + 1)) {
//       sinkLand(row, col + 1);
//       islandRecurse(row, col + 1);
//     }
//     if (isLand(row, col - 1)) {
//       sinkLand(row, col - 1);
//       islandRecurse(row, col - 1);
//     }
//   };


//   for (let i = 0; i < map.length; i++) {
//     for (let j = 0, len = map[0].length; j < len; j++) {
//       if (map[i][j] === '0') {
//         islandRecurse(i, j);
//         count++;
//       }
//     }
//   }

//   return count;
// };
// // -End of Code-                                                   ===

// // given tests:

// const input = '0...0\n0...0\n00000';
// console.log(`input :\n${input}`);

// console.log(countIslands(input));

// // let arr =
// // ['.0...', 
// //  '.00..', 
// //  '....0'];