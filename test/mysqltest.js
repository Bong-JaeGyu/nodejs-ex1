var mysql = require('mysql');

var connection = mysql.createConnection({
        
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'hotel',
    
  });

  connection.connect();


  connection.query('select * from guest where guest_name=?',['김만람'], function(err, results, fields){
      if(err){
          console.log(err);
      }
      console.log(results[0]);
  })


  connection.end();


  

