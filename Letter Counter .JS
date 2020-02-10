// This function takes in a string and then counts the number of any chosen letters within it

function LetterCounter(word, letter) {
 let NumberOfLetters = 0;
  for (let count = word.length; count > 0; count = count - 1) {
    if (word.charAt(count) == letter) {
    NumberOfLetters += 1; 
    }
  }
 return NumberOfLetters; 
}

console.log(LetterCounter(prompt("what is your word"), prompt("and what is the letter you want found")));
