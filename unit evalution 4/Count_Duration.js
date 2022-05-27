//https://oj.masaischool.com/contest/3792/problem/01
// *todo:-Count Duration
//* In this question we have to find the gap between two time
function getDuration(arr) {
      let hour1 = arr[0] * 60; //* to convert this into a minute
      let hour2 = arr[2] * 60; //* to convert this into a minute

      //*now we calculate the total minute in hour1 and hour 2 .

      hour1 = hour1 + arr[1];
      hour2 = hour2 + arr[3];

      let diff = hour2 - hour1;
      let array = [];
      array.push(Math.floor(diff / 60)); //*calculating the hour
      array.push(Math.floor(diff % 60)); //*calculating the minute

      console.log(array.join(" "));
}
function runProgram(input) {
      input = input.trim().split(`\n`);
      let tc = +input[0];
      for (let i = 1; i <= tc; i++) {
            let arr = input[i].trim().split(` `).map(Number);
            getDuration(arr);
      }
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`2
1 44 2 14
2 42 8 23`);
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
