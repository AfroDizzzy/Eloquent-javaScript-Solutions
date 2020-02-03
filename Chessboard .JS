let WhiteTile = " ";
let BlackTile = "#"; 
let boardsize= 8;
let row = "";

while (boardsize > 0) { 
 if (boardsize % 2 == 0) {
   row += WhiteTile;
 } else {
   row += BlackTile;
 }
  boardsize = boardsize - 1;
}
console.log(row);
