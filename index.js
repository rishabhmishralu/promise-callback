// function sum(a,b,callback){  
//      console.log(a+b);
//      callback()
// }
// function name(name){
//     console.log("name");
// }

// sum(2,3,name)

// setTimeout(() => {
//     // for(let i=1;i<=7;i++)
//     console.log("1");
    
// },1000);



// const user=fetch()
// console.log(user);




// let complete=true

// let prom=new Promise(function(resolve,reject){
// if(complete){
//    resolve("im pass");
// }else {
// reject("im failed")
// }

// })
// console.log(prom);


// let complete=false

// let prom=new Promise(function(resolve,reject){
// if(complete){
//    resolve();
// }else {
// reject()
// }

// })
// prom.then(function(){
//     console.log("yes");
// }).catch(function(error){
//     console.log("error");
// })




//callback function

// function add(a,b,callback){
//     callback()
//     console.log(a+b);
    
// }
// function multiply(num1,num2){
//     console.log(num1*num2)
// }

// add(3,4,multiply)


//  async function sum(){
//    return("hello");

// }
//  sum().then((result)=>{
//      console.log(result);
//  })





 
// async function name(){
//     console.log("rishabh");
//    await console.log("mishra");
//     console.log("aryan");
// }
// name()
//     console.log("hello");

// 5
//  function hello(){
//     console.log("heloo...");
//  }
//  function sum(num1,num2,callback){
//  console.log(num1+num2);
//  hello()
//  }

// sum(3,4,hello)

// function calltime(){
//     setTimeout(()=>{
//         console.log("1");
//         setTimeout(()=>{
//             console.log("2");
//             setTimeout(()=>{
//                 console.log("3");
//                 setTimeout(()=>{
//                     console.log("4");
//                     setTimeout(()=>{
//                         console.log("5");
//                         setTimeout(()=>{
//                             console.log("6");
//                              setTimeout(()=>{
//                                 console.log("7");
//                               },7000)
//                               },6000)
//                              },5000)
//                            },4000)
//                             },3000)
//                        },2000)
//                    },1000)

// }
// calltime()


// callback hell
// function print(){
//     console.log("hello");
// }
// function add(r){
//     console.log("add two number");
//     print()
// }
// function sum(n1,n2,h){
//     console.log(n1+n2);
//     add()
// }
// sum(1,2,add)




//3
// function yes(yes) {
// let prom=new Promise(function(resolve,reject){
//     if(true){
//         resolve("Promise Resolved")
//     }
//     else{
//         reject('Promise Rejected')
//     }
//     })
//      let onyes=(result)=>{
//         console.log(result);
//     }
//     let galat=(error)=>{
//         console.log(error);
//     }
//     prom.then(onyes);
//     prom.catch(galat)     
// })
// yes(yes)


let  p1=new Promise(function(resolve,reject){
   setTimeout(()=>{
    console.log("the first promise resolved");
    resolve(10);
   },1*1000)
})


let  p2=new Promise(function(resolve,reject){
    setTimeout(()=>{
     console.log("the second promise resolved");
     resolve(20);
    },2*1000)
 })
 let  p3=new Promise(function(resolve,reject){
    setTimeout(()=>{
     console.log("the third promise resolved");
     resolve(30);
    },3*1000)
 })

 Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`result:${result}`);
 }).catch((error)=>{
    console.log(`result:${error}`)})
 