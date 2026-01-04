function sum(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sum(5));

//taking inputs from CLI
function sumfromterminal() {
  const n = Number(process.argv[2]);
  //if there are more args from terminal we should start using argv[3],argv[4]......
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumfromterminal());

function sumfromenv() {
  const n = Number(process.env.PORT);
  //if there are more args from terminal we should start using argv[3],argv[4]......
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumfromenv());

const fs = require("fs");

const content = fs.readFileSync("a.txt", "utf-8");
console.log(content);
const contentinb = fs.readFileSync("b.txt", "utf8");
console.log(contentinb);
const contentinc = fs.readFile("b.txt", "utf-8");
console.log(contentinc);
