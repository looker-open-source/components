import { mount } from 'enzyme'
import * as React from 'react'
import { createWithTheme } from '../../../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { theme, ThemeProvider } from '../../../../style'
import { FieldText } from './FieldText'

test('A FieldText', () => {
  assertSnapshot(<FieldText label="👍" name="thumbsUp" id="thumbs-up" />)
})

test('FieldText supports labelWeight', () => {
  assertSnapshot(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      labelFontWeight="normal"
    />
  )
})

test('Should accept a value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <FieldText
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        readOnly
      />
    </ThemeProvider>
  )

  const input = wrapper.find('input')
  expect(input.prop('value')).toEqual('foobar')
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <FieldText
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        onChange={handleChange}
      />
    </ThemeProvider>
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('A required FieldText', () => {
  const component = createWithTheme(
    <FieldText label="👍" name="thumbsUp" id="thumbs-up" required />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldText with an error validation aligned to the bottom', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'error', message: 'This is an error' }}
      alignValidationMessage="bottom"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree!.children![0].props.htmlFor).toEqual(
    tree!.children![1].children![0].children![0].props.id
  )
})

test('A FieldText with an error validation aligned to the left', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'error', message: 'This is an error' }}
      alignValidationMessage="left"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree!.children![0].props.htmlFor).toEqual(
    tree!.children![1].children![0].children![0].props.id
  )
})

test('A FieldText with an error validation aligned to the right', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'error', message: 'This is an error' }}
      alignValidationMessage="right"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree!.children![0].props.htmlFor).toEqual(
    tree!.children![1].children![0].children![0].props.id
  )
})
