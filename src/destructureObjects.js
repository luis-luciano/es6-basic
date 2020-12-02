const user = {
	name: "Luis",
	email: "test@test.com",
	age: 26,
	country: "México"
	//profesion: "Web Developer"
};

const { name, country, profession = "No especificado" } = user;

console.log(name, country);

const showInfo = ({ name, profession = "Estudiante" }) =>
	console.log(`El usuario: ${name}, es de profesión: ${profession}`);

showInfo(user);
