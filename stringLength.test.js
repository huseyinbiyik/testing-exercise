const stringLength = require("./stringLength.js");

test("returns  the length of the string", () => {
  expect(stringLength("hello")).toBe(5);
});

test("return error if the string is not between 1-10 characters", () => {
  expect(() => stringLength()).toThrow(Error);
});
