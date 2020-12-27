import Is from '@pwn/is';

import { Bundle } from '../library/bundle.js';

async function main() {

  try {

    Is.use(Bundle);

    console.log(Is.windows());

  } catch (error) {
    console.error(error);
  }

}

main();
//# sourceMappingURL=w.js.map