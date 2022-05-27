// Detective L
// url`https://oj.masaischool.com/contest/3769/problem/02`;

function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      let line = 1;

      for (let i = 0; i < tc; i++) {
            let mat = [];
            let [n, m] = input[line++].trim().split(` `).map(Number);
            for (let j = 0; j < n; j++) {
                  let arr = input[line++].trim().split(` `).map(Number);
                  // console.log(arr, n, m);
                  mat.push(arr);
            }
            var top = 0;
            var bottam = n - 1;
            var left = 0;
            var right = m - 1;
            // console.log(mat, n, m);
            console.log(top, bottam, left, right);
            detct(mat, top, bottam, left, right, n, m);
      }

      function detct(mat, top, bottam, left, right, n, m) {
            let count = 0;
            let beg = "";
            while (count < n * m) {
                  for (let i = top; i < bottam; i++ && count < n * m) {
                        beg += mat[i][left] + " ";
                        count++;
                  }
                  // top++;
                  for (let i = left; i <= right; i++ && count < n * m) {
                        beg += mat[bottam][i] + " ";
                        count++;
                  }
                  left++;
                  bottam--;
            }
            console.log(beg);
      }
}
// 1 4 7 8 9 2 5 6 3
// 1 4 7 10 11 12 2 5 8 9 3 6
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`2
3 3
1 2 3
4 5 6
7 8 9
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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
