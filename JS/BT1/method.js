// 1
function repeatString(key, time = 1) {
	if (typeof time !== "number") throw `time:${time} is must number`;
	return key.repeat(time);
}
console.log(repeatString("huy", 2));

// 2
function reverseString(key) {
	if (!key || (key && typeof key !== "string"))
		throw `key not correct! , type must be string`;
	return key.split("").reverse().join("");
}
console.log(reverseString("abcd asd"));

//3
function leapYear(year) {
	return (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;
}
console.log(leapYear(2000));
console.log(leapYear(2001));
console.log(leapYear(1985));

//4
function sumAll(l, r) {
	if (l > r) {
		const t = l;
		l = r;
		r = t;
	}
	l--;
	const sum = (r * (r + 1)) >> 1;
	const remain = (l * (l + 1)) >> 1;
	return sum - remain;
}
console.log(sumAll(-6, -2));

//5
function FtoC(number) {
	return (number - 32) / 1.8;
}
function CtoF(number) {
	return number * 1.8 + 32;
}

console.log(FtoC(32));

console.log(CtoF(20));

//6
function palindromes(str) {
	var i = 0;
	var j = str.length - 1;
	while (i <= j) {
		if (str[i] !== str[j]) return false;
		j--;
		i++;
	}
	return true;
}

console.log(palindromes("huy"));
console.log(palindromes(""));

//7
function caesar(str, step) {
	const mod = step % 26;
	var newStr = "";
	str.split("").forEach(c => {
		if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {
			var number = c.charCodeAt(0) + mod;
			if (
				!(number >= 65 && number <= 90) &&
				!(number >= 97 && number <= 122)
			) {
				if (c >= "A" && c <= "Z") {
					if (number < 65) number = 90 - (65 - number - 1);
					else number = 65 + (number - 90 - 1);
				} else {
					if (number < 97) number = 122 - (97 - number - 1);
					else number = 97 + (number - 122 - 1);
				}
			}
			newStr += String.fromCharCode(number);
		} else {
			newStr += c;
		}
	});
	return newStr;
}

/*

    a-z = 9
    
    start : d


*/

// 1 2 3 4 5
// (5 - (2 + 3)) % 5
// 90 - (70 + 13) % 26

console.log(caesar("Mjqqt, Btwqi!", -5));
console.log(caesar("Z", 1)); // returns 'A'
console.log(caesar("Hello, World!", 5)); //returns 'Mjqqt, Btwqi!'
console.log(caesar("Hey", 5)); // returns 'Mjd'
console.log(caesar("A", 1)); // simply shifts the letter by 1: returns 'B'
