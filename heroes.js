'use strict';

const heroes = [
  {
    name: 'anti-mage',
    tier: 1,
    alliances: [
      'elusive',
      'assassin',
    ],
  },
  {
    name: 'axe',
    tier: 1,
    alliances: [
      'brawny',
      'brute',
    ],
  },
  {
    name: 'batrider',
    tier: 1,
    alliances: [
      'troll',
      'knight',
    ],
  },
  {
    name: 'bloodseeker',
    tier: 1,
    alliances: [
      'blood-bound',
      'deadeye',
    ],
  },
  {
    name: 'bounty hunter',
    tier: 1,
    alliances: [
      'scrappy',
      'assassin',
    ],
  },
  {
    name: 'drow ranger',
    tier: 1,
    alliances: [
      'heartless',
      'hunter',
    ],
  },
  {
    name: 'enchantress',
    tier: 1,
    alliances: [
      'savage',
      'druid',
      'healer',
    ],
  },
  {
    name: 'nyx assassin',
    tier: 1,
    alliances: [
      'insect',
      'assassin',
    ],
  },
  {
    name: 'ogre magi',
    tier: 1,
    alliances: [
      'blood-bound',
      'mage',
    ],
  },
  {
    name: 'razor',
    tier: 1,
    alliances: [
      'primordial',
      'mage',
    ],
  },
  {
    name: 'shadow demon',
    tier: 1,
    alliances: [
      'heartless',
      'demon',
    ],
  },
  {
    name: 'shadow shaman',
    tier: 1,
    alliances: [
      'troll',
      'shaman',
    ],
  },
  {
    name: 'tiny',
    tier: 1,
    alliances: [
      'primordial',
      'warrior',
    ],
  },
  {
    name: 'tusk',
    tier: 1,
    alliances: [
      'savage',
      'warrior',
    ],
  },
  {
    name: 'venomancer',
    tier: 1,
    alliances: [
      'savage',
      'warlock',
    ],
  },
  {
    name: 'warlock',
    tier: 1,
    alliances: [
      'blood-bound',
      'warlock',
      'healer',
    ],
  },
  {
    name: 'beastmaster',
    tier: 2,
    alliances: [
      'brawny',
      'hunter',
    ],
  },
  {
    name: 'chaos knight',
    tier: 2,
    alliances: [
      'demon',
      'knight',
    ],
  },
  {
    name: 'crystal maiden',
    tier: 2,
    alliances: [
      'human',
      'mage',
    ],
  },
  {
    name: 'dazzle',
    tier: 2,
    alliances: [
      'troll',
      'healer',
    ],
  },
  {
    name: 'luna',
    tier: 2,
    alliances: [
      'elusive',
      'knight',
    ],
  },
  {
    name: 'magnus',
    tier: 2,
    alliances: [
      'shaman',
      'brute',
    ],
  },
  {
    name: 'morphling',
    tier: 2,
    alliances: [
      'primordial',
      'mage',
    ],
  },
  {
    name: 'natures prophet',
    tier: 2,
    alliances: [
      'druid',
      'shaman',
    ],
  },
  {
    name: 'puck',
    tier: 2,
    alliances: [
      'elusive',
      'dragon',
      'mage',
    ],
  },
  {
    name: 'pudge',
    tier: 2,
    alliances: [
      'heartless',
      'warrior',
    ],
  },
  {
    name: 'queen of pain',
    tier: 2,
    alliances: [
      'demon',
      'assassin',
    ],
  },
  {
    name: 'slardar',
    tier: 2,
    alliances: [
      'scaled',
      'warrior',
    ],
  },
  {
    name: 'timbersaw',
    tier: 2,
    alliances: [
      'scrappy',
      'inventor',
    ],
  },
  {
    name: 'weaver',
    tier: 2,
    alliances: [
      'elusive',
      'insect',
    ],
  },
  {
    name: 'windranger',
    tier: 2,
    alliances: [
      'elusive',
      'hunter',
    ],
  },
  {
    name: 'witch doctor',
    tier: 2,
    alliances: [
      'troll',
      'warlock',
    ],
  },
  {
    name: 'abaddon',
    tier: 3,
    alliances: [
      'heartless',
      'knight',
    ],
  },
  {
    name: 'clockwerk',
    tier: 3,
    alliances: [
      'scrappy',
      'inventor',
    ],
  },
  {
    name: 'io',
    tier: 3,
    alliances: [
      'primordial',
      'druid',
    ],
  },
  {
    name: 'juggernaut',
    tier: 3,
    alliances: [
      'brawny',
      'warrior',
    ],
  },
  {
    name: 'legion commander',
    tier: 3,
    alliances: [
      'human',
      'champion',
    ],
  },
  {
    name: 'lifestealer',
    tier: 3,
    alliances: [
      'heartless',
      'brute',
    ],
  },
  {
    name: 'lina',
    tier: 3,
    alliances: [
      'human',
      'mage',
    ],
  },
  {
    name: 'lycan',
    tier: 3,
    alliances: [
      'human',
      'hunter',
      'savage',
    ],
  },
  {
    name: 'omniknight',
    tier: 3,
    alliances: [
      'human',
      'knight',
      'healer',
    ],
  },
  {
    name: 'phantom assassin',
    tier: 3,
    alliances: [
      'elusive',
      'assassin',
    ],
  },
  {
    name: 'shadow fiend',
    tier: 3,
    alliances: [
      'demon',
      'warlock',
    ],
  },
  {
    name: 'slark',
    tier: 3,
    alliances: [
      'scaled',
      'assassin',
    ],
  },
  {
    name: 'sniper',
    tier: 3,
    alliances: [
      'scrappy',
      'deadeye',
      'hunter',
    ],
  },
  {
    name: 'terrorblade',
    tier: 3,
    alliances: [
      'demon',
      'hunter',
    ],
  },
  {
    name: 'tinker',
    tier: 3,
    alliances: [
      'scrappy',
      'inventor',
    ],
  },
  {
    name: 'treant protector',
    tier: 3,
    alliances: [
      'druid',
      'brute',
    ],
  },
  {
    name: 'viper',
    tier: 3,
    alliances: [
      'scaled',
      'dragon',
    ],
  },
  {
    name: 'alchemist',
    tier: 4,
    alliances: [
      'scrappy',
      'warlock',
    ],
  },
  {
    name: 'arc warden',
    tier: 4,
    alliances: [
      'primordial',
      'shaman',
    ],
  },
  {
    name: 'bristleback',
    tier: 4,
    alliances: [
      'brawny',
      'savage',
    ],
  },
  {
    name: 'broodmother',
    tier: 4,
    alliances: [
      'insect',
      'warlock',
    ],
  },
  {
    name: 'doom',
    tier: 4,
    alliances: [
      'demon',
      'brute',
    ],
  },
  {
    name: 'dragon knight',
    tier: 4,
    alliances: [
      'human',
      'dragon',
      'knight',
    ],
  },
  {
    name: 'keeper of the light',
    tier: 4,
    alliances: [
      'human',
      'mage',
    ],
  },
  {
    name: 'kunkka',
    tier: 4,
    alliances: [
      'human',
      'warrior',
    ],
  },
  {
    name: 'lone druid',
    tier: 4,
    alliances: [
      'savage',
      'druid',
    ],
  },
  {
    name: 'mirana',
    tier: 4,
    alliances: [
      'elusive',
      'hunter',
    ],
  },
  {
    name: 'necrophos',
    tier: 4,
    alliances: [
      'heartless',
      'healer',
    ],
  },
  {
    name: 'sand king',
    tier: 4,
    alliances: [
      'savage',
      'insect',
    ],
  },
  {
    name: 'templar assassin',
    tier: 4,
    alliances: [
      'elusive',
      'assassin',
    ],
  },
  {
    name: 'tidehunter',
    tier: 4,
    alliances: [
      'scaled',
      'warrior',
    ],
  },
  {
    name: 'disruptor',
    tier: 5,
    alliances: [
      'brawny',
      'warlock',
    ],
  },
  {
    name: 'enigma',
    tier: 5,
    alliances: [
      'primordial',
      'shaman',
    ],
  },
  {
    name: 'faceless void',
    tier: 5,
    alliances: [
      'primordial',
      'assassin',
    ],
  },
  {
    name: 'gyrocopter',
    tier: 5,
    alliances: [
      'deadeye',
      'inventor',
    ],
  },
  {
    name: 'lich',
    tier: 5,
    alliances: [
      'heartless',
      'mage',
    ],
  },
  {
    name: 'medusa',
    tier: 5,
    alliances: [
      'scaled',
      'hunter',
    ],
  },
  {
    name: 'sven',
    tier: 5,
    alliances: [
      'human',
      'scaled',
      'knight',
    ],
  },
  {
    name: 'techies',
    tier: 5,
    alliances: [
      'scrappy',
      'inventor',
    ],
  },
  {
    name: 'troll warlord',
    tier: 5,
    alliances: [
      'troll',
      'warrior',
    ],
  },
];

module.exports = heroes;
