//?url=https://oj.masaischool.com/contest/3530/problem/01
//!Push, Pop and Top
let stack = (op, num) => {
      console.log(op, num);
      let stack = [];
      for (let i = 0; i < op.length; i++) {
            if (op[i] == 1) {
                  stack.push(num[i]);
            } else if (op[i] == 2) {
                  stack.pop();
            } else if (stack.length == 0) {
                  console.log("Empty");
            } else {
                  console.log(stack[1]);
            }
      }
};

function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      let line = 1;
      var op = [];
      var num = [];
      for (let i = 0; i < tc; i++) {
            let [k, n] = input[line++].trim().split(` `).map(Number);
            op.push(k);
            num.push(n);
      }
      stack(op, num);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`6
1 15
1 20
2
3
2
3`);
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
