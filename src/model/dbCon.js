const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ersalom0@',
    database: 'rest-api'
})

exports.db = db