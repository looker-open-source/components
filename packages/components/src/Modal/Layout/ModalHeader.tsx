/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
  SpaceProps,
  space,
  CompatibleHTMLProps,
  reset,
} from '@looker/design-tokens'

import { IconNames } from '@looker/icons'
import styled from 'styled-components'
import React, { FC, useContext } from 'react'

import { IconButton } from '../../Button'
import { Flex } from '../../Layout'
import { Heading } from '../../Text'
import { ModalContext } from '../ModalContext'

export interface ModalHeaderProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLElement> {
  /**
   * Specify an icon to be used for close. Defaults to `Close`
   */
  closeIcon?: IconNames
  children: string | string[]
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  closeIcon = 'Close',
  ...props
}) => {
  const { closeModal } = useContext(ModalContext)

  return (
    <Header {...props}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3" mr="xlarge" fontWeight="semiBold">
          {children}
        </Heading>
        <IconButton
          tabIndex={-1}
          color="neutral"
          size="small"
          onClick={closeModal}
          label="Close"
          icon={closeIcon}
        />
      </Flex>
    </Header>
  )
}

const Header = styled.header<SpaceProps>`
  ${reset}
  ${space}
`

Header.defaultProps = {
  p: 'large',
  pr: 'medium',
  px: 'xlarge',
}
