const isEven  = function (num) { //variable isEven is equal to anonymous function with paramater num
  return num % 2 === 0;
}


const tenIsEven = isEven(10); //redundant
const elevenIsEven = isEven(11); //redundant

console.log(tenIsEven);
console.log(elevenIsEven);

console.log(isEven(10));
console.log(isEven(11));
