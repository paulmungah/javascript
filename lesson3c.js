// Javascript Functions
// A function is a block of code that performs a certain action/task
// The simple strucure of a function is given in below:
// function keyword, name of the function , parenthesis the body of the function inside of  curly braces
function sayHello(){
    console.log("Hello there,Hope you are having a good day?")
}

// call/invoke the function by use of the nameof the function
sayHello()

// example 2
function sayGoodbye(){
    console.log("Goog bye,have a nice day and a weekend ahead")
}
sayGoodbye()

// Anonymous Functions - Functions without a name
// Used as a callback - It does not need to be invoked
setTimeout(function(){
    console.log("Runs after 1 seconds");
},1000);

// can be stored in a variable
const greet = function(){
    console.log("Hello")
}
greet()