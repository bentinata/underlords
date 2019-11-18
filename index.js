#!/usr/bin/env node
'use strict';

const c = require('ansi-colors')
const heroes = require('./heroes.json')
const alliance = require('./alliance')


const search = (({ tier, alliance }) => {
  return heroes
    .filter(hero => {
      return (tier ? hero.tier <= tier : 1) && (alliance ? hero.alliance.some(x => alliance.includes(x)) : 1)
    })
})

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const titlecase = (s) => s.split(/[- ]/).map(capitalize).join(' ')

const formatName = (name) => {
  const vowel = 'aeiou'
  const splittedName = name.split(/[- ]/)
  const [firstName] = splittedName

  if (firstName.length <= 3)
    return capitalize(firstName)
  else
    if (splittedName.length == 1)
      if (vowel.includes(firstName[2]) && vowel.includes(firstName[3]) && !vowel.includes(firstName[4]))
        return capitalize(firstName.slice(0, 5))
      else
        return capitalize(firstName.slice(0, 4))
    else
      return splittedName.map(s => s[0]).join('').toUpperCase()
}

const formatAlliance = (alliances) =>
  alliances.map(a => alliance[a]).join('')

const format = (hero) =>
  `${c.yellow(hero.tier)} ${formatName(hero.name).padEnd(5)} ${formatAlliance(hero.alliance)}`

if (process.argv.length <= 2) {
  console.log(`Usage:
  npx github:bentinata/underlords alliances,anotheralliances tier
Example:
  npx github:bentinata/underlords savage,druid 3`)
} else {
  //const result = search({ tier: 3, alliance: ['savage', 'druid'] })
  const result = search({ alliance: process.argv[2].split(','), tier: +process.argv[3] })
  console.log(result.map(format).join('\n'))
}
