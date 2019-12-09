var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'experiment' 
}); 
 
connection.connect();
 
var  addSql = `CREATE TABLE user(
    id VARCHAR(6) NOT NULL,
    name VARCHAR(15) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY ( id )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8; 
`;

connection.query(addSql,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------init----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('init ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();
