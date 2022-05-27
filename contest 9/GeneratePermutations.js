// Generate Permutations
// url =`https://oj.masaischool.com/contest/3744/problem/03`;

function permutation(n, str, p) {
      if (p == n) {
            let beg = "";
            for (let i = 0; i < n; i++) {
                  beg += str[i];
            }
            console.log(beg);
      }
      for (let i = p; i < n; i++) {
            str = swap(str, i, p);
            return permutation(n, str, p + 1);
      }
      function swap(str, i, j) {
            let temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            // console.log("temp: ", temp);
            return;
      }
}

function runProgram(input) {
      input = input.trim().split("\n");
      let n = +input[0];
      let arr = input[1].trim().split(` `).map(Number);
      // permu(n, arr, 0); //backtracking
      permutation(n, arr, 0);

      // function permu(n, arr, current) {
      //       if (current == n) {
      //             return console.log(arr);
      //       }
      //       for (let i = current; i < n; i++) {
      //             // [arr[current], arr[i]] = [arr[i], arr[current]];
      //             [arr[i], arr[current]] = [arr[current], arr[i]];
      //             permu(n, arr, current + 1);
      //             // [arr[current], arr[i]] = [arr[i], arr[current]];
      //             [arr[i], arr[current]] = [arr[current], arr[i]];
      //       }
      // }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`3
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
