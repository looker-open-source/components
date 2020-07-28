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
import styled from 'styled-components'
import { Button } from '../Button'
import { Menu, MenuDisclosure, MenuList } from '../Menu'

interface ActionListControlBarProps {
  className?: string
  actions?: ReactNode
}

const ActionListControlBarLayout: FC<ActionListControlBarProps> = ({
  actions,
  className,
}) => {
  return (
    <div className={className}>
      <Menu>
        <MenuDisclosure>
          <Button iconAfter="ArrowDown">Bulk Actions</Button>
        </MenuDisclosure>
        <MenuList>{actions}</MenuList>
      </Menu>
    </div>
  )
}

export const ActionListControlBar = styled(ActionListControlBarLayout)`
  background-color: ${({ theme }) => theme.colors.neutralSubtle};
  border-bottom: solid 1px ${(props) => props.theme.colors.ui2};
  padding: ${({ theme }) => {
    // TODO: Export this width from Checkbox.tsx
    const checkboxInputWidth = '1rem'
    const actionListCheckboxWidth = '2.75rem'
    return `${theme.space.small} calc((${actionListCheckboxWidth} - ${checkboxInputWidth}) / 2)`
  }};
`
