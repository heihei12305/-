var express = require('express');
var router = express.Router();
var db = require('../config/db')
var mysql  = require('mysql'); 
var connection = mysql.createConnection(db.mysql);
connection.connect();

router.post('/salary',function(req,res,next){

  var sql2 = 'SELECT * FROM salary';
  connection.query(sql2, (err, result) => {
    if (err) {
      res.json({
        status:404,
        data:''
      })
    }
    else {
      if (result) {
          console.log(result)
        res.json({
          status: 0,
          data:result,
          msg: '查询成功.'
        })
        res.end()
      } else {
        res.json({
          status: -1,
          msg: '查询失败.'
        })
        res.end()
      }
    }
  })
  return
})
router.post('/revise',function(req,res,next){
    let data = req.body.params.data;
    let sqlData  = [];
    console.log(data.salary_date+'')
    sqlData.push((data.salary_date+''));sqlData.push(data.check_float);sqlData.push(data.after_tax);sqlData.push(data.individual_income_tax);sqlData.push(data.bonus_float);sqlData.push(data.meal_subsidy);sqlData.push(data.salary_id);
    var sql = 'UPDATE salary SET salary_date = ?,check_float = ?,after_tax = ?,individual_income_tax = ?,bonus_float = ?,meal_subsidy = ? WHERE salary_id = ?';
    connection.query(sql,sqlData,(err, result) => {
      if (err) {
        console.log(err)
        res.json({
          status:404,
          data:''
        })
      }
      else {
        if (result) {
            console.log(result)
          res.json({
            status: 0,
            data:result,
            msg: '查询成功.'
          })
          res.end()
        } else {
          res.json({
            status: -1,
            msg: '查询失败.'
          })
          res.end()
        }
      }
    })
    return
  })


  router.post('/delete',function(req,res,next){
    let salary_id = req.body.params.data.salary_id;
    console.log(salary_id)
    var sql = 'DELETE FROM salary where salary_id= ?';
    connection.query(sql,salary_id,(err, result) => {
      if (err) {
        res.json({
          status:404,
          data:''
        })
      }
      else {
        if (result) {
            console.log(result)
          res.json({
            status: 0,
            data:result,
            msg: '查询成功.'
          })
          res.end()
        } else {
          res.json({
            status: -1,
            msg: '查询失败.'
          })
          res.end()
        }
      }
    })
    return
  })
  router.post('/insert',function(req,res,next){
    let data = req.body.params.data;
    var  sql = 'INSERT INTO salary(salary_id,salary_date,check_float,after_tax,individual_income_tax,bonus_float,meal_subsidy,staff_id) VALUES(?,?,?,?,?,?,?,?)';
    let addVec = [];
    addVec.push(data.salary_id);addVec.push(data.salary_date);addVec.push(data.check_float);addVec.push(data.after_tax);addVec.push(data.individual_income_tax);addVec.push(data.bonus_float);addVec.push(data.meal_subsidy);addVec.push(data.staff_id);
    var  addSqlParams = ['131404600001','2019-10-06',2000,17500,3600,2000,1000,'000001'];
    console.log(addVec)
    connection.query(sql,addVec,(err, result) => {
      if (err) {
        res.json({
          status:404,
          data:''
        })
      }
      else {
        if (result) {
            console.log(result)
          res.json({
            status: 0,
            data:result,
            msg: '添加成功.'
          })
          res.end()
        } else {
          res.json({
            status: -1,
            msg: '添加失败.'
          })
          res.end()
        }
      }
    })
    return
  })

module.exports = router;
