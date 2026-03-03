// Function with parameters
// Parameters are values that get passed as arguments when we invoke a function
// They help us to create functions that can be reusable throughout a program

function greeting(name){
    console.log("Hello",name,"How have you been?")
}
greeting("Bernerd Kim")
greeting("John James")
greeting("Paul Mungah")
 console.log("=====================================")

//  Below is a function with parameters to calculate the sum of two numbers
function addition(number1,number2){
    sum = number1 + number2
    console.log("The sum of the numbers is : ",sum)
}
addition(45,60)
addition(66,66)
console.log("===========================")
//  By use of a function that accepts parameters ,Calculate the area of triangle whose base 20cm and height is 12 cm.
function area(base , height){
    area = 0.5 * base * height 
    console.log("The area of the triangle is  ",area ,"cm\u00B2")
}
area(20, 12)

console.log("==============================")
// Find the simple interest given the principal , rate and time 
function simpleInterest(principle , rate , time ){
    interest = (principle * rate * time)/100
    console.log("Simple interest is ", interest)
}
simpleInterest(5000,7,9)

