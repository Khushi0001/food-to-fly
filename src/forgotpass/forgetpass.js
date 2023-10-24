const express = require('express')
const jwt = require('jsonwebtoken')

const forgetpass = express();


forgetpass.get('/forgetpassword' , (req,res) => {
    res.send('Hello World');

})
app.listen(3000,() => console.log('http://localhost:3000'))