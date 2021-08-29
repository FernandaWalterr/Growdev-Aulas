// QUESTION 1 //
// CALCULAR IMC //

const nome = "Liz";
const peso = 57;
const altura = 1.68;

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log("Liz você está acima do peso");
} else if (imc < 29.9) {
  console.log("Liz você não está acima do peso");
}

// QUESTION 2 //
// CALCULAR MEDIA //

const nome = "Juan";

let n1 = 9;
let n2 = 5;
let n3 = 7;

let media = (n1 + n2 + n3) / 3;

if (nota < 4) {
  conceito = "E";
} else if (nota >= 4 && nota < 6) {
  conceito = "D";
} else if ((nota >= 6 && nota < 7, 5)) {
  conceito = "C";
} else if ((nota >= 7, 5 && nota < 9)) {
  conceito = "B";
} else if (nota >= 9) {
  conceito = "A";
}

function calcularMedia(nome, n1, n2, n3) {
  let conceito;
  let status;

  const ME = (n1 + n2 + n3) / 3;

  const MA = (n1 + n2 * 2 + n3 * 3 + ME) / 7;

  if (MA >= 6) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }

  if (MA < 4) {
    conceito = "E";
  } else if (MA >= 4 && MA < 6) {
    conceito = "D";
  } else if ((MA >= 6 && MA < 7, 5)) {
    conceito = "C";
  } else if ((MA >= 7, 5 && MA < 9)) {
    conceito = "B";
  } else if (MA >= 9) {
    conceito = "A";
  }

  console.log(
    "Nome do Aluno: " +
      nome +
      " Conceito: " +
      conceito +
      " Média dos exerc: " +
      MA +
      " Status: " +
      status
  );
}
