function openFileAsString(filePath) {
  const { readFileSync } = require('fs');
  const { resolve } = require('path');

  return readFileSync(resolve(filePath)).toString();
}

console.clear();

const __stdin = openFileAsString('src/input.txt');

eval(`
${openFileAsString(require('./package.json').main)}

${openFileAsString('lib/saci.js')}
`);
