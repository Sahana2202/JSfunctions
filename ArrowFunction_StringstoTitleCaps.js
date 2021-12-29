// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    var titlecase = word =>{
          word=str[i].split("");
          word[0]=word[0].toUpperCase();
          return word.join("");
    }
    var str=userInput[0].split(" ");
    var output=[];
    for(i=0;i<str.length;i++){
        output[i]=titlecase(str[i]);
    }
    console.log(output.join(" "));
  
});