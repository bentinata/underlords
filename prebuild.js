'use strict';

const heroes = require('./heroes');
const alliances = require('./alliances');

const search = (alliance) =>
  heroes.filter(hero => hero.alliances.includes(alliance));

function* subsets(array, length, start = 0) {
  if (start >= array.length || length < 1) {
    yield [];
  } else {
    while (start <= array.length - length) {
      let first = array[start];
      for (let subset of subsets(array, length - 1, start + 1)) {
        subset.push(first);
        yield subset;
      }
      ++start;
    }
  }
}

const composition = [];

for (let alliance of alliances) {
  const allianceHeroes = search(alliance.name)
  for (let n of alliance.requirement) {
    composition.push(...subsets(allianceHeroes, n));
  }
  //console.log(alliance.requirement)
  //console.log(search(alliance.name))
}

console.log(JSON.stringify(composition, null, 2))
