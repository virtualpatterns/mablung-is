import Is from '@pwn/is';
import Test from 'ava';

Test('Bundle', async test => {
  test.truthy((await import('../index.js')).Bundle);
});

Test('Is.functionOrAsyncFunction(value)', async test => {

  let { Bundle } = await import('../index.js');

  Is.use(Bundle);

  test.true(Is.functionOrAsyncFunction(() => {}));
  test.true(Is.functionOrAsyncFunction(async () => {}));

  test.false(Is.functionOrAsyncFunction('() => {}'));
  test.false(Is.functionOrAsyncFunction('async () => {}'));

});
//# sourceMappingURL=index.test.js.map