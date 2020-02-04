let WhiteTile = " ";
let BlackTile = "#"; 
let WhiteRowOutput = "";
let BlackRowOutput = "";
let TotalOutput = "";

let boardsize = prompt("input desired board size: "); //input for how big your chess board will be
let BlackBoardRowPosition = boardsize;
let WhiteBoardRowPosition = boardsize;

//produces white row (even numbered row)
while (WhiteBoardRowPosition > 0) { 
 if (WhiteBoardRowPosition % 2 == 0) {
   WhiteRowOutput += WhiteTile;
 } else {
   WhiteRowOutput += BlackTile;
 }
  WhiteBoardRowPosition = WhiteBoardRowPosition - 1;
}

//produces black row (odd numbered row)
while (BlackBoardRowPosition > 0) { 
 if (BlackBoardRowPosition % 2 == 0) {
   BlackRowOutput += WhiteTile;
 } else {
   BlackRowOutput += BlackTile;
 }
  BlackBoardRowPosition = BlackBoardRowPosition - 1;
}


for (BoardRowOutput = boardsize; BoardRowOutput > 0; BoardRowOutput -= 1) {
   if (BoardRowOutput % 2 == 0) {
   TotalOutput += WhiteRowOutput;
   TotalOutput += "\n";
 } else {
   TotalOutput += BlackRowOutput;
   TotalOutput += "\n";
 }
 
}

console.log(TotalOutput); 
