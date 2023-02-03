 const numbers=[9.81, 3.14,100,37,15]
//  sort in ascending and descending order

// write a function that returns the value of an array in another array
// changing the values to uppercase

const countries=["finland","sweeden","norway","russia","nigeria","whales"]

//write a function that convert celcius to fahrenheit
 //using this formula
 //f=(c*9/5)+32

//use the for loop to iterate from 0-100 and put the sum of all evens and sum of all odds as an array

//study about javascript dom.


let descending=numbers.sort((a,b)=> a-b)
console.log(descending)

let ascending=numbers.sort((a,b)=>b-a)
console.log(ascending)



// let newCountries=countries
// console.log(newCountries.toString().toUpperCase().split())

let newCountries=[]
 for(let n of countries){
    newCountries.push(n)
    console.log(newCountries.toString().toUpperCase().split())
}


// let c= 50
// let f= c*9/5+32
//  console.log(f)

// function CtoF(celcius){
//     let CtoF = celcius*9/5+32 
//     return CtoF
// } console.log(CtoF(20))
// let numstr=[]
let even=0
for(let a=1 ; a<=100 ; a++){
    console.log(a)
    if (a%2 == 0 ){
     even=even + a
}
}console.log("Total of even numbers " + even)
// console.log(numstr.push(even))
 


let odd = 0
for(let a=1 ; a<=100 ; a++){
if (a%2 !== 0 ){
    odd=odd + a
}
}console.log("Total of odd numbers " + odd)
