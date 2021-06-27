"use strict";

var _is = _interopRequireDefault(require("@pwn/is"));

var _index = require("../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  try {
    _is.default.use(_index.Bundle);

    let f = async () => {};

    let g = () => {};

    console.log(_is.default.function(f));
    console.log(_is.default.functionOrAsyncFunction(f));
    console.dir(typeof f);
    console.log(_is.default.function(g));
    console.log(_is.default.functionOrAsyncFunction(g));
    console.dir(typeof g);
  } catch (error) {
    console.error(error);
  }
}

main();

//# sourceMappingURL=f.cjs.map