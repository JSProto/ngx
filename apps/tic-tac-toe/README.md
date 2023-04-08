d = `
00 | 01 | 02
10 | 11 | 12
20 | 21 | 22
`;

var m = [[0, 0, null], [0, 1, null], [0, 2, null], [1, 0, null], [1, 1, null], [1, 2, null], [2, 0, null], [2, 1, null], [2, 2, null]];


var lines = [_.chunk(m, 3), _.unzip(_.chunk(m, 3)), _.unzip(_.chunk(m, 3).map((v, i) => {
    return [v[i], v[3-1-i]]
})) ].flat()
