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

import { Space, IconButton, Heading, Icon } from '@looker/components'
import React, { FC } from 'react'
import styled from 'styled-components'

interface HeaderProps {
  className?: string
  toggleNavigation: () => void
}

export const HeaderContentLayout: FC<HeaderProps> = ({
  className,
  toggleNavigation,
}) => (
  <Space className={className} px="medium">
    <IconButton
      icon="Hamburger"
      onClick={toggleNavigation}
      label="Toggle navigation"
    />

    <a href="/">
      <LookerLogo name="LookerLogo" alt="Looker" />
      <Heading fontSize="large" as="h1">
        Components
      </Heading>
    </a>
  </Space>
)

const LookerLogo = styled(Icon)``

export const HeaderContent = styled(HeaderContentLayout)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.keyAccent};
  height: 100%;

  ${LookerLogo} {
    height: 26px;
    width: 60px;
  }
`
