/*
Water Blocks

You are given an input array where each element represents the height of a line of towers.

The width of every tower is 1.
It starts raining.How much water is collected between the towers ?
  Eg.Input : [5, 2, 3, 2, 1, 3]
Output: 4
Visualization:

  '-' is water
  '#' is a block

  #
  #
  # - # - - #
  # # # # - #
  # # # # # #

        #
  # - - #
  # # - #
  # # # #

  Remember the rules of how to answer technical prompts.Try and go from a working naive solution to a working ideal solution.
*/

// -Start of Code-                                                 ===
waterBlocks = (b, w = 0) => {

  //loop through blocks skipping first and last
  for (let i = 1; i < b.length - 1; i++) {
    //find the highest block on the left side
    hiLeft = Math.max(...b.slice(0, i));
    //get the highest block on the right side
    hiRight = Math.max(...b.slice(i + 1));
    //find the minimum between two highest
    min = Math.min(hiLeft, hiRight);
    //check if i is at least 1 less than min
    if (b[i] < min) {
      //water is space between min and i
      w += min - b[i];
    }
  }
  return w;
};
// -End of Code-                                                   ===

// given tests:

const input = [3, 2, 1, 4];

console.log(waterBlocks(input));