"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Is", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});
Object.defineProperty(exports, "Bundle", {
  enumerable: true,
  get: function () {
    return _bundle.Bundle;
  }
});

var _is = _interopRequireDefault(require("@pwn/is"));

var _bundle = require("./library/bundle.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_is.default.use(_bundle.Bundle);
//# sourceMappingURL=index.cjs.map