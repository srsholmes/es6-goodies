'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = reverse;

function reverse(str) {
  return !str || str.length < 2 ? str : str.split('').reverse().join('');
}

module.exports = exports['default'];