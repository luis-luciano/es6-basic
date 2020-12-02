// Parametros rest

// Metodo tradicional
const showData = (name, age, email) => {
	console.log(name, age, email);
}

// Nuevo metodo permitido
const multipleParameters = (...data) => {
	console.log(data);
}

showData('Luis Luciano', 27, 'luis.luciano.morales@gmail.com');
multipleParameters('Luis Luciano', 27, 'luis.luciano.morales@gmail.com');
