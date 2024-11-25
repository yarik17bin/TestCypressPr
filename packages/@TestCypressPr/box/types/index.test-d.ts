import TestCypressPr from '@TestCypressPr/core'
import Box from '..'

{
  const TestCypressPr = new TestCypressPr()
  TestCypressPr.use(Box, {
    companionUrl: '',
    companionCookiesRule: 'same-origin',
    target: 'body',
    title: 'title',
  })
}
