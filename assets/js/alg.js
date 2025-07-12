// // Question 1 (cuabit) 

// What's Hiding Amongst the Crowd? 
// A word is on the loose and now has tried to 
//  hide amongst a crowd of tall letters Help write a function to detect what the word is,
//   knowing the following rules: 

// The wanted word is in lowercase. 

// The crowd of letters is all in uppercase. 
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order. 

// Examples 
// detectWord("UcUNFYGaFYFYGtNUH") "cat" 

// detectWord("bEEFGBuFBRrHgUHLNFYaYr") 
// "burglar" 

// detectWord 
// ("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") 
 
// "embezzlement"
//  the to find the algorihm first identify the general pattern of the problem

//  chek the input 
//   if the input is uppercase continue

//     if the input is lowercase return the input

//     continue up to the end of the input

//     finally desplay the collection of the lowwercase letters

// then chanege the general step into psedocode

//  define a function detectWord that has argument word

// out single word using char(at) method

//  create loop that iterate to identify the charactrer

//  create avariable to store the hidden word

//  to chack the letter is uppercase or not convert the letter in to uppercase and compare with the original letter
// if the letter is equal to the original letter then 
// continue

// if the letter is not equal to the original letter then add the letter to the hidden word
// finally return the hidden word

// then implement the code in javascript


// function detectWord(word) {
//     var hiddenword="";
//     for (let i=0; i<word.length; i++){
//         var letter =word.charAt(i);
//         console.log(letter);
//     }
// }
// detectWord("UcUNFYGaFYFYGtNUH");

var x=2;
var y=3;
var z=x+y;
console.log(z);


