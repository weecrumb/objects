//todo first way

const obj1 = {
	name: 'din',
	age: 3,
	character: {
		kind: true,
		honest: false,
		evil: false,
	}
};

const obj2 = JSON.parse(JSON.stringify(obj1)); //deep clone

obj2.character.kind = false;
console.log(obj2);

console.log(obj1.character);

//todo first way

//todo second way, if no nesting

// const obj1 = {
// 	name: 'din',
// 	age: 3,
// };

// const obj2 = Object.assign({}, obj1);

// console.log(obj1);
// console.log(obj2);

//todo second way, if no nesting

//todo third way

// const obj1 = {
// 	name: 'din',
// 	age: 3,
// };

// const obj2 = { ...obj1 };

// console.log(obj1);
// console.log(obj2);

//todo third way

