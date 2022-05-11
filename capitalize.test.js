const capitalize = require("./capitalize");

test("capitalize the string", () => {
  expect(capitalize("hello")).toBe("Hello");
});