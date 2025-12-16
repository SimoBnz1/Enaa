const prompt = require("prompt-sync")();

// ===== Operations =====
function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    console.log("Erreur : division par zéro !");
    return null;
  }
  return a / b;
}

function puissance(a, b) {
  return Math.pow(a, b);
}

function racineCarree(a) {
  if (a < 0) {
    console.log("Erreur : nombre négatif !");
    return null;
  }
  return Math.sqrt(a);
}

function factorielle(a) {
  if (a < 0) {
    console.log("Impossible : nombre négatif !");
    return null;
  }
  let res = 1;
  for (let i = 2; i <= a; i++) {
    res *= i;
  }
  return res;
}

let historique = [];

function ajouterHistorique(nb1, nb2, ope, res) {
  historique.push({
    nombre1: nb1,
    nombre2: nb2,
    operation: ope,
    resultat: res
  });
}


while (true) {
  let nb1 = Number(prompt("Donner le premier nombre : "));
  let nb2 = Number(prompt("Donner le deuxième nombre : "));
  let ope = prompt("Operation (+,-,*,/,^,√,!, 0 pour quitter) : ");

  if (ope === "0") {
    console.log("Fin du programme");
    break;
  }

  let resultat;

  switch (ope) {
    case "+":
      resultat = addition(nb1, nb2);
      break;
    case "-":
      resultat = soustraction(nb1, nb2);
      break;
    case "*":
      resultat = multiplication(nb1, nb2);
      break;
    case "/":
      resultat = division(nb1, nb2);
      break;
    case "^":
      resultat = puissance(nb1, nb2);
      break;
    case "√":
      resultat = racineCarree(nb1);
      break;
    case "!":
      resultat = factorielle(nb1);
      break;
    default:
      console.log("Opération invalide !");
      continue;
  }

  if (resultat !== null) {
    console.log("Résultat :", resultat);
    ajouterHistorique(nb1, nb2, ope, resultat);
  }

  let show = prompt("Afficher historique ? (O/N) : ");
  if (show === "O") {
    console.table(historique);
  }
}
