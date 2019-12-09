var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'experiment' 
}); 
 
connection.connect();
 
var  addSql = `CREATE TABLE salary(
    salary_id VARCHAR(12) NOT NULL,
    salary_date DATE NOT NULL,
    check_float INT NOT NULL,
    after_tax INT NOT NULL,
    individual_income_tax INT NOT NULL,
    bonus_float INT NOT NULL,
    meal_subsidy INT NOT NULL,
    staff_id VARCHAR(6) NOT NULL,
    PRIMARY KEY ( salary_id )
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
