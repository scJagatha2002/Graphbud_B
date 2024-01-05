const mysql = require('mysql2/promise');

//Creation of connection between backend and database
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Mysql85$',
    database:'company',
})
module.exports = pool;