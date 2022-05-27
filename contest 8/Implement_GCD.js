// Implement GCD
// url =https://oj.masaischool.com/contest/3715/problem/03
function gcd(a, b) {
      if (a == 0) return b;
      if (b == 0) return a;

      // base case
      if (a == b) return a;

      // a is greater
      if (a > b) return gcd(a - b, b);
      return gcd(a, b - a);
}
function runProgram(input) {
      input = input.trim().split(`\n`);
      //let [N, K] = input[0].trim().split(` `).map(Number);
      let tc = +input[0];
      let line = 1;
      for (let i = 1; i < tc; i++) {
            let [a, b] = input[line++].trim().split(" ").map(Number);
            console.log(gcd(a, b));
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`2
6 9
2 25`);
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
