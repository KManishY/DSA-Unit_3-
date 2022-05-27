//? solving using BODMAS rule (/ * + -)
//test case for this question

// let input = "6-4/2";
// let stack = [];
// let numbers = [];
// let operter = [];

// for (let i = 0; i < input.length; i++) {
//       if (
//             input[i] == "-" ||
//             input[i] == "+" ||
//             input[i] == "*" ||
//             input[i] == "/"
//       ) {
//             operter.push(input[i]);
//       } else {
//             numbers.push(input[i]);
//       }
// }
// // console.log(numbers, "num", operter)r
// for (let i = 0; i < operter.length; i++) {
//       if (operter[i] == "/") {
//       }
// }

let input = "6-4/2";
let stack = [];
let result = [];
for (let i = 0; i < input.length; i++) {
      if (input[i] == "+") {
            stack.push(input[i]);
      } else if (input[i] == "-") {
            stack.push(input[i]);
      } else if (input[i] == "*") {
            result = input[i - 1] * input[i + 1];
      } else if (input[i] == "/") {
            result = input[i - 1] / input[i + 1];
      }
}
