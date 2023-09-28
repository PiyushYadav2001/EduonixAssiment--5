let sentence =prompt( "Enter A Sentence");
let capitalizeNext = true;
let result = "";
while(sentence === null){
    alert("String Cannot be Empty");
    sentence=prompt("Enter a String to reverse");
}
if(sentence===null){
    alert("String is empty");
}

for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i);
    
    if (capitalizeNext && /[a-zA-Z]/.test(char)) {
        result += char.toUpperCase();
        capitalizeNext = false;
    } else {
        result += char;
        if (char === ' ') {
            capitalizeNext = true;
        }
    }
}

alert(result);
