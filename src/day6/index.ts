const getGuardStartPos = (grid: string[][]): { row: number; col: number } => {
  const guardIdentifier = "^";

  const row = grid.findIndex((row) => row.includes(guardIdentifier));
  const col = grid[row].indexOf(guardIdentifier);

  return { row, col };
};

const guardIsWithinGrid = (
  guardX: number,
  guardY: number,
  grid: string[][]
): boolean => {
  return (
    guardX >= 0 &&
    guardX < grid[0].length &&
    guardY >= 0 &&
    guardY < grid.length
  );
};

const getProposedMoveSafe = (y: number, x: number, grid: string[][]) => {
  try {
    return grid[y][x];
  } catch {
    return "";
  }
};

const moveGuard = (
  guardFacing: string,
  guardX: number,
  guardY: number,
  grid: string[][]
) => {
  let proposedMove = "";

  switch (guardFacing) {
    case "north":
      proposedMove = getProposedMoveSafe(guardY - 1, guardX, grid);
      if (proposedMove === "#") {
        guardFacing = "east";
      } else {
        guardY -= 1;
      }
      break;
    case "east":
      proposedMove = getProposedMoveSafe(guardY, guardX + 1, grid);
      if (proposedMove === "#") {
        guardFacing = "south";
      } else {
        guardX += 1;
      }
      break;
    case "south":
      proposedMove = getProposedMoveSafe(guardY + 1, guardX, grid);
      if (proposedMove === "#") {
        guardFacing = "west";
      } else {
        guardY += 1;
      }
      break;
    case "west":
      proposedMove = getProposedMoveSafe(guardY, guardX - 1, grid);
      if (proposedMove === "#") {
        guardFacing = "north";
      } else {
        guardX -= 1;
      }
      break;
  }

  return { guardX, guardY, guardFacing };
};

const printGrid = (grid: string[][]) => {
  for (var row of grid) {
    console.log(JSON.stringify(row));
  }
};

export const guard = (grid: string[][]) => {
  let { row: guardY, col: guardX } = getGuardStartPos(grid);
  let guardFacing = "north";

  let visitedLocations = new Set<string>();
  let loop = false;

  while (guardIsWithinGrid(guardX, guardY, grid)) {
    grid[guardY][guardX] = "X";

    const hasVisited = visitedLocations.has(
      `${guardY}|${guardX}|${guardFacing}`
    );
    if (!hasVisited) {
      visitedLocations.add(`${guardY}|${guardX}|${guardFacing}`);
    } else {
      console.log(`looping`);
      loop = true;
      break;
    }

    const {
      guardX: X,
      guardY: Y,
      guardFacing: face,
    } = moveGuard(guardFacing, guardX, guardY, grid);

    guardX = X;
    guardY = Y;
    guardFacing = face;
  }

  const uniqueLocations = new Set(
    Array.from(visitedLocations).map((value: string) => {
      const [x, y] = value.split("|");
      return `${x}|${y}`;
    })
  );
  return { visitedLocations: uniqueLocations, loop };
};

export const guardObstacle = (grid: string[][]) => {
  const startGrid = structuredClone(grid);
  const { visitedLocations } = guard(startGrid);

  const firstItem = visitedLocations.values().next().value!;
  visitedLocations.delete(firstItem);

  let loops = 0;
  let index = 0;

  for (var location of visitedLocations) {
    console.log(`Trying ${index + 1} of ${visitedLocations.size}`);

    const newGrid = structuredClone(grid);
    const [y, x] = location.split("|");

    newGrid[+y][+x] = "#";
    const { loop } = guard(newGrid);

    if (loop) {
      loops++;
    }
    index++;
  }

  return loops;
};
