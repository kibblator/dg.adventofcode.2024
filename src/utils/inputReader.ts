import { readFileSync } from "fs";

export const getTextFileLines = (path: string): string[] => {
  const input = getEntireTextFile(path);

  const lines = input.trim().split(/\r?\n/);
  return lines;
};

export const getEntireTextFile = (path: string): string => {
  const input = readFileSync(path, "utf-8");
  return input;
};

export const getGridFromFile = <T = string>(
  path: string,
  transform: (char: string) => T = (char) => char as T
): T[][] => {
  const input = getTextFileLines(path);

  const grid = [];
  for (var i = 0; i < input.length; i++) {
    const row = input[i].trim().split("").map(transform);
    grid.push(row);
  }

  return grid;
};
