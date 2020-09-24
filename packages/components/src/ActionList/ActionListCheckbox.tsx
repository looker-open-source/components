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

import React, { FC } from 'react'
import styled from 'styled-components'
import { Checkbox, MixedBoolean } from '../Form'

export interface ActionListCheckboxProps {
  id?: string
  checked?: MixedBoolean
  disabled?: boolean
  onChange?: () => void
  className?: string
}

export const checkListProps = ['checked', 'disabled', 'onChange', 'id']

const ActionListCheckboxLayout: FC<ActionListCheckboxProps> = ({
  id,
  onChange,
  checked,
  disabled,
  className,
}) => {
  const handleCellOnClick = (
    event: React.MouseEvent<HTMLTableDataCellElement>
  ) => {
    const isNotFromChild = event.currentTarget === event.target
    isNotFromChild && !disabled && onChange && onChange()
  }

  const handleOnChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const isNotFromChild = event.currentTarget === event.target
    isNotFromChild && !disabled && onChange && onChange()
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      event.currentTarget.click()
    }
  }

  return (
    <div onClick={handleCellOnClick} className={className}>
      <Checkbox
        aria-describedby={id}
        disabled={disabled}
        checked={checked}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  )
}

export const ActionListCheckbox = styled(ActionListCheckboxLayout)`
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
  display: flex;
  height: 1.5rem;
  justify-content: center;
  width: 1.5rem;
`
