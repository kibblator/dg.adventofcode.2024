import { getEntireTextFile, getGridFromFile } from "../src/utils/inputReader";
import { defrag } from "../src/day9/index";

describe("Day 9", () => {
  test("Part 1 Sample", () => {
    const input = getEntireTextFile("./src/day9/sample_input.txt");

    const result = defrag(input);

    expect(result).toEqual(1928);
  });

  test("Part 1 Sample 2", () => {
    const input = getEntireTextFile("./src/day9/sample_input_2.txt");

    const result = defrag(input);

    console.log(`Sample 2 looks like ${result}`);
  });

  test("Part 1 Test Input", () => {
    const input = getEntireTextFile("./src/day9/test_input.txt");

    const result = defrag(input);

    console.log(`Day 9 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const input = getEntireTextFile("./src/day9/sample_input.txt");

    const result = defrag(input, true);

    expect(result).toEqual(2858);
  });

  test("Part 2 Test Input", () => {
    const input = getEntireTextFile("./src/day9/test_input.txt");

    const result = defrag(input, true);

    console.log(`Day 9 Part 2 is: ${result}`);
  });
});
