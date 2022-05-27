// Masai Packers & Movers
// url = `https://oj.masaischool.com/contest/3769/problem/04`;

function runProgram(input) {
      input = input.trim().split(`\n`);
      let [k, n] = input[0].trim().split(` `).map(Number);
      let arr = input[1].trim().split(` `).map(Number);
      // console.log(N, K, arr);
      let ans = [];
      console.log("ans: ", ans);
      packer(n, k, arr);
      function packer(k, arr, n) {
            if (k == 1) {
                  ans.push(n);
            }
            for (let i = 0; (i = arr.length); i++) {
                  packer(k - arr[i], arr, n + 1);
            }
            return packer(k, arr, n);
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`3 3
1 2 3`);
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
