// Class User
class User {
	constructor(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
	}

	showGretting(message) {
		return message;
	}

	showInfo() {
		return `
			<b>Name:</b> ${this.name}<br>
			<b>Age:</b> ${this.age}<br>
			<b>Email:</b> ${this.email}<br>
			<b></b> ${this.profession}<br>
			<hr>
		`;
	}
}

// Class Student
class Student extends User {
	constructor(name, age, email, profession) {
		super(name, age, email);
		this.profession = profession;
	}
}

const luis = new Student("Luis Luciano", 27, "luis.luciano.morales@gmail.com");
document.write(luis.showInfo());
