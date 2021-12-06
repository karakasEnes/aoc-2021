const fs = require('fs');
const path = require('path');
const data = fs
  .readFileSync(path.join(`${__dirname}`, 'input.txt'), 'utf-8')
  .split('\n');

function countIncreasedNumbers() {
  let countLargerThanPrevious = 0;
  const solution = data.map((number, index) => {
    if (index === 0) {
      return number + ' (N/A - no previous measurement)\n';
    }

    if (number > data[index - 1]) {
      countLargerThanPrevious++;
      return number + ' (increased)\n';
    } else {
      return number + ' (decreased)\n';
    }
  });

  return countLargerThanPrevious;
}

console.log('countIncreasedNumbers: ', countIncreasedNumbers());
