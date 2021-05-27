num =""
num = prompt("Quel nombre souhaites-tu calculer:")
function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
console.log(`Voici la factorielle de ${num}: ${factorialize(num)}`);
