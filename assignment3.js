// write code that print numbers from 1 to n and for numbers divisible by 3 print fizz and when divisible by 5 print buzz and when divisible by 3 and 5 print fizzbuzz
const numbers = (n) => {
    for(i=1;i<=n;i++){
        if(i%3==0 && i %5==0){
            console.log("Fizzbuzz")
        }
        else if (i%3==0) {
            console.log("fizz")
        }
        else if (i%5==0){
            console.log("Buzz")

        }
        else{
            console.log(i)
        }
    }
}
numbers(50);