'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _math = require('./math');

var math = _interopRequireWildcard(_math);

var _arrayFunc = require('./arrayFunc');

var arrayFunc = _interopRequireWildcard(_arrayFunc);

exports['default'] = {
  math: math,
  arrayFunc: arrayFunc
};
module.exports = exports['default'];