"use strict";

var _isNode = _interopRequireDefault(require("is-node"));

var _isWindows = _interopRequireDefault(require("is-windows"));

var _ava = _interopRequireDefault(require("ava"));

var _index = require("../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava.default)('Is.functionOrAsyncFunction(value)', test => {
  test.true(_index.Is.functionOrAsyncFunction(() => {}));
  test.true(_index.Is.functionOrAsyncFunction(async () => {}));
  test.false(_index.Is.functionOrAsyncFunction('() => {}'));
  test.false(_index.Is.functionOrAsyncFunction('async () => {}'));
});
(0, _ava.default)('Is.emptyArray(value)', test => {
  test.true(_index.Is.emptyArray([]));
  test.false(_index.Is.emptyArray([42]));
});
(0, _ava.default)('Is.windows()', test => {
  test.is(_index.Is.windows(), (0, _isWindows.default)());
});
(0, _ava.default)('Is.server()', test => {
  test.is(_index.Is.server(), _isNode.default);
});
(0, _ava.default)('Is.browser()', test => {
  test.is(_index.Is.browser(), !_isNode.default);
});

//# sourceMappingURL=index.test.cjs.map