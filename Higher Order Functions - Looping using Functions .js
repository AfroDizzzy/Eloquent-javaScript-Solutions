// Your code here.
let input = prompt("what is your number my sir? I shall update it by 3");
let updaterValue = prompt("how much would you like to update the number by for each cycle?");

let t = function test(i){
  if (i < 50) {
    return true;
  } else {
    return false;
  }
}

let m = function main(y){
  return console.log("the current number is " + y); 
}
 
let u = function updater(y){
  let returned = y + updaterValue; 
  console.log("Your new number is " + returned);
  return returned; 
} 
  

function looper(value, tester, main, updater) { //value is the initial value, defaults to 0
  let number = value;
  while (tester == true) {
    main(number);
    let number = updater(updaterValue); 
  } 
}

looper(input, t(input), m, u);  
  
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
