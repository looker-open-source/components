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

import React from 'react'
import {
  Button,
  ButtonSizes,
  ButtonOutline,
  ButtonTransparent,
  Space,
  SpaceVertical,
} from '@looker/components'
import { StatefulColor } from '@looker/design-tokens'

type ButtonStyles = 'default' | 'outline' | 'transparent'

const buttonSizes: Array<ButtonSizes> = ['xsmall', 'small', 'medium', 'large']
const ButtonComponents = {
  default: Button,
  outline: ButtonOutline,
  transparent: ButtonTransparent,
}

export const All = () => (
  <SpaceVertical gap="xlarge">
    <Key />
    <Neutral />
    <Critical />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Buttons/Button',
}

const renderButtons = (
  style: ButtonStyles,
  size: ButtonSizes,
  color: StatefulColor
) => {
  const ButtonTag = ButtonComponents[style]
  return (
    <Space>
      <ButtonTag size={size} color={color}>
        Button
      </ButtonTag>
      <ButtonTag size={size} iconBefore="Plus" color={color}>
        Button
      </ButtonTag>
      <ButtonTag size={size} iconAfter="Plus" color={color}>
        Button
      </ButtonTag>
    </Space>
  )
}

export const Key = () => (
  <SpaceVertical>
    {buttonSizes.map((size) => renderButtons('default', size, 'key'))}
    {buttonSizes.map((size) => renderButtons('outline', size, 'key'))}
    {buttonSizes.map((size) => renderButtons('transparent', size, 'key'))}
  </SpaceVertical>
)

export const Neutral = () => (
  <SpaceVertical>
    {buttonSizes.map((size) => renderButtons('outline', size, 'neutral'))}
    {buttonSizes.map((size) => renderButtons('transparent', size, 'neutral'))}
  </SpaceVertical>
)

export const Critical = () => (
  <SpaceVertical>
    {buttonSizes.map((size) => renderButtons('default', size, 'critical'))}
    {buttonSizes.map((size) => renderButtons('outline', size, 'critical'))}
    {buttonSizes.map((size) => renderButtons('transparent', size, 'critical'))}
  </SpaceVertical>
)
