import Test from 'ava';

Test('Bundle', async test => {
  test.truthy((await import('../index.js')).Bundle);
});
//# sourceMappingURL=index.test.js.map