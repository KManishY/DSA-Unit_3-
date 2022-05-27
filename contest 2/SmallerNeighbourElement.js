// !Smaller Neighbour Element
//? url="https://oj.masaischool.com/contest/3540/problem/01"

let smaller = (n, arr) => {
      // console.log(n, arr);
      let stack = [];
      let ans = [];
      for (let i = 0; i < arr.length; i++) {
            while (stack.length > 0 && arr[i] <= stack[stack.length - 1]) {
                  stack.pop();
            }
            if (stack.length == 0) {
                  ans[i] = -1;
            } else {
                  ans[i] = stack[stack.length - 1];
            }
            stack.push(arr[i]);
      }
      console.log(ans);
};

function runProgram(input) {
      input = input.trim().split(`\n`);
      let n = +input[0];
      let arr = input[1].trim().split(" ").map(Number);
      smaller(n, arr);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`8
39 27 11 4 24 32 32 1`);
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
