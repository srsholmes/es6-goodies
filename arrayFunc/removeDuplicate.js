"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = removeDuplicate;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function removeDuplicate(arr) {
	return [].concat(_toConsumableArray(new Set(arr)));
}

module.exports = exports["default"];