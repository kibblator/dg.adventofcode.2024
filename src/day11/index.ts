let numBlinks = 0;

const blink = (
  stone: number,
  stoneCount: number = 1,
  currentBlink: number = 0
): number => {
  if (currentBlink === numBlinks) {
    return stoneCount;
  }

  currentBlink++;
  if (stone === 0) {
    return blink(1, stoneCount, currentBlink);
  } else if (stone.toString().length % 2 === 0) {
    const middle = Math.floor(stone.toString().length / 2);
    const start = +stone.toString().substring(0, middle);
    const end = +stone.toString().substring(middle);

    return (
      blink(start, stoneCount, currentBlink) +
      blink(end, stoneCount, currentBlink)
    );
  } else {
    return blink(stone * 2024, stoneCount, currentBlink);
  }
};

export const pebbles = (input: string, part2: boolean = false) => {
  let stones = input.split(" ").map((s) => +s);

  numBlinks = part2 ? 75 : 25;

  let numStones = 0;

  for (var i = 0; i < stones.length; i++) {
    numStones += blink(stones[i]);
  }

  return numStones;
};
