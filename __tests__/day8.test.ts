import {
  getEntireTextFile,
  getGridFromFile,
  getTextFileLines,
} from "../src/utils/inputReader";
import { resonant } from "../src/day8/index";

describe("Day 8", () => {
  const allSampleInput = getEntireTextFile("./src/day8/sample_input.txt");
  const sampleGrid = getGridFromFile<string>("./src/day8/sample_input.txt");
  const allTestInput = getEntireTextFile("./src/day8/test_input.txt");
  const testGrid = getGridFromFile<string>("./src/day8/test_input.txt");

  test("Part 1 Sample", () => {
    const result = resonant(allSampleInput, sampleGrid);

    expect(result).toEqual(14);
  });

  test("Part 1 Test Input", () => {
    const result = resonant(allTestInput, testGrid);

    console.log(`Day 8 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const result = resonant(allSampleInput, sampleGrid, true);

    expect(result).toEqual(34);
  });

  test("Part 2 Test Input", () => {
    const result = resonant(allTestInput, testGrid, true);

    console.log(`Day 8 Part 2 is: ${result}`);
  });
});
