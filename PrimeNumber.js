var isPrime=function(num){
    if(num==0||num==1){
        return false;
    }
    if(num==2||num==3){
        return true;
    }
    if(num%2==0||num%3==0){
        return false;
    }
    for(i=5;i*i<num;i=i+6){
        if(num%i==0||num%(i+2)==0){
            return false;
        }
    }
    return true;
}
arr=[12,11,19,29,7,1];
for(j=0;j<arr.length;j++){
  num=arr[j];
 // console.log("num:   "+num);
  if(isPrime(num)){
    console.log(num+" is Prime");
  }
  else{
     console.log(num+" is Composite");
  }
}