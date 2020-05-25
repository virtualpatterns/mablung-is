import Is from '@pwn/is';

function Bundle(utility) {

  utility.addPredicate('functionOrAsyncFunction', value => {
    return typeof value === 'function';
  });

}

Is.use(Bundle);

export { Bundle, Is };
//# sourceMappingURL=index.js.map