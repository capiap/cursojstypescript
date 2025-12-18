//Tuple

const dadosCliente1: readonly [number, string] = [1, 'Cassiano'];
const dadosCliente2: [number, string, string?] = [1, 'Ana'];
const dadosCliente3: [number, string, string?] = [1, 'Cintia'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Cassiano',
  'Sardeiro',
  'Pereira',
  'Araujo',
];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Pedro';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Rael', 'Barros'];

//read only generic
const array2: ReadonlyArray<string> = ['Eva', 'Barros'];

console.log(array1);
console.log(array2);
