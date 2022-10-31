import { greet } from "./greet.js";

describe("greet", () => {
  test('returns a string "Hello Stefan!" if called greet("Stefan")', () => {
    const result = greet("Stefan");
    expect(result).toBe("Hello Stefan!");
  });
});
