// let firstName = "Satakshi";
// let age = 21;
// let isMarried = false;

// console.log("Name: " + firstName + "\nage: " + age);

// //object
// const user = {
//     firstName: "shanvi",
//     gender:"female"
// }

// console.log(user["gender"])

// const allUsers = [{
//     firstName: "satakshi",
//     gender: "female"
// },
// {
//     firstName: "shanvi",
//     gender: "female"
// },
// {
//     firstName: "himanshu",
//     gender: "male"
// }]

// for(let i = 0; i < allUsers.length; i++)
//         if(allUsers[i]["gender"] == "female")
//             console.log(allUsers[i]["firstName"])

// function findSum(a, b) {
//     return a+b;
// }

// const val = findSum(1,2)
// console.log(val);

// function sayHello() {
//     console.log('Hello!');
//   }

//   // Set a timer for 2 seconds, then call the sayHello function
//   setTimeout(sayHello, 2000);

// function processData(data, callback) {
//     let processedData = data + ' processed';
//     callback(processedData);
//   }

//   function displayData(result) {
//     console.log(result);
//   }

//   processData('my data', displayData);

// //Q. actually after how many seconds does the control reach a
// setTimeout(a, 5*1000);
// function a(){
//     console.log("hello");
// }

// -----------------
// filesystem module
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log("hello");
