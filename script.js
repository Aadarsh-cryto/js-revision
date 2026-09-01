// 1. splice() → Array me add / remove / replace 

// let splicee = [10,20,30,40,50]; //0 1 2 3 4 

// splicee.splice(2,2);
// console.log(splicee);  // 10 20 50

// splicee.splice(1,1,34);
// console.log(splicee);  [10, 34, 30, 40, 50]


// 2. reverse() → Array ulta 
// let arr = [10,20];
// arr.reverse();
// console.log(arr);

// 3.join - Array ko String banata hai

// let arr = ["a","b","c"];
// let result = arr.join(" ");
//  // gap aa jayega string ke bich mein
//  let result = arr.join(""); // gap hat jyega 
//  let result = arr.join(" ,"); // comma aayega inke bich mein  
// console.log(result);

// 4.includes - check if an element is present inside the array or noty 
// let arr = [10,20,30];
//  let result = arr.includes(30);
// console.log(result); // true

// 5. sort - asc / desc 
// let arr = [10,20,30];
// arr.sort((a,b)=>{
// return a-b;
// })
// console.log(arr); // b-a desc

//  6.fill - used to fill nd arrray with an specific element 
// let arr = [12,45,60];
// arr.fill(33,0,1);
// console.log(arr);

// 7. find - Pehla matching element 

// let arr = [10,20,40];

// let result = arr.find((num)=>{
//   return num>15;
// })

// console.log(result); // 20

// 8 . some - Kya kam se kam ek element condition satisfy karta hai? 
// let arr = [10,20,30];
// let result = arr.some((num)=>{
//     return num>15;
// })
// console.log(result); //  true

// 9. map - Har element ko transform/change karo

// let arr = [10,20,30];
// let result = arr.map((el)=>{
//     return el*2;
// });
// console.log(result);

// 10.filter - Condition ke basis par elements nikalo
let arr = [10,20,30];
let result = arr.filter((el)=>{
    return el>20;
})
console.log(result);


