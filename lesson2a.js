// oblect data type 
// An object in javascript is a data type that stores data in form of key value pairs.

let person = {
    Name : "Bernard James",
    Age : 70 ,
    isRegistered : true 
};

console.log("the details of the person is:",person)
// First method iis by use of the square brackets
console.log(person["Age"])

// second method is by use of the dot (.) notation
console.log(person.Name)

// Check the data type 
console.log(typeof(person))

// Array data types
// This refers to collection of items that are on indexes
fruits = ["Mango","Pineapple","Apple","Banana","Melon","Lemon","Grapes"]

console.log("The entire array of fruits is :",fruits)
// to access the items of an array we use the index 
console.log(fruits[3])

// you can slice items of an array
console.log(fruits.slice(2,5))
