let numBlinks = 0;

const blink = (
  stone: number,
  currentBlink: number = 0,
  cache: any = {}
): number => {
  if (currentBlink === numBlinks) {
    return 1;
  }

  const cacheKey = `${stone}|${currentBlink}`;

  currentBlink++;

  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  if (stone === 0) {
    cache[cacheKey] = blink(1, currentBlink, cache);
  } else if (stone.toString().length % 2 === 0) {
    const middle = Math.floor(stone.toString().length / 2);
    const start = +stone.toString().substring(0, middle);
    const end = +stone.toString().substring(middle);

    cache[cacheKey] =
      blink(start, currentBlink, cache) + blink(end, currentBlink, cache);
  } else {
    cache[cacheKey] = blink(stone * 2024, currentBlink, cache);
  }

  return cache[cacheKey];
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
