const getRulesAndPages = (input: string[]) => {
  const orderedRules = [];
  const pageNumbers = [];

  let isRules = true;
  for (var line of input) {
    if (line === "") {
      isRules = false;
      continue;
    }

    if (isRules) {
      orderedRules.push(line);
    } else {
      pageNumbers.push(line.split(",").map((n) => +n));
    }
  }

  return { orderedRules, pageNumbers };
};

const checkSorted = (pages: number[], rules: string[]): boolean => {
  for (var i = 0; i < pages.length; i++) {
    for (var j = 1; j < pages.length; j++) {
      if (rules.includes(`${pages[i]}|${pages[j]}`) && j < i) {
        return false;
      }
      if (rules.includes(`${pages[j]}|${pages[i]}`) && j > i) {
        return false;
      }
    }
  }
  return true;
};

export const print_queue = (input: string[]) => {
  const { orderedRules, pageNumbers } = getRulesAndPages(input);

  let result = 0;
  for (var pages of pageNumbers) {
    if (checkSorted(pages, orderedRules)) {
      const middleNumber = pages[Math.floor(pages.length / 2)];
      result += middleNumber;
    }
  }
  return result;
};
