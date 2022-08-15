const userName = document.getElementById('1');
const userAge = document.getElementById('2');
const userEducation = document.getElementById('3');


const object = {
	name: null,
	age: null,
	education: null
};
console.log(object);

userName.onclick = function () {
	if ('name' in object === false) {
		object.name = 'crumb';
		console.log(object);
	} else {
		delete object.name;
		console.log(object);
	}
};


userAge.onclick = function () {
	if ('age' in object === false) {
		object.age = 17;
		console.log(object);
	} else {
		delete object.age;
		console.log(object);
	}
};

userEducation.onclick = function () {
	if ('education' in object === false) {
		object.education = true;
		console.log(object);
	} else {
		delete object.education;
		console.log(object);
	}
};