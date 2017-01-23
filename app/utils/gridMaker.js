export function gridMaker(num=16){

	// Make the cells as an array of 0-15
	let cells = Array.from(Array(num).keys());
	let grid = [];

	// Shuffle the cells (Fisher-Yates Shuffle)
  let currentIndex = cells.length
  // While unshuffled elements remain
  while (0 !== currentIndex) {
    // Pick an element
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // Swap it with current
    let temporaryValue = cells[currentIndex];
    cells[currentIndex] = cells[randomIndex];
    cells[randomIndex] = temporaryValue;
   }

  // Push the values into a grid 
  let sqRoot = Math.sqrt(cells.length)
  for (let i = sqRoot; i <= cells.length; i += sqRoot){
  	grid.push(cells.slice((i - 4), i));
  }

  // If the grid is solvable, return it. Else, make a new grid
  if (isSolvable(cells, grid)){
    return grid;
  } else {
    return gridMaker(num)
  }
}

// Check to see if grid is solvable, return boolean
function isSolvable(cells, grid){
  let gridWidth = grid[0].length;
  let inversions = 0;
  let rowFromBottom = 1;

  // Count inversions
  cells.forEach((cell, index) => {
    for (let i = index; i < cells.length; i++){
      if (cell > cells[i]) inversions++ 
    }
  })

  // Row of 0 from bottom
  for (let i = grid.length -1; i > 0; i--){
    if (grid[i].includes(0)){
      break;
    } else {
      rowFromBottom++;
    }
  }

  // Formula
  // https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
  return ((gridWidth % 2 !== 0) && (inversions % 2 === 0)) || (gridWidth % 2 === 0) && ((rowFromBottom % 2 !== 0) === (inversions % 2 === 0))
}




