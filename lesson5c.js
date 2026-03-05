// Exporting modules
// We export modules so that we can use/utilise them in other  files/modules in our program

export const calculator = (x,y)=>{
    let difference = x-y
    console.log("The difference of the two numbers is:", difference)
};

export const SI = (principle,rate,time)=>{
    let SI = (principle*rate*time)/100
    console.log("The Si is:",SI)
};
const bmi = (weight,height)=>{
    let answer = weight/(height **2)
    console.log("BMI is:",answer)
};
export {bmi}