import Is from '@pwn/is';

import { Bundle } from '../index.js';

async function main() {

  try {

    Is.use(Bundle);

    let f = async () => {};
    let g = () => {};

    console.log(Is.function(f));
    console.log(Is.functionOrAsyncFunction(f));
    console.dir(typeof f);

    console.log(Is.function(g));
    console.log(Is.functionOrAsyncFunction(g));
    console.dir(typeof g);

  } catch (error) {
    console.error(error);
  }

}

main();

//# sourceMappingURL=f.js.map