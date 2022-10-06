//02 -03
let = brazilianFoods = ['Coxinha', 'null', 'Brigadeiro'];

//04
brazilianFoods[1] = 'Pão de Queijo';
console.log(brazilianFoods[1]);

//05
const foodsInfo = `Até aqui, o  array "brazilianFoods" possui ${brazilianFoods.length} itens: ${brazilianFoods[0]}, ${brazilianFoods[1]} e ${brazilianFoods[2]}`;
console.log(foodsInfo);

//06 - 07 - 08
const maleDogsName = ['Chico', 'Zeca'];
const femaleDogNames = ['Lilica', 'Matilda']

let dogNames = maleDogsName.concat(femaleDogNames);
console.log(dogNames.join(', '));

dogNames.pop();
console.log(dogNames[dogNames.length - 1]); //retirando o último item do DogNames e deixando q o console puxe o ultimo em seguida

//09 - 10
dogNames.push('Nina'); //adicionando nina ao dogNames
console.log(dogNames)
const initials = `${dogNames[0][0]}${dogNames[1][0]}${dogNames[2][0]}${dogNames[3][0]}`; //primeira letra de cada dogName

console.log(initials);
console.log(initials.toLowerCase());

//11
const sobremesa = `${dogNames[0][3] + dogNames[0][4]}${dogNames[1][2] + dogNames[1][3]}${dogNames[3][2] + dogNames[3][3]}`.replace('n', 'd'); //escrevendo conana
console.log(`A ${sobremesa} é um doce à base de coco, tradicional na América Latina e em Angola.`); //trocando o n pelo d e escrevendo cocada

//12
let oddNumbers = [3, 5, 7];
console.log((oddNumbers[1] += 4) ** 3);