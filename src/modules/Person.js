class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	showInfo() {
		console.log(`${this.name} tiene ${this.age} años`);
	}
}

export default Person;
