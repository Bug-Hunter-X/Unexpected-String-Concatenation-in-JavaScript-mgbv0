function foo(a, b) {
  return a + b;
}

function bar(c) {
  const numC = Number(c); //Explicit type conversion
  if(isNaN(numC)){
    return "Invalid input";
  }
  return foo(numC, 2);
}

console.log(bar(5)); // Output: 7
console.log(bar("5")); // Output: 7
console.log(bar("abc")); //Output: Invalid input