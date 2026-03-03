// determines leap year 
for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}

// Write a for loop to print all odd numbers from 1 to 19.
for (let number = 1; number <= 19; number += 2) {
    console.log(number);
}

// Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let number = 10; number >= 1; number--) {
    console.log(number);
}
// Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].