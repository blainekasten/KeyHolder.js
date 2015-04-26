
/*
 * Takes EventData and returns a character string
 *
 * @params {Event}
 * @returns {String}
 */

export default function(e){
  var OS_MAP = {},
      character;

  OS_MAP[osModKeyName()] = 'mod';

  // grap character for special cases
  character = specialCases(e.keyCode);

  if (OS_MAP[character]) {
    // grap character for special cases
    character = OS_MAP[character];
  }


  /*
   * if the character doesnt match a special case
   * we just can trust the charCode lookup method
   */
  if (!character) {
    character = String.fromCharCode(e.keyCode || e.charCode).toLowerCase();
  }

  return character;
}


/*
 * this maps to readable words that can be used for the shortcut
 * library
 */
function specialCases(keyCode) {
  var character;

  switch(keyCode){
    case 190:
      character = '.';
      break;
    case 224: //firefox meta
      character = 'meta';
      break;
    case 91:
      character = 'meta';
      break;
    case 16:
      character = 'shift';
      break;
    case 18:
      character = 'optn';
      break;
    case 17:
      character = 'ctrl';
      break;
    case 32:
      character = 'space';
      break;
    case 40:
      character = 'down';
      break;
    case 39:
      character = 'right';
      break;
    case 38:
      character = 'up';
      break;
    case 37:
      character = 'left';
      break;
    case 9:
      character = 'tab';
      break;
    case 13:
      character = 'rtn';
      break;
  }

  return character;
}


function osModKeyName() {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform) ?
    'meta' : 'ctrl';
}
