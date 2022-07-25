// let user = {
// 	name: "Alex",
// 	surName: "Volkov"
// }
// user.name = "a1exss"

// console.log(user.name)
// delete user.name
// console.log([user])


/*function XO(str) {
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);
	return (x && x.length) === (o && o.length);
 }
 */

// function litres(time) {
// 	time = Math.floor(time / 0.5)
// 	return time;
// }
// console.log()


// function strCount(str, letter) {

// 	while (str.indexOf(letter) !== 0) {
// 		return Math.floor(str.indexOf(letter))
// 	}

// 	// for (let i = 0; i <= str.indexOf(letter); ++i) {
// 	// 	return i
// 	// }
// }
// console.log(strCount('helloNigga', 'g'))

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);

// function areYouPlayingBanjo(name) {
// 	if (name.indexOf('r') == 0 || name.indexOf('R') == 0) {
// 		return name + ' hi'
// 	}
// 	else {
// 		return name + ' hidfafgeasfaef'
// 	}
// }
// console.log(areYouPlayingBanjo('eon'))

/*let i = 7;
let a = 1000
do {
	a = a - i
	console.log(a)
} while (a > -1)*/




// let masive = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'aw', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a',]




// let count = 1000;
// for (; count >= masive.length; count -= 7) {
// 	console.log('aw')
// }

// let count1;
// let count2;

// bigFor: for (count1 = 0; count1 < 4; ++count1) {
// 	for (count2 = 0; count2 < 6; ++count2) {
// 		if (count2 == 4) continue bigFor
// 		console.log(count2)
// 	}
// }



// let a = []
// let x = 1;
// let n = 10
// a.unshift(x)
// for (let z = x; z < n * x; a.push(z += x)) {
// }

// console.log(a)




// let n = 2222244444;
// const a = [];
// a.push(n);
// let reversed = a.reverse();
// console.log(reversed)



// function digitize(n) {
// 	return String(n).split('').map(Number).reverse()
// }
// console.log(digitize(132123))
// function solution(nums) {
// 	if (nums == null || nums == []) {
// 		return []
// 	}
// 	nums.sort((a, b) => a - b)
// 	return nums
// }
// console.log(solution([123]))




// function SeriesSum(n) {
// 	let i;
// 	for (i = .25; 0.01 * n > i; i += .03) {
// 		if (n == 1) {
// 			return 1.00
// 		}
// 	}
// 	return 1 + i
// }
// console.log(SeriesSum(5))




// function validatePIN(pin) {
// 	let i = 0;
// 	let a = []
// 	a.push(pin)
// 	do {
// 		++i
// 	} while (pin >= i)

// 	if (a.includes()) {
// 		return false
// 	}
// 	else if (pin.includes()) {
// 		return true
// 	}
// 	else if (100000 <= pin && pin >= 999999) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// }
// console.log(validatePIN('34903'))

// function friend(friends) {
// }
// console.log(friend(['asdfsf', 'asdf'])



//  function summation(num) {
//  	let total = 0
//  	for (var i = 0; i <= num; i++) {
//  		total = total + i
//  	}
//  	return total
//  }
//  console.log(summation(11))



// function friend(friends) {

// 	if (friends.length == 4) {
// 		return friends
// 	}
// }




// function minMax(arr) {
// 	arr.charAt('2342')
// 	arr.sort((a, b) => a - b)

// 	return i
// }



/*
function minMax(arr) {
	let newArray1 = arr.concat();
	let newArray2 = arr.concat();
	newArray2.sort((a, b) => a - b);
	newArray1.sort((a, b) => b - a);
	return [newArray2[0], newArray1[0]]
}
console.log(minMax([2342, 4574, 46, 2]))*/




// function positiveSum(arr) {
// 	var positive = 0;

// 	for (var i = 0, l = arr.length; i < l; ++i) {
// 		if (arr[i] > 0)
// 			positive += arr[i]
// 	}
// 	return positive
// }
// console.log(positiveSum([2342, 4574, 46, 2]))




// function repeatStr(n, s) {
// 	let i = 1
// 	let a = s
// 	for (i; i < n; ++i) {
// 		a += s
// 	}
// 	return a
// }
// console.log(repeatStr(3, 's'))




// function invert(array) {
// 	let i = 0;
// 	let length = array.length
// 	let a = []
// 	for (i, length; i < length; ++i) {
// 		a.push(array[i] * -1)
// 	}
// 	return a
// }
// console.log(invert([234, 6, 5, 6, 6, -5,]))




// function descendingOrder(n) {
// 	let array = []
// 	array.push(n)
// 	array = String(array)
// 	array = array.split('')
// 	array.sort((a, b) => b - a)
// 	array = array.join("")
// 	return array++
// }
// console.log(descendingOrder(345))




























/*// map and filters statements

const items = [
	{ name: 'a1exss', age: 16 },
	{ name: 'Qman24', age: 17 },
	{ name: 'wayM', age: 13 },
	{ name: 'Deffo', age: 17 },
	{ name: 'ReNN', age: 16 },
	{ name: 'Kama', age: 18 },
]

// fillter
const filterAges = items.filter((age) => {
	return age.age >= 16 && age.name == 'a1exss'
	// return age.age >= 14
})
// map
const mapNames = items.map((name) => {
	return name.age
})
// find
const findItems = items.find((item) => { return item.name === 'Qman24' })

// forEach
const forEachItems = items.forEach((item) => {
	console.log(item.age)
})

// some
const someAge = items.some((item) => {
	return item.age > 12
})

// every
const everyItem = items.every((item) => {
	return item.age <= 18
})

// reduce
const reduceAges = items.reduce((sum, item) => {
	return item.age + sum
}, 0)

// includes
const includesItems = mapNames.includes(16)

console.log(filterAges);
console.log(mapNames);
console.log(findItems);
console.log(someAge);
console.log(everyItem);
console.log(reduceAges);
console.log(includesItems);


// match method in JS

// whithout limit after d{3}

let matches = /\d{3}/
console.log(matches.test('323abasdfadfac'))

// whith limit after /^\d{3}$/

let newMatches = /^\d{4}$/
console.log(newMatches.test('1111'))

// w+ = word plus something; \ = after that (there are sould be any values)

let text = /\w+@\w+\.(net|org|com)/
console.log(text.test('a@a.com'))

// match can return that worn in array but if it didn't found that word in return null
let newText = 'hello a1exss!'
let randomName = /a1exss/
console.log(newText.match(randomName))
console.log(randomName.test('a1exss'))

// [] it takes all things that you wrote in it
let anotherText = 'hello guys, my name is a1exss!'
let randomName2 = /[a-z1]+/g;
console.log(anotherText.match(randomName2))

// \b[a-z1]+\b it tells to don't take in array that things that didn't contain something
let anotherText2 = 'Hello Guys, my name is a1exss!'
let randomName3 = /\b[a-z1]+\b/g;
console.log(anotherText2.match(randomName3))

// /gi takes all stuff that you wrote
let anotherText3 = 'Hello Guys, My Name Is A1exss!'
let randomName4 = /[a-z1,]+/gi;
console.log(anotherText3.match(randomName4))

//  no comments :)
let myNumber = '9825-346-23456-26'
// let randomName5 = /\d+-\d+/gi;
let randomName5 = /(\d{3})[-]\d{3}/gi;
console.log(myNumber.match(randomName5))
*/