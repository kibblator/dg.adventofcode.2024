import { getTextFileLines } from "../src/utils/inputReader";
import { print_queue } from "../src/day5/index";

describe("Day 5", () => {
  test("Part 1 Sample", () => {
    const input = getTextFileLines("./src/day5/sample_input.txt");

    const result = print_queue(input);

    expect(result).toEqual(143);
  });

  test("Part 1 Test Input", () => {
    const input = getTextFileLines("./src/day5/test_input.txt");

    const result = print_queue(input);

    console.log(`Day 5 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const input = getTextFileLines("./src/day5/sample_input.txt");

    const result = print_queue(input, true);

    expect(result).toEqual(123);
  });

  test("Part 2 Test Input", () => {
    const input = getTextFileLines("./src/day5/test_input.txt");

    const result = print_queue(input, true);

    console.log(`Day 5 Part 2 is: ${result}`);
  });
});
