import IsNode from 'is-node'
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
  
  utility.addPredicate('server', () => {
    return IsNode
  })
  
  utility.addPredicate('browser', () => {
    return !IsNode
  })

}

export { Bundle }
