const checkHorizontal = (grid: string[][], wordToSearch: string): number => {
  let timesWordFound = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (j + wordToSearch.length > grid[i].length) {
        break;
      }

      let marker = 0;
      let currentLetters = "";
      while (marker < wordToSearch.length) {
        currentLetters += grid[i][j + marker];
        marker++;
      }

      if (currentLetters === wordToSearch) {
        timesWordFound++;
      }
    }
  }

  return timesWordFound;
};

const checkHorizontalReverse = (
  grid: string[][],
  wordToSearch: string
): number => {
  let timesWordFound = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = grid[i].length - 1; j > 0; j--) {
      if (j + 1 - wordToSearch.length < 0) {
        break;
      }

      let marker = 0;
      let currentLetters = "";
      while (marker < wordToSearch.length) {
        currentLetters += grid[i][j - marker];
        marker++;
      }

      if (currentLetters === wordToSearch) {
        timesWordFound++;
      }
    }
  }

  return timesWordFound;
};

const checkVertical = (grid: string[][], wordToSearch: string): number => {
  let timesWordFound = 0;

  for (var i = 0; i < grid[0].length; i++) {
    for (var j = 0; j < grid.length; j++) {
      if (j + wordToSearch.length > grid.length) {
        break;
      }

      let marker = 0;
      let currentLetters = "";
      while (marker < wordToSearch.length) {
        currentLetters += grid[j + marker][i];
        marker++;
      }

      if (currentLetters === wordToSearch) {
        timesWordFound++;
      }
    }
  }

  return timesWordFound;
};

const checkVerticalReverse = (
  grid: string[][],
  wordToSearch: string
): number => {
  let timesWordFound = 0;

  for (var i = 0; i < grid[0].length; i++) {
    for (var j = grid.length - 1; j >= 0; j--) {
      if (j + 1 - wordToSearch.length < 0) {
        break;
      }

      let marker = 0;
      let currentLetters = "";

      while (marker < wordToSearch.length) {
        currentLetters += grid[j - marker][i];
        marker++;
      }

      if (currentLetters === wordToSearch) {
        timesWordFound++;
      }
    }
  }

  return timesWordFound;
};

const checkDiagonal = (grid: string[][], wordToSearch: string): number => {
  let timesWordFound = 0;

  for (var i = 0; i < grid[0].length; i++) {
    for (var j = 0; j < grid.length; j++) {
      try {
        let marker = 0;
        let currentLetters = "";

        while (marker < wordToSearch.length) {
          const letter = grid[i + marker][j + marker];
          if (letter) {
            currentLetters += letter;
          } else {
            break;
          }
          marker++;
        }

        if (currentLetters === wordToSearch) {
          timesWordFound++;
        }
      } catch {
        break;
      }
    }
  }

  return timesWordFound;
};

const checkDiagonalReverse = (
  grid: string[][],
  wordToSearch: string
): number => {
  let timesWordFound = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = grid[0].length - 1; j > 0; j--) {
      try {
        let marker = 0;
        let currentLetters = "";

        while (marker < wordToSearch.length) {
          const letter = grid[i + marker][j - marker];
          if (letter) {
            currentLetters += letter;
          } else {
            break;
          }
          marker++;
        }

        if (currentLetters === wordToSearch) {
          timesWordFound++;
        }
      } catch {
        break;
      }
    }
  }

  return timesWordFound;
};

const checkDiagonalUp = (grid: string[][], wordToSearch: string): number => {
  let timesWordFound = 0;

  for (var i = grid[0].length; i > 0; i--) {
    for (var j = 0; j < grid.length; j++) {
      try {
        let marker = 0;
        let currentLetters = "";

        while (marker < wordToSearch.length) {
          const letter = grid[i - marker][j + marker];
          if (letter) {
            currentLetters += letter;
          } else {
            break;
          }
          marker++;
        }

        if (currentLetters === wordToSearch) {
          timesWordFound++;
        }
      } catch {
        break;
      }
    }
  }

  return timesWordFound;
};

const checkDiagonalUpReverse = (
  grid: string[][],
  wordToSearch: string
): number => {
  let timesWordFound = 0;

  for (var i = grid[0].length; i > 0; i--) {
    for (var j = grid[0].length - 1; j > 0; j--) {
      try {
        let marker = 0;
        let currentLetters = "";

        while (marker < wordToSearch.length) {
          const letter = grid[i - marker][j - marker];
          if (letter) {
            currentLetters += letter;
          } else {
            break;
          }
          marker++;
        }

        if (currentLetters === wordToSearch) {
          timesWordFound++;
        }
      } catch {
        break;
      }
    }
  }

  return timesWordFound;
};

export const ceres = (input: string[], wordToSearch: string) => {
  const grid = [];
  for (var i = 0; i < input.length; i++) {
    const row = input[i].split("");
    grid.push(row);
  }

  let timesFound = 0;
  timesFound += checkHorizontal(grid, wordToSearch);
  timesFound += checkHorizontalReverse(grid, wordToSearch);
  timesFound += checkVertical(grid, wordToSearch);
  timesFound += checkVerticalReverse(grid, wordToSearch);
  timesFound += checkDiagonal(grid, wordToSearch);
  timesFound += checkDiagonalReverse(grid, wordToSearch);
  timesFound += checkDiagonalUp(grid, wordToSearch);
  timesFound += checkDiagonalUpReverse(grid, wordToSearch);
  return timesFound;
};

export const ceres2 = (input: string[]) => {
  const grid = [];
  for (var i = 0; i < input.length; i++) {
    const row = input[i].split("");
    grid.push(row);
  }

  let crosses = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      try {
        if (grid[i][j] === "A") {
          const cross1 = grid[i - 1][j - 1] + "A" + grid[i + 1][j + 1];
          const cross2 = grid[i + 1][j - 1] + "A" + grid[i - 1][j + 1];

          if (
            (cross1 === "MAS" ||
              cross1.split("").reverse().join("") === "MAS") &&
            (cross2 === "MAS" || cross2.split("").reverse().join("") === "MAS")
          ) {
            crosses++;
          }
        }
      } catch {
        break;
      }
    }
  }
  return crosses;
};
