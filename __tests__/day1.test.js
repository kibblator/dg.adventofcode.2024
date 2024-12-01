import { hysteria, hysteria_similarity } from "../src/day1";
import { getTextFileLines } from "../src/utils/inputReader";

describe("Day 1", () => {
  test("part 1 example", () => {
    const inputLines = getTextFileLines("../day1/sample_input.txt");
    const result = hysteria(inputLines);

    expect(result).toEqual(11);
  });

  test("part 1 test input", () => {
    const inputLines = getTextFileLines("../day1/test_input.txt");
    const result = hysteria(inputLines);

    console.log(`Part 1 is: ${result}`);
  });

  test("part 2 sample input", () => {
    const inputLines = getTextFileLines("../day1/sample_input.txt");
    const result = hysteria_similarity(inputLines);

    expect(result).toEqual(31);
  });

  test("part 2 test input", () => {
    const inputLines = getTextFileLines("../day1/test_input.txt");
    const result = hysteria_similarity(inputLines);

    console.log(`Part 2 is: ${result}`);
  });
});
