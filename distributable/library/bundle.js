import IsWindows from 'is-windows';

function Bundle(utility) {

  utility.addPredicate('functionOrAsyncFunction', value => {
    return typeof value === 'function';
  });

  utility.addPredicate('windows', () => {
    return IsWindows();
  });

}

export { Bundle };
//# sourceMappingURL=bundle.js.map