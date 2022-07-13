const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT 
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

const executeQuery = (sql, paramsSql) => {
    return new Promise((resolve, reject) => {
      try {
        db.query(sql, paramsSql, (err, data) => {
          if(err) {
            console.log(err);
            reject(err)
          } else {
            resolve(data);
          }
        })
      } catch(err) {
        reject(err);
      }
    })
}

module.exports = { executeQuery };