// // ugly way
// const fs = require('fs');

// function UserReadFile(cb) {
//     fs.readFile("a.txt", "utf-8", function(err, data) {
//         cb(data);
//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// UserReadFile(onDone)

// const fs = require('fs');

// function UserReadFile() {
//     console.log("inside UserReadFile");
//     return new Promise(function(resolve) {
//         console.log("inside promise");
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             console.log("before resolve");
//             resolve(data);
//         });
//     })
// }

// function onDone(data) {
//     console.log(data);
// }

// UserReadFile().then(onDone);

// var d = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("foo");
//     }, 1000)
// });

// function callback() {
//     console.log(d);
// }

// console.log(d);
// d.then(callback);

// var d = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 1000)
// });

// function callback() {
//     console.log(d);
// }

// console.log(d);
// d.then(callback);

// function onDone() {
//   console.log("hi there");
// }

// setTimeout(onDone, 1000);

// console.log("after timeout");

// for (let i = 0; i < 10000; i++) {}
// console.log("small loop");

// for (let i = 0; i < 10000000; i++) {}
// console.log("large loop");
