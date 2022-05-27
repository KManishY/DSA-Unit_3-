// Odd Factorial
// url = `https://oj.masaischool.com/contest/3744/problem/01`;
// Odd Factorial of n = n * (product of all odd numbers in the range [1, n-2], if n is odd)

function runProgram(input) {
      // input = input.trim().split(``);
      let num = +input;
      // console.log("num: ", num);
      console.log(oddfact(num));
      function oddfact(num) {
            if (num == 0 || num == 1) {
                  return 1;
            }
            return num * oddfact(num - 2);
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`5`);
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
