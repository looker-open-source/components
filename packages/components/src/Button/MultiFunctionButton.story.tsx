/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import {
  MultiFunctionButton,
  MultiFunctionButtonProps,
} from './MultiFunctionButton'
import { ButtonTransparent, Button } from '.'

export default {
  component: MultiFunctionButton,
  title: 'MultiFunctionButton',
}

const Template: Story<MultiFunctionButtonProps> = (args) => (
  <MultiFunctionButton {...args} />
)

export const CopyToClipboard = () => {
  const [change, setChange] = useState(false)

  const handleIsAlternate = () => {
    setChange(true)
    setTimeout(() => setChange(false), 1500)
  }
  return (
    <MultiFunctionButton
      alternate={<ButtonTransparent>Copied!</ButtonTransparent>}
      isAlternate={change}
    >
      <Button onClick={handleIsAlternate}>Copy to Clipboard</Button>
    </MultiFunctionButton>
  )
}

export const CopyToClipboardAlternate = Template.bind({})
CopyToClipboardAlternate.args = {
  alternate: <ButtonTransparent>Copied!</ButtonTransparent>,
  children: <Button>Copy to Clipboard</Button>,
  isAlternate: true,
}

export const Run = () => {
  const [change, setChange] = useState(false)

  const handleIsAlternate = () => {
    setChange(true)
    setTimeout(() => setChange(false), 1500)
  }
  return (
    <MultiFunctionButton
      alternate={<Button color="critical">Stop</Button>}
      isAlternate={change}
    >
      <Button onClick={handleIsAlternate}>Run</Button>
    </MultiFunctionButton>
  )
}

export const RunAlternate = Template.bind({})
RunAlternate.args = {
  alternate: <Button color="critical">Stop</Button>,
  children: <Button>Run</Button>,
  isAlternate: true,
}
