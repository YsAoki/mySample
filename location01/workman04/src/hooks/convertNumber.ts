const foodMapping: {[key: number]: string} = {
  1: "おにぎり",
  2: "お弁当",
  3: "ラーメン",
  6: "カレー",
  8: "寿司",
  9: "うどん"
};

const array = [1, 2, 3, 6, 8, 9];

export const convertedArray = array.map((num) => foodMapping[num]);

console.log(convertedArray); // ["おにぎり", "お弁当", "ラーメン", "カレー", "寿司", "うどん"]