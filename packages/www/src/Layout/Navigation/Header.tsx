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

import { Flex, Heading, Icon } from '@looker/components'
import React, { FC } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from '@looker/design-tokens'
import ComponentsLogo from './ComponentsLogo'

interface HeaderProps {
  className?: string
  height: string
}

export const HeaderJsx: FC<HeaderProps> = ({ className }) => (
  <a href="/" className={className}>
    <Flex alignItems="flex-end">
      <Icon
        name="LookerLogo"
        alt="Looker"
        color="palette.charcoal800"
        width="60px"
        height="26px"
      />
      <DividerVertical ml="medium" mr="small" />
      <ComponentsLogo />
      <Heading
        variant="default"
        lineHeight="small"
        fontSize="large"
        as="h1"
        ml="xsmall"
      >
        Components
      </Heading>
    </Flex>
  </a>
)

const Header = styled(HeaderJsx)`
  display: flex;
  align-items: center;
  height: ${(props) => props.height};

  padding: 0 ${(props) => props.theme.space.large}
    ${(props) => props.theme.space.xxsmall};

  border-bottom: 1px solid ${(props) => props.theme.colors.palette.purple100};
`

const DividerVertical = styled.div<SpaceProps>`
  ${space}
  background: ${(props) => props.theme.colors.palette.purple300};
  height: 20px;
  width: 1px;
  /* margin-bottom: -2px; */
`

export default Header
