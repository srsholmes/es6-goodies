"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeArray;

function makeArray(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}

module.exports = exports["default"];