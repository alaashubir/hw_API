const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    request_name=req.params.name
    res.json({name:request_name ,message:"hello"});
    
})
app.post('/user/Alaa',(req,res)=>{
    res.json({name:req.body.name, message:"hello"});
})


app.listen(4001,()=>{
   console.log('server running on port 4001'); 
});

