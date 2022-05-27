// Perform Merging
// url =`https://oj.masaischool.com/contest/3769/problem/01`;
function runProgram(input) {
      input = input.trim().split(`\n`);
      console.log("input: ", input);
      let n = +input[0];
      let beg = [];
      let arr1 = input[1].trim().split(" ").map(Number);
      let arr2 = input[2].trim().split(" ").map(Number);
      for (let i = 0; i < arr1.length; i++) {
            beg.push(arr1[i]);
            beg.push(arr2[i]);
      }
      // console.log(beg);
      // console.log(n, arr1, arr2);
      let ln = beg.length;

      let ans = merge(ln, beg);
      console.log(ans.join(" "));
      function merge(n, arr) {
            // console.log(n, arr);
            if (n == 0) {
                  return arr;
            }
            for (let i = 0; i < n; i++) {
                  if (arr[i] > arr[i + 1]) {
                        let temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                  }
            }
            // console.log(arr);
            return merge(n - 1, arr);
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`4
1 5 7 9
2 4 6 8`);
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
