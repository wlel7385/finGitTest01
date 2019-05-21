var fs = require('fs');

function read(callback){
    fs.readFile('.testlong');
    callback();
}

function read2(){
    fs.readFile('.test');
}

read(read2());
//callback hell
function callbackFunc(callback){
    fs.readFile('example.txt','utf8',function(err,result){
        if(err){
            console.error(err);
            throw err;
        }
        else{
            console.error("두번째기능 시간 걸림");
            callback(result);
        }
    });
}

console.log("A");
callbackFunc(function (data){
    console.log(data);
    console.log("c");
})