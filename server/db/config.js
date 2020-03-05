const mysql = require('mysql');
const Promise = require('bluebird');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'farm'
});

con.connect(err => {
    if (err) throw err;
    con.query('SELECT * FROM cows', (err, results) => {
      //console.log('connection results:', results);
    })
    console.log('connected to farm database');
});

con.queryAsync = Promise.promisify(con.query);

module.exports = con;