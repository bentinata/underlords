#!/usr/bin/env node
'use strict';

const argv = require('minimist')(process.argv.slice(2))
const c = require('ansi-colors')


const heroes = require('./heroes')
const alliances = require('./alliances')
const levels = require('./level')

if (argv._.length == 1 && argv._[0].includes(','))
  argv.alliances = argv._[0].split(',')
else if (argv._.length != 0)
  argv.alliances = argv._
else {
  console.log(`USAGE:
... <alliance> [--tier <tier>] [--slot <slot>]

EXAMPLE:
... savage --slot 2

ARGUMENTS:
<alliance>
  Available alliances are:
${alliances.map(a => '  - ' + a.name).join('\n')}

<tier>
  Maximum tier of your heroes. Default to 5 (max tier).

<slot>
  Preferred number of heroes. Default to <alliance> max heroes.
`)
  process.exit(0);
}

const search = (({ tier = 5, alliances, level = 11 }) =>
  heroes.filter(hero =>
    (tier ? hero.tier <= tier : 1)
    // && (level ? hero.tier <= levels[level - 1].length : 1)
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

const formatSingleHero = ({ tier, name, alliances }) =>
  `${c.yellow(tier)} ${formatName(name).padEnd(5)} ${formatAlliances(alliances)}`

const formatComposition = (composition) => {
  const heroes = composition.map(h => formatName(h.name)).join(' ')
  const tier = Math.max(...composition.map(h => h.tier))
  const alliances = composition.reduce((a, h) => {
    for (let alliance of h.alliances)
      if (a[alliance]) a[alliance] += 1
      else a[alliance] = 1

    return a;
  }, {})
  return heroes;
}

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

const searchResult = search(argv)
const alliance = alliances.find(a => a.name == argv.alliances[0])
const slot = argv.slot || alliance.requirement[alliance.requirement.length - 1]
const subsetResult = [...subsets(searchResult, slot)]
//const result = search({ alliances: ['heartless', 'elusive'] })
//const result = search(argv)
console.log(subsetResult.map(formatComposition).join('\n'))
