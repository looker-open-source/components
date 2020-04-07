/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import 'jest-styled-components'
import React, { FC } from 'react'
import noop from 'lodash/noop'
import {
  createWithTheme,
  mountWithTheme,
  assertSnapshot,
} from '@looker/components-test-utils'

import { Box } from './Box'

describe('Box', () => {
  test('Box default', () => {
    assertSnapshot(<Box mt="large">🥑</Box>)
  })

  test('Responsive margin top Box', () => {
    assertSnapshot(<Box mt={['large', 'medium', 'small']}>🥑</Box>)
  })

  test('Box with null values are removed from styling', () => {
    assertSnapshot(<Box mt={['large', null, 'medium']}>🥑</Box>)
  })

  test('Box with SizeNone is valid', () => {
    assertSnapshot(<Box mt="none">🥑</Box>)
  })

  test('Box supports background-color', () => {
    assertSnapshot(<Box bg="semanticColors.primary.main" />)
  })

  test('Box supports display', () => {
    assertSnapshot(<Box display="inline-block" />)
  })

  test('Box supports height properties', () => {
    assertSnapshot(<Box height="1vh" />)
    assertSnapshot(<Box maxHeight="1vh" />)
    assertSnapshot(<Box minHeight="1vh" />)
  })

  test('Box supports width', () => {
    assertSnapshot(<Box width="1vw" />)
    assertSnapshot(<Box maxWidth="1vw" />)
    assertSnapshot(<Box minWidth="1vw" />)
  })

  test('Box supports position, top, left, bottom, right', () => {
    assertSnapshot(<Box position="absolute" />)
    assertSnapshot(<Box top="1rem" />)
    assertSnapshot(<Box left="1rem" />)
    assertSnapshot(<Box right="1rem" />)
    assertSnapshot(<Box bottom="1rem" />)
  })

  test('Box supports responsive fontSize and lineHeight', () => {
    assertSnapshot(<Box fontSize={['small', 'large']} />)
    assertSnapshot(<Box lineHeight={['small', 'large']} />)
  })

  describe('borders', () => {
    test('Box supports borders', () => {
      assertSnapshot(<Box border="1px solid black" />)
    })

    test('supports borderRadius', () => {
      assertSnapshot(<Box borderRadius="medium" />)
    })

    test('supports borderColor', () => {
      assertSnapshot(<Box borderColor="palette.charcoal200" />)
    })
  })

  describe('fonts', () => {
    test('font helpers', () => {
      assertSnapshot(<Box fontFamily="brand" />)
      assertSnapshot(<Box fontSize="small" />)
      assertSnapshot(<Box fontWeight="bold" />)
      assertSnapshot(<Box letterSpacing="10" />)
      assertSnapshot(<Box lineHeight="medium" />)
      assertSnapshot(<Box textAlign="right" />)
      assertSnapshot(<Box color="palette.charcoal400" />)
    })
  })

  describe('flex', () => {
    test('supports flex properties', () => {
      assertSnapshot(
        <Box
          display="flex"
          alignContent="flex-end"
          alignItems="baseline"
          justifyContent="center"
          flexWrap="wrap"
          flexDirection="column"
        />
      )
    })

    test('supports flex item properties', () => {
      assertSnapshot(
        <Box alignSelf="center" flexBasis="1" flex="1 1" order="unset" />
      )
    })
  })

  describe('as=', () => {
    test('allows Box to render as any HTML tag', () => {
      const boxAsButton = mountWithTheme(<Box as="button" />)
      expect(boxAsButton.find('button').exists()).toBeTruthy()
    })

    test('any prop can be passed to Box', () => {
      const BoxAsInput: FC<{ type?: string }> = (props) => (
        <Box as="input" {...props} />
      )
      const boxAsCheckbox = mountWithTheme(<BoxAsInput type="checkbox" />)
      expect(boxAsCheckbox.find('input[type="checkbox"]').exists()).toBeTruthy()
    })
  })

  describe('core HTML attributes', () => {
    test('Box allows autoFocus', () => {
      assertSnapshot(<Box autoFocus>Autofocus?</Box>)
    })

    test('Box allows for HTML events', () => {
      assertSnapshot(<Box onMouseEnter={noop}>Autofocus?</Box>)
    })

    test('Box allows for ARIA attributes', () => {
      assertSnapshot(<Box aria-disabled>aria-disabled</Box>)
    })
  })

  describe('hover, focus, active', () => {
    test('Box has hover style', () => {
      const tree = createWithTheme(
        <Box hoverStyle={{ backgroundColor: 'red' }} />
      ).toJSON()
      expect(tree).toHaveStyleRule('background-color', 'red', {
        modifier: ':hover',
      })
    })

    test('Box has focus style', () => {
      const tree = createWithTheme(
        <Box focusStyle={{ backgroundColor: 'red' }} />
      ).toJSON()
      expect(tree).toHaveStyleRule('background-color', 'red', {
        modifier: ':focus',
      })
    })

    test('Box has active style', () => {
      const tree = createWithTheme(
        <Box activeStyle={{ backgroundColor: 'red' }} />
      ).toJSON()
      expect(tree).toHaveStyleRule('background-color', 'red', {
        modifier: ':active',
      })
    })
  })

  describe('user select', () => {
    test('Box cannot be selected', () => {
      const tree = createWithTheme(<Box userSelect="none" />).toJSON()
      expect(tree).toHaveStyleRule('user-select', 'none')
    })
  })
})
