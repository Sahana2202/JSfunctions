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

var removedup=function (arr){
    let temp=[];
    var j=0;
    len=arr.length;
    for(i=0;i<len;i++){
        if(arr[i]!=arr[i+1]){
            //console.log("arr["+i+"]"+arr[i]);
            temp[j]=arr[i];
            //console.log("Temp["+j+"]"+temp[j]);
            j++;
        }
   
    }
return temp;
}
let arr=[100,1,3,4,1,161,3,100,7,3,9,99];
arr=arr.sort(function(a,b){return a-b;})
console.log("Array without duplicates:  "+removedup(arr));
  //end-here
});