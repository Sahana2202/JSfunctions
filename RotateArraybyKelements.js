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


    /* Function to left rotate arr of size n by d */

    var leftRotate = function (arr, k) {
      var i, j = 0, temp = [];
      temp = [];
      for (i = k; i < arr.length; i++) {
        temp[j++] = arr[i];
      }

      for (i = 0; i < k; i++) {
        temp[j++] = arr[i];
      }
      return temp;
    }
 
    
    // Driver program to test above functions
     
        var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
        console.log("Original array: "+arr)
        console.log("Rotated array:  "+leftRotate(arr, 5));
       
  //end-here
});