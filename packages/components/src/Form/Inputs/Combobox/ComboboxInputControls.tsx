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
import React, { Children, FC } from 'react'
import styled from 'styled-components'
import { Icon } from '../../../Icon'
import { InputSearchControls } from '../InputSearch/InputSearchControls'

interface ComboboxInputControlsProps {
  validationType?: 'error'
  renderSearchControls?: boolean
  isVisibleOptions?: boolean
  disabled?: boolean
  onClear: () => void
}

export const ComboboxInputControls: FC<ComboboxInputControlsProps> = ({
  validationType,
  renderSearchControls,
  onClear,
  disabled,
  isVisibleOptions,
}) => {
  return (
    <SearchControlGrid>
      {validationType === 'error' && (
        <>
          <Icon
            name="CircleInfo"
            size={20}
            color="palette.red500"
            mr="xxsmall"
          />
          <SearchControlDivider />
        </>
      )}
      {renderSearchControls && (
        <>
          <InputSearchControls
            onClear={onClear}
            showClear={true}
            disabled={disabled}
          />
          <SearchControlDivider />
        </>
      )}
      <Icon
        name={isVisibleOptions ? 'CaretUp' : 'CaretDown'}
        size={18}
        color={disabled ? 'palette.charcoal300' : 'palette.charcoal500'}
        mr="xsmall"
      />
    </SearchControlGrid>
  )
}

const SearchControlGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ children }) => {
    const childArray = Children.toArray(children)
    switch (childArray.length) {
      case 3:
        return '1fr 1px 1fr 1px 1fr'
      case 2:
        return '1fr 1px 1fr'
      default:
        return '1fr'
    }
  }};
  grid-gap: ${({ theme }) => theme.space.xxsmall};
  align-items: center;
  justify-items: center;
  max-height: 1.9rem;
  height: 100%;
`

const SearchControlDivider = styled.div`
  background: ${({ theme }) => theme.colors.palette.charcoal200};
  height: 70%;
  width: 100%;
`
