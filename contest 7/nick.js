// problem Nick and hacks
// url = "https://oj.masaischool.com/contest/3669/problem/06";
// The first line of the input contains a single integer T denoting the number of test cases.
// The description of T test cases follows.The first and only line of each test case contains a single
// integer N.

function runProgram(input) {
      input = input.trim().split(``);
      // console.log("input: ", input);
      //let [N, K] = input[0].trim().split(` `).map(Number);
      let tc = +input[0];
      var c = 1;
      let line = 1;
      for (let i = 1; i < tc; i++) {
            let n = +input[line++];
            console.log(nick(c, n));
      }
      function nick(c, n) {
            if (c == n) {
                  return true;
            }
            if (c > n) {
                  return false;
            }
            if (nick(10 * c, n) == true || nick(20 * c, n) == true) {
                  return true;
            }
            return false;
      }
}

// func recursive(int current, int target)
// if (current == target) return true
// if (current > target) return false;
// if (recursive(10current, target)== true || recursive(20current,target)== true) return true
// return false;
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`5
1
2
10
25
200`);
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

function runProgram(input) {
      input = input.trim().split(``);
      //let [N, K] = input[0].trim().split(` `).map(Number);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
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
