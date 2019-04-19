const util =require("util"),
      Promise =require("bluebird");
const Pool=require("../pool");

const sql1 ="select *from guest where guest_city='김가람'" ;
const sql2 ="select *from guest where guest_city='이나람'" ;

const pool= new Pool();




Promise.using(pool.connect(), conn=>{
    Promise.all([
        conn.queryAsync(sql1),
        conn.queryAsync(sql2)
    ]).then(r=>{
        util.log("End of then!!!!!");
        util.log(r[0]);
        util.log(r[1]);
    })
    .catch(err=>{
        util.log("err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",err);
    });
    
    pool.end();
    });


// Promise.using(pool.connect(), conn=>{
// conn.queryAsync(sql1)
// .then(console.log)
// .catch(err=>{
//     util.log("err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",err);
// });

// pool.end();
// });

// conn.queryAsync(sql1).then((ret)=>{
//     util.log("sql1=",ret.affectedRows);
// })
// pool.end();
// })


// Promise.using(pool.connect(), conn=>{
//     conn.queryAsync(sql1,(err,ret)=>{
//         util.log(ret.affectedRows);
//     });

//     pool.end();

// });