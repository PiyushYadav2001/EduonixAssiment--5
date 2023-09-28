let userInput=prompt("Enter the Sentense");
let longestWord="";
let currentWord = "";

for(let i=0; i<=userInput.length; i++){
       let char=userInput[i];
       alert(char);

       if((char >="a" && char<="z") || (char >="A" && char<="Z")  ){
       currentWord += char;
    } else {
    
        if (currentWord.length > longestWord.length) {
            alert(currentWord);
            alert(longestWord);
            longestWord = currentWord;
        }
  
        currentWord = "";
    }
}


if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
}

alert("Longest word in the Words: " + longestWord);
