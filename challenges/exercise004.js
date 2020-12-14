function findSmallNums(nums) {
	if (!nums) throw new Error("nums is required");
	let numbers = []
	nums.forEach(num => {
		if (num < 1) {
			numbers.push(num);
		}
	});
	return numbers;
}

function findNamesBeginningWith(names, char) {
	if (!names) throw new Error("names is required");
	if (!char) throw new Error("char is required");
	let startingWithChar = [];
	names.forEach(name => {
		if (name.startsWith(char)) {
			startingWithChar.push(name);
		}
	});
	return startingWithChar;
}

function findVerbs(words) {
	if (!words) throw new Error("words is required");
	let verbs = [];
	words.forEach(word => {
		if (word.startsWith("to ")) {
			verbs.push(word);
		}
	});
	return verbs;
}

function getIntegers(nums) {
	if (!nums) throw new Error("nums is required");
	let integers = [];
	nums.forEach(num => {
		if (Number.isInteger(num)) {
			integers.push(num);
		}
	});
	return integers;
}

function getCities(users) {
	if (!users) throw new Error("users is required");
	let cities = [];
	users.forEach(user => {
		cities.push(user.data.city.displayName);
	});
	return cities;
}

function getSquareRoots(nums) {
	if (!nums) throw new Error("nums is required");
	let squareRoots = [];
	nums.forEach(num => {
		if (Number.isInteger(Math.sqrt(num))) {
			let i = Math.sqrt(num);
			squareRoots.push(i);
		} else {
			let j = parseFloat(Math.sqrt(num).toFixed(2));
			squareRoots.push(j);
		}
	});
	return squareRoots;
}

function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error("sentences is required");
	if (!str) throw new Error("str is required");
	let result = [];
	sentences.forEach(sentence => {
		let lowserSentence = sentence.toLowerCase();
		let searchStr = str.toLowerCase();
		if (lowserSentence.includes(searchStr)) {
			result.push(sentence);
		}
	});
	return result;
}

function getLongestSides(triangles) {
	if (!triangles) throw new Error("triangles is required");
	let longest = [];
	triangles.forEach(triangle => {
		longest.push(Math.max(triangle[0], triangle[1], triangle[2]))
	});
	return longest;
}
module.exports = {
	findSmallNums,
	findNamesBeginningWith,
	findVerbs,
	getIntegers,
	getCities,
	getSquareRoots,
	findSentencesContaining,
	getLongestSides
};