#!/usr/bin/env node
'use strict';

const argv = require('minimist')(process.argv.slice(2))
if (argv._.length == 1 && argv._[0].includes(','))
  argv.alliances = argv._[0].split(',')
else
  argv.alliances = argv._
const c = require('ansi-colors')

const heroes = require('./heroes')
const alliances = require('./alliances')
const levels = require('./level')

const search = (({ tier = 5, alliances, level = 11 }) =>
  heroes.filter(hero =>
    (tier ? hero.tier <= tier : 1)
    && (level ? hero.tier <= levels[level - 1].length : 1)
    && (alliances.length > 0 ? hero.alliances.some(x => alliances.includes(x)) : 1)
  ))

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const titlecase = (s) => s.split(/[- ]/).map(capitalize).join(' ')
const vowel = (s) => 'aeiou'.includes(s)

const formatName = (name) => {
  const split = name.split(/[- ]/)
  const [first] = split

  if (split.length == 1)
    if (first.length <= 5)
      return capitalize(first)
    // for Brood or Blood
    else if (vowel(first[2]) && vowel(first[3]) && !vowel(first[4]))
      return capitalize(first.slice(0, 5))
    else
      return capitalize(first.slice(0, 4))
  else
    if (first.length <= 3)
      return capitalize(first)
    else
      return split.map(s => s[0]).join('').toUpperCase()
}

const formatAlliance = (alliance) => {
  let {color, symbol} = alliances.find(x => x.name == alliance)
  return color(symbol)
}
const formatAlliances = (alliances) => alliances.map(formatAlliance).join('')

const format = ({ tier, name, alliances }) =>
  `${c.yellow(tier)} ${formatName(name).padEnd(5)} ${formatAlliances(alliances)}`

//const result = search({ tier: 3, alliances: ['savage', 'druid'] })
const result = search(argv)
console.log(result.map(format).join('\n'))
