let userName = document.getElementById('1');
let userAge = document.getElementById('2');
let userEducation = document.getElementById('3');

const obj = {};

const addProp = (key, val) => {
	if (obj[key]) {
		delete obj[key]
	} else {
		obj[key] = val
	};
	console.log(obj);
};

userName.onclick = () => {
	addProp('name', 'crumb');
};
userAge.onclick = () => {
	addProp('age', 17);
};
userEducation.onclick = () => {
	addProp('education', true);
};

// const object = {};
// console.log(object);

// function addProps(key) {
// 	if (key in object === false) {
// 		object.key;
// 		console.log(object);
// 	} else {
// 		delete object.key;
// 		console.log(object);
// 	};
// };

// userAge.onclick = function () {
// 	if ('age' in object === false) {
// 		object.age = 17;
// 		console.log(object);
// 	} else {
// 		delete object.age;
// 		console.log(object);
// 	}
// };

// userEducation.onclick = function () {
// 	if ('education' in object === false) {
// 		object.education = true;
// 		console.log(object);
// 	} else {
// 		delete object.education;
// 		console.log(object);
// 	}
// };
