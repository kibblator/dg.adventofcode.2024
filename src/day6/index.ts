const getGuardStartPos = (
  grid: string[][]
): { row: number; col: number; guardFacing: string } => {
  const guardIdentifier = "^";

  const row = grid.findIndex((row) => row.includes(guardIdentifier));
  const col = grid[row].indexOf(guardIdentifier);

  return { row, col, guardFacing: "north" };
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
  return guardIsWithinGrid(x, y, grid) ? grid[y][x] : "";
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

export const guard = (
  grid: string[][],
  startLocation:
    | { col: number; row: number; guardFacing: string }
    | undefined = undefined
) => {
  let {
    row: guardY,
    col: guardX,
    guardFacing,
  } = startLocation || getGuardStartPos(grid);
  let visitedLocations = new Set<string>();
  let loop = false;

  while (guardIsWithinGrid(guardX, guardY, grid)) {
    const hasVisited = visitedLocations.has(
      `${guardY}|${guardX}|${guardFacing}`
    );
    if (!hasVisited) {
      visitedLocations.add(`${guardY}|${guardX}|${guardFacing}`);
    } else {
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

  const uniqueLocations = new Set<string>();
  const seenLocations = new Set<string>();

  for (const entry of visitedLocations) {
    const [x, y] = entry.split("|");
    const key = `${x}|${y}`;

    if (!seenLocations.has(key)) {
      seenLocations.add(key);
      uniqueLocations.add(entry);
    }
  }

  return {
    visitedLocations: uniqueLocations,
    loop,
  };
};

export const guardObstacle = (grid: string[][]) => {
  const { visitedLocations } = guard(grid);

  const firstItem = visitedLocations.values().next().value!;
  visitedLocations.delete(firstItem);

  let loops = 0;

  let startLocation;
  for (var location of visitedLocations) {
    const newGrid = structuredClone(grid);
    const [y, x, facing] = location.split("|");

    newGrid[+y][+x] = "#";

    const { loop } = guard(newGrid, startLocation);

    startLocation = {
      col: +x,
      row: +y,
      guardFacing: facing,
    };

    if (loop) {
      loops++;
    }
  }

  return loops;
};
