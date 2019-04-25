const Promise =require('bluebird');


module.expors = class{
    constructor(pool){
        this.pool=pool;
    }
   execute(fn){
    Promise.using(this.pool.connect(), conn=>{
            fn(conn);
    });
   }
   executeTX(fn){
    Promise.using(this.pool.connect(), conn=>{
        conn.beginTransaction(txerr=>{
            fn(conn);
        });
    });
   }
};