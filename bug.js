function foo(x){
  if(x === null) return "null";
  if(x === undefined) return "undefined";
  return x;
}

console.log(foo(null)); // Output: null
console.log(foo(undefined)); // Output: undefined
console.log(foo(0)); // Output: 0
console.log(foo(false)); //Output: false
console.log(foo(NaN));//Output: NaN