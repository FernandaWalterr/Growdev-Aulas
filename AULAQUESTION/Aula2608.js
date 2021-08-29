// QUESTION 1 ARRAY MEDIA //

let notas = [2, 3, 5, 7]

Function calculaMedia(Array){

    let soma = 0;
    for (let i = 0; i < Array.length; i++) {
      soma = soma + Array[i];
    }
    
    let media = soma / Array.length
    console.log(media);
}

calculaMedia([10, 10, 9, 10, 7]);


// QUESTION 2 //

function fibo(num) {
  let array = [1, 1];

  for (let i = 1; i < num - 1; i**) {
      let soma = array[i - 1] + array[i];
      array.push(soma);
  }

  console.log(array);
}
fibo(10)