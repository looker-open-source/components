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

import { PrismTheme } from 'prism-react-renderer'
import { palette, theme } from '@looker/design-tokens'

const prismTheme: PrismTheme = {
  plain: {
    backgroundColor: palette.charcoal800,
    color: palette.charcoal300,
    fontFamily: theme.fonts.code,
    fontSize: theme.fontSizes.small,
  },
  styles: [
    {
      style: {
        color: palette.yellow200,
      },
      types: ['prolog', 'doctype', 'cdata'],
    },
    {
      style: {
        color: palette.charcoal400,
      },
      types: ['comment'],
    },
    {
      style: {
        opacity: 0.7,
      },
      types: ['namespace'],
    },
    {
      style: {
        color: palette.red300,
      },
      types: ['parameter'],
    },
    {
      style: {
        color: palette.yellow300,
      },
      types: ['tag'],
    },
    {
      style: {
        color: palette.purple200,
      },
      types: ['operator', 'number', 'keyword', 'attr-name'],
    },
    {
      style: {
        color: palette.blue200,
      },
      types: ['punctuation'],
    },
    {
      style: {
        color: palette.blue400,
      },
      types: ['property', 'function', 'script'],
    },
    {
      style: {
        color: '#eeebff',
      },
      types: ['tag-id', 'selector', 'atrule-id'],
    },

    {
      style: {
        color: palette.green300,
      },
      types: ['string', 'attr-value'],
    },
    {
      style: {
        color: '#ffcc99',
      },
      types: [
        'boolean',
        'entity',
        'url',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable',
      ],
    },
    {
      style: {
        textDecorationLine: 'line-through',
      },
      types: ['deleted'],
    },
    {
      style: {
        textDecorationLine: 'underline',
      },
      types: ['inserted'],
    },
    {
      style: {
        fontStyle: 'italic',
      },
      types: ['italic'],
    },
    {
      style: {
        fontWeight: 'bold',
      },
      types: ['important', 'bold'],
    },
    {
      style: {
        color: '#c4b9fe',
      },
      types: ['important'],
    },
  ],
}

export default prismTheme
