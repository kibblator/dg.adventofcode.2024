import { getEntireTextFile } from "../src/utils/inputReader";
import { pebbles } from "../src/day11/index";

const sampleInput = getEntireTextFile("./src/day11/sample_input.txt");
const input = getEntireTextFile("./src/day11/test_input.txt");

describe("Day 11", () => {
  test("Part 1 Sample 1", () => {
    const result = pebbles(sampleInput);

    expect(result).toEqual(55312);
  });

  test("Part 1 Test Input", () => {
    const result = pebbles(input);

    console.log(`Day 11 Part 1 is: ${result}`);
  });

  test("Part 2 Test Input", () => {
    const result = pebbles(input, true);

    console.log(`Day 11 Part 2 is: ${result}`);
  });
});
