// objects - in obj we store the data in key and value format 
// create 
let students = {
    name : "addy",
    age : 22,
    course : "b.tech cse "
};


// crud on obj 

// read 
// 1.dot notation
console.log(students.name);  // students obj se mujhe name key ki value do
// 2. bracket notation
console.log(students['course']);



// update 
// same key ko new value do 

students.age = 23;
console.log(students);


// delete 
// keys ko delte krna 

delete students.course;


// obj methods 

//object.keys - obj ke sare keys ko array mein daal deta h 

console.log(Object.keys(students));

//Object.values - obj ki sari values ko array mein daal deta hain '

console.log(Object.values(students));


// Object.entries - obj ki keys+value dono ko array mein daal deta hai  

console.log(Object.entries(students));

// for in loop 


for(let key in students){
    console.log(key);
    
}

// Object.seal() - Existing properties ko update kar sakte ho, lekin new property add/delete nahi kar sakte.

let user = {
    name: "Aadarsh",
    age: 22
};

Object.seal(user);

user.age = 25;        // allowed
user.city = "Raipur"; // not allowed
delete user.name;     // not allowed


// Object freeze - obj ko change krne nahi deta

// if you create obj then give 
// Object.freeze(user); // ikse baad kuch bhi nahi ho payega 



// hasOwnProperty() obj mein specific property h ya nahi
// console.log(user.hasOwnProperty(age));
let obj1 = {
    name : "addy"
};
let obj2 = {
    // name : "addy"
    age : 22
};

let op = Object.assign({},obj1,obj2);
console.log(op);
// modern way 
let op2 = {
    ...obj1,
    ...obj2
};



