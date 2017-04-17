'use strict';
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/whoami',(req,res)=>{
    res.json({
    "ip":req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress,
    "language":req.headers['accept-language'],
    "operating-system":req.headers['user-agent']
        
    });
});

app.listen(port,()=>{
    console.log('Running on port',port);
})