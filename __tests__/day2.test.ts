import { getTextFileLines } from "../src/utils/inputReader";
import { redNosedReport } from "../src/day2/index";

describe("Day 2", () => {
  test("Part 1 Sample", () => {
    const input = getTextFileLines("./src/day2/sample_input.txt");

    const result = redNosedReport(input);

    expect(result).toEqual(2);
  });

  test("Part 1 Test Input", () => {
    const input = getTextFileLines("./src/day2/test_input.txt");

    const result = redNosedReport(input);

    console.log(`Day 2 Part 1 is: ${result}`);
  });

  test("Part 2 Sample", () => {
    const input = getTextFileLines("./src/day2/sample_input.txt");

    const result = redNosedReport(input, true);

    expect(result).toEqual(4);
  });

  test("Part 2 Test Input", () => {
    const input = getTextFileLines("./src/day2/test_input.txt");

    const result = redNosedReport(input, true);

    console.log(`Day 2 Part 2 is: ${result}`);
  });
});
