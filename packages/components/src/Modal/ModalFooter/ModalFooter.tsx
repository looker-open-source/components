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
import { CompatibleHTMLProps } from '@looker/design-tokens'
import { SpaceHelperProps } from '../../Layout/Space'
import { Flex } from '../../Layout/Flex'

export interface ModalFooterProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    SpaceHelperProps {
  /**
   *
   */
  children: ReactNode
  /**
   * Secondary content to place in the footer
   */
  secondary?: ReactNode
}

const ModalFooterLayout: FC<ModalFooterProps> = ({
  children,
  secondary,
  ...props
}) => (
  <Flex as="footer" justifyContent="flex-end" {...props}>
    {secondary && <FooterLayout>{secondary}</FooterLayout>}
    {children}
  </Flex>
)

export const FooterLayout = styled.div`
  margin-right: 0.5rem;
`

export const ModalFooter = styled(ModalFooterLayout)`
  flex-shrink: 0;
`
