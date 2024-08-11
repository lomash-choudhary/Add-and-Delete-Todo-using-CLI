const arr = [8,18,19,50,5];
let newarr = arr.filter(checkAge);

function checkAge(age){
  return age >= 18;
}

console.log("ages of the person who are eligible to vote is = " + newarr);