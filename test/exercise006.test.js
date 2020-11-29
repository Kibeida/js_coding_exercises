describe("sumMultiples", () => {
  test ("Throws an error if not passed an array", () => {
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
