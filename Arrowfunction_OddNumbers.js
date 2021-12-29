var odd = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log((arr[i]));
    }
  }
}

arr=[11,12,131,4,15,16,71,82,98];
odd(arr);