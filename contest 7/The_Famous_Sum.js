// The Famous Sum
// url = `https://oj.masaischool.com/contest/3669/problem/05`;

function tfs(str) {
      if (str.length == 1) {
            return str;
      }
      let sum = 0;
      for (let i = 0; i < str.length; i++) {
            sum += +str[i];
      }
      str = `` + sum;
      return tfs(str);
}
function runProgram(input) {
      // console.log("input: ", input);
      // input = input.trim().split(``);
      // console.log(input);
      let [n, k] = input.split(" ");
      let s = 0;
      for (let i = 0; i < n.length; i++) {
            s += +n[i];
      }
      let str = ``;
      for (let i = 0; i < k; i++) {
            str += s;
      }
      console.log(tfs(str));
      //let [N, K] = input[0].trim().split(` `).map(Number);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`148 3`);
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
