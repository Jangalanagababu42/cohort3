function settimeout() {
  console.log("button clicked");
}

console.log("HI");
setTimeout(settimeout, 1000); // took only one sec but I/O task
console.log("welcome to loupe");

let c = 0;
for (let i = 0; i < 10000000000; i++) {
  // took more than 5s cpu intensive task
  c = c + 1;
}
console.log("this is expensive computer intensive task");

// can we make setTimeout to be synchronous ?

function setTimeoutSync(timeout) {
  let starttime = new Date();
  while (1) {
    let currtime = new Date();
    if (currtime.getTime() - starttime.getTime() > timeout) {
      break;
    }
  }
}
setTimeoutSync(1000);
console.log("Hi");
