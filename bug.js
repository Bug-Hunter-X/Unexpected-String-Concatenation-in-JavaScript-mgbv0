function foo(a, b) {
  return a + b;
}

function bar(c) {
  return foo(c, 2);
}

console.log(bar(5)); // Output: 7
console.log(bar("5")); // Output: 52