/* Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21) 
Also tell the user if they are legal to vote or not */

function greet(user){
  let title , eligiblity;
  if(user.gender === "male"){
    title = "Mr. ";
  }
  else if(user.gender === "female"){
    title = "Mrs. ";
  }
  else{
    title = "Others. ";
  }

  if(user.age >= 18){
    eligiblity = " you are eligible for voting";
  }
  else{
    eligiblity = " you are not eligible for voting";
  }
  console.log("Hi " + title + user.name + ", your age is " + user.age + eligiblity);
}


let user = {
  name : "lomash",
  age : 18,
  gender : "male"
}

greet(user);