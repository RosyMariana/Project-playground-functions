const { compareTrue } = require("./challenges");

// Desafio 10
function techList(array, name) {
  let palavras = array.sort()
  let tec = [];
  let aux = 0;
  for (let cont in palavras) {
    tec[cont] = {
      tech: palavras[cont],
      name: name,
    }
    aux += 1;
  }
  if (aux === 0) {
    return('Vazio!');
  }
  return tec;
}


// Desafio 11
function generatePhoneNumber(array) {
  let aux = 0;
  let mensagem = '';   
    let numero = '(';
  if (array.length != 11) {
    let mensagem = "Array com tamanho incorreto.";
    return mensagem;
  }
  else{
    for (let cont = 0; cont < 11; cont += 1) {
      if (array[cont] < 0 || array[cont] > 9 || aux >= 3) {
        mensagem = "não é possível gerar um número de telefone com esses valores";
        return mensagem;
      }
      aux = 0;
      for (let cont2 = 0; cont2 < 11; cont2 += 1) {
        if (array[cont] === array[cont2]) {
          aux += 1;
        }
      }
      if (cont < 2) {
        numero = numero + array[cont];
      }
      else if (cont === 2) {
        numero = numero + ")" + " " + array[cont];
      }
      else if (cont > 2 && cont < 7) {
        numero = numero + array[cont];
      }
      else if (cont === 7) {
        numero = numero + "-" + array[cont];        
      } 
      else if (cont > 7) {
        numero = numero + array[cont];
      }
    }
  }
  return numero;
}
  

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let diferencaAB = Math.abs(lineA - lineB);
  let diferencaBC = Math.abs(lineB - lineC);
  let diferencaAC = Math.abs(lineA - lineC);
  
  if ( lineA < somaBC && lineB < somaAC && lineC < somaAB && lineA > diferencaBC && lineB > diferencaAC && lineC > diferencaAB) {
    return true;
  }
    return false;
}

// Desafio 13
function hydrate(string) {
  let soma = 0;
  let numeros = string.replace(/[^1-9]/g, ''); //retira os caracteres da string e repassa apenas os numeros. fonte: https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
  console.log(numeros[0]);

  for (let cont = 0; cont < numeros.length; cont += 1) {
    soma = soma + parseInt(numeros[cont]);  //a funçao parseInt converte a string com numeros em uma variavel de inteiros. fonte: https://www.horadecodar.com.br/2021/01/21/como-converter-uma-string-para-int-em-javascript/
  }
  if (soma === 1) {
    return soma + " copo de água";
  }
  else if (soma > 1) {
    return soma + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};