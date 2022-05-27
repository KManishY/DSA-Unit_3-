// Mr_Robot_Elliot.js
// https://oj.masaischool.com/contest/3715/problem/02

function runProgram(input) {
      input = input.trim().split(`\n`);
      // console.log("input: ", input);
      let tc = +input[0];
      let line = 1;
      let ans = ``;
      let low = 0;

      for (let i = 1; i < tc; i++) {
            let high = +input[line++];
            let str = input[line++];
            // console.log(str, low, high, ans);
            console.log(rob(str, low, high, ans));
      }

      function rob(str, low, high, ans) {
            if (low > high) {
                  return ans;
            }
            let mid = Math.floor(low + high / 2);
            // console.log("mid: ", mid);
            ans =
                  ans +
                  str[mid] +
                  rob(str, low, mid - 1, ans) +
                  rob(str, mid + 1, high, ans);
            return ans;
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
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

// function rob(str, low, high, ans) {
//       if (low < high) {
//             return ans;
//       }
//       let mid = Math.floor(low + high / 2);
//       console.log("mid: ", mid);
//       ans =
//             ans +
//             str[mid] +
//             rob(str, low, mid - 1, ans) +
//             rob(str, mid + 1, high, ans);
//       console.log("ans: ", ans);
//       return ans;
// }
// let high = 4;
// let low = 0;
// let ans = ``;
// let str = "abcd";
// // console.log(rob(str, low, high, ans));
// rob(str, low, high, ans);

function runProgram(input) {
      input = input.trim().split("\n");
}
if (process.env.USER === "") {
      runProgram(``);
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
