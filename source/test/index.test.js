import Test from 'ava'

import { Is } from '../index.js'

Test('Is.functionOrAsyncFunction(value)', async (test) => {

  test.true(Is.functionOrAsyncFunction(() => {}))
  test.true(Is.functionOrAsyncFunction(async () => {}))

  test.false(Is.functionOrAsyncFunction('() => {}'))
  test.false(Is.functionOrAsyncFunction('async () => {}'))

})