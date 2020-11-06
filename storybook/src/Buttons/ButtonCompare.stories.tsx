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

import {
  Space,
  SpaceVertical,
  Divider,
  Button,
  ButtonTransparent,
  ButtonSizes,
} from '@looker/components'
import React from 'react'

export default {
  title: 'Button Compare',
}

const buttonSizes: ButtonSizes[] = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
]
export const ButtonCompare = () => {
  return (
    <SpaceVertical px="xlarge">
      <Space>
        {buttonSizes.map((size, index) => {
          return (
            <Button size={size} key={`button-${size}-${index}`}>
              Button
            </Button>
          )
        })}
      </Space>
      <Divider />
      <Space>
        {buttonSizes.map((size, index) => {
          return (
            <Button
              size={size}
              key={`button-icon-before-${size}-${index}`}
              iconBefore="Plus"
            >
              Button
            </Button>
          )
        })}
      </Space>
      <Divider />
      <Space>
        {buttonSizes.map((size, index) => {
          return (
            <Button
              size={size}
              key={`button-icon-after${size}-${index}`}
              iconAfter="Plus"
            >
              Button
            </Button>
          )
        })}
      </Space>

      <Space>
        {buttonSizes.map((size, index) => {
          return (
            <ButtonTransparent size={size} key={`button-text-${size}-${index}`}>
              Button
            </ButtonTransparent>
          )
        })}
      </Space>
      <Divider />
      <Space>
        {buttonSizes.map((size, index) => {
          return (
            <ButtonTransparent
              size={size}
              key={`button-text-icon-before-${size}-${index}`}
              iconBefore="Plus"
            >
              Button
            </ButtonTransparent>
          )
        })}
      </Space>
      <Divider />
      <Space>
        {buttonSizes.map((size, index) => {
          return (
            <ButtonTransparent
              size={size}
              key={`button-text-icon-after${size}-${index}`}
              iconAfter="Plus"
            >
              Button
            </ButtonTransparent>
          )
        })}
      </Space>
    </SpaceVertical>
  )
}
