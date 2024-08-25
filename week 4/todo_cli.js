const { Command } = require('commander');
const program = new Command();
const fs = require("fs");

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

// add todo command

program.command('add_todo')
  .description('It will add the given todo to the file')
  .argument('<todo_to_add>', 'todo to add')
  .action((addtodo) => {
    fs.readFile("data.json","utf-8",function(err,data){
      let todosarr=[];
      if(!err){
        try{
          todosarr = JSON.parse(data);
          if(!Array.isArray(todosarr)){
            console.log("file does not contain a valid json data");
            todosarr=[];
          }
        }
        catch(parseerror){
          console.log("error occured during parsing"+parseerror);
          todosarr=[];
        }
      }
      todosarr.push(addtodo);
      const jsondata = JSON.stringify(todosarr,null,2)
      fs.writeFile("data.json",jsondata,function(err){
      if(err){
        console.log("todo was unable to add");
      }
      else{
        console.log("todo added");
      }
    })
  })
  })

// delete todo command

program.command('delete_todo')
  .description('It will delete the given todo from the file')
  .argument('<todo_to_delete>', 'todo to delete')
  .action((deletetodo) => {
    fs.readFile("data.json","utf-8",function(err,data){
      if(err){
        console.log("todo was unable to delete");
      }
      else{
        let newjsondata = JSON.parse(data);
        for(let i = 0; i<newjsondata.length;i++){
        if(newjsondata[i] === deletetodo){
          delete newjsondata[i];
        }
      }
        const updatedData = JSON.stringify(newjsondata,null,2);
        fs.writeFile("data.json",updatedData,function(err){
          if(err){
            console.log("todo was unable to delete");
          }
          else{
            console.log("todo was deleted successfully");
          }
        })
      }
    })
  });

program.parse();