// !Again a classical problem
//?url =`https://oj.masaischool.com/contest/3540/problem/02

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
