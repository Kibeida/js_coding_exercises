
const { sumMultiples, isValidDNA, isItPrime, createMatrix, areWeCovered } = require("../challenges/exercise006");

//console.log(sumMultiples);

describe("sumMultiples", () => {
  test("Throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("foo");
    }).toThrow("an Array is required");

    expect(() => {
      sumMultiples(4);
    }).toThrow("an Array is required");
  });
  test("This returns only the sum of numbers that are a multiple of 3 and 5", () => {
    //next comparing the o/p of the function to the expected output.
    const result = sumMultiples([1, 3, 5]); //actual output of the function
    const expected = 8;
    expect(result).toBe(expected);

  });
  test("This works with decimals", () => {
    //next comparing the o/p of the function to the expected output.
    const result = sumMultiples([1, 3, 5.0, 2, 12, 10]); //actual output of the function
    const expected = 30;
    expect(result).toBe(expected);

  });
  test("This returns 0 if none were found", () => {
    //next comparing the o/p of the function to the expected output.

    expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);

  });

});




describe("areWeCovered", () => {

  var staff = [
    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Osama", rota: ["Sunday"] },
    { name: "Noor", rota: ["Sunday", "Wednesday"] },
  ];

  test("staff should be there", () => {
    expect(() => {
      areWeCovered();
    }).toThrow("staff is required");
  });

  test("staff should be there", () => {
    expect(() => {
      areWeCovered(staff);
    }).toThrow("day is required");
  });


  test("It received a staff arry for Sunday , returns true", () => {
    const result = areWeCovered(staff, "Sunday"); //actual output of the function
    const expected = true;
    expect(result).toBe(expected);
  });

  test("It received a staff arry for Tuesday , returns false", () => {
    const result = areWeCovered(staff, "Tuesday"); //actual output of the function
    const expected = false;
    expect(result).toBe(expected);
  });
});



describe("isValidDNA", () => {
  test("This must be a string", () => {
    //next comparing the o/p of the function to the expected output.
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

  });

  test("This string does not contain 'C','G','T','A'", () => {
    //next comparing the o/p of the function to the expected output.
    const result = isValidDNA("avb"); //actual output of the function
    const expected = false;
    expect(result).toBe(expected);

  });

  test("This string contains 'C','G','T','A'", () => {
    //next comparing the o/p of the function to the expected output.
    const result = isValidDNA("CGA"); //actual output of the function
    const expected = true;
    expect(result).toBe(expected);
  });

});



describe("isItPrime", () => {
  test("This must be a number", () => {
    //next comparing the o/p of the function to the expected output.
    expect(() => {
      isItPrime();
    }).toThrow("n is required");

  });

  test("It returns true a prime number is received", () => {
    const result = isItPrime(5); //actual output of the function
    const expected = true;
    expect(result).toBe(expected);

  });

  test("It returns false if a non prime number is received", () => {
    const result = isItPrime(8); //actual output of the function
    const expected = false;
    expect(result).toBe(expected);
  });

});





describe("createMatrix", () => {
  test("This must be a number", () => {
    //next comparing the o/p of the function to the expected output.
    expect(() => {
      createMatrix();
    }).toThrow("n is required");

  });

  test("This can not be undefined", () => {
    //next comparing the o/p of the function to the expected output.
    expect(() => {
      createMatrix(3);
    }).toThrow("fill is required");

  });

  test("It received a number and return an array of n arrays", () => {
    const result = createMatrix(2, 'num'); //actual output of the function
    const expected = [['num', 'num'], ['num', 'num']];
    expect(result).toEqual(expected);
    

  });

});


