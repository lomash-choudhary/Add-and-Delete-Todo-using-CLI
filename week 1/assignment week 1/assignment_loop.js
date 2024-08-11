/* Write a function called sum that finds the sum from 1 to a number */

function sum(n){
  let i, c=0;
  for(i=0; i<=n; i++){
    c = c + i;
  }
  return c;
}

console.log("sum of all the numbers till 10 is = " + sum(10));