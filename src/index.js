const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const  app = express()
const { db } = require('./model/dbCon')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// get data

app.get('/api/read',(req, res) => {
const query = "SELECT * FROM USERS";
db.query(query, (err, result) => {
    if(err){
        console.log(err);
    }else{
        res.send(result);
        console.log(result);
    }
    })
})
app.get('/api/read/:id',(req, res) => {
    // const query = "SELECT * FROM USERS WHERE USERS.USER_ID = " + req.params.id;
    const query = "SELECT * FROM USERS WHERE USERS.USER_ID = ?";
    const id = req.params.id;

    db.query(query, id, (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result);
        console.log(result);
    })

})

// post
app.post('/api/read',(req, res) => {
    // const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const query = "INSERT INTO USERS(user_name, user_email, user_password) VALUE(?,?,?)"

    db.query(query,[name,email,password],(err, result) => {
        if(err) {
            console.error(err)
        }
        res.send(result)
        console.log(result)

    })

})
//updated
app.put('/api/read',(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const id = req.body.id;
    // const password = req.body.password;

    const query = "UPDATE USERS SET user_name = ?, user_email = ? where USERS.user_id = ?"

    db.query(query,[name, email, id],(err, result) => {
        if(err) {
            console.error(err)
        }
        res.send(result)
        console.log(result)

    })
})

// delete

app.delete('/api/read',(req, res) => {
    const id = req.body.id
    const query = "DELETE FROM USERS WHERE USERS.user_id = ?"

    db.query(query,id,(err, result) => {
        if (err){
            console.error(err)
        }
        res.send(result)
        console.log(result)
    })

})


app.listen(3001,() => {
    console.log('localhost',3001)
})
