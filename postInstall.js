require('shelljs/global');

var is_production = process.env.NODE_ENV == "production";

if (is_production) {
  console.log('------------Production environment detected------------');
  console.log('------------Running "bower install"------------');
  exec('node node_modules/bower/bin/bower install');

  console.log('------------Running "grunt build:dist"------------');
  exec('node node_modules/grunt-cli/bin/grunt build:dist');

  return;
}

console.error('------------!No postinstall task!------------');
process.exit(0);