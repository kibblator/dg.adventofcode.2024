const findRule1Indexes = (stones: number[]): number[] => {
  const indexes = [];

  let currentIndex = stones.indexOf(0);
  while (currentIndex !== -1) {
    indexes.push(currentIndex);

    currentIndex = stones.indexOf(0, currentIndex + 1);
  }

  return indexes;
};

const findRule2Indexes = (stones: number[]): number[] => {
  const indexes = [];

  let index = 0;
  for (var stone of stones) {
    if (stone.toString().length % 2 === 0) {
      indexes.push(index);
    }
    index++;
  }

  return indexes;
};

const findRule3Indexes = (
  stones: number[],
  rule1Indexes: number[],
  rule2Indexes: number[]
): number[] => {
  const indexes = [];

  let index = 0;
  for (var {} of stones) {
    if (!rule1Indexes.includes(index) && !rule2Indexes.includes(index)) {
      indexes.push(index);
    }
    index++;
  }

  return indexes;
};

const applyRules = (
  stones: number[],
  rule1: number[],
  rule2: number[],
  rule3: number[]
): number[] => {
  for (const rule of rule1) {
    stones[rule] = 1;
  }

  for (const rule of rule3) {
    let currentValue = stones[rule];
    currentValue *= 2024;
    stones[rule] = currentValue;
  }

  let modifier = 0;
  for (const rule of rule2) {
    const value = stones[rule + modifier].toString();
    const middle = Math.floor(value.length / 2);
    const value1 = value.substring(0, middle);
    const value2 = value.substring(middle, value.length);

    stones = [
      ...stones.slice(0, rule + modifier),
      +value1,
      +value2,
      ...stones.slice(rule + modifier + 1),
    ];

    modifier++;
  }

  return stones;
};

export const pebbles = (input: string, part2: boolean = false) => {
  let stones = input.split(" ").map((s) => +s);
  const numBlinks = part2 ? 75 : 25;

  for (var i = 0; i < numBlinks; i++) {
    console.log(`Running blink ${i}`);
    const rule1Indexes = findRule1Indexes(stones);
    const rule2Indexes = findRule2Indexes(stones);
    const rule3Indexes = findRule3Indexes(stones, rule1Indexes, rule2Indexes);

    stones = applyRules(stones, rule1Indexes, rule2Indexes, rule3Indexes);

    // console.log(`New stones after ${i + 1} blinks: ${JSON.stringify(stones)}`);
  }

  return stones.length;
};
