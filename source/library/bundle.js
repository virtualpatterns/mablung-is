import IsWindows from 'is-windows'

function Bundle(utility) {
 
  utility.addPredicate('functionOrAsyncFunction', (value) => {
    return typeof value === 'function'
  })
 
  utility.addPredicate('emptyArray', (value) => {
    return Array.isArray(value) && value.length == 0
  })
 
  utility.addPredicate('windows', () => {
    return IsWindows()
  })
 
}

export { Bundle }
