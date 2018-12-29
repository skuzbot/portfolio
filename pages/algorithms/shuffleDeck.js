import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class ShuffleDeck extends Component {
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
          Shuffle Deck
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
// var orderedDeck = function () {
//   var suits = ['♥', '♣', '♠', '♦'];
//   var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
//   var deck = [];

//   suits.forEach(function (suit) {
//     values.forEach(function (value) {
//       deck.push(value + suit);
//     });
//   });

//   return deck;
// };

// // -Start of Code-                                                 ===
// shuffleDeck = function (deck, t, i, m = deck.length) {

//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = deck[m];
//     deck[m] = deck[i];
//     deck[i] = t;
//   }

//   return deck;
// };
// // -End of Code-                                                   ===

// // given tests:

// const input = orderedDeck();

// console.log(shuffleDeck(input));