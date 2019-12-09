var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'experiment' 
}); 
 
connection.connect();
//  var sql = 'SELECT * FROM user WHERE name = ?'
// var  sql = 'SELECT * FROM salary';
var  sql = 'SELECT * FROM salary where staff_id in (select id from user where name = ? )';
//find
connection.query(sql,'user',function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        // let username = JSON.parse(JSON.stringify(result))[0].name;
        // let username = result[0].name
        // let password = result[0].password;
       console.log('--------------------------SELECT----------------------------');
       console.log(JSON.stringify(result));
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();
