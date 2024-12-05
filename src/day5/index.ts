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

const sortPage = (pages: number[], rules: string[]) => {
  var sorted = false;
  while (sorted === false) {
    sorted = true;
    outer: for (var i = 0; i < pages.length; i++) {
      for (var j = 1; j < pages.length; j++) {
        if (rules.includes(`${pages[i]}|${pages[j]}`) && j < i) {
          let temp = pages[i];
          pages[i] = pages[j];
          pages[j] = temp;
          sorted = false;
          break outer;
        }
        if (rules.includes(`${pages[j]}|${pages[i]}`) && j > i) {
          let temp = pages[i];
          pages[i] = pages[j];
          pages[j] = temp;
          sorted = false;
          break outer;
        }
      }
    }
  }

  return pages;
};

export const print_queue = (input: string[], part2active: boolean = false) => {
  const { orderedRules, pageNumbers } = getRulesAndPages(input);

  const sortedPages = [];
  const unsortedPages = [];
  for (var pages of pageNumbers) {
    if (checkSorted(pages, orderedRules)) {
      sortedPages.push(pages);
    } else {
      unsortedPages.push(pages);
    }
  }

  let result = 0;
  if (!part2active) {
    for (var pages of sortedPages) {
      const middleNumber = pages[Math.floor(pages.length / 2)];
      result += middleNumber;
    }
  } else {
    for (var pages of unsortedPages) {
      const sortedPage = sortPage(pages, orderedRules);
      const middleNumber = sortedPage[Math.floor(sortedPage.length / 2)];
      result += middleNumber;
    }
  }

  return result;
};
