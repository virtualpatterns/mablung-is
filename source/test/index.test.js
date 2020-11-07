import IsNode from 'is-node'
import IsWindows from 'is-windows'
import Test from 'ava'

import { Is } from '../index.js'

Test('Is.functionOrAsyncFunction(value)', (test) => {

  test.true(Is.functionOrAsyncFunction(() => {}))
  test.true(Is.functionOrAsyncFunction(async () => {}))

  test.false(Is.functionOrAsyncFunction('() => {}'))
  test.false(Is.functionOrAsyncFunction('async () => {}'))

})

Test('Is.emptyArray(value)', (test) => {
  test.true(Is.emptyArray([]))
  test.false(Is.emptyArray([ 42 ]))
})

Test('Is.windows()', (test) => {
  test.is(Is.windows(), IsWindows())
})

Test('Is.server()', (test) => {
  test.is(Is.server(), IsNode)
})

Test('Is.browser()', (test) => {
  test.is(Is.browser(), !IsNode)
})