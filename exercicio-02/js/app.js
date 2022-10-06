//3
const paragraph = "Grandes poderes trazem grandes responsabilidades.";
console.log(paragraph);

//4
const tom = "Tom";
const firstTom = "Hanks";
const secondTom = "Cruise";

const myFavoriteTom = `${tom} ${secondTom}`;
console.log(myFavoriteTom); //juntando o primeiro nome com o segundo e formando meu tom favorito

//5
const programmingLanguage = "JavaScript";
const js = programmingLanguage[0] + programmingLanguage[4] //concatenando e formando o JS
console.log(js);

//6
const mozilla = 'Mozilla Developer Network';
const mdn = mozilla[0] + mozilla[8] + mozilla[18] //concatenando e formando MDN
console.log(mdn);

//7
console.log(programmingLanguage.length); //quantidade de letras da palavra javascript

//8
let randomWord = 'Araponga';
console.log(randomWord[randomWord.length - 1]) //comprimento total da palavra é 8, mas como o JS começa pelo zero, ele sempre conta como 7, retornando o último caractere.

//9
const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA';
console.log(summerMessage.toLowerCase()); //letra minúscula

//10
const winterMessage = 'o inverno está chegando';
console.log(winterMessage.toUpperCase()); //letra maiúscula

//11
console.log(winterMessage.lastIndexOf('v')); //última aparição da letra 'v' na frase

//12
console.log(winterMessage.lastIndexOf('n')); //última aparição da letra 'n' na frase

//13
const harryPotterAuthor = 'J.K. Rowling';
console.log(harryPotterAuthor.slice(0,3)); //aparecendo somente J.K. no console

//14
const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!';
const realBestMovie = bestMovie.replace("La la land", "Moonlight");
console.log(realBestMovie); //trocando as palavras no console

//15
const reminder = 10 % 3;
console.log(reminder); //resto de 10 dividido por 3

//16
let episodes = 6;
episodes++;
console.log(episodes); //incrementando o valor de episodes em 1

//17
let episodes2 = 6;
episodes2--;
console.log(episodes2); //decrementando o valor de episodes2 em 1

//18
episodes += 3;
console.log(episodes); //somando mais 3 ao valor de episodes

//19
const allEpisodes = `O nº de episódios é: ${episodes}`;
console.log(allEpisodes); //citando episodes através de template strings

//20
const bookMessage = '\'O Conto da Aia\' é um dos livros mais vendidos da década.';
console.log(bookMessage); //pulando aspas

//21
const name = 'walter white'; 
let newName = name[0].toUpperCase() + name.slice(1, 6) + ' ' + name[7].toUpperCase() + name.slice(8); //pegando walter white e escrevendo Walter White (letra maiuscula)
console.log(newName);

//22
newName = `${name[0].toUpperCase()}${name.slice(1,6)} ${name[7].toUpperCase()}${name.slice(8)}`; //mesma coisa do de cima só que em template string
console.log(newName);