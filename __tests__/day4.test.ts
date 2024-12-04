import { getTextFileLines } from "../src/utils/inputReader";
import { ceres, ceres2 } from "../src/day4/index";

describe("Day 4", () => {
  test("Part 1 Sample", () => {
    const input = getTextFileLines("./src/day4/sample_input.txt");

    const result = ceres(input, "XMAS");

    expect(result).toEqual(18);
  });

  test("Part 1 Test Input", () => {
    const input = getTextFileLines("./src/day4/test_input.txt");

    const result = ceres(input, "XMAS");

    console.log(`Day 3 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const input = getTextFileLines("./src/day4/sample_input.txt");

    const result = ceres2(input);

    expect(result).toEqual(9);
  });

  test("Part 2 Test Input", () => {
    const input = getTextFileLines("./src/day4/test_input.txt");

    const result = ceres2(input);

    console.log(`Day 3 Part 2 is: ${result}`);
  });
});
