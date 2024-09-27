// example 1

const crypto = require("crypto");
const input = "100xdevs";
const hash = crypto.createHash("sha256").update(input).digest("hex");
console.log(hash);

// Question 1

function FindinputwithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputstr = input.toString();
    const hash = crypto.createHash("sha256").update(inputstr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputstr, hash: hash };
    }
    input++;
  }
}

const result = FindinputwithPrefix("0000000");
console.log(result.input, "input");
console.log(result.hash);
