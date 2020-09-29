/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. 
  3. Write a WHILE statement which loops over the "word" string and
     counts the number of times the "letter" appears.
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to get user input
     for the "letter" variable in Step 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!

*/

// let word = "imagination"
// let letter="i"
// let times= 0
// count=0

// while(count < word.length){
// //   console.log(word[count]);
//   if (letter===word[count]) {
//      //console.log(letter);
//      times=times+1;
//      }
//      count=count+1;
// }
// console.log(times)

//or you can write like this
let word="imagination"
let letter="i"
let letterCount=0;
let index=0
while (index<word.length){
console.log (index,word[index]);
if (letter === word[index]) {
   console.log(index);
   letterCount = letterCount +1;
   
}
index = index + 1
}
if (letterCount > 0 ) {
   console.log("The letter " + letter + " exists " + letterCount + " times in this word!");
} else {
   console.log( "Nope, that letter doesn't exist in my word!");
}



