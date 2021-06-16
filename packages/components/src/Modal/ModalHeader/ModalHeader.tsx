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

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  omitStyledProps,
  SpaceProps,
  space,
  reset,
  FontSizeProps,
  FontWeightProps,
} from '@looker/design-tokens'
import { Heading } from '../../Text'

export type ModalHeaderProps = SpaceProps &
  CompatibleHTMLProps<HTMLDivElement> &
  FontSizeProps &
  FontWeightProps & {
    children: ReactNode
    /**
     * Usually used as a closing button this element is displayed on the right side of the component
     */
    detail?: ReactNode | string
  }

const ModalHeaderLayout: FC<ModalHeaderProps> = ({
  children,
  detail,
  fontSize,
  fontWeight = 'semiBold',
  id,
  ...props
}) => {
  return (
    <header aria-labelledby={id} {...omitStyledProps(props)}>
      <Heading
        as="h3"
        fontSize={fontSize}
        fontWeight={fontWeight}
        id={id}
        mr="xlarge"
        truncate
      >
        {children}
      </Heading>
      {detail && <Detail>{detail}</Detail>}
    </header>
  )
}

const Detail = styled.div`
  margin-bottom: -${({ theme }) => theme.space.xsmall};
  margin-left: auto;
  margin-top: -${({ theme }) => theme.space.xsmall};
`

export const ModalHeader = styled(ModalHeaderLayout)<ModalHeaderProps>`
  ${reset}
  ${space}
  align-items: center;
  display: flex;
  flex-shrink: 0;
`
