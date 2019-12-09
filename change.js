var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'experiment' 
}); 
 
connection.connect();
 
var modSql = 'UPDATE salary SET salary_date = ?,check_float = ?,after_tax = ?,individual_income_tax = ?,bonus_float = ?,meal_subsidy = ? WHERE salary_id = ?';
var modSqlParams = ['2019-10-06',2000,17500,3600,2000,1000,'120404500001'];
connection.query(modSql,modSqlParams,function (err, result) {
  console.log(1)
   if(err){
    console.log('[UPDATE ERROR] - ',err.message);
    return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});
 
connection.end();
