const {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require("./index.js");

const myMock = jest.fn();

getFullName(("Arya", "Stark"), myMock);

isPalindrome("racecar", myMock);

getCircumference(3, myMock);

getArea(10, myMock);

test("'Arya' and 'Stark' to equal Arya Stark", () => {
  expect(getFullName("Arya", "Stark")).toBe("Arya Stark");
});

test("'racecar' to equal true", () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test("3 to equal 'The circumference is 18.857142857142858'", () => {
  expect(getCircumference(3)).toBe("The circumference is 18.857142857142858");
});

test("10 to equal 'The area is 314.2857142857143'", () => {
  expect(getArea(10)).toBe("The area is 314.2857142857143");
});
