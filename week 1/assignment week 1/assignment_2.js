/* Write a function called canVote that returns true or false if the age of a user is > 18 */

function canVote(age){
  if(age >= 18){
    console.log("the person is eligble to vote");
  }
  else{
    console.log("the person can not vote");
  }
}
let age = 19;
canVote(age);
