const ogs = require('open-graph-scraper'),
      Hashmap = require('hashmap'),
      Crypto = require('crypto-js'),
      SHA256 = ('crypto-js/sha256');


const EKey = "nodevue";

//ogs 받기//      
module.exports = {



    makeMap(key,value){
      const map= new Hashmap();
      map.set(key,value);
        console.log("ttt>>",map.get(key));
        return map;
    },


    //단방향 암호화 sha 256//
    // mysql query >>> sha2("암호화 단어",256);--키없음--, sha2(concat("암호화단어","key"),256); -- 키있음

    encryptSha2(data, key){
        if(!data) return null;
        key = key|| EKey;
        try {
            return Crypto.SHA256(key);
        } catch (Err) {
            
        }

    },

    //양방향암호화//
    encrypt(data, key){
        return Crypto.AES.encrypt(data,key || EKey).toString();
    },

    //양방향복호화//
    decrypt(data,key){
        return Crypto.AES.decrypt(data,key || EKey).toString(Crypto.enc.Utf8);

    },


    ogsinfo(url,fn){
        return ogs({url: url},(err,ret)=>{
            fn(err,ret)
        });
    }



};      