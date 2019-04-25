const express = require('express'),
     app =express();
const Pool =require('./pool');  
const Mydb =require('./mydb'); 
const testjson =require('./test/test.json');
      
const pool= new Pool();

     app.use(express.static('public'));
     app.set('views', __dirname+'/views');
     app.set('view engine','ejs');
     app.engine('html',require('ejs').renderFile);

// app.get('/',(req,res) =>{
//     // res.send(testjson);
//     res.render('index', {name: '홍길동'});

    
// }) ;


app.get('/test/:email',(req,res)=>{
    testjson.email=req.params.email;
    testjson.aa = req.query.aa;
    res.json(testjson);
});

app.get('/dbtest/:guest_name',(req,res)=>{
    let guest_name= req.params.guest_name;
    Mydb mydb = new Mydb(pool);
    mydb.ex
    res.json(testjson);

});



    const server = app.listen(7000 , function () {
        console.log("express start port 7000")
    })