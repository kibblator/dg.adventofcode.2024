import { getGridFromFile } from "../src/utils/inputReader";
import { hoofIt } from "../src/day10/index";

const sampleInput = getGridFromFile<number>(
  "./src/day10/sample_input.txt",
  (char) => +char
);

const input = getGridFromFile<number>(
  "./src/day10/test_input.txt",
  (char) => +char
);

describe("Day 10", () => {
  test("Part 1 Sample 1", () => {
    const result = hoofIt(sampleInput);

    expect(result).toEqual(36);
  });

  test("Part 1 Test Input", () => {
    const result = hoofIt(input);

    console.log(`Day 10 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const result = hoofIt(sampleInput, true);

    expect(result).toEqual(81);
  });

  test("Part 2 Test Input", () => {
    const result = hoofIt(input, true);

    console.log(`Day 10 Part 2 is: ${result}`);
  });
});
