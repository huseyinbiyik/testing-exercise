const reverseString = require("./reverseString");

test("reverse the string given", () => {
  expect(reverseString("hello")).toBe("olleh");
});