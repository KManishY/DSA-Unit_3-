// Longest Increasing Subarray
// url=https://oj.masaischool.com/contest/3769/problem/03

// function runProgram(input) {
//       input = input.trim().split(`\n`);
//       // console.log("input: ", input);
//       let tc = +input[0];
//       let line = 1;
//       let max = -Infinity;
//       // console.log(max);
//       for (let i = 0; i < tc; i++) {
//             let n = +input[line++];
//             let arr = input[line++].trim().split(" ").map(Number);
//             console.log(longest(n, arr));
//       }
//       function longest(n, arr) {
//             if (n == 0) return;
//             else if (max < arr[n]) {
//                   max = arr[n];
//             }
//             // console.log(max);
//             return longest(n - 1, arr);
//       }
// }
// //-----------------------------------------------------------//
// if (process.env.USERNAME === "asus") {
//       runProgram(`2
// 2
// 1 1
// 6
// 1 2 1 2 3 1
// `);
// } else {
//       process.stdin.resume();
//       process.stdin.setEncoding("ascii");
//       let read = "";
//       process.stdin.on("data", function (input) {
//             read += input;
//       });
//       process.stdin.on("end", function () {
//             read = read.replace(/\n$/, "");
//             read = read.replace(/\n$/, "");
//             runProgram(read);
//       });
//       process.on("SIGINT", function () {
//             read = read.replace(/\n$/, "");
//             runProgram(read);
//             process.exit(0);
//       });
// }

let arr = [2, 9, 5, 6, 7];
let n = 5;
read(n, arr);
function read(n, arr) {
      for (let i = 0; i < n; i++) {
            var beg = "";
            for (let j = i; j < n; j++) {
                  beg += arr[j] + " ";
                  console.log(beg); //265,
                  if (arr[j] < arr[j + 1]) {
                  }
            }
      }
}
