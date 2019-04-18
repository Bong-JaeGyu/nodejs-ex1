const utills= require('../utills');
const util=require('util');

let str ="Nodejs";

let map =utills.makeMap('name','hong');
util.log(">>>>>>>>>>"+map);

return;

util.log("sha2=" + utills.encryptSha2(str));

let enc = utills.encrypt(str);
util.log("enc ="+ enc) ;
let dec = utills.decrypt(enc);
util.log("enc =" +dec);



return;

let url ="http://naver.com";

utills.ogsinfo(url,(err,ret)=>{
    util.log(err,ret);
});

