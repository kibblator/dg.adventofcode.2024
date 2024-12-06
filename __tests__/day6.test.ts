import { getGridFromFile } from "../src/utils/inputReader";
import { guard, guardObstacle } from "../src/day6/index";

describe("Day 6", () => {
  test("Part 1 Sample", () => {
    const input = getGridFromFile("./src/day6/sample_input.txt");

    const { visitedLocations } = guard(input);

    expect(visitedLocations.length).toEqual(41);
  });

  test("Part 1 Test Input", () => {
    const input = getGridFromFile("./src/day6/test_input.txt");

    const { visitedLocations } = guard(input);

    console.log(`Day 6 Part 1 is: ${visitedLocations.length}`);
  });

  test("Part 2 Sample", () => {
    const input = getGridFromFile("./src/day6/sample_input.txt");

    const result = guardObstacle(input);

    expect(result).toEqual(6);
  });

  test("Part 2 Test Input", () => {
    const input = getGridFromFile("./src/day6/test_input.txt");

    const result = guardObstacle(input);

    console.log(`Day 6 Part 2 is: ${result}`);
  });
});
