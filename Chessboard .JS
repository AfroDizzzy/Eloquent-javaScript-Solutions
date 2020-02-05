//string variables
let WhiteTile = " ";
let BlackTile = "#"; 
let WhiteRowOutput = "";
let BlackRowOutput = "";
let TotalOutput = "";

//variables that track position of each loop. Would need to make the loops a function in order to fully automate this process or make it able to take in repeated requests
let boardsize = prompt("input desired board size: "); //input for how big your chess board will be
let BlackBoardRowPosition = 0;
let WhiteBoardRowPosition = 0;

//produces white row (even numbered row)
while (WhiteBoardRowPosition < boardsize) {
 if (WhiteBoardRowPosition % 2 == 0) {
   WhiteRowOutput += WhiteTile;
 } else {
   WhiteRowOutput += BlackTile;
 }
  WhiteBoardRowPosition += 1;
}

//produces black row (odd numbered row)
while (BlackBoardRowPosition < boardsize) { 
 if (BlackBoardRowPosition % 2 == 0) {
   BlackRowOutput += BlackTile;
 } else {
   BlackRowOutput += WhiteTile;
 }
  BlackBoardRowPosition += 1;
}

//creates the final string based on the boardsize desired
for (BoardRowOutput = 0; BoardRowOutput < boardsize; BoardRowOutput += 1) {
   if (BoardRowOutput % 2 == 0) {
   TotalOutput += WhiteRowOutput;
   TotalOutput += "\n";
 } else {
   TotalOutput += BlackRowOutput;
   TotalOutput += "\n";
 }
}

//outputs the final string
console.log(TotalOutput); 
