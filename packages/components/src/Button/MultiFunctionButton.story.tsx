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
import styled from 'styled-components'
import { Add } from '@styled-icons/material/Add'
import { Check } from '@styled-icons/material/Check'
import { MultiFunctionButton } from './MultiFunctionButton'
import { Button, ButtonOutline, ButtonTransparent } from '.'

export default {
  component: MultiFunctionButton,
  title: 'MultiFunctionButton',
}

const CustomButtonTransparent = styled(ButtonTransparent)`
  height: 60px;
`
const CustomButtonOutline = styled(ButtonOutline)`
  height: 60px;
`

export const CopyToClipboard = () => {
  const [change, setChange] = useState(false)

  const handleSwap = () => {
    setChange(true)
    setTimeout(() => setChange(false), 2500)
  }

  const alternateCopyButton = (
    <CustomButtonTransparent
      iconBefore={<Check />}
      size="large"
      width={300} // arbitrary size to prevent image snapshot "jitter"
    >
      Copied!
    </CustomButtonTransparent>
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
        <Button size="large" width={400}>
          This is a very large button
        </Button>
      }
      swap={change}
    >
      <CustomButtonOutline onClick={handleSwap} iconBefore={<Add />}>
        Test
      </CustomButtonOutline>
    </MultiFunctionButton>
  )
}
