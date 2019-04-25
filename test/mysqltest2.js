const util =require("util"),
      Promise =require("bluebird");
const Pool=require("../pool");

const sql1 ="update guest set age=20 where guest_name='김가람'" ;
const sql2 ="update guest set age=25 where guest_name='이나람'" ;

const pool= new Pool();


//트래잭션//

// Promise.using(pool.connect(), conn=>{
//     conn.beginTransaction(txerr=>{
//     Promise.all([
//         conn.queryAsync(sql1),
//         conn.queryAsync(sql2)
//     ]).then(r=>{
//         util.log("End of then!!!!!");
//         util.log(r);
//         util.log(r[1]);
//         conn.commit();
//         pool.end();
//     })
//     .catch(err=>{
//         util.log("err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",err);
//         conn.rollback();
//         pool.end()
//     });
    
//     });
//     });

//     execute(conn=>{
//         Promise.all([
//             conn.queryAsync(sql1),
//             conn.queryAsync(sql2)
//         ]).then(r=>{
//             util.log("End of then!!!!!");
//             util.log(r);
//             util.log(r[1]);
//             conn.commit();
//             pool.end();
//         })
//         .catch(err=>{
//             util.log("err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",err);
//             conn.rollback();
//             pool.end()
//         });
//     })

// function execute(fn){
//     Promise.using(pool.connect(), conn=>{
//         conn.beginTransaction(txerr=>{
//             fn(conn);
//         });
//     });
// }



// Promise.using(pool.connect(), conn=>{
//     Promise.all([
//         conn.queryAsync(sql1),
//         conn.queryAsync(sql2)
//     ]).then(r=>{
//         util.log("End of then!!!!!");
//         util.log(r);
//         util.log(r[1]);
//     })
//     .catch(err=>{
//         util.log("err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",err);
//         pool.end()
//     });
    
//     pool.end();
//     });


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