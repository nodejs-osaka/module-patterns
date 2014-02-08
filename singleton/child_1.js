
console.log('=== loaded child 1 ===');

var cache = require('./cache');

console.log('foo is ' + cache.get('foo'));

cache.set('foo', 10);

console.log('foo is ' + cache.get('foo'));
