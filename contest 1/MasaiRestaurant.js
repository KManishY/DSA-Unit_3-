//!Masai Restaurant
//? url : https://oj.masaischool.com/contest/3530/problem/03
let rest = (op, num) => {
      let i = 0;
      let j = 0;
      let stack = [];
      while (i < op.length && j < num.length) {
            console.log(op[i]);
            if (op[i] == 1) {
                  if (stack.length == 0) {
                        console.log("No Food");
                  } else {
                        console.log(stack.pop());
                  }
                  i++;
            } else if (op[i] == 2) {
                  stack.push(num[j]);
                  i++;
                  j++;
            }
      }
};

function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      let op = [];
      let num = [];
      let line = 1;
      for (let i = 0; i < tc; i++) {
            let arr = input[line++].trim().split(" ").map(Number);
            for (let i = 0; i < arr.length; i++) {
                  if (i == 0) {
                        op.push(arr[i]);
                  } else {
                        num.push(arr[i]);
                  }
            }
      }
      rest(op, num);
}
// -----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`6
1
2 5
2 7
2 9
1
1`);
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
