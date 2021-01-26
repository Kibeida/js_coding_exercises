function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city == "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sheep = 0;
  arr.forEach((element) => {
    if (element == "sheep") {
      sheep++;
    }
  });
  return sheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return person.address.postCode.startsWith("M") &&
    person.address.city == "Manchester"
    ? true
    : false;
}
module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
