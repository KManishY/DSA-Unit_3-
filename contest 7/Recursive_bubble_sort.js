// Recursive bubble sort
// url =`https://oj.masaischool.com/contest/3669/problem/04`

function runProgram(input) {
      function sort(arr, n) {
            if (n == 1) {
                  return arr;
            }
            for (let i = 0; i < n; i++) {
                  if (arr[i] > arr[i + 1]) {
                        let temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                  }
            }
            return sort(arr, n - 1);
      }

      input = input.trim().split(`\n`);
      //let [N, K] = input[0].trim().split(` `).map(Number);
      let n = +input[0];
      let arr = input[1].split(` `).map(Number);
      // console.log(n);
      console.log(sort(arr, n));
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`5
3 5 0 9 8`);
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
