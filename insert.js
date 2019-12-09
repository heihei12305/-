var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'experiment' 
}); 
 
connection.connect();
 
var  addSql = 'INSERT INTO salary(salary_id,salary_date,check_float,after_tax,individual_income_tax,bonus_float,meal_subsidy,staff_id) VALUES(?,?,?,?,?,?,?,?)';
var  addSqlParams = ['131409601003','2019-08-06',2000,17000,3600,2000,1000,'000002'];



// var  addSql = 'INSERT INTO user(id,name,password) VALUES(?,?,?)';
// var  addSqlParams = ['120400500001','2019-11-06','2000','17500','3500','1000','1000','000001'];

//增
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();
