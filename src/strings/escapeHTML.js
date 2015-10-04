"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = escapeHTML;

function escapeHTML(str) {
  var entityMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;', "'": '&#39;', "/": '&#x2F;' };
  return String(str).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}

module.exports = exports["default"];