const distBn = (
  string,
  firstWord,
  firstWordPosition,
  secondWord,
  secondWordPosition
) => {
  const words = string.split(" ");
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
