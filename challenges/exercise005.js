const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error("nums is required");
	if (n === undefined) throw new Error("n is required");
	if (nums.indexOf(n) === -1) return null;
	if (nums.indexOf(n) === nums.length - 1) return null;
	let currentNumberIndex = nums.indexOf(n);
	return nums[currentNumberIndex + 1];
};
const count1sand0s = str => {
	if (str === undefined) throw new Error("str is required");
	let strArray = str.split("");
	let zerosCount = 0;
	let onesCount = 0;
	strArray.forEach(element => {
		if (element == 0) zerosCount += 1;
		if (element == 1) onesCount += 1;
	});
	let result = {
		0: zerosCount,
		1: onesCount
	};
	return result;
};
const reverseNumber = n => {
	if (n === undefined) throw new Error("n is required");
	let str = n.toString().split("");
	let reverseStr = str.reverse();
	return Number(reverseStr.join(''));
};
const sumArrays = arrs => {
	if (arrs === undefined) throw new Error("arrs is required");
	let result = arrs.reduce((count, arr) => {
		let arrayCount = arr.reduce((a, b) => {
			return a + b;
		}, 0);
		return count + arrayCount;
	}, 0);
	return result;
};
const arrShift = arr => {
	if (arr === undefined) throw new Error("arr is required");
	if (arr.length < 2) return arr;
	let result = [];
	if (arr.length === 2) {
		result[0] = arr[1];
		result[1] = arr[0];
		return result;
	}
	for (let index = 0; index < arr.length; index++) {
		if (index === 0) result.push(arr[arr.length - 1]);
		else if (index === arr.length - 1) result.push(arr[0]);
		else result.push(arr[index]);
	};
	return result;
};
const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error("haystack is required");
	if (searchTerm === undefined) throw new Error("searchTerm is required");
	let valuesArray = Object.values(haystack).join(" ").toLowerCase().split(" ");
	if (valuesArray.includes(searchTerm.toLowerCase())) {
		return true;
	} else {
		return false
	}
};
const getWordFrequencies = str => {
	if (str === undefined) throw new Error("str is required");
	let punctuationMarks = "/[.,\/#!$%\^&\*;:{}?=\-_`~()]/g,/";
	let strArray = str.split('').filter(l => {
		return punctuationMarks.indexOf(l) === -1
	}).join('').toLowerCase().split(" ");
	let result = {};
	strArray.forEach(word => {
		if (!result.hasOwnProperty(word)) {
			result[word] = 1
		} else {
			result[word] += 1;
		}
	});
	return result;
};
module.exports = {
	findNextNumber,
	count1sand0s,
	reverseNumber,
	sumArrays,
	arrShift,
	findNeedle,
	getWordFrequencies
};