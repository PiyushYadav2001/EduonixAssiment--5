let userInput=prompt("Enter a String to reverse");
let reverse="";

while(userInput === null){
    alert("String Cannot be Empty");
    userInput=prompt("Enter a String to reverse");
}
if(userInput===null){
    alert("String is empty");
}
for(let i=userInput.length-1; i>=0; i--){
    reverse += userInput.charAt(i);
}
// its do check reverse and Pallindrome both
if(userInput.toLocaleLowerCase()===reverse.toLocaleLowerCase())
alert("it pallindrome")
else
 alert("it is not pallindrome");
alert(` Resverse is ${reverse}`);
