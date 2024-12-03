export const mullOver = (input: string, part2active: boolean = false) => {
  var mulRegex = new RegExp(/(mul\([0-9]+,[0-9]+\))|(do\(\))|(don't\(\))/g);

  var mulMatches = input.match(mulRegex);

  if (!mulMatches) {
    return 0;
  }

  let result = 0;
  let active = true;

  for (var i = 0; i < mulMatches.length; i++) {
    if (mulMatches[i] === "do()") {
      active = true;
      continue;
    } else if (mulMatches[i] === "don't()") {
      if (part2active) {
        active = false;
      }
      continue;
    }

    if (active) {
      var numbers = mulMatches[i]
        .replace("mul(", "")
        .replace(")", "")
        .split(",");
      result += +numbers[0] * +numbers[1];
    }
  }

  return result;
};
