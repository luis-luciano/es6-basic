// Muestra el uso de parametros en funciones con un valor predeterminado

function register(
	name,
	country = "No especificado",
	email,
	phone = "No especificado"
) {
	return `Name: ${name}, Country: ${country}, Email: ${email}, Phone: ${phone}`;
}

console.log(register("Luis", undefined, "test@test.com"));
