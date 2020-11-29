const {sumDigits,createRange,getScreentimeAlertList,hexToRGB ,findWinner} = require("../challenges/exercise007");


describe("sumDigits", () => {
    test("This must be a number" , () => {
      //next comparing the o/p of the function to the expected output.
      expect(() => {
        sumDigits();
      }).toThrow("n is required");
  
    });
  
    test("It received 123  should return 6", () => {
      const result = sumDigits(123); //actual output of the function
      const expected = 6;
      expect(result).toBe(expected);

    });

    test("It received 532 should returns 10", () => {
      const result = sumDigits(532); //actual output of the function
      const expected = 10;
      expect(result).toBe(expected);
    });

  });

  describe("createRange", () => {

    test("Start not provided returns  'start is required'" , () => {
      expect(() => {
        createRange();
      }).toThrow("start is required");
    });

    test("End not provided returns  'end is required'" , () => {
        expect(() => {
          createRange(2);
        }).toThrow("end is required");
    });
  
    test("It received start 1, end 10 and step = 2  returns [1,3,5,7,9,10]", () => {
      const result = createRange(1,10,2); //actual output of the function
      const expected = [1,3,5,7,9,10];
      expect(result).toEqual(expected);

    });

    test("It received start 1 , end 15 , step = 4 returns [1,5,9,13,15]", () => {
        const result = createRange(1,15,4); //actual output of the function
        const expected = [1,5,9,13,15];
        expect(result).toEqual(expected);
  
      });

  });

   