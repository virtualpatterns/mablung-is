"use strict";

var _is = _interopRequireDefault(require("@pwn/is"));

var _bundle = require("../library/bundle.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  try {
    _is.default.use(_bundle.Bundle);

    console.log(_is.default.windows());
  } catch (error) {
    console.error(error);
  }
}

main();

//# sourceMappingURL=w.cjs.map