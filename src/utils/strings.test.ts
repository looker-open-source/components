import * as strUtils from './strings'

test('capitalize capitalizes a string', () => {
  expect(strUtils.capitalize('styles')).toEqual('Foo')
})

test('decapitalize a string', () => {
  expect(strUtils.decapitalize('Foo')).toEqual('styles')
})
