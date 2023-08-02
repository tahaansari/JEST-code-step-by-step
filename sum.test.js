const sum = require("./sum");

// test("first test", () => {
//   expect(sum(10, 10)).toBe(30);
// });

// test("object testing", () => {
//   expect(sum()).toEqual({ name: "tah" });
// });

// test("string testing", () => {
//   expect(sum("Hello")).toMatch("Hello");
// });

test("variable testing", () => {
  expect(sum).toMatch(/ll/);
});
