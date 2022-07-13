const mysql = require('mysql');
const mysqlConnection = mysql.createConnection();

module.exports.getAllUsers = async (req, res) => {
    const sql = "SELECT * FROM users";
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })

}

module.exports.getUserById = async (req, res) => {
    res.send('user by id : ' + req.params.id);
}