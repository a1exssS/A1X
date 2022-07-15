"Use strict"

// lesson first

/*

let firstName = 'Alex';
let age = 16;
let student = true;

console.log("Hello", firstName);
console.log("I am", age, "years old");
console.log("Enrolled", student);

document.getElementById('p1').innerHTML = 'Hello ' + firstName
document.getElementById('p2').innerHTML = 'I am ' + age + ' years old'
document.getElementById('p3').innerHTML = 'Enrolled ' + student

*/



// lesson second

/* let students = 25;

students = students + 1;
students = students - 1;
studentsInGroup = students / 5;
studentsInGroup = students * 2;
extraStudents = students % 3;

/ short form /

students += 1;
students -= 1;
studentsInGroup = students / 5;
studentsInGroup = students * 5;
extraStudents = students % 3;

console.log(students);
document.getElementById('p1').innerHTML = 'We have now ' + students + ' students'

console.log(studentsInGroup);
document.getElementById('p1').innerHTML = 'We have now ' + studentsInGroup + ' students in 5 groups'

console.log(extraStudents);
document.getElementById('p1').innerHTML = 'We have now ' + extraStudents + ' people who do not find a group';*/



// lesson third



/* // easy way

 let userName = window.prompt("What's your name?");
 console.log(userName);

  //practical way

let userName;

document.getElementById('submitMyName').onclick = function () {
	userName = document.getElementById("myName").value;
	document.getElementById('p1').innerHTML = "your name is " + userName
	console.log(userName)
}
*/



// lesson fourth
/*
let num = window.prompt('tell me how many pizzas do you want?');
num = Number(num)
num += 1000;
document.getElementById('p1').innerHTML = 'your social credit is ' + '- ' + num
*/



// lesson fifth

/*
const PI = 3.14159;
let radius;
let circumference;

radius = Number(radius)

document.getElementById('answer').onclick = function () {
	radius = document.getElementById("radius").value;
	circumference = 2 * PI * radius;
	document.getElementById('p1').innerHTML = "your radius is: " + circumference
	console.log(circumference)
}*/



// leson sixth

/*let x;
let y = 4;
let z = 6;
let min;
let max;

document.getElementById('answer').onclick = function () {
	math = document.getElementById('math').value;
	// x = Math.round(math); округляет нормально
	// x = Math.floor(math); окрузлает в меньшую сторону
	// x = Math.ceil(math); округляет в большую торону
	// x = Math.pow(math, math = document.getElementById('math').value); число возводит в степень сама себя
	// x = Math.pow(math, 2) возводит в степень на 2
	// x = Math.sqrt(math); возводит в квадратный корень
	// x = Math.abs(math); модуль
	// min = Math.min(x, y, z)  минимальное значение
	// max = Math.max(y, x, z) максимальное значение
	// x = Math.PI
	document.getElementById('p1').innerHTML = "your number is " + x
}*/



// lesson seventh

/*let a;
let b;
let c;

document.getElementById('answer').onclick = function () {
	a = document.getElementById('sideA').value;
	a = Number(a)
	b = document.getElementById('sideB').value;
	b = Number(b)
	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
	document.getElementById('p1').innerHTML = "your number is " + c
}*/




// lesson eighth
/*
let count = 0

document.getElementById('plusBtn').onclick = function () {
	count += 1;
	document.getElementById('count').innerHTML = count
}
document.getElementById('resetBtn').onclick = function () {
	count = 0;
	document.getElementById('count').innerHTML = count
}
document.getElementById('minusBtn').onclick = function () {
	count -= 1;
	document.getElementById('count').innerHTML = count
}
*/




// lesson nineth
/*
let x;
let y;
let z;

document.getElementById('roll').onclick = function () {
	x = Math.floor(Math.random() * 6) + 1;
	y = Math.floor(Math.random() * 6) + 1;
	z = Math.floor(Math.random() * 6) + 1;
	document.getElementById('random1').innerHTML = x
	document.getElementById('random2').innerHTML = y
	document.getElementById('random3').innerHTML = z
}*/




// lesson tenth

/*let userName;

document.getElementById('nameBtn').onclick = function () {
	userName = String(userName)
	userName = document.getElementById('nameType').value;
	// document.getElementById('nameShow').innerHTML = userName.length измеряет длинну введенного текста
	// document.getElementById('nameShow').innerHTML = userName.charAt(0) выводит ту букву корая написана в charAt() только если она есть в веденном тексте
	// document.getElementById('nameShow').innerHTML = userName.indexOf("e") находит первую букву и выводит длину на которой она находится
	// document.getElementById('nameShow').innerHTML = userName.lastIndexOf('e')находит последнюю букву и выводит длину на которой она находится
	// document.getElementById('nameShow').innerHTML = userName.trim() убирает до и посде пробелы
	// document.getElementById('nameShow').innerHTML = userName.toUpperCase() выводит все в upper
	// document.getElementById('nameShow').innerHTML = userName.toLowerCase() выводит все в lower
	// document.getElementById('nameShow').innerHTML = userName.replaceAll("/", "-") переделывает 1 значение на другое
}*/




// lesson eleventh

/*
let fullName;

document.getElementById('showFullName').onclick = function () {
	fullName = String(fullName)
	fullName = document.getElementById('yourName').value;
	document.getElementById('firstName').innerHTML = "your first name is " + fullName.slice(0, fullName.indexOf(" "))
	document.getElementById('secondName').innerHTML = "your second name is" + fullName.slice(fullName.indexOf(" "), fullName.lastIndexOf(" "))
	document.getElementById('thirdName').innerHTML = "your third name is" + fullName.slice(fullName.lastIndexOf(" "))

}*/




// lesson 12

/*let userName;

document.getElementById('showFullName').onclick = function () {
	userName = String(userName);
	userName = document.getElementById('yourName').value;

	document.getElementById('firstName').innerHTML = "your name is " +
		userName.charAt(0).toUpperCase() + userName.slice(1)
}
*/




// lesson 13

/*let age;

document.getElementById('showYourAge').onclick = function () {
	age = document.getElementById('yourAge').value;
	// if (age > 18) {
	// 	document.getElementById('Age').innerHTML = "you can buy an alcohol"
	// }
	// else {
	// 	document.getElementById('Age').innerHTML = "you can't buy an alcohol"
	// }

	if (age == "Russia") {
		document.getElementById('Age').innerHTML = "you can buy an alcohol"
	}

	else if (age == "US") {
		document.getElementById('Age').innerHTML = "you are a great person"
	}

	else {
		document.getElementById('Age').innerHTML = "you can't buy an alcohol"
	}
}*/


// lesson 14

/*
document.getElementById('submitMyCheckbox').onclick = function () {
	let gay = document.getElementById('myCheckbox')
	if (gay.checked) {
		document.getElementById('p1').innerHTML = "do not tach me"
	}
	else {
		document.getElementById('p1').innerHTML = "you are my friend"
	}
}
document.getElementById('submit2').onclick = function () {
	let female = document.getElementById('myRadio1')
	let male = document.getElementById('myRadio2')
	let other = document.getElementById('myRadio3')

	if (female.checked) {
		document.getElementById('p2').innerHTML = "go to a kichen woman"
	}

	else if (male.checked) {
		document.getElementById('p2').innerHTML = "go drink an alcohol"
	}

	else if (other.checked) {
		document.getElementById('p2').innerHTML = "you are fucking GAY!"
	}
	else {
		document.getElementById('p2').innerHTML = "you have to select your gender"
	}
}*/


// lesson 15


/*document.getElementById('submitYourGrade').onclick = function () {
	grades = document.getElementById('inputYourGrade').value;
	switch (true) {
		case grades == 5:
			document.getElementById('p1').innerHTML = "you did a great job"
			break;
		case grades == 4:
			document.getElementById('p1').innerHTML = "you did a good job"
			break;
		case grades == 3:
			document.getElementById('p1').innerHTML = "you were close to fail"
			break;
		case grades == 2:
			document.getElementById('p1').innerHTML = "you are failed"
			break;
		case grades == 1:
			document.getElementById('p1').innerHTML = "you are failed"
			break;
		default:
			document.getElementById('p1').innerHTML = grades + " it's not a gread"
	}
}*/




// lesson 16

/*let deg;

document.getElementById('submitDeg').onclick = function () {
	let sunnyYes = document.getElementById('true');
	let sunny = document.getElementById('false');
	deg = document.getElementById('inpDeg').value;
	switch (true) {
		case deg >= -20 && deg <= 0:
			document.getElementById('p1').innerHTML = "you should wear in warm clothes!"
			break;
		case deg == 0 || deg < 10:
			document.getElementById('p1').innerHTML = "you still should wear in warm clothes"
			break;
		case deg >= 10 && deg <= 15:
			document.getElementById('p1').innerHTML = "you shouldn't wear in warm clothes"
			break;
		case deg > 15 && deg < 25:
			document.getElementById('p1').innerHTML = "it's too warm outside!"
			break;
		case deg >= 25 || deg == 100000:
			document.getElementById('p1').innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAA"
			break;
		default:
			document.getElementById('p1').innerHTML = deg + " it's not a weather"
	}

	switch (true) {
		case sunnyYes.checked:
			document.getElementById('p2').innerHTML = "you shouldn't take a hat or cap"
			break;
		case sunny.checked:
			document.getElementById('p2').innerHTML = "take a hat or cap "
			break;
		default:
			document.getElementById('p2').innerHTML = "does it sunny outside?"
	}
}*/




// lesson 17


/*document.getElementById('submitDeg').onclick = function () {
	let deg = document.getElementById('inpDeg').value;
	let sunnyYes = document.getElementById('true');
	let sunny = document.getElementById('false');
	// со свитчами не раотает
	// 	switch (true) {
	// 		case !deg > 0:
	// 			document.getElementById('p1').innerHTML = "it's frizzing outside!"
	// 			break;
	// 		case !deg < 0:
	// 			document.getElementById('p1').innerHTML = "it's warm outside!"
	// 			break;
	// 		default:
	// 			document.getElementById('p1').innerHTML = "how many??"
	// 	}

	if (!(deg > 0)) {
		document.getElementById('p1').innerHTML = "it's frizzing outside!"
	}
	else {
		document.getElementById('p1').innerHTML = "it's warm outside!"
	}

	if (!(sunnyYes.checked)) {
		document.getElementById('p2').innerHTML = "take a hat or cap "
	}
	else if (!(sunny.checked)) {
		document.getElementById('p2').innerHTML = "you shouldn't take a hat or cap"
	}
	else {
		document.getElementById('p2').innerHTML = "does it sunny outside?"
	}
}*/




// lesson 18

/*let userName;

while (userName == "" || userName == null) {
	userName = window.prompt('enter your name');
}

document.getElementById('userName').innerHTML = 'hello ' + userName + ' we glad to see you again!!!'
*/



// lesson 19

/*let userName;

do {
	userName = window.prompt('enter your name');
} while (userName == "" || userName == null)

document.getElementById('userName').innerHTML = 'hello ' + userName + ' we glad to see you again!!!'
*/



// lesson 20

/*document.getElementById('counterBtn').onclick = function () {
	for (let bomb = document.getElementById('counter').value; bomb > -2; bomb -= 7) {
		console.log(bomb)
		document.getElementById('p1').innerHTML = bomb
	}
}*/


// lesson 21
/*
document.getElementById('counterBtn').onclick = function () {
	let asds = document.getElementById('counter').value
	asds = Number(asds)
	for (asds; asds >= 0; asds += 1) {
		if (asds == 69) {
			continue;
		}
		if (asds == 97) {
			break;
		}
		console.log(asds)
		document.getElementById('p1').innerHTML = asds
	}
}*/



// lesson 22

/*document.getElementById('submitMyCol').onclick = function () {
	let symbols = document.getElementById('mySymbol').value;

	for (gay1 = 1; cols = document.getElementById('myColumns').value >= gay1; gay1 += 1) {
		for (gay2 = 1; rows = document.getElementById('myRows').value >= gay2; gay2 += 1) {
			document.getElementById('p1').innerHTML += symbols;
		}
		document.getElementById('p1').innerHTML += '<br>'
	}
}*/


// lesson 23
/*
document.getElementById('submitInfo').onclick = function hi() {
	let userName = document.getElementById('userName').value;
	let userAge = document.getElementById('userAge').value;
	startProgramm(userName, userAge);
}

function startProgramm(userName, userAge) {
	document.getElementById('p1').innerHTML = "Happy birthday to you <br>" +
		"Happy birthday to you <br>" +
		"Happy birthday to you " + userName + "<br> You are " + userAge + " years old"
}*/



// lesson 24


/*document.getElementById('submitToSeeResult').onclick = function () {
	let width = document.getElementById('width').value;
	let height = document.getElementById('height').value;
	area(width, height);

}

function area(width, height) {
	area = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
	// area = 2 * Math.PI * width
	// area = 4 * Math.PI * (Math.pow(width, 2)) другие формулы:)
	document.getElementById('p1').innerHTML = "your area is " + area
}*/


// lesson 25

/*document.getElementById('seeResult').onclick = function () {
	let man = document.getElementById('imMan').value;
	let woman = document.getElementById('imWoman').value;
	whoAreYou(man, woman);
}

function whoAreYou(man, woman) {
	return man == "yes" || woman == "no" ? document.getElementById('p1').innerHTML = "you are great" : man == "no" || woman == "yes" ? document.getElementById('p1').innerHTML = "you are pice of shit" : document.getElementById('p1').innerHTML = "you should select it or write it right you idiot"
}*/


// lesson 27

/*document.getElementById('submitBtn').onclick = function () {
	let userName = document.getElementById('myName').value;
	document.getElementById('p1').innerHTML = `Hello ${userName} we see that you did not pay taxes, so we dicided to delete you account and steal your money - 1000$ --> 0$:). Have a great day`
}*/


// lesson 28

/*document.getElementById('submitBtn').onclick = function () {
	let userName = document.getElementById('myName').value;
	// let money = 2352352
	let money = 124524567
	// money = money.toLocaleString('ru-RU');
	// money = money.toLocaleString('de-DE');
	// money = money.toLocaleString('en-US');
	// money = money.toLocaleString("en-US", { style: "currency", currency: 'USD' })
	// money = money.toLocaleString("ru-RU", { style: "currency", currency: 'RUB' })
	// money = money.toLocaleString(undefined, { style: "percent" })
	// money = money.toLocaleString(undefined, { style: "unit", unit: "celsius" })
	// document.getElementById('p1').innerHTML = `Hello ${userName} and you know what? your mom as hot as ${money}`
	// document.getElementById('p1').innerHTML = `Hello ${userName} we see that you did not pay taxes, so we dicided to delete you account and steal your money ${money}- 0$:). Have a great day`
}*/


// lesson 29

/*const random = Math.floor((Math.random() * 100) + 1);
let numbers = 0;

document.getElementById('submitNumber').onclick = function () {
	let number = document.getElementById('numberDie').value;
	numbers += 1;

	// if (number == random) {
	// 	document.getElementById('p1').innerHTML = `${random} is right answer and you won with ${numbers} guesses!`
	// }
	// else if (number < random) {
	// 	document.getElementById('p1').innerHTML = ` it's too small`
	// }
	// else {
	// 	document.getElementById('p1').innerHTML = ` it's too big`
	// }

	switch (true) {
		case number == random:
			document.getElementById('p1').innerHTML = `${number} is right answer and you won BTW it took only ${numbers} guesses!`
			break
		case number > random:
			document.getElementById('p1').innerHTML = `It's too big`
			break
		default: document.getElementById('p1').innerHTML = `It's too small`
	}
}*/


// lesson 30


/*document.getElementById('submit').onclick = function () {
	let temp;

	switch (true) {
		case document.getElementById('fahrenheit').checked:
			temp = document.getElementById('number').value;
			temp = Number(temp)
			temp = toCelciuse(temp)
			temp = temp.toLocaleString(undefined, { style: 'unit', unit: 'fahrenheit' });
			document.getElementById('p1').innerHTML = temp
			break;
		case document.getElementById('celciuse').checked:
			temp = document.getElementById('number').value;
			temp = Number(temp);
			temp = toFahrenheit(temp);
			temp = temp.toLocaleString(undefined, { style: 'unit', unit: 'celsius' });
			document.getElementById('p1').innerHTML = temp;
			break;
		default: document.getElementById('p1').innerHTML = "select your temp"
	}

}
function toCelciuse(temp) {
	return (temp - 32) * (5 / 9);
}
function toFahrenheit(temp) {
	return temp * 9 / 5 + 32;
}*/


// lesson 31

/*document.getElementById('submit').onclick = function () {
	let number = document.getElementById('number').value;
	items = ["orange", ' banana', ' apple', ' peach', ' cucumber']
	let push = document.getElementById('number1').checked
	if (push) {
		document.getElementById('p1').innerHTML = `you added: ${items.push(number)} ${items}`
	}
	// else if (number) {
	// 	items = Number(items)
	// 	number = items[number]
	// 	document.getElementById('p1').innerHTML = number
	// }
	else if (document.getElementById('number2').checked) {
		document.getElementById('p1').innerHTML = `you removed: ${items.pop()}`
	}
	else if (document.getElementById('number3').checked) {
		document.getElementById('p1').innerHTML = `you added: ${items.unshift(number)} ${items}`
	}
	else if (document.getElementById('number4').checked) {
		document.getElementById('p1').innerHTML = `you removed: ${items.shift()}`
	}
	else {
		document.getElementById('p1').innerHTML = `you should select what you wanna do`
	}

}*/

/*let money
 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000]

for (let huinia1337= money.length - 1; i >= 0; i -= 7) {
	console.log(huinia1337)
}*/


//lesson 32

/*let something = ['hi', ' I dont', ' now', ' what', ' sould', ' I', ' write', ' sooo..', ' yes']
document.getElementById('submit').onclick = function () {
	if (radio1 = document.getElementById('radio1').checked) {
		something = something.sort()

		for (let some of something) {
			console.log(some)
		}
	}
	else if (radio2 = document.getElementById('radio2').checked) {
		something = something.sort().reverse()
		for (let some of something) {
			console.log(some)
		}
	}
	else {
		document.getElementById('p1').innerHTML = `chose one of the buttons to comtiniu`
	}
}*/

// lesson 33


/*let fruts = ['peach', 'apple', 'banana'];
let vegetables = ['cucumber', 'carrot', 'tomato'];
let meats = ['eggs', 'beaf', 'steak'];
let berrys = ['cherry', 'whatermelow', 'strawberry'];

let products = [fruts, vegetables, meats, berrys];
document.getElementById('show').onclick = function () {
	for (let productsSee of products) {
		for (let product of productsSee) {
			console.log(product)
		}
	}
}
document.getElementById('submit').onclick = function () {
	if (document.getElementById('radio1').checked) {
		let number1 = document.getElementById('number1').value;
		let number2 = document.getElementById('number2').value;
		let text1 = document.getElementById('text1').value;

		products[number1][number2] = text1

		for (let productsSee of products) {
			for (let newList of productsSee) {
				console.log(newList)
				document.getElementById('p1').innerHTML = `it's all gonna cost: $10045634634645725`
			}
		}
	}

	else if (document.getElementById('radio2').checked) {
		for (let productsSee of products) {
			for (let newList of productsSee) {
				console.log(newList)
				document.getElementById('p1').innerHTML = `it's all gonna cost: $100`
			}
		}

	}
	else {

		document.getElementById('p1').innerHTML = `select what would you do`
	}

}*/


// lesson 34

/*
let peopleInFirstGroup = [`monkey1`, `monkey2`, `monkey3`, `monkey4`, `monkey5`]
let peopleInSecondGroup = [`Someone1`, `Someone2`, `Someone3`, `Someone4`, `Someone5`]

peopleInFirstGroup.push(...peopleInSecondGroup)

console.log(...peopleInFirstGroup)

let oneNumber = [1, 1341, 364567, 6786, 796, 352, 7,];

let twoNumber = Math.max(...oneNumber)
console.log(twoNumber)*/


// losson 35

/*let number1 = 2
let number2 = 2
let number3 = 2
let number4 = 2
let number5 = 2
let number7 = 2
let number8 = 2
let number9 = 2
let number6 = 2
let number10 = 2
let number11 = 2
let number12 = 2
let number13 = 2
let number14 = 2
document.getElementById('p1').innerHTML = sum(number1 + number2 + number3 + number4 + number5 + number7 + number6 + number8 + number9)

function sum(...numbers) {
	let total = 0
	for (let idk of numbers) {
		total += idk
	}
	return total
}*/


// lesson 36

/*document.getElementById('submit').onclick = function () {
	let number1 = document.getElementById('number1').value;
	let number2 = document.getElementById('number2').value;
	sum(number1, number2, callBack1)
	function sum(number1, number2, callBack) {
		let result = number1 + number2;
		callBack(result)
	}
	function callBack1(outpute) {
		document.getElementById('p3').innerHTML = outpute
	}
}*/


// lesson 37

/*document.getElementById('submit').onclick = function () {
	let fullName = [document.getElementById('text1').value, document.getElementById('text2').value]
	fullName.forEach(capitalize)
	fullName.forEach(print)
	function capitalize(element, index, array) {
		array[index] = element[0].toUpperCase() + element.substring(1);
	}
	function print(element) {
		document.getElementById('p1').innerHTML = `your name is: ${element}`
	}
}*/



// lesson 38

/*document.getElementById('submit').onclick = function () {
	let pow = document.getElementById('number1').value;
	let multiplide = [pow];
	if (document.getElementById('radio1').checked) {
		multiplide = Math.pow(multiplide, 2);
		document.getElementById('p1').innerHTML = multiplide
	}
	else if (document.getElementById('radio2').checked) {
		multiplide = Math.pow(multiplide, 3);
		document.getElementById('p1').innerHTML = multiplide
	}
	else {
		document.getElementById('p1').innerHTML = 'enter your number'
	}
}
document.getElementById('submit2').onclick = function () {
	let math1 = document.getElementById('number2').value;
	let math2 = document.getElementById('number3').value;
	if (document.getElementById('radio3').checked) {
		let multiplide = [math1 * math2]
		document.getElementById('p2').innerHTML = multiplide
	}
	else if (document.getElementById('radio4').checked) {
		let multiplide = [math1 / math2]
		document.getElementById('p2').innerHTML = multiplide
	}
	else if (document.getElementById('radio5').checked) {
		let multiplide = [math1 - math2]
		document.getElementById('p2').innerHTML = multiplide
	}
	else if (document.getElementById('radio6').checked) {
		let multiplide = [Number(math1) + Number(math2)]
		document.getElementById('p2').innerHTML = multiplide
	}
	else {
		document.getElementById('p2').innerHTML = `write your numbers pls`
	}
}*/