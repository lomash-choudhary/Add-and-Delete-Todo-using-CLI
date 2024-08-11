/* Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old */

function canVote(user){
  let arr = [];
  for(let i = 0; i<=2; i++){
    if(user[i].age >= 18){
      arr.push(user[i]);
    }
  }
  return arr;
}

const user = [{
  name : "lomash",
  age : 18,
  gender : "male"
},{
  name : "kiara",
  age : 19,
  gender : "female"
},{
  name : "harsh",
  age : 10,
  gender : "male"
}]
console.log("user who can vote are = ");
console.log(canVote(user));