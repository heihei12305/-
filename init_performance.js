var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'experiment' 
}); 
 
connection.connect();
 
var  addSql = `CREATE TABLE performance(
    performance_id VARCHAR(12) NOT NULL,
    inspection_time DATE NOT NULL,
    inspection_level VARCHAR(12) NOT NULL,
    inspection_perople VARCHAR(6) NOT NULL,
    be_test_people VARCHAR(6) NOT NULL,
    PRIMARY KEY ( performance_id )
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
