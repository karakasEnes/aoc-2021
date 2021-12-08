const fs = require('fs');
const path = require('path');
const data = fs
  .readFileSync(path.join(`${__dirname}`, 'input.txt'), 'utf-8')
  .split('\n');

function calculateScore(data) {
  const calculatedObject = data.reduce(
    (acc, currentVal) => {
      const [firstVal, number] = currentVal.split(' ');

      if (firstVal === 'forward') {
        acc.horizontal += parseInt(number);
      }

      if (firstVal === 'down') {
        acc.depth += parseInt(number);
      }

      if (firstVal === 'up') {
        acc.depth -= parseInt(number);
      }

      return acc;
    },
    { depth: 0, horizontal: 0 }
  );

  return calculatedObject.depth * calculatedObject.horizontal;
}

function calculateComplexScore(data) {
  const calculatedObject = data.reduce(
    (acc, currentVal) => {
      const [firstVal, number] = currentVal.split(' ');

      if (firstVal === 'forward') {
        acc.horizontal += parseInt(number);
        acc.depth += acc.aim * parseInt(number);
      }

      if (firstVal === 'up') {
        acc.aim -= parseInt(number);
      }

      if (firstVal === 'down') {
        acc.aim += parseInt(number);
      }

      return acc;
    },
    {
      depth: 0,
      horizontal: 0,
      aim: 0,
    }
  );

  return calculatedObject.depth * calculatedObject.horizontal;
}

console.log('solution Part1: ', calculateScore(data));
console.log('solution Part2: ', calculateComplexScore(data));
