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

  var sum = function(arr){
      var res=0;
    for(i=0;i<arr.length;i++){
      res=res+arr[i];
    }
    return res;
  }
  arr=[11,12,131,4,15,16,71,82,98];
  console.log(sum(arr));
  
});