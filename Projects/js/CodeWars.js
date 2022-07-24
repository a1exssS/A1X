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

function invert(array) {
	let i = 0;
	let length = array.length
	let a = []
	for (i, length; i < length; ++i) {
		a.push(array[i] * -1)
	}
	return a
}
console.log(invert([234, 6, 5, 6, 6, -5,]))

