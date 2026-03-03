// while loop
// below is a simple syntax of the while loop
// 1. Initialization of a variable
// 2. while keyboard
// 3. Condition to be checked
// 4. body of the while loop
// 5. increment/decrement

let i = 0;

while(i <= 10 ){
    console.log("The new value pf i is:",i)
    i++
}

console.log("====================")

// come up with a js example of map loop
// It creates a new array
let numbers = [1,2,3,4,5];
let squares = numbers.map(num => num **2)
console.log(squares)


const users = [

{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },

{ id: 2, name: 'Bob', email: 'bob@gmail.com' },

{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }

];

// Extract only the names into a simple string array

const userNames = users.map(user => user.name);

console.log(userNames);

// Output: ["Andrew", "Bob", "Charlie"]
