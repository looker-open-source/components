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

import React, { FC, useState, useCallback } from 'react'
import { IconButton, IconNames } from '@looker/components'
import styled from 'styled-components'

interface SidebarToggleProps {
  isOpen: boolean
  headerHeight: string
  onClick: () => void
}

const SidebarToggle: FC<SidebarToggleProps> = ({
  isOpen,
  onClick,
  headerHeight,
}) => {
  const [buttonWidth, setButtonWidth] = useState(0)
  const iconName: IconNames = isOpen ? 'CaretLeft' : 'CaretRight'

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setButtonWidth(node.getBoundingClientRect().width)
    }
  }, [])

  return (
    <SidebarToggleWrapper headerHeight={headerHeight} buttonWidth={buttonWidth}>
      <IconButton
        ref={measuredRef}
        shape="round"
        icon={iconName}
        onClick={onClick}
        label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        size="small"
        px="large"
        outline
      />
    </SidebarToggleWrapper>
  )
}

interface WrapperProps {
  buttonWidth: number
  headerHeight?: string
}

const SidebarToggleWrapper = styled.div<WrapperProps>`
  position: relative;
  left: ${({ buttonWidth }) => `-${buttonWidth / 2}px`};
  margin-top: ${({ buttonWidth, headerHeight }) =>
    `calc(${headerHeight}/2 - ${buttonWidth}px/2)`};
`

export default SidebarToggle
