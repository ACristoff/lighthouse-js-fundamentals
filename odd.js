const isOdd  = function (num) { //variable isEven is equal to anonymous function with paramater num
  return num % 2 !== 0;
}


console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));