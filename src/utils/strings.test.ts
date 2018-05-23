import * as strUtils from './strings'

test('capitalize capitalizes a string', () => {
  expect(strUtils.capitalize('styles')).toEqual('Styles')
})

test('decapitalize a string', () => {
  expect(strUtils.decapitalize('Styles')).toEqual('styles')
})
