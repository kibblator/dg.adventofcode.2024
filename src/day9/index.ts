const getCurrentFileSystem = (fileSystem: string, part2enabled: boolean) => {
  let systemString = [];
  let index = 0;

  for (
    var currentBlock = 0;
    currentBlock <= fileSystem.length;
    currentBlock += 2
  ) {
    const fileBlockSize = +fileSystem[currentBlock];
    const freeSpace = +fileSystem[currentBlock + 1];

    for (let i = 0; i < fileBlockSize; i++) {
      systemString.push(index.toString());
    }

    if (freeSpace) {
      systemString.push(...Array(freeSpace + 1).join("."));
    }

    index++;
  }

  return systemString;
};

const endsInAllDots = (array: string[]) => {
  const numDots = array.filter((cfs) => cfs === ".").length;
  const lastNChars = array.slice(-numDots);
  return lastNChars.every((char) => char === ".");
};

const rearrangeFileSystem = (currentFileSystemArray: string[]) => {
  for (let i = currentFileSystemArray.length - 1; i > 0; i--) {
    if (currentFileSystemArray[i] !== ".") {
      const index = currentFileSystemArray.indexOf(".");
      const temp = currentFileSystemArray[i];

      currentFileSystemArray[i] = currentFileSystemArray[index];
      currentFileSystemArray[index] = temp;
    }
    if (endsInAllDots(currentFileSystemArray)) {
      return currentFileSystemArray;
    }
  }

  return currentFileSystemArray;
};

const rearrangeFileSystem2 = (currentFileSystemArray: string[]) => {
  for (let i = currentFileSystemArray.length - 1; i > 0; i--) {
    if (currentFileSystemArray[i] !== ".") {
      const temp = currentFileSystemArray[i];

      let fileMarkerIndex = currentFileSystemArray.indexOf(temp);
      i = fileMarkerIndex;
      let occurrences = 0;
      while (temp === currentFileSystemArray[fileMarkerIndex]) {
        occurrences++;
        fileMarkerIndex++;
      }

      const index = currentFileSystemArray.findIndex((_, idx, arr) => {
        return (
          idx <= arr.length - occurrences &&
          arr.slice(idx, idx + occurrences).every((dot) => dot === ".")
        );
      });

      if (index >= i) {
        continue;
      }

      let dotMarker = index;
      let dotOccurences = 0;
      while (currentFileSystemArray[dotMarker] === ".") {
        dotOccurences++;
        dotMarker++;
      }

      if (occurrences <= dotOccurences) {
        for (var x = 0; x < occurrences; x++) {
          currentFileSystemArray[index + x] = temp;
        }
        for (var y = 0; y < occurrences; y++) {
          currentFileSystemArray[i + y] = ".";
        }
      }
    }
  }

  return currentFileSystemArray;
};

const getChecksum = (fileSystem: string[]) => {
  let result = 0;

  for (let i = 0; i < fileSystem.length; i++) {
    if (fileSystem[i] === ".") {
      continue;
    }

    const value = i * +fileSystem[i];
    result += value;
  }

  return result;
};

export const defrag = (input: string, part2enabled: boolean = false) => {
  const fileSystem = getCurrentFileSystem(input, part2enabled);

  let rearrangedFileSystem;
  if (part2enabled) {
    rearrangedFileSystem = rearrangeFileSystem2(fileSystem);
  } else {
    rearrangedFileSystem = rearrangeFileSystem(fileSystem);
  }

  const checkSum = getChecksum(rearrangedFileSystem);

  return checkSum;
};
