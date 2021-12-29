
var isOddMedian = function (arr){
    let len=arr.length;
    if(len%2==0){
        return isEvenMedian(arr);
    }
    len=parseInt(len/2); 
    console.log("Median of array:  "+arr1[len]+"\nMedian of array:  "+arr2[len]);
}
var isEvenMedian = function (arr){
    let len=arr.length;
    len=parseInt(len/2); 
    sum=arr[len]+arr[len-1];
    res=sum/2;
    console.log("Median of array:  "+res);
}
  
arr1=[1,2,3,34,5,6,7,8,32,10];
arr2=[11,12,13,114,115,16,17,18,19,20];

arr1=arr1.sort(function(a, b){return a - b});
arr2=arr2.sort(function(a, b){return a - b});

isOddMedian(arr1);
isOddMedian(arr2);