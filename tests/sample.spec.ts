import { add } from "../src/helpers/sample";

it("should be same string", async () => {
  expect(add(1, 1)).toBe(2);
});
