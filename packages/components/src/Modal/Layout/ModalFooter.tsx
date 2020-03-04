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

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import { SpaceProps, space } from 'styled-system'

export interface ModalFooterProps extends CompatibleHTMLProps<HTMLDivElement> {
  /**
   * Secondary content to place in the footer
   */
  secondary?: ReactNode
}

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
  secondary,
  ...props
}) => {
  return (
    <Layout {...props}>
      <SpaceChildren>{children}</SpaceChildren>
      {secondary && <SpaceChildren mr="auto">{secondary}</SpaceChildren>}
    </Layout>
  )
}

const Layout = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  padding: ${({ theme }) => `${theme.space.large} ${theme.space.xlarge}`};
`

const SpaceChildren = styled.div<SpaceProps>`
  ${space};
  display: grid;
  grid-gap: ${({ theme }) => theme.space.medium};
  grid-auto-flow: column;
  direction: rtl; /* Grid equivalent to flex-direction: row-reverse */
  * {
    direction: ltr;
  }
`
