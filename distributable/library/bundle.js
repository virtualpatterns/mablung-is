function Bundle(utility) {

  utility.addPredicate('functionOrAsyncFunction', value => {
    return typeof value === 'function';
  });

}

export { Bundle };
//# sourceMappingURL=bundle.js.map