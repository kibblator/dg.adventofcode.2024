import { readFileSync } from "fs";
import { join } from "path";

export const getTextFileLines = (path) => {
  const inputPath = join(__dirname, path);
  const input = readFileSync(inputPath, "utf-8");

  const lines = input.trim().split("\n");
  return lines;
};
