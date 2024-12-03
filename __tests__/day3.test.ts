import { getEntireTextFile } from "../src/utils/inputReader";
import { mullOver } from "../src/day3/index";

describe("Day 3", () => {
  test("Part 1 Sample", () => {
    const input = getEntireTextFile("./src/day3/sample_input.txt");

    const result = mullOver(input);

    expect(result).toEqual(161);
  });

  test("Part 1 Test Input", () => {
    const input = getEntireTextFile("./src/day3/test_input.txt");

    const result = mullOver(input);

    console.log(`Day 3 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const input = getEntireTextFile("./src/day3/sample_input_2.txt");

    const result = mullOver(input, true);

    expect(result).toEqual(48);
  });

  test("Part 2 Test Input", () => {
    const input = getEntireTextFile("./src/day3/test_input.txt");

    const result = mullOver(input, true);

    console.log(`Day 3 Part 2 is: ${result}`);
  });
});
