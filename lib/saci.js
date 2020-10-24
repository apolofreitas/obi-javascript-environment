function printf(format, ...args) {
  const { sprintf } = require('sprintf-js');
  process.stdout.write(sprintf(format, ...args));
}

function scanf(format, ...args) {
  const sscanf = require('locutus/php/strings/sscanf');
  const values = sscanf(__stdin, format);

  args.forEach((arg, index) => {
    eval(`${arg} = values[index]`);
  });
}
