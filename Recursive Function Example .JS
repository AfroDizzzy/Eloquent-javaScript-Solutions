//Define a recursive function isEven to find all even numbers (from Eloquent JavaScript)

function IsEven(number) {
  number = Math.abs(number); //makes input number positive to avoid issues with negative numbers
  if (number == 0) {    // checks if even
    return true;
  } else if (number == 1) { // checks if odd
    return false; 
  } else {
   return IsEven(number -2); // recursive method of getting to 0 or 1; 
  }
}

console.log(IsEven(prompt("what is your number?"))); //allows you to enter your number and then provides a boolean output if the number is even or odd
