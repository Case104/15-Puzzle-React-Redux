export function cellCoords(grid, num){
	let coords = {};
	grid.forEach(function(row, index) {
    let col = row.indexOf(num);
    // If the number is in the row
    if (col !== -1) {
      coords.row = index;
      coords.col = col;
    }
  });
  return coords;
}