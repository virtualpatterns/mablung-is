import { Is } from '@virtualpatterns/mablung-is'
import IsNode from 'is-node'
import IsWindows from 'is-windows'
import Test from 'ava'

Test('functionOrAsyncFunction(value)', (test) => {

  test.true(Is.functionOrAsyncFunction(() => {}))
  test.true(Is.functionOrAsyncFunction(async () => {}))

  test.false(Is.functionOrAsyncFunction('() => {}'))
  test.false(Is.functionOrAsyncFunction('async () => {}'))

})

Test('emptyArray(value)', (test) => {
  test.true(Is.emptyArray([]))
  test.false(Is.emptyArray([ 42 ]))
})

Test('windows()', (test) => {
  test.is(Is.windows(), IsWindows())
})

Test('server()', (test) => {
  test.is(Is.server(), IsNode)
})

Test('browser()', (test) => {
  test.is(Is.browser(), !IsNode)
})