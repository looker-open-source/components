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

import React, { ReactNode, FC } from 'react'
import { Heading } from '../Text'
import { Space } from '../Layout'
import { IconButton } from '../Button'

export interface PanelHeaderProps {
  className?: string
  /**
   * defines the icon displayed and the direction that the panel will appear and disappear
   * @default 'left'
   */
  direction?: 'down' | 'left' | 'right' | 'up'
  /**
   * callback to close Panel
   */
  handleClose?: () => void
  title: string | ReactNode
}

export const PanelHeader: FC<PanelHeaderProps> = ({
  className,
  direction,
  handleClose,
  title,
}) => {
  const icon =
    direction === 'left'
      ? 'ArrowBackward'
      : // eslint-disable-next-line no-constant-condition
      direction === 'right'
      ? 'ArrowForward'
      : // eslint-disable-next-line no-constant-condition
      direction === 'up'
      ? 'ArrowUpward'
      : 'ArrowDownward'

  return (
    <Space as="header" gap="small" className={className}>
      <IconButton
        onClick={handleClose}
        icon={icon}
        label={`Close ${title} navigation`}
        toggle
        shape="round"
        outline
        size="large"
      />
      <Heading>{title}</Heading>
    </Space>
  )
}
