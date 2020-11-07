"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bundle = Bundle;

var _isNode = _interopRequireDefault(require("is-node"));

var _isWindows = _interopRequireDefault(require("is-windows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bundle(utility) {
  utility.addPredicate('functionOrAsyncFunction', value => {
    return typeof value === 'function';
  });
  utility.addPredicate('emptyArray', value => {
    return Array.isArray(value) && value.length == 0;
  });
  utility.addPredicate('windows', () => {
    return (0, _isWindows.default)();
  });
  utility.addPredicate('server', () => {
    return _isNode.default;
  });
  utility.addPredicate('browser', () => {
    return !_isNode.default;
  });
}
//# sourceMappingURL=bundle.cjs.map