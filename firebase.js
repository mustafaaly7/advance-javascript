// now from this file imma have to export some variable to my main app.js and show it on my index html console

// for default (single )

// const username = "Mustafa"
// export default username // we can recieve default variable in any name we want cuz we know its only single value 

// now we can export multiple values on defauly by adding them all in object 

// const username = "Mustafa"
// const age =22 ;
// export default {
//     username,
//     age,
// }


// Now to export import multiple variable functions etc all together 
// we can use both default and multiple export together 

const name = "Ali"
const age = 21
const obj = {
    profession : "web dev"
}

export {
    name,
    age,
    obj
}
 //now to import we have to use the same name as we used in here to declared them and recieve them in obj bracket 








