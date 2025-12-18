/* eslint-disable */
// Tipos básicos (aqui ocorre inferencia de tipos)
let nome: string = 'luiz'; //Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
let big: bigint = 10n; //bigint

//Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];
let arrayStrings2: string[] = ['a', 'b', 'c'];

//objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'luiz',
  idade: 30
};

// Funções
function soma(x: number, y: number){
  return x + y;
};
const soma2: (x: number, y: number) => number = (x, y) => x + y;


