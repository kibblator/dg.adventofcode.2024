type Coord = {
  x: number;
  y: number;
};

const getAllIndexesOf = (list: number[], value: number): number[] => {
  let indexes: number[] = [];
  let i = -1;

  while ((i = list.indexOf(value, i + 1)) !== -1) {
    indexes.push(i);
  }

  return indexes;
};

const getZeroCoords = (grid: number[][]): Coord[] => {
  const coords: Coord[] = [];

  for (var y = 0; y < grid.length; y++) {
    const indexes = getAllIndexesOf(grid[y], 0);
    coords.push(
      ...indexes.map((idx) => ({
        x: idx,
        y,
      }))
    );
  }

  return coords;
};

const getTrailScore = (
  currentCoord: Coord,
  grid: number[][],
  part2active: boolean,
  seen: Set<string> = new Set()
): number => {
  if (grid[currentCoord.y]?.[currentCoord.x] === undefined) return 0;

  const currentValue = grid[currentCoord.y][currentCoord.x];

  if (currentValue === 9) {
    if (!seen.has(`${currentCoord.y}|${currentCoord.x}`)) {
      if (!part2active) {
        seen.add(`${currentCoord.y}|${currentCoord.x}`);
      }
      return 1;
    } else return 0;
  }

  const north = grid[currentCoord.y - 1]?.[currentCoord.x];
  const east = grid[currentCoord.y]?.[currentCoord.x + 1];
  const south = grid[currentCoord.y + 1]?.[currentCoord.x];
  const west = grid[currentCoord.y]?.[currentCoord.x - 1];

  return (
    (north && north === currentValue + 1
      ? getTrailScore(
          { y: currentCoord.y - 1, x: currentCoord.x },
          grid,
          part2active,
          seen
        )
      : 0) +
    (east && east === currentValue + 1
      ? getTrailScore(
          { y: currentCoord.y, x: currentCoord.x + 1 },
          grid,
          part2active,
          seen
        )
      : 0) +
    (south && south === currentValue + 1
      ? getTrailScore(
          { y: currentCoord.y + 1, x: currentCoord.x },
          grid,
          part2active,
          seen
        )
      : 0) +
    (west && west === currentValue + 1
      ? getTrailScore(
          { y: currentCoord.y, x: currentCoord.x - 1 },
          grid,
          part2active,
          seen
        )
      : 0)
  );
};

export const hoofIt = (
  grid: number[][],
  part2active: boolean = false
): number => {
  const coordsAtZero = getZeroCoords(grid);

  let result = 0;

  for (var coord of coordsAtZero) {
    const score = getTrailScore(coord, grid, part2active);
    result += score;
  }

  return result;
};
