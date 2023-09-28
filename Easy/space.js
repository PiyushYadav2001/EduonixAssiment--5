let userInput = prompt("Enter a string with spaces");
let stringWithoutSpaces = "";

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== ' ') {
        stringWithoutSpaces += userInput[i];
    }
}

alert("String without spaces: " + stringWithoutSpaces);