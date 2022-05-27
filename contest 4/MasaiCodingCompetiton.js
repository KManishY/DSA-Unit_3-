function MasaiCodingCompetiton(arr) {
      // console.log(arr);
      let c1 = [];
      let c2 = [];
      let c3 = [];
      let c4 = [];
      let i = 0;
      while (i < arr.length - 1) {
            if (arr[i] == "E" && arr[i + 1] == "1") {
                  i++;
                  i++;
                  c1.push(arr[i]);
                  console.log(c1);
            } else if (arr[i] == "E" && arr[i + 1] == "2") {
                  i++;
                  i++;
                  c2.push(arr[i]);
                  console.log();
            } else if (arr[i] == "E" && arr[i + 1] == "3") {
                  i++;
                  i++;
                  c3.push(arr[i]);
            } else if (arr[i] == "E" && arr[i + 1] == "4") {
                  i++;
                  i++;
                  c4.push(arr[i]);
            }
            // console.log("hi");
      }
      // console.log(c1);
      // console.log(c2);
      // console.log("hi");
}
function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      let line = 1;
      for (let i = 0; i < tc; i++) {
            let arr = input[line++].trim().split(` `);
      }
      MasaiCodingCompetiton(arr);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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
