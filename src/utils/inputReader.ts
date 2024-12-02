import { readFileSync } from "fs";
import { join } from "path";

export const getTextFileLines = (path: string) => {
  const inputPath = join(path);
  const input = readFileSync(inputPath, "utf-8");

  const lines = input.trim().split("\n");
  return lines;
};
