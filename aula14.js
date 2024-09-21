// funções da manipulação de string em javascript
const msg = 'Minha Primeira Mensagem em JS';
const msg2 = 'Minha Segunda Mensagem em JS  * ';

console.log('o tamanho da msg eh', msg.length); //consigo o tamanho
console.log('o tamanho da msg2 eh', msg2.length);

console.log(msg.split(' '));//quebra a string em todas os espaços
console.log(msg.concat(msg2));// concatenar conteúdos de strings 1
console.log(msg + msg2);// concatenar conteúdos de strings 2

console.log(msg.substring(4))//substrings a partir da posicao 4
console.log(msg.substring(4, 5))//substrings a partir da posicao 4 até a posição 5

console.log(msg.toUpperCase()); //tudo maíscula
console.log(msg.toLowerCase()); //tudo minúscula

console.log(msg2.trim()); //remove os espaços nos finais
