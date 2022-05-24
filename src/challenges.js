// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
      return true;
    }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area;

  area = (base * height) / 2;
  
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = [], cont2 = 0, palavra = '';
  for (let cont = 0; cont < string.length; cont += 1) {  
    if (string[cont] === ' ' ) {
      array[cont2] = palavra;
      palavra = '';
      cont2 += 1;
    }
    else {
      palavra = palavra + string[cont];
    }
  }

  array[cont2] = palavra;
  return array;
}
// Desafio 4
function concatName (array) {
  let string = '';
  let num = array.length - 1;
  string = array[num] + ', ' + array[0];

  return string;

}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = wins * 3 + ties;

  return pontos;
}

// Desafio 6
function highestCount(array) {
  let aux = array[0];
  let num = 0;

  for (let cont = 1; cont < array.length; cont += 1){
    if (aux < array[cont]) {
      aux = array[cont];
    }
  }
  for (let cont2 = 0; cont2 < array.length; cont2 += 1) {
    if (array[cont2] === aux) {
    num += 1;        
    }
  }
  return num;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1); // a funçao Math,abs() retorna o modulo
  let dist2 = Math.abs(mouse - cat2);
  let mensagem = '';

  if (dist1 > dist2) {
    mensagem = 'cat2';
    return mensagem;
  }
  else if (dist2 > dist1) {
    mensagem = 'cat1';
    return mensagem; 
  }
  mensagem = 'os gatos trombam e o rato foge';
  return mensagem;
}

// Desafio 8
function fizzBuzz(numeros) {
  let mensagem = [];
  
  for (let cont in numeros) {
    if (numeros[cont] % 3 === 0 && numeros[cont] % 5 === 0) {
      mensagem[cont] = 'fizzBuzz';
    }
    else if (numeros[cont] % 3 === 0 ) { 
      mensagem[cont] = 'fizz';
    }
    else if (numeros[cont] % 5 === 0) {
      mensagem[cont] = 'buzz';
    }
    else {
      mensagem[cont] = 'bug!';
    }
  }
  return mensagem;
}

// Desafio 9
function encode(string) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let palavra = '', aux = 0;  
  for (let cont2 = 0; cont2 < string.length; cont2 += 1) {
    for (let cont in vogais) {
      if (cont === string[cont2]) {
       palavra = palavra + vogais[cont];  
       aux += 1;
      }   
    }
    if (aux === 0) {
      palavra = palavra + string[cont2];
    }
    aux = 0;
  }
  return palavra;
}

function decode(string) {
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let palavra = '', aux = 0;
  for (let cont2 = 0; cont2 < string.length; cont2 += 1) {
    for (let cont in vogais) {
      if (cont === string[cont2]) {
       palavra = palavra + vogais[cont];  
       aux += 1;
      }   
    }
    if (aux === 0) {
      palavra = palavra + string[cont2];
    }
    aux = 0;
  }
  return palavra;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
