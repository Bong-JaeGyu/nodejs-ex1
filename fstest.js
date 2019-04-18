const fs = require('fs');
const util = require('util');



fs.readFile(__dirname + '/test.json' , 'utf-8' , (err,data) => {
    if(err) return console.error(err);
    console.log("data>>",data);
});

console.log("------------------------------------------------");



let data2 =fs.readFileSync(__dirname +'/test.json', 'utf-8');

fs.writeFile(__dirname +'/message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

console.log("data2>>",data2);

console.log("----------------------------------------------------");



