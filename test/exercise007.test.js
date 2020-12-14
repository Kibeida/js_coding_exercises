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

  describe("getScreentimeAlertList", () => {

    let users = [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                      ]
         },
         {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                       { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                       { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                      ]
         },
       ];

    test("users is not provided returns  'users is required'" , () => {
      expect(() => {
        getScreentimeAlertList();
      }).toThrow("users is required");
    });

    test("date is not provided returns  'date is required'" , () => {
        expect(() => {
            getScreentimeAlertList(users);
        }).toThrow("date is required");
    });
  

    test("It received start 1 , end 10 , step = 2  returns ['beth_1234']", () => {
        const result = getScreentimeAlertList(users,"2019-05-04"); //actual output of the function
        const expected = ["beth_1234"];
        expect(result).toEqual(expected);
  
      });
  
  

  });

  describe("hexToRGB", () => {

    test("hexStr not provided returns  'hexStr is required'" , () => {
      expect(() => {
        hexToRGB();
      }).toThrow("hexStr is required");
    });
  
    test("It received #AAA  returns rgb(170,170,170)", () => {
      const result = hexToRGB("#AAA"); //actual output of the function
      const expected = "rgb(170,170,170)";
      expect(result).toEqual(expected);
    });
 
 
    test("It received #FFA07A  returns rgb(255,160,122)", () => {
        const result = hexToRGB("#FFA07A"); //actual output of the function
        const expected = "rgb(255,160,122)";
        expect(result).toEqual(expected);
      });
  });

  describe("findWinner", () => {

    let board1 =     [
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]
       ];
       let board2 =     [
        ["X", "0", null],
        ["0", "0", "0"],
        ["X", null, "0"]
       ];
       let board3 =     [
        ["X", "0", null],
        ["0", "X", "0"],
        ["X", null, "0"]
       ];
    test("board not provided returns  'board is required'" , () => {
      expect(() => {
        findWinner();
      }).toThrow("board is required");
    });
  
    test("X is the winner", () => {
      const result = findWinner(board1); //actual output of the function
      const expected = "X";
      expect(result).toEqual(expected);
    });
    test("0 is the winner", () => {
        const result = findWinner(board2); //actual output of the function
        const expected = "0";
        expect(result).toEqual(expected);
      });
      test("No winner", () => {
        const result = findWinner(board3); //actual output of the function
        const expected = "null";
        expect(result).toEqual(expected);
      });

  });
   