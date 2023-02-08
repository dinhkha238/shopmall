const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
let refreshTokens = [];
let testLoginUser = {
    name:'', 
    password:''
};
let Token ='';
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
// Refresh Token
app.post('/refreshToken',(req,res) => {
    const refreshToken = req.body.token;
    if(!refreshToken) res.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) res.sendStatus(403);
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err, data) => {
        console.log(err,data);
        if(err) res.sendStatus(403);
        const accessToken= jwt.sign(
            {name:data.name,password:data.password}
        , `${process.env.ACCESS_TOKEN_SECRET}`,{expiresIn: "30s"});
        res.json({accessToken})
    })
})

// Register

app.post('/api/register',(req,res,next)=>{
    const userLogin = req.body; // nhận giá trị từ user truyền vào
    console.log(userLogin)
    const accessToken= jwt.sign(
        userLogin
    , `${process.env.ACCESS_TOKEN_SECRET}`)
    const refreshToken= jwt.sign(
        userLogin
    , `${process.env.REFRESH_TOKEN_SECRET}`)
    refreshTokens.push(refreshToken);
    // Token = accessToken
    res.json({accessToken,refreshTokens});
    // next();
})

app.get('/api/register',(req,res, next) => {
   res.json({
    message: 'Success',
    // data:userLogin,
    // token: Token
   })
});

app.post('/logout',(req,res)=>{
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(ref => ref !== refreshToken);
    res.sendStatus(200);
})


module.exports = app;