//?url =https://oj.masaischool.com/contest/3530/problem/02
//!Reduce String
let reduce = (str) => {
      // console.log(str)
      let beg = "";
      for (let i = 0; i < str.length; i++) {
            if (str[i] == str[i + 1]) {
                  i++;
            } else {
                  beg += str[i];
            }
      }
      if (beg == "") {
            console.log("Empty String");
      } else {
            console.log(beg);
      }
};

function runProgram(input) {
      let str = input;
      reduce(str);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`aaabccddd`);
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
