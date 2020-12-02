// Muestra el uso de funciones flecha
const names = ["Carlos", "Alejandro", "Manuel", "Cesar"];

const totalCharactersForEach = names.map(
	name => `${name} tiene ${name.length} letras`
);

console.log(totalCharactersForEach);

// Estructura de una funcion flecha
/*
 (parametro) => {
 	return valor_de_retorno;
 }

 .- Cuando una funcion solo tiene una instrucción se pueden omitir las llaves y punto coma final
 .- Los arrays declarados en una constante pueden ser modificados
 */
