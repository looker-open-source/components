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
import { MultiFunctionButton } from './MultiFunctionButton'
import { Button, ButtonTransparent, IconButton } from '.'

export default {
  component: MultiFunctionButton,
  title: 'MultiFunctionButton',
}

export const CopyToClipboard = () => {
  const [change, setChange] = useState(false)

  const handleSwap = () => {
    setChange(true)
    setTimeout(() => setChange(false), 2500)
  }

  const alternateCopyButton = (
    <ButtonTransparent iconBefore="Check" size="large">
      Copied!
    </ButtonTransparent>
  )

  return (
    <MultiFunctionButton alternate={alternateCopyButton} swap={change}>
      <Button onClick={handleSwap}>Copy to Clipboard</Button>
    </MultiFunctionButton>
  )
}

export const ComponentSize = () => {
  const [change, setChange] = useState(false)

  const handleSwap = () => {
    setChange(true)
    setTimeout(() => setChange(false), 1500)
  }
  return (
    <MultiFunctionButton
      alternate={
        <Button color="critical" size="large">
          This is a very large button
        </Button>
      }
      swap={change}
    >
      <IconButton onClick={handleSwap} icon="Plus" label="label" />
    </MultiFunctionButton>
  )
}
