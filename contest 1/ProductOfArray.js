// Product Of Array
// Product Of Array
let pOfArray = (N, arr) => {
      let array = [];
      let multi = 1;
      for (let i = 0; i < N; i++) {
            //[ 1, 1, 2, 6, 24 ]
            if (i == 0) {
                  array.push(1);
            } else {
                  multi *= arr[i - 1];
                  array[i] = multi;
            }
      }
      let arr2 = [];
      let multi2 = 1;
      for (let i = N - 1; i >= 0; i--) {
            if (i == N - 1) {
                  arr2.push(1);
            } else {
                  multi2 *= arr[i + 1];
                  arr2.push(multi2);
            }
      }
      let line = N - 1;
      let beg = "";

      for (let i = 0; i < N; i++) {
            let multi = arr2[line--] * array[i];
            beg += multi + " ";
      }
      console.log(beg);
};

function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      let line = 1;
      for (let i = 0; i < tc; i++) {
            let n = +input[line++];
            let arr = input[line++].trim().split(" ").map(Number);
            pOfArray(n, arr);
      }
      //let [N, K] = input[0].trim().split(` `).map(Number);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
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
