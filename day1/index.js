const fs = require('fs');
const path = require('path');
const data = fs
  .readFileSync(path.join(`${__dirname}`, 'input.txt'), 'utf-8')
  .split('\n');

//part1
function countIncreasedNumbers(data) {
  let c = 0;
  data.forEach((number, index) => {
    if (index === 0) return;
    if (parseInt(number) > parseInt(data[index - 1])) {
      c++;
    }
  });

  return c;
}

//part2
function creatingMainWindowArray(data) {
  const dataLength = data.length;
  console.log(dataLength);

  return data
    .map((number, index) => {
      if (dataLength - index >= 2) {
        return (
          parseInt(number) +
          parseInt(data[index + 1]) +
          parseInt(data[index + 2])
        );
      }
    })
    .filter((n) => n);
}

console.log('countIncreasedNumbers: ', countIncreasedNumbers(data));
console.log(
  'part2 Solution: ',
  countIncreasedNumbers(creatingMainWindowArray(data))
);
