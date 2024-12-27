type Coord = {
  x: number;
  y: number;
};

const getAllIndexesOf = (list: string[], value: string): number[] => {
  let indexes: number[] = [];
  let i = -1;

  while ((i = list.indexOf(value, i + 1)) !== -1) {
    indexes.push(i);
  }

  return indexes;
};

const findAllCoordsOfNode = (grid: string[][], value: string) => {
  const coords: Coord[] = [];

  const yCoords = [];
  let yIndex = 0;
  for (var row of grid) {
    if (row.includes(value)) {
      yCoords.push(yIndex);
      const indexes = getAllIndexesOf(row, value);

      for (var index of indexes) {
        coords.push({ x: index, y: yIndex });
      }
    }
    yIndex++;
  }

  return coords;
};

const inBounds = (height: number, width: number, coord: Coord): boolean => {
  return coord.x > -1 && coord.x < width && coord.y > -1 && coord.y < height;
};

const getAntinodeLocationsForPair = (
  pair1: Coord,
  pair2: Coord,
  height: number,
  width: number,
  part2: boolean
): Coord[] => {
  const xDiff = pair1.x - pair2.x;
  const yDiff = pair1.y - pair2.y;

  const coords: Coord[] = [];

  if (part2) {
    coords.push(pair1, pair2);
    let currentPair1 = pair1;
    let currentPair2 = pair2;

    while (inBounds(height, width, currentPair1)) {
      const antiNodeCoord: Coord = {
        x: currentPair1.x + xDiff,
        y: currentPair1.y + yDiff,
      };

      if (inBounds(height, width, antiNodeCoord)) {
        coords.push(antiNodeCoord);
      }

      currentPair1 = antiNodeCoord;
    }
    while (inBounds(height, width, currentPair2)) {
      const antiNodeCoord: Coord = {
        x: currentPair2.x + xDiff * -1,
        y: currentPair2.y + yDiff * -1,
      };

      if (inBounds(height, width, antiNodeCoord)) {
        coords.push(antiNodeCoord);
      }

      currentPair2 = antiNodeCoord;
    }
  } else {
    const antiNode1Coord: Coord = {
      x: pair1.x + xDiff,
      y: pair1.y + yDiff,
    };

    if (inBounds(height, width, antiNode1Coord)) {
      coords.push(antiNode1Coord);
    }

    const antiNode2Coord: Coord = {
      x: pair2.x + xDiff * -1,
      y: pair2.y + yDiff * -1,
    };

    if (inBounds(height, width, antiNode2Coord)) {
      coords.push(antiNode2Coord);
    }
  }

  return coords;
};

export const resonant = (
  input: string,
  grid: string[][],
  part2: boolean = false
) => {
  const height = grid.length;
  const width = grid[0].length;

  const uniqueNodes = input
    .split("")
    .filter(
      (value, index, array) =>
        value !== "\r" &&
        value !== "\n" &&
        value !== "." &&
        array.indexOf(value) === index
    );

  const nodeLocations: any = {};
  const uniqueLocationsInMap: string[] = [];

  for (var node of uniqueNodes) {
    const coords = findAllCoordsOfNode(grid, node);
    nodeLocations[node] = coords;

    for (var i = 0; i < coords.length - 1; i++) {
      for (var j = i + 1; j < coords.length; j++) {
        const antinodes = getAntinodeLocationsForPair(
          coords[i],
          coords[j],
          height,
          width,
          part2
        );

        for (var antinode of antinodes) {
          if (!uniqueLocationsInMap.includes(JSON.stringify(antinode))) {
            uniqueLocationsInMap.push(JSON.stringify(antinode));
          }
        }
      }
    }
  }

  return uniqueLocationsInMap.length;
};
