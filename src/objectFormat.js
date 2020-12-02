// Nueva forma de representacion de objetos
/* El ejemplo resulta el siguiente
	{
		name: Luis,
		age: 27
	}
 */
const createObject = (name, age) => {
	return {
		name,
		age,
		showInfo() {
			return `${name} tiene ${age} años`;
		}
	}
}

console.log(createObject('Luis', 27));
console.log(createObject('Luis', 27).showInfo());
