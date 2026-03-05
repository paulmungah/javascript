// Arrow functions with parameters

const greet = (name) => {
    console.log("Hello" + name +"How have you been? I trust that you are good")
}
greet("James");
greet("Joseph");

// Example 2
console.log("=========================")
// Below is a function to find the area of a cricle
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is:"+ area + "cm\u00B2")
}
CircleArea(3.142,7);
CircleArea(3.142 , 28)

// area of a triangle 
const half = 0.5
const TriangleArea = (half,base,height)=>{
    area = half*base*height
    console.log("The area of the triangle is:"+ area + "cm\u00B2")

}
TriangleArea(half,54,5)
