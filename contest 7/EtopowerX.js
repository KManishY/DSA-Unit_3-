// url = `https://oj.masaischool.com/contest/3669/problem/07`;
// EtopowerX
function runProgram(input) {
      input = input.trim().split(``);
      let [E, X] = input[0].trim().split(``).map(Number);
      console.log(E, X);
}
// * x //value of x in the expression
//      * n //value of power in the function
//      * r = n
//      * function rec(x,r)
//          * if (r==0) return 1
//          * val = Power(x,r) //function returns the power of the funtion
//          * ans = val/factorial(r) + rec(x,r-1) // factorial funtion returns the factorial of a number
//          * return ans
//      * print (ans)
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
      runProgram(`4 2`);
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
