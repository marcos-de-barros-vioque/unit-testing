import { greet } from "./greet.js";

describe("greet", () => {
  test('returns a string "Hello Stefan!" if called greet("Stefan")', () => {
    const result = greet("Stefan");
    expect(result).toBe("Hello Stefan!");
  });
  test('returns a string "Hello Currywurst" if called greet()', () => {
    const result = greet();
    expect(result).toBe("Hello Currywurst!");
  });
  test('returns a string "Hello Coach!" if called greet("Thomas") or greet("Stefan")', () => {
    const result = greet("Thomas");
    expect(result).toBe("Hello Coach");
    expect(greet("Stefan")).toBe("Hello Coach!");
  });
});
