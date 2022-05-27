function operation(n, x) {
      if (n == 0) {
            return 1;
      }

      return x ** n / fact(n) + operation(n - 1, x);
}
function fact(n) {
      if (n == 0) {
            return 1;
      }
      return n * fact(n - 1);
}
function runProgram(input) {
      input = input.trim().split("\n");
      let [n, x] = input[0].trim().split(" ").map(Number);
      console.log(operation(n, x));

      //let [N, K] = input[0].trim().split(` `).map(Number);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`4 2`);
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
