// getName();
// console.log(x)
// console.log(getName)

var x = 2;

// var getName = () => {
//      console.log("This may the example of java")
// }
function getName(){
     console.log("main funtion of java")
}
getName()
console.log(getName)
console.log(x)



var y = 5;
a();
b();
console.log(x)

function a(){
     var x = 50;
     // console.log(x)
}
function b(){
     var z = 100;
     // console.log(z)
}

a();
b();

///// let and const /////
// let a;

// const b = 100;

// a = 212;
// b = 10;
// console.log(b);

///// Block and Scope /////
// var y = 789;
// {
//     var z = 100;
//     let x = 200;
//     const y = 20;
//     console.log(z)
//     console.log(x)
//     console.log(y)
// } 
// console.log(y)

/////Closure////

function a(){
     var b = 567;
     function c(){
         var a = 8;
         function b() {
             console.log(a);
         }
         b();
     }
     c();
 }
 a();



 //////// lexical analysis///////
// function a() {
//     var b =10;
    
//     c();
//     function c(){
//         console.log(b);
          
//     }
// }
// a();
// console.log(b);

function x (){
     for(let i = 1; i<=5; i++){
     setTimeout(function() {
         console.log(i);
     }, i * 2000);
 }
     console.log("I will print after one second");
 }
 x();