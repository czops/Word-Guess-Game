

//In the list of novels, there's merit to also having the program read only lowercase
var WordsList = {
    Grendel: "Grendel",
    //TheScarletLetter: "The Scarlet Letter",
    Hamlet: "Hamlet",
    //AnimalFarm: "Animal Farm",
    //BraveNewWorld: "Brave New World",
    Night: "Night",
    //TheOdyssey: "The Odyssey",
    //PrideAndPrejudice: "Pride and Prejudice"
    Hiroshima: "Hiroshima",
    Macbeth: "Macbeth"
};


//Section: VARIABLES
var Wins = 0;
var Losses = 0;





var Word = ChooseWord(WordsList); //This is the word string
var WordLength = Word.length; //This is an integer for the number of entries in the Word array
var Blanks = 0;
var BlankArray = [];

//Comment: This was useful to see if the above random word chooser was working
// for (var i = 0; i < WordLength ; i++) {
//         alert(Word.charAt(i));
//         };

//Section: GAME PREPARATION
//Comment: this for loop should display letters according to the number of letters in the chosen word
// for (var i = 0; i < WordLength ; i++) {
//     document.getElementById("spaces").innerHTML +=  Word[i] + "\xa0\xa0\xa0";

// };
var GuessesLeft = 8;
var DisplayedWord = "";
var guess = "";

//GUESSING FUNCTION


//Comment: When the page loads, the document should select a word from WordsList and display the appropriate number of spaces
var ChooseWord = function (obj) {
    
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];

    for (var i = 0; i < WordLength; i++) {
        BlankArray.push("_");
        DisplayedWord += (BlankArray[i] + "\xa0\xa0");
        document.getElementById("spaces").innerHTML = DisplayedWord;
    };
    
    console.log(BlankArray);
    console.log(DisplayedWord);
    
};



document.onkeyup = function (event) {
    //Update the blank array with the letter
    for (var i = 0; i < BlankArray.length; i++) {
        DisplayedWord = "";
        DisplayedWord += BlankArray[i + 1] + "\xa0\xa0";
        document.getElementById("spaces").innerHTML = DisplayedWord;
        console.log(DisplayedWord);
    };
};

var CheckWord = function () {

    for (var i = 0; i < WordLength; i++) {
        if (Word.charAt(i) == event.key) {
            var guess = Word.charAt(i);
            BlankArray[i] = event.key;
            console.log(guess);
        };
        // else if (i = WordLength-1 && Word.charAt(i-1) !== event.key) {
        //     GuessesLeft -= 1;
        //     document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + GuessesLeft;
        //     document.getElementById("YourGuesses").innerHTML = "Guesses: " + event.key + " ";
        // };
    };

};

//Update the HTML in the word div


// console.log(DisplayedWord);

document.getElementById("Wins").innerHTML = "Wins: " + Wins;
document.getElementById("Losses").innerHTML = "Losses: " + Losses;
document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + GuessesLeft;


//Section: FUNCTIONS FOR LETTER GUESSING EXECUTION
//Here we keep tabs on whether the player has run out of guesses
// while (GuessesLeft > 0) {

//     document.onkeyup=function(event){

//     if (Word.indexOf(event.key) !== -1 ){
//         var guess = event.key;
//         console.log(guess);
//         var guessNumber = Word.indexOf(event.key);
//         console.log(guessNumber);

//         BlankArray[guessNumber]= guess;

//     }
//     //for an incorrect guess you are penalized
//     else {
//         GuessesLeft-1;
//     };
//     // console.log(KeyboardEvent);
// };

//Comment: This is checking if the pressed key matches any of the letters in the randomly selected word from WordsList
//Comment: Alphabet.indexOf( event.key ) !== -1      i had this but i'm taking out the alphabet array... don't need that.
// if (Word.indexOf(event.key) !== -1){
//     for (var j = 0; j<WordLength; j++){
//         if Word[j]
//     };
// };


//};



//Comment: Include a guessing function?? Shot in the dark?
