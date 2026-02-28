// Day 06 tasks — implement each function.
//Run by opening index.html and checking the console output.

export function sum(a, b){return a + b;}


export function isEven(n) {return n % 2 === 0;}

export function capitalize(word) {
    if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function clamp(n, min, max) {
   if (n < min) return min;
  if (n > max) return max;
  return n;
}

// Simple “tests”
console.log("sum(2,3) expected 5 ->", sum(2, 3));
console.log("isEven(4) expected true ->", isEven(4));
console.log('capitalize("hello") expected "Hello" ->', capitalize("hello"));
console.log("clamp(10,0,5) expected 5 ->", clamp(10, 0, 5));
