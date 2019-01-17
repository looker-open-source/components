import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { FieldText } from '../Fields/FieldText'
import { Fieldset } from './Fieldset'

test('Fieldset with left aligned legend', () => {
  const component = createWithTheme(
    <Fieldset legend="Legend" alignLegend="left">
      <FieldText label="One" name="name1" />
      <FieldText label="two" name="name2" />
      <FieldText label="three" name="nam3" />
    </Fieldset>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
