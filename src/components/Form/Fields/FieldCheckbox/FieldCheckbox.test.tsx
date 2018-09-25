// import 'jest-styled-components'
// import * as React from 'react'
// import { createWithTheme } from '../../../../../test/utils/create_with_theme'
// import { FieldCheckbox } from './FieldCheckbox'

// test('A FieldCheckbox', () => {
//   const component = createWithTheme(
//     <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" />
//   )
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// test('A FieldCheckbox with an error validation aligned to the bottom', () => {
//   const component = createWithTheme(
//     <FieldCheckbox
//       label="👍"
//       name="thumbsUp"
//       id="thumbs-up"
//       validationState={{ type: 'error', message: 'This is an error' }}
//       alignValidationMessage="bottom"
//     />
//   )
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// test('A FieldCheckbox with a warning validation aligned to the left', () => {
//   const component = createWithTheme(
//     <FieldCheckbox
//       label="👍"
//       name="thumbsUp"
//       id="thumbs-up"
//       validationState={{ type: 'warning', message: 'This is a warning' }}
//       alignValidationMessage="left"
//     />
//   )
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// test('A FieldCheckbox with an info validation aligned to the top', () => {
//   const component = createWithTheme(
//     <FieldCheckbox
//       label="👍"
//       name="thumbsUp"
//       id="thumbs-up"
//       validationState={{ type: 'info', message: 'This is info' }}
//       alignValidationMessage="top"
//     />
//   )
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// test('A FieldCheckbox with a sucess validation aligned to the right', () => {
//   const component = createWithTheme(
//     <FieldCheckbox
//       label="👍"
//       name="thumbsUp"
//       id="thumbs-up"
//       validationState={{ type: 'success', message: 'This is a success' }}
//       alignValidationMessage="right"
//     />
//   )
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })
