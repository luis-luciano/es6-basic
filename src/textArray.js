// Metodos nativos para texto y array
let text = 'Hola Mundo';
console.log(text, 'empieza con h:', text.toLowerCase().startsWith('h'));
console.log(text, 'termina con o:', text.toLowerCase().endsWith('o'));
console.log(text, 'incluye la palabra luis:', text.includes('luis'));

let friends = ['Carlos', 'Alejandro', 'Cesar', 'Manuel'];
console.log('friends incluye Manuel?', friends.includes('Manuel'));
console.log('Encontrar elemento mayor a 6 letras: ', friends.find(friend => friend.length > 6));
console.log('Posición de elemento Manuel en array: ',friends.findIndex(friend => friend === 'Manuel'));
