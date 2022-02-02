/**
 *
 * @param {string} string - String which contains words
 * @param {string} firstWord - First word
 * @param {number} firstWordPosition - Postion of occurence of first word. Should be greater than or equal to 1
 * @param {string} secondWord - Second word
 * @param {number} secondWordPosition  - Position of occurence of second word. Should be greater than or equal to 1
 * @returns {number} - Distance between position of first and second word
 */

const distBn = (
  string,
  firstWord,
  firstWordPosition,
  secondWord,
  secondWordPosition
) => {
  const words = string.split(" ");

  if (!firstWord) {
    throw Error("firstWord is not specified");
  }

  if (words.indexOf(firstWord) < 0) {
    throw Error("firstWord does not exist in the given string");
  }

  if (!firstWordPosition) {
    throw Error("firstWordPosition is not specified");
  }

  if (!secondWord) {
    throw Error("secondWord is not specified");
  }

  if (words.indexOf(secondWord) < 0) {
    throw Error("secondWord does not exist in the given string");
  }

  if (!secondWordPosition) {
    throw Error("secondWordPosition is not specified");
  }

  if (words.length < 2) {
    throw Error("String should contain at least 2 words");
  }

  if (firstWord.length <= 0) {
    throw Error("Invalid first word. Length should be atleast 1");
  }

  if (secondWord.length <= 0) {
    throw Error("Invalid second word. Length should be atleast 1");
  }

  if (firstWordPosition <= 0 || secondWordPosition <= 0) {
    throw Error(
      "Invalid word position. Position should be greater than or equal to 1"
    );
  }

  const uniqueWords = [...new Set(words)];

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

const sentence1 =
  "Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quicksands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children.";

let word1 = "justice";

let word2 = "children.";

console.log(
  `Distance between '${word1}' and '${word2}' is`,
  distBn(sentence1, word1, 1, word2, 1) + " words"
);

console.log(
  `Distance between '${word2}' and '${word1}' is`,
  distBn(sentence1, word2, 1, word1, 1) + " words."
);

const sentence2 =
  "If you did know to whom I gave the ring, If you did know for whom I gave the ring, And would, conceive for what I gave the ring, And how unwillingly I left the ring, When naught would be accepted but the ring, You would abate the strength of your displeasure.";

word1 = "whom";
word2 = "whom";

console.log(
  `Distance between '${word1}' and '${word2}' is`,
  distBn(sentence2, word1, 1, word2, 2),
  "words"
);

module.exports = distBn;
