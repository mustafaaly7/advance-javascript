// Basic Javascript completed
// dated : 23 june 2024

// Beginning of Advance Javascript 
// dated: 29 june 2024

// ----------------ADVANCE JAVASCRIPT CLASS 1 DATED: 30-june-2024

// Variables 

// in basic javascript we use var keyword for declaring variable
// but in advance and more efficient keyword for declaring variable is let and const 
// difference ???

// var dont have restriction but let and const have 
// example :


// var name = "mustafa" // variable declared with value 
// var name = "ali" // variable reinitialize without giving any errors



// now with let keyword

// let name = "mustafa" // variable declared and value initialize
// let name = "ali" // it is giving error 

// so how do we reinitialize the value of the variable with let ? 

// e.g

// let age = 20
// age = 30 // now it will reinitialize

// we can also just declare variable like with var
// let age ;
// age = 22


// const keyword :
// const keyword means constant and if declared one time it wont be change (agr krna ho tou blkul top say kreingy jahan declare kiya tha variable ko)

// if you declare const variable u always have to give it value else it wont be declared

// for e.g

// const age ; // it will give error u must give it value and it will be constant 



// const age = 17;
// age = 22; 
// console.log(age); // TypeError: Assignment to constant variable. it will give this if u reinitialize its value


// -------SO what approach is better?


// let and const keywords are better 

// for things u know that u wont be reinitializing again use const keyword and use let for normal variable whose value u will be reintiailizing 

// for const e.g objects CNIC etc 

// -------------------------ARROW FUNCTION 
// arrow functions are same as function but it came out in es6 update
// whats the difference then?? 
// syntax and this keyword


// SYNTAX 

// -------------- normal function :

// function foo(){
//     console.log("this is a normal function ");
// }
// foo()

// ------------ now arrow function syntax 

// const foo = () => {
//     console.log("THis is an arrow function ");
// }

// if we dont have any parameters and arguments and now that we dont need that in that function we do this in arrow function 
// it is known as Dummy variable  ( means it wont exist and wont be usable in future aswell it is a standard )
// E.G


// const dummyvariablefunction = _ => {
//     console.log("this is a arrow function with dummy variable");
// }
// dummyvariablefunction()

// *OR WE CAN USE NORMAL ARROW FUNCTION 


// *we pass argument and parameter in same paranthesis way 


// *Arrow Function inside object (aka method )

// const obj = {
//     foo:_ =>{
//         console.log("this is an arrow function with dummy variable inside object");
//     }
// }

// obj.foo()


// WE KNOW THAT FOR GIVING FUCTION THE VALUE WE USE PARAMETER AND ARGUMENT 
// BUT FOR GETTING THE VALUE FROM THE FUNCTION WE USE RETURN

// in normal function that's how we return the value 

// function foo(input){
//     return input // this is a single line statement with return 
// }



// const value = foo(22)
// console.log(value);


// FOR SINGLE LINE STATEMENT AND RETURN VALUE WE DO THIS IN ARROW FUNCTION 

// const foo = (value) => value // we dont have to use return and {} in single line statement in arrow function note that array and object are single line aswell

// const singleLineReturn = foo(44)

// console.log(singleLineReturn);


// -----------------------------------X 


// Creating an object inside an arrow function -------------------- IMPORTANT --------

// const createPerson = (name , age , profession) => {

//     const identity = {
//         name : name ,
//         age : age ,
//         profession : profession,
//         greet : () =>{
//             console.log(`This is ${name} & my age is ${age} years old`);
//         }
//     }
//     return identity
// }

// const person1 = createPerson("mustafa" , 20 , "web developer")
// // console.log(person1);
// // console.log(person1.greet());
// person1.greet()

// createPerson("Mustafa" , 20 ,"web").greet() // this will invoke the greet method inside an object inside a function 


// ---------------X------ARRAY DESTRUCTURING------------------------X----------------------X 

// what is that? 

// imagine an array with multiple values 
// const arr = ["Pakistan" , "England" , "portugal" , "argentina"]

// so array destructuring is get array values in an variable 
// SYNTAX 
// const [country2,country1] = arr // this will make a variable and assigned the values in array at that index 

//it works respectively means phla variable phli value lega array ki  second variable means second value and so on

// console.log(country1);
// console.log(country2);

// ----------------------------X _-----------------------------------------X ------------------X


// ---------------------------X ------NOW OBJECT DESTRUCTURING--------------------------------------X
// To get object properties inside a variable 
// note that it makes global variable with values we inside from object


// SYNTAX ?

// Created an Object

// const obj = {
// country : "Argetina",
// club : "inter miami",
// name : "Messi",
// Number : 10
// }

// We only need country and name from that object inside variable  

// NOTED( property and variable name must be same in order to do that)

// const{country , name , Number} = obj

// console.log("name" , name );
// console.log("Country" ,country);
// console.log("Number" , Number);



// ----------------------------------------X--------------------------------------------------------X 

// backtick method i.e `` this is called ternary operator  
// it will allow u to concede and add variable and values and allows line break aswell
// For e.g 


// let firstName = "Mustafa"
// let lastName = "ali"
// let greet = `Hi my name is ${firstName} ${lastName}`
// console.log(greet);


// --------------------------------------X ------------------------------------X 




// How to concede to arrays? 
// in Basic Javascript we do it like that 
// let arr1 = ["Mustafa"]
// let arr2 = [ "Ali"]

// let arr = arr1.concat(arr2)
// console.log(arr);

// --BUT IN ADVANCE JAVASCRIPT WE USE SPREAD OPERATOR 
// SPREAD OPERATOR (3 dots operator )
// It concat Arrays and objects 


// FOR ARRAYS 


// let arr1 = ["Arr1 Value"]
// let arr2 = ["Arr 2 value"]
// let arr3 = [...arr1 , ...arr2]
// console.log(arr3);

// It is also known as three dots 


// FOR OBJECTS 

// const obj1 = {
//     name :  "MUSTAFA"
// }
// const obj2 = {
//     age : 20
// }

// const obj3 = {...obj1,...obj2}
// console.log(obj3);


// // now we can access obj1 and obj2 properties in obj3 
// console.log(obj3.name);


// ------------------------------------X ---------------------------------------- X---------------------X 

// SOME NEW ARRAY METHODS IN ADVANCE JS  

// to find value or anything inside of an array we created an algorithm with long ass code 

// now we can use array find method 

// thats how we create search algorithm 


// Syntax 


// const arr = ["Pakistan","portugal","indonesia","japan","india"]
// let userInput = prompt("ENTER THE VALUE")

// const value  = arr.find((value,index,array)=>{
//     if(userInput == value){
//         console.log(value ,`is at ${index}` );
//         return true
//     }
    // console.log(value); // it will give the value i.e Pakistan
    // console.log(index); // it will give u the index of that value i.e 0
    // console.log(array);// it will give u the whole array i.e arr = ["Pakistan","portugal","indonesia","japan","india"]
// })



// WE must create an function inside that array method with parameters value index and array even if we don't use array its fine to not use it 



// -----------------------------------------X ------------------------------------ X---------------------


// ANOTHER ARRAY METHOD SIMILAR TO ARRAY.FIND we have Array.find index 


// SYNTAX (same as array.find method )

// const arr = [10,20,30,40,50,60,70,80,90]
// let userInput = +prompt("Enter the index")

// const indexNum = arr.findIndex((value,index,array)=>{
// if(index == userInput){
//     console.log(value,index,array);
//     // return true
// }

// })
// --------------------X 

// Dated 6-july - 2024 


// MORE ARRAY Methods 


// Map  Method 

// It is used to update the previous  array values and store it in new array (most important )
// it makes a new array 
//  Syntax 

// const arr = [10,20,30,40,50]

// const arr2 = arr.map((value,index,array) =>{
//     return value *2
// })

// console.log(arr2);



// what if we return true or false ? 
// if we return true it will store all the values of that array as true and if we return false it will store the value as false 
// and if we dont return anything it will store undefined $
// Note that it will always have the same length as the original array  and it will always return array 

// FOR TRUE RETURN 

// const arr2 = arr.map((value,index,array) =>{
//     return true
// })

// console.log(arr2);



// FOR FALSE 



// const arr2 = arr.map((value,index,array) =>{
//     return false
// })

// console.log(arr2);





// For not return anything (it will store undefined )


// const arr2 = arr.map((value,index,array) =>{
    
// })

// console.log(arr2);


// --------------------X 

// Array method Array.filter 


// Array filter 
// it is used to filter out the values from one array to another 
// what's the difference between find and filter 
// for single value we use find for multiple values we use filter 
// filter always return array 


// if we return true it will store the original array 
// if we dont return anything it will store empty array 



// Syntax 

// for single value 



// const arr =[1,2,3,4,5,6,7,8,9]
// const arr2 = arr.filter((value,index,array) =>{
//     if(value == 2){
//         return value
//     }
// })

// console.log(arr2);



// imagine if there's multiple same values  
// we can filter all of them with filter 

const arr = [1,2,1,4,5,1]  // now there's multiple 1

// const arr2 =arr.filter((value,index,array)=>{ //node that value index and array are parameter they can be anything 
//     if(value == 1){
//         return value
//     }
// })


// console.log(arr2); // will store all the 1

// what if we return true 




// const arr2 = arr.filter((value,index,array)=>{

//     return true
// })

// console.log(arr2); // it will store the original array 


// what if we return false 


// const arr2 = arr.filter((value,index,array)=>{
//   return false  
// })

// console.log(arr2); //  it will return empty array 


// What if we dont return anything 


// const arr2 = arr.filter((value,index,array)=>{ // arr.filter  is high order function and that arrow function is callback function 
    
// })

// console.log(arr2); // it will return empty array aswell 

// callback function is the function that is inside a function's or method's parameter and isn't store in a variable or global 
// and the function that has callback function is called high order function 


// -----------------------------------X -----------------------------X 

// dated 8-july 2024 

// Theory :
// Javascript work as synchroniz means line by line read krna and ksi ka wait nh krna 
// what is asynchroniz ?

// asynchroniz is to wait for the code to execute in order to go ahead 
// means woh code complete hoga tou aiga jaiga code wrna ruk jaiga 

// imagine if there's a login request that will take time cuz backend pr request jaigi then aigi so javascript by default synchroniz kaam krti hai tou woh usko ignore krdegi 
// for that we have to make our js asynchroniz 

// we've three ways to make our js asynchroniz 

// 1. promise 
// a .fetch() 
// 2. async await 
// 3. callback function 

//  by those three we can make our js dynamically asynchroniz 
// we also learned set timeout but it wasnt dynamic but make that specific code asynchroniz 
// ------------------------ X -----------------X 


// Promise 


// syntax  
// with new keyword and first Alphabet capital means Promise is a constructor 
// it takes 2 parameter in paranthesis and both of them are functions 
// const myPromise = new Promise((resolve,reject)=>{
// const condition = false ;
// if(condition){
//     resolve(" if the promise happens, whatever will be written inside resolve will be show in .then() method ")
// }else{
//     reject("if the promise failed to happen, whatever written in reject method will be shown thru catch() method")
// }


// })
// // now we handle the promise via 2 methods if it happens means resolve we use .then()
// // if didnt happen we use .catch() 
// // now there's two ways to use that 
// // 1. after the promise constructor ending bracket or myPromise.catch( ) or my promise

// .then(success =>{ // it takes one parameter in paranthesis
//     console.log(success); // success will show whatever is written in resolve 
// })

// myPromise.catch(error => { // it takes a single parameter which will store the reject 
//     console.log("error" , error); // error will show whatever is inside reject methods bracket 
// })
// .then()



// ---------------------------X ------------------------------- X -------------------------------------- X 

// fetch() // much easier than promise  


// syntax 

// const myPromise = fetch(/*it takes url fake api */ "https://fakestoreapi.com/products")

// // we use then and catch to handle resolve and reject 
// myPromise.then(success =>{
//     console.log(success,"success");
// })
// myPromise.catch(error=>{
//     console.log(error ,"error");
// })



// rightnow it is not in readable form 
// to make it readable we have another .then() that can convert it into json format 

//  syntax 



// fetch("https://fakestoreapi.com/products")
// .then(data => data.json())
// .then(success =>{
//     console.log(success);
// })
// .catch(error =>{
//     console.log(error);
// })


// can we render it all into UI  ? 


// yes we can 
// how to do it  
// check HTML 

// fetch("https://fakestoreapi.com/products")
// .then(data => data.json())
// .then(success =>{
//     console.log(success);
//     renderUi(success)
// })
// .catch(error=>{
//     console.log(error ,"error 404");

// })

// const renderUi = items =>{
//     const parent =document.getElementById("parent")
//     for(var products of items)
// parent.innerHTML += `<div class="card lg-3 px-3 py-3" style="width: 18rem;">
//                 <img src=${products.image} class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${products.title}</h5>
//                     <p class="card-text">${products.description}</p>
//                     <a href="#" class="btn btn-primary">Buy Now</a>`




// }


// async await 
// it also makes the function asynchroniz 
// whats the difference between async and promise ?
// nothing literally nothing just syntax and that's it  
// it has try and catch which won't let the app crash 


// const foo = async () =>{
//     try{
//         const foo2 = await fetch("https://fakestoreapi.com/prducts").then(data => data.json())
//         console.log(foo2,"foo2");
//          // Render UI function can be implemented here
//     }
//     catch(error){
//         console.log("error 404", error ); // now it wont crash your app incase the await function wont works means try 
//     }
// }
// foo()


// ---------------------------X ---------------------------- X-------------------------- X --------------

//  DATED : 13-7-2024

// some array and string methods  
//  how to concat two array and two object ?? 

// we use spread operator also known as three dots (...)

// now string methods 

// const str = "muhammad Mustafa ali"
// console.log(str.includes("ali")); // will give true or false if it exist in that string 
// console.log(str.startsWith("m")); // will also give T\F if that string starts with the word or alphabet
// console.log(str.endsWith("ali")); // will give T\F if that str or array ends with that i.e it will give on true but not on ila means last word or aplhabet check krta hai 

// we can also use include on array and string 

// const array = ["Mustafa", "ali","usman","javed"]
// console.log(array.includes("ali")); // now here u have to give the whole value means u cant just search it with single alphabet i.e abcd 


// ---------------------------------X --------------------------------------X --------------------------------X ---------------X 

// REST PARAMETERS 

// imagine u make a function with some parameters to store arguments but not sure how many arguments you gonna recieve
// so u use rest parameters ...rest 

// Rest parameters allow us to represent an indefinite number of arguments as an array. 
// This is handy when you're not sure how many arguments a function will receive:
// it stores the remaining arguments in an array to not waste the remaining arguments value 

// SYNTAX 


// const foo = (firstName , lastName,  ...rest )=>{
// console.log(firstName , lastName, rest); // we call rest by rest but in parameter we use ...rest & it acts as an array

// }

// foo("Muhammad" , "Mustafa" , 22 , "pakistani", "muslim") // now normally we only can save two value's right? but with rest we can save all the value in array


// DEFAULT PARAMETERS 

// to give default values to your parameters in case you dont recieve any value in argument 
// if we give the default parameter and it give the value on argument the argument value will overwrite the default's value 

// SYNTAX 


// const foo = (val1 = 10 , val2=20) =>{
// console.log(val1,val2); // now 69 will overwrite 10 since we gave the value but val2 value remains the same cuz we didnt give any value to it 

// }
// foo(69)







