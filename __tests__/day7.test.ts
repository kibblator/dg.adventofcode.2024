import { getGridFromFile, getTextFileLines } from "../src/utils/inputReader";
import { bridgeRepair } from "../src/day7/index";

describe("Day 7", () => {
  test("Part 1 Sample", () => {
    const input = getTextFileLines("./src/day7/sample_input.txt");

    const result = bridgeRepair(input);

    expect(result).toEqual(3749);
  });

  test("Part 1 Test Input", () => {
    const input = getTextFileLines("./src/day7/test_input.txt");

    const result = bridgeRepair(input);

    console.log(`Day 7 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const input = getTextFileLines("./src/day7/sample_input.txt");

    const result = bridgeRepair(input, true);

    expect(result).toEqual(11387);
  });

  test("Part 2 Test Input", () => {
    const input = getTextFileLines("./src/day7/test_input.txt");

    const result = bridgeRepair(input, true);

    console.log(`Day 7 Part 2 is: ${result}`);
  });
});
