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

import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ArrowBack } from '@styled-icons/material-rounded/ArrowBack'
import { Heading } from '../Text'
import { Space } from '../Layout'
import { IconButton } from '../Button'
import { PanelDirection } from './types'

export interface PanelHeaderProps {
  className?: string

  /**
   * @TODO - Remove in 2.x
   * @deprecated
   */
  direction?: PanelDirection

  /**
   * IconButton in PanelHeader will have toggled and background color
   * based on theme's key color
   * @default 'false'
   */
  iconToggle?: boolean

  /**
   * callback to close Panel
   */
  handleClose?: () => void
  title: string
}

export const PanelHeader: FC<PanelHeaderProps> = ({
  className,
  handleClose,
  iconToggle = false,
  title,
}) => {
  const { space } = useContext(ThemeContext)

  return (
    <Space
      as="header"
      className={className}
      height={space.xxlarge}
      px="large"
      gap="small"
      mt="small"
      mb="1.5rem"
    >
      <IconButton
        icon={<ArrowBack />}
        label={`Close ${title}`}
        onClick={handleClose}
        toggle={iconToggle}
        toggleBackground={iconToggle}
        // eslint-disable-next-line i18next/no-literal-string
        shape="round"
        size="small"
      />
      <Heading fontSize="xlarge">{title}</Heading>
    </Space>
  )
}
