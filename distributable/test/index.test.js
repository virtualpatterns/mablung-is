import Is from '@pwn/is';
import Test from 'ava';

import { Bundle, Is as NewIs } from '../index.js';

// Test('Bundle, Is', async (test) => {

//   let module = await import('../index.js')

//   test.truthy(module.Bundle)
//   test.truthy(module.Is)

// })

Test.skip('Is.functionOrAsyncFunction(value) using Is.use(fn)', async test => {

  Is.use(Bundle);

  test.true(Is.functionOrAsyncFunction(() => {}));
  test.true(Is.functionOrAsyncFunction(async () => {}));

  test.false(Is.functionOrAsyncFunction('() => {}'));
  test.false(Is.functionOrAsyncFunction('async () => {}'));

});

Test('NewIs.functionOrAsyncFunction(value) using NewIs', async test => {

  test.true(NewIs.functionOrAsyncFunction(() => {}));
  test.true(NewIs.functionOrAsyncFunction(async () => {}));

  test.false(NewIs.functionOrAsyncFunction('() => {}'));
  test.false(NewIs.functionOrAsyncFunction('async () => {}'));

});
//# sourceMappingURL=index.test.js.map