function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  if (nums.length == 0) {
    return [];
  } else {
    return (Array.from(nums, x => x * x));
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  var result = "";
  words.forEach((word, index) => {
    if (index === 0) {
      result += word.charAt(0);
    } else {
      result += word.charAt(0).toUpperCase()
    }
    result += word.slice(1);
  });

  return result;

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  var result = 0;
  people.forEach(person => {
    if (person !== undefined || person !== null) {
      result += person.subjects.length;
    }
  });

  return result;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let result = false;
  menu.forEach(item => {
    if (item.ingredients.indexOf(ingredient) !== -1) {
      result = true;
    }
  });

  return result;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!

  let rduplicate = [];
  let distinctArray1 = arr1.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  let distinctArray2 = arr2.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  distinctArray1.forEach(number => {
    if (distinctArray2.indexOf(number) !== -1) {
      rduplicate.push(number);
    }
  });
  return rduplicate.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
