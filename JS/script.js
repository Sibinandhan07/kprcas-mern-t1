// var a = 10; //Reinitialization and Redeclaration 
// let b = 20; //Reinitialization 
// const c = 30;


// console.log(a);
// console.log(b);
// console.log(c);


// var number = 10;
// var str = "sibi";
// var undefine;
// var Null = null;
// var boolean = true;


// console.log(typeof number);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolean);


// var bigint = 123n;
// var symbol = Symbol('li');


// console.log(typeof bigint);
// console.log(typeof symbol);


// var arr =[10,20,30,40];
// console.log(typeof arr, arr);
// var obj = {
//     name: "sibi",
//     dept:["ct","aids"]
// }
// console.log(typeof obj, obj);


// Arithematic Operators (+,-,*,/,%)
// var a = 10;
// var b = "vicky";


// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// // logical operators (&&, ||, !)
// var a = true;
// var b = false;


// console.log(a && b);
// console.log(a || b);
// console.log(!a);


// // Relational Operators (>, <, >=, <=, ==, !=, ===, !==)

// var a = 10;
// var b = 10;


// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);

// unary operators (++, --)
// var a = 10;

// console.log(a++);
// console.log(++a);

// var a = 10;

// console.log(a--);
// console.log(--a);

// a = 1;
// b = 1;
// c = 0;

// var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log(result);


// conditional statements

// var a = 10;
// var b = 20;
// // if condition
// if(true){
//     // Template literals
//     console.log("if conditional statement")
// }

//var a; //Hoisting

// console.log(a);
// var a = 10;


// var a = 10; // Global Scope
// let b = 20; // global Scope
// const c = 20; // global Scope
// if(true){
//     var a = 40; // Global Scope
//     console.log(a);
//     // let b = 30 // Block Scope
//     const c = 30; // block scope
// }
// console.log(a);
// console.log(b);

// var a = 10;
// if(a%2==0){
//     console.log(`${a} is even `);
// }
// else{
//     console.log(`${a} is odd `);
// }


// var mark = 65;
// if(mark>=90){
//     console.log("o grade");
// }
// else if(mark>=70){
//     console.log("A grade");
// }
// else if(mark >= 35){
//     console.log("pass");
// }
// else{
//     console.log("fail");
// }


// var a = 10;
// // condition ? true statement : false statement
// var result = a%2==0 ? "even" : "odd";
// console.log(result);

// mark = 65;
// var result = (mark>=90) ? "o grade" :
//              (mark>=70) ? "A grade" :
//              (mark>=35) ? "pass" :
//               "fail";
// console.log(result);

// var day = 2;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid input");      
//     }
// }

// looping statements

// 1 time 11 times 10 times
// for(var i=1; i<=10; i++){
//     console.log(i);
// }

// var val =1024;
// var count = 0;
// while(val > 0){
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count);


// add(a=5, b=6); //hosting

// function add(a,b){
//     console.log(a+b);
// }


// add(); //hosting


//Arrow function
// var demo = (a=5, b=6) => {
//     console.log(a + b);
// }
// demo(10,20);
// demo();
// demo(10);


// spread operator(...)
// var arr =[10,20,30];
// var arr2 = [...arr, 40,50,];
// console.log(arr);
// console.log(arr2)


//Destructuring operator


// var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);


// var{name,mobile,dept,email,isActive} = {
//     name:"sibi",
//     mobile:"123456345678",
//     dept:["CT","AIDS"],
//     email:"sibi@gmail.com",
//     isActive:true
// }
// console.log(name,mobile,dept,email,isActive)

// var arr = [10,20,30,40,50];

// //for..in
// for(let index in arr){
//     console.log(index)
// }

// //for..of
// for(let value of arr){
//     console.log(value)
// }


// var obj = {
//     name:"sibi",
//     dept:"ct",
//     mobile:345676542
// }

// for(let key in obj){
//     console.log(key,obj[key])
// }

// var arr = [1,2,3,4,5];

// var result = arr.map((val)=>(val*2));
// console.log(result)

// //filter
// var even = arr.filter((val)=>val%2===0);
// console.log(even)

// //reduce
// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum)

var username = {
    name:"sibi"
}
var user = {
    ...username,
    password:1234567
}
console.log*(user);

