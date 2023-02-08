const express = require('express');
const bodyParser = require('body-parser')
const { Server } = require('karma');
const app = express();
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

let testLoginUser = {
    name:'',
    password:''
};
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const users = [
    {
        name: 'a',
        password: 'a',
    },
    {
        name: 'adasdsdas234',
        password: 'Second user',
    }
];

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
// Login
app.post('/api/login',(req,res,next)=>{
    const userRegister = req.body;
    users.push(userRegister)
    res.status(201).json({
        message: 'Post added successfully',
        users:users
        
    });
})

app.get('/api/login',authenToken,(req, res, next) => {
    
    res.json({
        message: 'Users fetched successfully ',
        users: users
    });
});
function authenToken(req,res,next){
    const authorizationHeader = req.headers['authorization'];
    const getToken = authorizationHeader.split(' ');
    const token = getToken[1];
    if(!token) res.sendStatus(401);
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, data) => {
        console.log(err,data);
        if(err) res.sendStatus(403);
    })
    next();
}




module.exports = app;