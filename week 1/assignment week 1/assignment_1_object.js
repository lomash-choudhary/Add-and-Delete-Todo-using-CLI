/* Write a function that takes a user as an input and greets them with their name and age */

function greet(user){
  console.log("hello, " + user.name + " " + user.age);
}


let user = {
  name : "lomash",
  age : 18,
  gender : "male"
}

greet(user);