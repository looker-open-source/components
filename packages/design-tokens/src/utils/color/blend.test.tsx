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

import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import styled from 'styled-components'
import { SpecifiableColors } from '../..'
import {
  colors,
  defaultCoreColors,
  defaultIntentColors,
} from '../../tokens/color'
import {
  blendColorTransparency,
  generateBlendColors,
  generateIntentShade,
  intentUIBlend,
  mixScaledColors,
  uiBlends,
  uiTransparencyBlend,
} from './blend'

const { background, text } = colors
const specifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...defaultIntentColors,
}

describe('design-tokens/blend', () => {
  describe('blendColorTransparency', () => {
    test('text - 2', () => {
      expect(blendColorTransparency(text, 2)).toEqual('rgba(38,45,51,0.12)')
    })

    test('named color - 4', () => {
      expect(blendColorTransparency('purple', 2)).toEqual(
        'rgba(128,0,128,0.12)'
      )
    })

    test('rgb color - 5', () => {
      expect(blendColorTransparency('rgb(0,20,50)', 2)).toEqual(
        'rgba(0,20,50,0.12)'
      )
    })
  })

  describe('mixScaledColors', () => {
    test('default', () => {
      expect(mixScaledColors(uiBlends[3], text, background)).toEqual('#b5b7b9')
    })

    test('dark mode', () => {
      expect(mixScaledColors(uiBlends[3], background, text)).toEqual('#a3a6a8')
    })

    test('low but not super low luminance', () => {
      expect(mixScaledColors(uiBlends[0], '#fff', '#555')).toEqual('#5d5d5d')
    })
  })

  describe('uiTransparencyBlend', () => {
    test('default', () => {
      const Test = styled.p`
        background: ${uiTransparencyBlend(1)};
        color: ${uiTransparencyBlend(5)};
      `

      renderWithTheme(<Test>Find me</Test>)

      const test = screen.getByText('Find me')
      expect(test).toHaveStyleRule('background', 'rgba(38,45,51,0.04)')
      expect(test).toHaveStyleRule('color', 'rgba(38,45,51,0.85)')
    })
  })

  describe('intentUIBlend', () => {
    test('default', () => {
      const Test = styled.p`
        background: ${intentUIBlend('critical', 1)};
        background-color: ${intentUIBlend('critical', 2)};
        color: ${intentUIBlend('critical', 5)};
      `

      renderWithTheme(<Test>Find me</Test>)

      const test = screen.getByText('Find me')
      expect(test).toHaveStyleRule('background', '#f8e4e6')
      expect(test).toHaveStyleRule('background-color', '#f3cbd0')
      expect(test).toHaveStyleRule('color', 'rgba(NaN,NaN,NaN,NaN)')
    })
  })

  describe('generateIntentShade', () => {
    test('default', () => {
      const Test = styled.p`
        background: ${generateIntentShade('blue')};
        color: ${generateIntentShade('lightblue')};
      `

      renderWithTheme(<Test>Find me</Test>)

      const test = screen.getByText('Find me')
      expect(test).toHaveStyleRule('background', '#0000bf')
      expect(test).toHaveStyleRule('color', '#348fac')
    })
  })

  describe('generateBlendColors', () => {
    test('default', () => {
      expect(generateBlendColors(specifiableColors)).toMatchInlineSnapshot(
        {},
        `
        Object {
          "text1": "#9da0a3",
          "text2": "#71767a",
          "text3": "#555b5f",
          "text4": "#40464b",
          "text5": "#30373d",
          "ui1": "#f4f4f4",
          "ui2": "#e0e0e0",
          "ui3": "#c4c4c4",
          "ui4": "#a8a8a8",
          "ui5": "#262626",
        }
      `
      )
    })

    test('dark mode', () => {
      expect(
        generateBlendColors({
          ...specifiableColors,
          background: specifiableColors.text,
          text: specifiableColors.background,
        })
      ).toMatchInlineSnapshot(
        {},
        `
        Object {
          "text1": "#878b8e",
          "text2": "#b3b5b7",
          "text3": "#cfd0d2",
          "text4": "#e4e5e6",
          "text5": "#f4f4f4",
          "ui1": "#33393f",
          "ui2": "#4d5257",
          "ui3": "#707579",
          "ui4": "#94989b",
          "ui5": "#fff",
        }
      `
      )
    })
  })
})
