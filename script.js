// !.from a sentence find the first word longer than 5 letters
// const str = 'we are here for you sweetandsalt bilaspur';
// const op = str.split(" ").find((el)=>{
// return el.length>5;
// })
// console.log(op);

//  2 find the first string that containes letter z

// const arr = ["hello","zeb","hdid"];
// let op = arr.find((el)=>{
//     return el.includes("z");

// })
// console.log(op);

// 3. get all words from a string that star with capital word

// let str = ' javascrip Ghh Kjj';
// let op = str.split(" ").filter((el)=>{
//     return el.charAt(0).toUpperCase() == el.charAt(0);
// })
// console.log(op);


// 4. convert all words in an array to their first three letters
// const arr = ['javascript','react','python','node'];
// let op = arr.map((el)=>{
// return el.slice(0,3);
// });
// console.log(op);


// 5 covert all numbers into string with $ sign 


// const arr = [10,20,30];
// let op = arr.map((el)=>{
// return ` $${el}`;
// })
// console.log(op);


// 6 take a sentence return an array of each word length
// const str = "coding is fun";

// let op = str.split(" ").map((el) => {
//     return el.length;
// });

// console.log(op);

// 7 make every word in a str uppercase

// let str = 'hello bhiya';
// let op = str.split(" ").map((el)=>{
//     return el.toUpperCase();
// })
// console.log(op);

// 8. replace all vowels with in a word with *

// const arr = ["apple", "banana", "car"];

// const op = arr.map((word) => {
//     return word
//         .split("")
//         .map((char) => {
//             return "aeiou".includes(char) ? "*" : char;
//         })
//         .join("");
// });

// console.log(op);

// move all the zeros to the last
// let arr = [0,1,0,2,3,0,3];
// let zero = arr.filter(el => el === 0);
// let nonzero = arr.filter(el => el !== 0);
// let op1 = nonzero.concat(zero);
// console.log(op1);


//from a sen filter out shorter then  4 letters then make it remaing words uppercase

// let str = 'i love you javscipt';

// let op = str
//     .split(' ')
//     .filter((el) => {
//         return el.length >= 4;
//     })
//     .map((el) => {
//         return el.toUpperCase();
//     });

// console.log(op);

// check if a name includes vowel or not return true and false
// let name = 'pranav';
// let op = name.split("").some((char)=>{
//     return 'aeiou'.includes(char);
// })
// console.log(op);

// filter the names starting with vowel

// let names = ["atul","pranavii","anurag"];
// let op  = names.filter((el)=>{
//     return "aeiou".includes(el.charAt(0));
// })
// console.log(op);

