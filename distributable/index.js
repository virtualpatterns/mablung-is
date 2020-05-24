export function Bundle(utility) {

  utility.addPredicate('functionOrAsyncFunction', value => {
    return typeof value === 'function';
  });

}
//# sourceMappingURL=index.js.map