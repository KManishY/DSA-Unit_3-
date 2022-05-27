// Sum with Recursion Again
// url = `https://oj.masaischool.com/contest/3744/problem/05`;
function runProgram(input) {
      input = input.trim().split(``);
      let tc = +input[0];
      let line = 1;
      for (let i = 0; i < tc; i++) {
            let n = +input[line++];
            let arr = input[line++].trim().split(" ").map(Number);
            let add = 0;
            console.log(sum(n, arr, sum));
      }
      function sum(n, arr, add) {
            if (n == 0) {
                  return 0;
            }
            let a = arr[n] - arr[n - 1];
            a = Math.abs(a);
            add += a;
            return add, sum(n - 1, arr, add);
      }
      // console.log("hi");
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
