let userInput=prompt("Enter a String");
let count=0;
let curr_char;
let flag;
while(userInput === null){
    alert("String Cannot be Empty");
    userInput=prompt("Enter a String to reverse");
}
if(userInput===null){
    alert("String is empty");
}


for(let i=0; i<userInput.length; i++){
         flag=false;
         curr_char=userInput.charAt(i);
         curr_char=curr_char.toLowerCase();

         switch(curr_char){
              case'a':
              case'e':
              case'i':
              case'o':
              case'u':
                 count++;
         }
}
alert(`total number of vowels ${count}`);