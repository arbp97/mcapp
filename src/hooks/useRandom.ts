const shuffle = (array: any[]) => {
  let result = array;
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const OPTIONS = shuffle([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
]);

// generate a random alphanumeric string of n length
const useRandom = (length: number) => {
  let string = "";

  for (let i = 0; i < length; i++) {
    string = string + OPTIONS[getRandomInt(OPTIONS.length)];
  }

  return string;
};

export default useRandom;
