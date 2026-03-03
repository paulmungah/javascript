// Anonymous Functions in Javascript
// These are functions that exists without a name.

// Below is an example of such functions :
// The below function shall take the name of the variable they are contained in it

const greet = function(){
    console.log("Hope your monday is fine.....")
}

console.log(typeof(greet))
greet();
// Below is another anonymous function
(function(){
    console.log("Welcome to the world of programming....")
})();
 