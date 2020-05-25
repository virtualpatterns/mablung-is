import Is from '@pwn/is';

Is.use(utility => {

  utility.addPredicate('functionOrAsyncFunction', value => {
    return typeof value === 'function';
  });

});

export { Is };
//# sourceMappingURL=index.js.map