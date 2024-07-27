import { getCoolName } from "../app/Service";

describe("Service test suit", () => {
  test("Name should be cool", () => {
    const actual = getCoolName();
    const expected = "CoolName";
    expect(actual).toBe(expected);
  });
});
