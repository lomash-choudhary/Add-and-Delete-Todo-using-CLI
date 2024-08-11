/* Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS */

// function even(arr){
//   let arre = [];
//   for(let i = 0; i<=9; i++){
//     if(arr[i] % 2 === 0){
//       arre.push(arr[i]);
//     }
//   }
//   return arre;
// }

// const arr = [1,2,3,4,5,6,7,8,9];
// console.log("array of even elements is = " + even(arr));

//using filter

const arr = [1,2,3,4,5,6,7,8,9];
const newarr = arr.filter(even);

function even(n){
    return (n % 2 === 0);   // return n;
}

console.log("even numbers present in the array are = " + newarr);
