const _ = require('lodash');

const d = `
  00 | 01 | 02
  10 | 11 | 12
  20 | 21 | 22
`

var m = [
  [0, 0, null],
  [0, 1, null],
  [0, 2, null],
  [1, 0, null],
  [1, 1, null],
  [1, 2, null],
  [2, 0, null],
  [2, 1, null],
  [2, 2, null],
]

const size = 3
const matrix = _.chunk(m, size)
const lines = [matrix, _.unzip(matrix), _.unzip(matrix.map((v, i) => [v[i], v[size - 1 - i]]))].flat()

console.log(matrix.map((v, i) => [v[i], v[size - 1 - i]]))


// chatgpt:
// const lines = [...matrix, ..._.unzip(matrix), _.zipWith(matrix, _.range(size), (row, i) => row[i]), _.zipWith(matrix, _.range(size), (row, i) => row[size - 1 - i])];

// console.log(lines);
