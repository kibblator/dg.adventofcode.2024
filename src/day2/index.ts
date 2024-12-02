const isSafe = (numbers: number[]): boolean => {
  let direction = undefined;
  let directionSetTimes = 0;
  const levelValidities: boolean[] = [];

  for (var i = 0; i < numbers.length - 1; i++) {
    const minDiff = 1;
    const maxDiff = 3;
    const latestDiff = numbers[i] - numbers[i + 1];
    const diffAbs = Math.abs(latestDiff);

    if (diffAbs < minDiff || diffAbs > maxDiff) {
      levelValidities.push(false);
      continue;
    }

    if (direction === undefined) {
      direction = latestDiff > 0 ? "asc" : "desc";
      directionSetTimes++;
    } else {
      if (latestDiff > 0) {
        if (direction !== "asc") {
          levelValidities.push(false);
          continue;
        }
      } else {
        if (direction !== "desc") {
          levelValidities.push(false);
          continue;
        }
      }
    }
    levelValidities.push(true);
  }

  const validlevels = levelValidities.filter((lv) => lv).length;
  return validlevels === numbers.length - 1;
};

export const redNosedReport = (
  input: string[],
  part2active: boolean = false
) => {
  let numSafe = 0;
  for (var line of input) {
    var numbers = line.split(" ").map((n) => +n);

    if (part2active) {
      const safe = isSafe(numbers);

      if (!safe) {
        for (var i = 0; i < numbers.length; i++) {
          const newNumberArray = [...numbers];
          newNumberArray.splice(i, 1);
          if (isSafe(newNumberArray)) {
            numSafe++;
            break;
          } else {
            continue;
          }
        }
      } else {
        numSafe++;
      }
    } else {
      numSafe = isSafe(numbers) ? (numSafe += 1) : (numSafe += 0);
    }
  }

  return numSafe;
};
