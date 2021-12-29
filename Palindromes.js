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

  
var isPalindrome = function(num, l){
    let arr=[];
    original_num=num;
    for(i=0;i<l;i++)
    {
        arr[i]=parseInt(num%10);
        num=parseInt(num/10);  
    }
    arr=arr.join("");
    return (original_num==arr);
}

var numlength= function (number) {
  return number.toString().length;
}

var num=parseInt(userInput[0]);
var len=numlength(num);
if(isPalindrome(num,len)){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

  //end-here
});