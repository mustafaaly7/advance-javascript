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

const arr = [10,20,30,40,50,60,70,80,90]
let userInput = +prompt("Enter the index")

const indexNum = arr.findIndex((value,index,array)=>{
if(index == userInput){
    console.log(value,index,array);
    // return true
}

})








