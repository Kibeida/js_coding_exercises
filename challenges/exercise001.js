function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
  // Add your code here!
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  afterVat = (originalPrice / 100) * vatRate + originalPrice
  if (afterVat % 1 === 0) {
    return afterVat;
  }
  else {
    return parseFloat(afterVat.toFixed(2));
  }



  // Add your code here!
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  reductionAmount = (originalPrice / 100) * reduction;
  if (reductionAmount % 1 === 0) {
    return originalPrice - reductionAmount;
  } else {
    parseFloat(reductionAmount.toFixed(2));
    return originalPrice - parseFloat(reductionAmount.toFixed(2));

  }

  // Add your code here!

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  }
  else {
    position = str.length / 2 - 1;
    length = 2;
  }


  return str.substring(position, position + length);

  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitWord = word.split("");
  let reverseWord = splitWord.reverse();
  return reverseWord.join("");

  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  const reverseWords = words.map(word => word.split("").reverse().join(""));

  return reverseWords;

  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  linuxUsers = 0;

  const filteredItems = users.filter((user) => {
    //console.log(user.OS);
    if (user.type === "Linux") {
      linuxUsers++
    }
  })
  return (linuxUsers);


  // Add your code here!

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];

  }
  if (total / scores.length % 1 === 0) {
    return total / scores.length;
  }
  else {
    let meanScore = (total / scores.length).toFixed(2);
    return parseFloat(meanScore);
  }

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 5 === 0 && n % 3 === 0) {
    return "fizzbuzz";
  }
  else if (n % 5 === 0) {
    return "buzz";
  }
  else if (n % 3 === 0) {
    return "fizz";
  }
  else {
    return n;
  }
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
