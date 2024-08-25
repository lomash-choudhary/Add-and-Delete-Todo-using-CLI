const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname,"a.txt");
fs.readFile(filepath,"utf-8",function(err,data){
  if(err){
    console.log(err);
  }
  else{
    console.log(data);
  }
})
console.log(filepath);
