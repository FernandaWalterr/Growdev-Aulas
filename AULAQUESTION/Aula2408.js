// QUESTION 1 //

let p1 = 8;
let p2 = 1;

let media = (p1 + p2) / 2;

if (media >= 7) {
    console.log("Aprovado");
} else {
    let exame = 6;
    media = (p1 + p2 + exame) / 3;

    if (exame >= 5) {
        console.log("Aprovado com exame");
    } else {
        console.log("Reprovado :/");
    }
}

function calculaMedia(n1, n2, n3) {
    if (n3) {
        return (n1 + n2 + n3) / 3;
    } else {
        return (n1 + n2) / 2;
    }
}

// QUESTION 2 //

let n1 = -300;
let n2 = -15;
let n3 = -21;

let maior, menor;

if (n1 > n2 && n1 > n3) {
    maior = n1;

    menor = n2 < n3 ? n2 : n3;

    // TERNÁRIO

    // if (n2 < n3) {
    //     menor = n2;
    // } else {
    //     menor = n3;
    // }
} else if (n2 > n3) {
    maior = n2;

    if (n3 < n1) {
        menor = n3;
    } else {
        menor = n1;
    }
} else {
    maior = n3;

    if (n2 < n1) {
        menor = n2;
    } else {
        menor = n1;
    }
}

console.log(`O maior é: ${maior}, o menor é: ${menor}`);

// Exemplo switch

let dia = 3;

if (dia === 1) {
    console.log("Domingo");
} else if (dia === 2) {
    console.log("Segunda");
} else if (dia === 3) {
    console.log("Terça");
} else if (dia === 4) {
    console.log("Quarta");
}

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    default:
        console.log("Não achou dia da semana");
        break;
}

console.log("frase");