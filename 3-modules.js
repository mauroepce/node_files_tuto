//CommonJS, every file is module (by default)
//Modules - Ecanpsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative_flavors');
require("./7-mind_grenades");

console.log(data);
sayHi("Oreo");
sayHi(names.mauro);
sayHi(names.gati);
