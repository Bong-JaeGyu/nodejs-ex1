const mysql = require("mysql"),     
      util = require("util"),
      Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_info = {
        
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'hotel',
    multipleStatements: "true",
    connectionLimit: 5,
    waitForConnections: false    


};

module.exports =class{
    constructor(dbinfo){
        dbinfo =dbinfo || DB_info;
        this.pool = mysql.createPool(dbinfo);
    }
connect(){
    return this.pool.getConnectionAsync().disposer(conn =>{
        return conn.release();
    });
}

end(){
    this.pool.end(function(err){
        util.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>End pool");
        if(err)
        util.log("err pool dnding!!");
    });
}


}
