// let user = {
//     name : "addy",
//     greet (){
//         console.log(user.name);
        
//     }
// }
// user.greet();

// // this === user

// // Kyuki greet() ko user object call kar raha hai

// // user.greet()
// //      ↑
// //    caller

// // apply - kisi fnc ko kisi perticular object ke sath call krna 

// // let user1 = {
// //     name : "harre"
// // }
// // function greet1(age,city){
// //     console.log(this.name
// //     );
// //     console.log(age);
// //     console.log(city);
    
    
    
// // }

// // greet1.call(user1,22,'raipur');

// // apply() ka kaam bhi call() jaisa hi hai:

// // Function ko turant execute karta hai aur this ko kisi object se set karta hai.

// // Difference sirf arguments dene ka hai.

// let user1 = {
//     name : "harre"
// }
// function greet1(age,city){
//     console.log(this.name
//     );
//     console.log(age);
//     console.log(city);
    
    
    
// }

// greet1.call(user1,[22,'raipur']);

// bind() function ko immediately execute nahi karta. Ye ek NEW FUNCTION return karta hai.
// let userr = {
//     name: "Aadarsh"
// };

// function greet() {
//     console.log(this.name);
// }

// let newGreet = greet.bind(userr);

