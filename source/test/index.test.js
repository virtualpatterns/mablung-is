import IsWindows from 'is-windows'
import Test from 'ava'

import { Is } from '../index.js'

Test('Is.functionOrAsyncFunction(value)', (test) => {

  test.true(Is.functionOrAsyncFunction(() => {}))
  test.true(Is.functionOrAsyncFunction(async () => {}))

  test.false(Is.functionOrAsyncFunction('() => {}'))
  test.false(Is.functionOrAsyncFunction('async () => {}'))

})

Test('Is.windows()', (test) => {

  let isWindows = Is.windows()

  test.log(`Is.windows() = ${Is.windows()}`)
  test.is(isWindows, IsWindows())

})