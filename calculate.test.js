const calculate = require("./calculate");

describe("calculate sum method", () => {
  test("sum two parameters properly", () => {
    expect(calculate.sum(2, 3)).toBe(5);
  });

  test("sum two negative parameters properly", () => {
    expect(calculate.sum(-2, -3)).toBe(-5);
  });

  test("sum even only one parameter provided", () => {
    expect(calculate.sum(2)).toBe(2);
  });
});

describe("calculate subtract method", () => {
  test("subtract two parameters properly", () => {
    expect(calculate.subtract(5, 3)).toBe(2);
  });

  test("subtract smaller number than bigger one", () => {
    expect(calculate.subtract(2, 3)).toBe(-1);
  });

  test("subtract even only one parameter provided", () => {
    expect(calculate.subtract(2)).toBe(2);
  });
});

describe("calculate divide method", () => {
  test("divide two parameters properly", () => {
    expect(calculate.divide(6, 3)).toBe(2);
  });

  test("divide negative numbers", () => {
    expect(calculate.divide(-6, -3)).toBe(2);
  });

  test("subtract even only one parameter provided", () => {
    expect(calculate.divide(2)).toBe(2);
  });
});

describe("calculate multiply method", () => {
  test("multiply two parameters properly", () => {
    expect(calculate.multiply(5, 3)).toBe(15);
  });

  test("multiply negative numbers", () => {
    expect(calculate.multiply(-2, -3)).toBe(6);
  });

  test("subtract even only one parameter provided", () => {
    expect(calculate.multiply(2)).toBe(2);
  });
});
