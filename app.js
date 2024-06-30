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


