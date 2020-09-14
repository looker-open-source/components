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

import {
  Heading,
  Icon,
  IconButton,
  InputSearch,
  Link,
  List,
  ListItem,
  Space,
} from '@looker/components'
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
  <Space alignItems="center" className={className}>
    <IconButton
      icon="Hamburger"
      label="Toggle navigation"
      onClick={toggleNavigation}
    />
    <Link href="/">
      <Icon name="LookerLogo" alt="Looker" />
      <Heading pl="xxsmall" pt="xxxsmall" fontSize="medium" as="h1">
        Components
      </Heading>
    </Link>
    <InputSearch mx="large" placeholder="Search Looker Components" />
    <nav>
      <List>
        <ListItem>
          <Link>Starting</Link>
        </ListItem>
        <ListItem>
          <Link>Components</Link>
        </ListItem>
        <ListItem>
          <Link>Patterns</Link>
        </ListItem>
        <ListItem>
          <Link>Foundation</Link>
        </ListItem>
      </List>
    </nav>
  </Space>
)

export const HeaderContent = styled(HeaderContentLayout)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.keyAccent};
  height: 4rem;
  width: 100%;

  ${Icon} {
    height: 26px;
    width: 60px;
  }

  ${IconButton} {
    padding: 0 ${({ theme }) => theme.space.medium};
  }

  ${List} {
    display: flex;
  }

  ${ListItem} {
    padding-right: ${({ theme }) => theme.space.medium};
  }

  ${Link} {
    color: ${({ theme }) => theme.colors.text5};
    display: inline-flex;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    text-decoration: none;
  }
`
