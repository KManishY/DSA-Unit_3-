// //? https://oj.masaischool.com/contest/3792/problem/03
// //! Excel Column number................

function excelColumnNumber(str) {
      let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (str.length == 1) {
            let line = 0;
            for (let i = 0; i < alphabet.length; i++) {
                  if (alphabet[i] == str[line]) {
                        console.log(i + 1);
                  }
            }
      } else {
            let line = 1;
            let multi;
            for (let i = 0; i < alphabet.length; i++) {}
      }
}
function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      let line = 1;
      for (let i = 0; i < tc; i++) {
            let str = input[line++];
            excelColumnNumber(str);
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`3
A
AB
ZY`);
} else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
            read += input;
      });
      process.stdin.on("end", function () {
            read = read.replace(/\n$/, "");
            read = read.replace(/\n$/, "");
            runProgram(read);
      });
      process.on("SIGINT", function () {
            read = read.replace(/\n$/, "");
            runProgram(read);
            process.exit(0);
      });
}

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//       return a - b;
// });
// console.log(numbers);
// console.log(typeof undefined);

// const number = [52, 58, 6, 6, 7];
// const max = Math.max.apply(null, number);
// console.log("max: ", max);

// const amar = { money: 1000 };
// const akbar = object.create(amar);
// const anthony = object.create(akbar);
// console.log(anthony.money);

// var a;
// function x() {
//       a = 10;
// }
// console.log(a);

// let Person = () => {
//       this.first_name = "Pandey";
// };
// Person();
// console.log(first_name);

// function Person() {
//       console.log(this);
// }

// function Car(name, price) {
//       this.name = name;
//       this.price = price;
// }
// function Truck() {
//       Car.call(this, "volvo", "12lac");
//       this.fuel = "diesel";
// }
// console.log(new Truck().name);

// const arr = ["hey", "I", "am", "here"];
// let [a, b, c] = arr;
// console.log(c);

// let arr = [];
// for (let i = 1; i < 5; i++) {
//       arr.push(() => {
//             console.log(i);
//       });
// }
// arr.forEach((el) => el());

// let obj1 = {};
// let obj2 = {};
// console.log(obj1 == obj2);

// const person = {
//       f_name: "Arjun",
//       l_name: "reddy",
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(typeof arr);

// let a = 10;
// function x() {
//       a = 20;
// }
// console.log(a);

// console.log(20 || (10 && 0) || 11);

// const arr = new Array(4).fill([]);
// arr[2].push(5);

// console.log(arr);
// {
//       // console.log(a);
//       console.log(b);
//       var a = 10;
//       let b = 10;
// }

// function Person (name){

//     this.name=name;
// let p1=new Person("Andy");
// p1.prototype.print=function(){
//     console. log(this.name);
// }
// p1.print();
