// Q1 . Give me an input string that outputs a SHA-256 hash that starts with 00000
const crypto = require("crypto");

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

const result = FindinputwithPrefix("00000");
console.log(result.input, "input");
console.log(result.hash);

//   Q2 . What if I ask you that the input string should start with 100xdevs ? How would the code change?

function FindinputwithPrefix100xdevs(prefix) {
  let input = 0;
  while (true) {
    let inputstr = "100xdevs" + input.toString();
    const hash = crypto.createHash("sha256").update(inputstr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputstr, hash: hash };
    }
    input++;
  }
}

const result2 = FindinputwithPrefix100xdevs("00000");
console.log(result2.input, "input");
console.log(result2.hash, "hash");

//  Q3 . What if I ask you to find a nonce for the following input
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10
function FindNonce(prefix) {
  let input = 0;
  while (true) {
    let inputstr =
      `harkirat => Raman | Rs 100 Ram => Ankit | Rs 10` + input.toString();
    const hash = crypto.createHash("sha256").update(inputstr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputstr, hash: hash };
    }
    input++;
  }
}

const result3 = FindNonce("00000");
console.log(result3.input, "input");
console.log(result3.hash);

// Q4. go through https://andersbrownworth.com/blockchain/
