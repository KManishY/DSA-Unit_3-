// Masai Packers & Movers

function runProgram(input) {
      input = input.trim().split(`\n`);
      console.log("input: ", input);
      //let [N, K] = input[0].trim().split(` `).map(Number);
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
