var fs = require('fs');

console.log('첫번째 기능');
fs.readFile('./example.txt','utf8',function(err,result){
    if(err) {
        console.error(err);
        throw err;
    }
    else{
        console.error("두번째 기능인데 시간 걸림");
        console.log(result);
    }
});
console.log('마지막 기능');

