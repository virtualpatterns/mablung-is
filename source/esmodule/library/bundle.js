import IsNode from 'is-node'
import IsWindows from 'is-windows'

function Bundle(utility, Is) {
 
  if (Is.not.propertyDefined(Is, 'functionOrAsyncFunction')) {
    utility.addPredicate('functionOrAsyncFunction', (value) => {
      return typeof value === 'function'
    })
  }
 
  if (Is.not.propertyDefined(Is, 'emptyArray')) {
    utility.addPredicate('emptyArray', (value) => {
      return Array.isArray(value) && value.length === 0
    })
  }

  if (Is.not.propertyDefined(Is, 'windows')) {
    utility.addPredicate('windows', () => {
      return IsWindows()
    })
  }

  if (Is.not.propertyDefined(Is, 'server')) {
    utility.addPredicate('server', () => {
      return IsNode
    })
  }

  if (Is.not.propertyDefined(Is, 'browser')) {
    utility.addPredicate('browser', () => {
      return !IsNode
    })
  }

}

export { Bundle }
