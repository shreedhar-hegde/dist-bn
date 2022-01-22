# About

Function to get distance between two words in a string based on position of occurence

## Example

```js
const distBn = require("dist-bn");

const string1 =
  "Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quicksands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children.";

let word1 = "justice";

let word2 = "children.";

console.log(
  `Distance between '${word1}' and '${word2}' is`,
  distBn(string1, word1, 1, word2, 1) + " words"
);
// Distance between 'justice' and 'children.' is 6 words

console.log(
  `Distance between '${word2}' and '${word1}' is`,
  distBn(string1, word2, 1, word1, 1) + " words"
);
// Distance between 'children.' and 'justice' is -6 words

const string2 =
  "If you did know to whom I gave the ring, If you did know for whom I gave the ring, And would, conceive for what I gave the ring, And how unwillingly I left the ring, When naught would be accepted but the ring, You would abate the strength of your displeasure.";

word1 = "whom";
word2 = "whom";

console.log(
  `Distance between '${word1}' and '${word2}' is`,
  distBn(string2, word1, 1, word2, 2),
  "words"
);
// Distance between 'whom' and 'whom' is -9 words
```

## Note

words like 'children.' if specified without '.' will result in error
