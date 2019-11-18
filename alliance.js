'use strict';

const c = require('ansi-colors');

module.exports = {
  assassin: c.bgBlue(' A '),
  'blood-bound': c.yellow.bgRed(' B '),
  brawny: c.bgRed(' B '),
  brute: c.black.bgYellow(' B '),
  champion: c.black.bgCyan(' C '),
  deadeye: c.black.bgYellow(' D '),
  demon: c.bgMagenta(' D '),
  dragon: c.bgRed(' D '),
  druid: c.bgGreen(' D '),
  elusive: c.bgCyan(' e '),
  healer: c.bgGreen(' + '),
  heartless: c.bgWhiteBright(' H '),
  human: c.bgBlue(' H '),
  hunter: c.bgRed(' → '),
  insect: c.bgBlue(' i '),
  inventor: c.black.bgYellow(' I '),
  knight: c.black.bgYellow(' K '),
  mage: c.bgCyan(' M '),
  primordial: c.bgBlue(' P '),
  savage: c.bgRed(' S '),
  scaled: c.bgBlue(' S '),
  scrappy: c.black.bgYellow(' S '),
  shaman: c.black.bgGreen(' / '),
  troll: c.black.bgYellow(' T '),
  warlock: c.bgMagenta(' × '),
  warrior: c.bgBlue(' W '),
};
