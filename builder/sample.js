var calcBuilder = require('./calc');

var calc = calcBuilder();
var result = calc.add(10, 20);

console.log(result);