/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */

const sumMultiples = (arr) => {
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");
  let total = 0;
  arr.forEach((num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      total += num;
    }
  });
  return total;
};
/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  let paterns = ["C", "G", "T", "A"];
  let result = true;
  let strArray = str.split("");
  strArray.forEach((item) => {
    if (!paterns.includes(item)) result = false;
  });
  return result;
};
/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA,
 * T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  let strArray = str.split("");
  let result = "";
  strArray.forEach((dnaItem) => {
    if (dnaItem == "T") {
      result += "A";
    } else if (dnaItem == "C") {
      result += "G";
    } else if (dnaItem == "A") {
      result += "T";
    } else if (dnaItem == "G") {
      result += "C";
    }
    console.log(result);
  });
  return result;
};
/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  return n % 2 !== 0 ? true : false;
};
/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let result = [];
  for (let i = 0; i < n; i++) {
    let rowArray = [];
    for (let j = 0; j < n; j++) {
      rowArray.push(fill);
    }
    result.push(rowArray);
  }
  return result;
};
/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let staffPerDay = 0;
  staff.forEach((emp) => {
    if (emp.rota.includes(day)) staffPerDay += 1;
  });
  return staffPerDay >= 3 ? true : false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
};
