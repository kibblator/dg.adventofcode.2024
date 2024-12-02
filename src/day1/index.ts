const getArrays = (input: string[]) => {
  let lhs = [];
  let rhs = [];

  for (var line of input) {
    const [a, b] = line.split(/\s+/);
    lhs.push(+a);
    rhs.push(+b);
  }

  lhs = lhs.sort();
  rhs = rhs.sort();

  return { lhs, rhs };
};

export const hysteria = (input: string[]) => {
  const { lhs, rhs } = getArrays(input);

  let result = 0;

  for (var i = 0; i < lhs.length; i++) {
    const toAdd = rhs[i] > lhs[i] ? rhs[i] - lhs[i] : lhs[i] - rhs[i];
    result += toAdd;
  }

  return result;
};

export const hysteria_similarity = (input: string[]) => {
  const { lhs, rhs } = getArrays(input);

  let result = 0;

  for (var i = 0; i < lhs.length; i++) {
    const current = lhs[i];
    const count = rhs.filter((x) => x == current).length;

    result += current * count;
  }

  return result;
};
