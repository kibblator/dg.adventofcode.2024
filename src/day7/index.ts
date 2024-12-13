import { TestContext } from "node:test";

const isPossibleTestValue = (
  testValue: number,
  startNumber: number,
  remainingNumbers: number[]
): boolean => {
  if (startNumber > testValue) return false;

  const poppedNumber = remainingNumbers[0];

  remainingNumbers.splice(0, 1);

  const result1 = startNumber * poppedNumber;
  const result2 = startNumber + poppedNumber;

  if (remainingNumbers.length === 0) {
    if (result1 === testValue || result2 === testValue) {
      return true;
    } else {
      return false;
    }
  } else {
    return (
      isPossibleTestValue(testValue, result1, [...remainingNumbers]) ||
      isPossibleTestValue(testValue, result2, [...remainingNumbers])
    );
  }
};

const isPossibleTestValue2 = (
  testValue: number,
  startNumber: number,
  remainingNumbers: number[]
): boolean => {
  if (startNumber > testValue) return false;

  const poppedNumber = remainingNumbers[0];

  remainingNumbers.splice(0, 1);

  const result1 = startNumber * poppedNumber;
  const result2 = startNumber + poppedNumber;
  const result3 = +`${startNumber}${poppedNumber}`;

  if (remainingNumbers.length === 0) {
    if (
      result1 === testValue ||
      result2 === testValue ||
      result3 === testValue
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return (
      isPossibleTestValue2(testValue, result1, [...remainingNumbers]) ||
      isPossibleTestValue2(testValue, result2, [...remainingNumbers]) ||
      isPossibleTestValue2(testValue, result3, [...remainingNumbers])
    );
  }
};

export const bridgeRepair = (input: string[], part2Active: boolean = false) => {
  let result = 0;

  for (var line of input) {
    const [testValue, valuesString] = line.split(":");

    let initialNumbers = valuesString
      .trim()
      .split(" ")
      .map((v) => +v);

    const poppedNumber = initialNumbers[0];
    initialNumbers.splice(0, 1);

    if (
      part2Active &&
      isPossibleTestValue2(+testValue, poppedNumber, [...initialNumbers])
    ) {
      result += +testValue;
    } else if (
      isPossibleTestValue(+testValue, poppedNumber, [...initialNumbers])
    ) {
      result += +testValue;
    }
  }

  return result;
};
