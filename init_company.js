var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'experiment' 
}); 
 
connection.connect();
 
var  addSql = `CREATE TABLE company(
    company_address VARCHAR(100) NOT NULL,
    company_name VARCHAR(15) NOT NULL,
    company_website VARCHAR(100) NOT NULL,
    company_id VARCHAR(6) NOT NULL,
    PRIMARY KEY ( company_id )
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
