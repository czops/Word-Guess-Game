//In the list of novels, there's merit to also having the program read only lowercase
var WordsList = {
    Grendel: ["g", "r", "e", "n", "d", "e", "l"],
    //TheScarletLetter: "The Scarlet Letter",
    Hamlet: ["h", "a", "m", "l", "e", "t"],
    //AnimalFarm: "Animal Farm",
    //BraveNewWorld: "Brave New World",
    Night: ["n", "i", "g", "h", "t"],
    //TheOdyssey: "The Odyssey",
    //PrideAndPrejudice: "Pride and Prejudice"
    Hiroshima: ["h", "i", "r", "o", "s", "h", "i", "m", "a"],
    Macbeth: ["m", "a", "c", "b", "e", "t", "h"]
};


//Section: VARIABLES
var Wins = 0;
var Losses = 0;



//Comment: When the page loads, the document should select a word from WordsList and display the appropriate number of spaces
var ChosenWord = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
};

var Word = ChosenWord(WordsList); //This is an array of the chosen book title
var WordLength = Word.length; //This is an integer for the number of entries in the Word array
var Blanks = 0;
var BlankArray = [];
var GuessesArray =[];

//Comment: This was useful to see if the above random word chooser was working
// for (var i = 0; i < WordLength ; i++) {
//         alert(Word.charAt(i));
//         };

//Section: GAME PREPARATION
//Comment: this for loop should display letters according to the number of letters in the chosen word
// for (var i = 0; i < WordLength ; i++) {
//     document.getElementById("spaces").innerHTML +=  Word[i] + "\xa0\xa0\xa0";

// };

var DisplayedWord = "";
var guess = 0;
let GuessesLeft = WordLength + 5;

for (var i = 0; i < WordLength; i++) {
    BlankArray[i] = "_";
    DisplayedWord += (BlankArray[i] + "\xa0\xa0");
    document.getElementById("spaces").innerHTML = DisplayedWord;
};

console.log(BlankArray);
console.log(DisplayedWord);

//GUESSING FUNCTION
document.onkeyup = function (event) {
    GuessesArray.push(event.key);
    console.log(GuessesArray);

    for (var i = 0; i < WordLength; i++) {
        if (Word[i] == event.key) {
            BlankArray[i] = event.key;
            console.log(i);
        }
    };

    //Update the blank array with the letter
    DisplayedWord = "";
    DisplayedGuesses = "";
    GuessesLeft = WordLength + 5 - GuessesArray.length;

    for (var i = 0; i < BlankArray.length; i++) {
        DisplayedWord += (BlankArray[i] + "\xa0\xa0");
        document.getElementById("spaces").innerHTML = DisplayedWord;
        console.log(DisplayedWord);
    };

    for (var i = 0; i < GuessesArray.length; i++) {
        DisplayedGuesses += (GuessesArray[i] + "\xa0\xa0");
        document.getElementById("YourGuesses").innerHTML = DisplayedGuesses;
        console.log(DisplayedGuesses);
    };

    

};



//Update the HTML in the word div


document.getElementById("Wins").innerHTML = "Wins: " + Wins;
document.getElementById("Losses").innerHTML = "Losses: " + Losses;
document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + GuessesLeft;

//document.getElementById("YourGuesses").innerHTML = "Guessed Letters: " + GuessesArray;



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
