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

import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import type { LayoutProps } from '@looker/design-tokens'
import { layout } from '@looker/design-tokens'
import type { ModalContentProps } from '../../../Modal/ModalContent'
import { ModalContent } from '../../../Modal/ModalContent'

export type PopoverContentProps = ModalContentProps & LayoutProps

const PopoverContentLayout: FC<PopoverContentProps> = ({
  children,
  ...props
}) => {
  return (
    <ModalContent overflowVerticalPadding="u1" py="u4" px="u5" {...props}>
      {children}
    </ModalContent>
  )
}

export const PopoverContent = styled(PopoverContentLayout)<PopoverContentProps>`
  ${layout}
`
