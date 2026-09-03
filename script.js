// 1.max Element 
// let arr = [10,30,67,78];
// let max = arr[0];

// for(let i = 1; i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }

// console.log(max);

// 2. min 

// let arr = [10,30,67,78];
// let min = arr[0];

// for(let i = 1; i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }

// console.log(min);

// 3. reverse 

// let arr = [10,20,40];
// let reverse = [];
// for(let i = arr.length-1;i>=0;i--){
//     reverse.push(arr[i]);
// }
// console.log(reverse);

// 4. sum of Element 
// let arr = [10,20,30];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);


// 5 . avg 

// let arr = [10,20,40];
// let sum  = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// let avg = sum/arr.length;
// console.log(avg);

// 6 . even and odd 

// let arr = [10,22,33,60];
// let even = [];
// let odd = [];

// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%2 === 0){
//         even.push(arr[i]);
//     }else{
//         odd.push(arr[i]);
//     }
// }
// console.log(even);
// console.log(odd);

// 7.remove duplicate
// let arr = [10, 20, 20, 30];

// let res = [];

// for(let i = 0; i < arr.length; i++){

//     if(!res.includes(arr[i])){
//         res.push(arr[i]);
//     }

// }

// console.log(res);

//8 2nd largest 


// let arr = [33,56,7,78,7];
// let unique = [...new Set(arr)];
// unique.sort((a,b)=>b-a);
// console.log(unique[1]);


// 9 check elemt exists or not

// let arr = [20,30,45];
// console.log(arr.includes(34));

// loop 
// let arr = [10,20,40];
// let found = false;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 20){
//         found = true;
//         break;

//     }
// }
// console.log(found);

// 10 . common ele of two Array 

// let arr1 = [1,2,3,4];
// let arr2 = [3,4,5,6];
// let result = [];
// for(let i =0 ; i<arr1.length; i++){
//     if(arr2.includes(arr1[i])){
//         result.push(arr1[i]);
//     }
// }
// console.log(result);

// 11.merge two ele 
// let arr1 = [10,20,30];
// let arr2 = [30,59,21];
// // console.log(arr1.concat(arr2));
// let res = [...arr1,...arr2];
// console.log(res);

// sort u know 


// missing num

// let arr = [1,2,3,5];
// let n = 5;
// let expected = n * (n+1)/2; // 15

// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(expected - sum); // 15-11 4


// freq 10 10 > 2 , 30 30 30 > 3

// let arr = [10,20,20,30,30,30];
// let freq = {}; //work as counter
// for(let i =0; i<arr.length; i++){
//     if(freq[arr[i]]){
//         freq[arr[i]]++;
//     } else{
//         freq[arr[i]] = 1;
//     }
// }
// console.log(freq);


// find duplicate ele

// let arr = [10,20,20,30,3];
// let freq = {};
// let duplicate = [];
// for(let i = 0; i<arr.length; i++){
//     if(freq[arr[i]]){
//         freq[arr[i]]++;
//         if(!duplicate.includes(arr[i])){
//             duplicate.push(arr[i]);
//         }
//     }
//     else{
//         freq[arr[i]] = 1;
//     }
// }

// console.log(duplicate);







