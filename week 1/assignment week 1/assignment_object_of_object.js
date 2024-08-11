/* Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male */

function check(users){
  return (users.age >= 18 && users.gender === "male");
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

const newarr = user.filter(check);
console.log(newarr);