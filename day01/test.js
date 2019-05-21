console.log('hello world');
console.log('test');
console.log('test');

var lastName = "gwanwoo";
console.log(lastName);

function sum(p1,p2){
    return p1 + p2;
};

console.log(sum(1,2));

function x(p3,p4){
    return p3 * p4;
};

console.log(x(3,4));

function n(p1,p2){
    return p1 / p2;
};

console.log(n(10,5));

var car={
    name:"flat",
    model:"500",
    weight:"850kg",
    color:"white"
}

console.log(car.color);

var car1="A";
var car2="B";
var car3="C";

var cars=["A","B","C"];

console.log(cars);
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);

var cars2 = ["A","B","C","D","E","F"];
var text ="";
var i;
for(i=0; i<cars2.length; i++){
    console.log(cars2[i]);
}