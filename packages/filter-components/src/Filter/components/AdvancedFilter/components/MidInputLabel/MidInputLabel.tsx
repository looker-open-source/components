/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { ValidationType } from '@looker/components'
import { inputHeight, Box2 } from '@looker/components'
import styled from 'styled-components'

export type MidInputLabelProps = {
  children: string
  className?: string
  validationType?: ValidationType
}

export const MidInputLabel = styled(
  ({ validationType, ...props }: MidInputLabelProps) => {
    return (
      <Box2
        alignItems="center"
        alignSelf="center"
        bg="background"
        border={validationType === 'error' ? 'critical' : 'ui3'}
        color="text1"
        display="flex"
        height={inputHeight}
        lineHeight="medium"
        px="xsmall"
        textAlign="right"
        {...props}
      />
    )
  }
)`
  border-right: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`
