// Muestra la destructuracion de arrays
// El objetivo es no utilizar el array a traves de las posiciones
// utilizar la información a través de variables
// Extraer elementos y pasarlos a variables
const person = ["Luis Luciano", 23, "México"];

const [name, , country, profesion = "No especificado"] = person;

console.log(name, country);

const showInfo = ([name, , country, profesion = "No especificado"] = person) =>
	console.log(
		`El nombre es: ${name}, del pais: ${country}, Profesion: ${profesion}`
	);

showInfo(person);
