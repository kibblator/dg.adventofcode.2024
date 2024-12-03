import { readFileSync } from "fs";

export const getTextFileLines = (path: string) => {
  const input = getEntireTextFile(path);

  const lines = input.trim().split("\n");
  return lines;
};

export const getEntireTextFile = (path: string) => {
  const input = readFileSync(path, "utf-8");
  return input;
};
