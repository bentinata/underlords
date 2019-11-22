'use strict';

const c = require('ansi-colors');

const alliances = [
  {
    name: 'assassin',
    requirement: [3, 6],
    color: c.magenta,
    symbol: 'A',
  },
  {
    name: 'blood-bound',
    requirement: [2],
    color: c.redBright,
    symbol: 'B',
  },
  {
    name: 'brawny',
    requirement: [2, 4],
    color: c.red,
    symbol: 'B',
  },
  {
    name: 'brute',
    requirement: [2, 4],
    color: c.yellow,
    symbol: 'B',
  },
  {
    name: 'champion',
    requirement: [1],
    color: c.cyan,
    symbol: 'C',
  },
  {
    name: 'deadeye',
    requirement: [2],
    color: c.yellow,
    symbol: '0',
  },
  {
    name: 'demon',
    requirement: [1],
    color: c.magenta,
    symbol: 'V',
  },
  {
    name: 'dragon',
    requirement: [2],
    color: c.red,
    symbol: 'D',
  },
  {
    name: 'druid',
    requirement: [2, 4],
    color: c.green,
    symbol: 'D',
  },
  {
    name: 'elusive',
    requirement: [3, 6],
    color: c.cyan,
    symbol: 'e',
  },
  {
    name: 'healer',
    requirement: [3],
    color: c.green,
    symbol: '+',
  },
  {
    name: 'heartless',
    requirement: [2, 4, 6],
    color: c.whiteBright,
    symbol: 'H',
  },
  {
    name: 'human',
    requirement: [2, 4, 6],
    color: c.cyan,
    symbol: 'H',
  },
  {
    name: 'hunter',
    requirement: [3, 6],
    color: c.red,
    symbol: '>',
  },
  {
    name: 'insect',
    requirement: [3],
    color: c.blue,
    symbol: 'i',
  },
  {
    name: 'inventor',
    requirement: [2, 4],
    color: c.yellow,
    symbol: 'I',
  },
  {
    name: 'knight',
    requirement: [2, 4, 6],
    color: c.yellow,
    symbol: 'K',
  },
  {
    name: 'mage',
    requirement: [3, 6],
    color: c.cyan,
    symbol: 'M',
  },
  {
    name: 'primordial',
    requirement: [2, 4, 6],
    color: c.blue,
    symbol: 'P',
  },
  {
    name: 'savage',
    requirement: [2, 4, 6],
    color: c.red,
    symbol: 'S',
  },
  {
    name: 'scaled',
    requirement: [2, 4],
    color: c.blue,
    symbol: 'S',
  },
  {
    name: 'scrappy',
    requirement: [2, 4, 6],
    color: c.yellow,
    symbol: 'S',
  },
  {
    name: 'shaman',
    requirement: [2, 4],
    color: c.green,
    symbol: '/',
  },
  {
    name: 'troll',
    requirement: [2, 4],
    color: c.yellow,
    symbol: 'T',
  },
  {
    name: 'warlock',
    requirement: [2, 4, 6],
    color: c.magentaBright,
    symbol: 'x',
  },
  {
    name: 'warrior',
    requirement: [3, 6],
    color: c.blueBright,
    symbol: 'W',
  },
]

module.exports = alliances;
