let n = prompt("Combien d'étage veux-tu"); // you can take input from prompt or change the value
let string = "";

for (let i = 0; i < n; i++) {
  // printing dash

  for (let k = 0; k < n - i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
