/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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

import React, { Component } from 'react'
import { Heading, Code, Text } from 'looker-lens'
import { palette } from 'looker-design-tokens'
import {
  BorderExamples,
  BorderLabel,
  BorderExample,
  BorderDividerExample,
} from './BorderRender.styles'

const {
  charcoal000,
  charcoal100,
  charcoal200,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  charcoal700,
  charcoal800,
} = palette

const renderBorder = (border: BorderType, index: number) => {
  const labels = [['Lens Color: ', border.name]]

  return (
    <div key={index}>
      <Heading fontSize="small" fontWeight="bold">
        {border.label}
      </Heading>
      <BorderLabel>
        {labels.map((label, idx) => (
          <div key={`label-${idx}`}>
            <Text variant="subdued" fontSize="small" fontWeight="semiBold">
              {label[0]}
            </Text>
            <Code fontSize="medium">{label[1]}</Code>
          </div>
        ))}
      </BorderLabel>
      <BorderExamples>
        {border.examples.map((example, idx) => (
          <BorderExample
            style={{ borderColor: border.hex, background: example.bgColor }}
            key={`border-${idx}`}
          >
            <Text
              fontSize="xsmall"
              fontWeight="semiBold"
              color={border.textColor}
            >
              On {example.name}
            </Text>

            <BorderDividerExample style={{ background: border.hex }}>
              {' '}
            </BorderDividerExample>
          </BorderExample>
        ))}
      </BorderExamples>
    </div>
  )
}

export interface BorderExample {
  name: string
  bgColor: string
}

export interface BorderType {
  hex: string
  label: string
  name: string
  textColor: string
  examples: BorderExample[]
}

export class BorderRender extends Component<{}, { borders: BorderType[] }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      borders: [
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 },
          ],
          hex: charcoal300,
          label: 'Default Border',
          name: 'charcoal300',
          textColor: charcoal600,
        },
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 },
            { name: 'Charcoal200', bgColor: charcoal200 },
          ],
          hex: charcoal400,
          label: 'Dark Border',
          name: 'charcoal400',
          textColor: charcoal600,
        },
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 },
          ],
          hex: charcoal200,
          label: 'Light Border',
          name: 'charcoal200',
          textColor: charcoal600,
        },
        {
          examples: [
            { name: 'Charcoal800', bgColor: charcoal800 },
            { name: 'Charcoal700', bgColor: charcoal700 },
            { name: 'Charcoal600', bgColor: charcoal600 },
          ],
          hex: charcoal500,
          label: 'Border on Dark',
          name: 'charcoal500',
          textColor: charcoal300,
        },
      ],
    }
  }

  public render() {
    return (
      <div>
        {this.state.borders.map((border, index) => renderBorder(border, index))}
      </div>
    )
  }
}
