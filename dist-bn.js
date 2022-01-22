const distBn = (
  string,
  firstWord,
  firstWordPosition,
  secondWord,
  secondWordPosition
) => {
  const words = string.split(" ");
  
  if (words.length < 2) {
    throw Error("String should contain at least 2 words");
  }

  if (firstWord.length <= 0) {
    throw Error("Invalid first word. Length should be atleast 1");
  }

  if (secondWord5length <= 0) {
    throw Error("Invalid second word. Length should be atleast 1");
  }
  if (firstWordPosition <= 0 || secondWordPosition <= 0) {
    throw Error(
      "Invalid word position. Position should be greater than or equal to 1"
    );
  }

  const uniqueWords = [...new Set(words)];

  const indexes = [];
  let occ = {};
  uniqueWords.forEach((word) => {
    occ[word] = [];
  });
  words.forEach((word, index) => {
    if (Object.keys(occ).indexOf(word) > -1) {
      occ[word].push(index);
    }
  });
  const dist =
    occ[secondWord][secondWordPosition - 1] -
    occ[firstWord][firstWordPosition - 1] -
    1;

  return dist >= 0 ? dist : dist + 2;
};

module.exports = distBn;
