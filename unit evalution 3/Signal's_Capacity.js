// Signal's Capacity
// url=`https://oj.masaischool.com/contest/3698/problem/01`
function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      let line = 1;
      for (let i = 0; i < tc; i++) {
            let n = +input[line++];
            let arr = input[line++].trim().split(` `).map(Number);
            signal(n, arr);
      }
      function signal(n, arr) {
            console.log(n, arr);
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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
