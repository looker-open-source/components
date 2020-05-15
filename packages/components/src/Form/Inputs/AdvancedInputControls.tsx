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
import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import flatMap from 'lodash/flatMap'
import tail from 'lodash/tail'
import compact from 'lodash/compact'
import { Icon } from '../../Icon'
import { InputSearchControls } from './InputSearch/InputSearchControls'

interface AdvancedInputControlsProps {
  validationType?: 'error'
  renderSearchControls?: boolean
  isVisibleOptions?: boolean
  hasOptions?: boolean
  disabled?: boolean
  onClear: () => void
  summary?: string
}

// inserts a divider line between each control element (item1 | item2 | item3)
const intersperseDivider = (children: ReactElement[]) =>
  tail(
    flatMap(children, (child, i) => [<SearchControlDivider key={i} />, child])
  )

export const AdvancedInputControls: FC<AdvancedInputControlsProps> = ({
  validationType,
  renderSearchControls,
  onClear,
  disabled,
  isVisibleOptions,
  summary,
  hasOptions = true,
}) => {
  const children = intersperseDivider(
    compact([
      validationType === 'error' && (
        <Icon
          key="warning"
          name="CircleInfo"
          size={20}
          color="palette.red500"
          mr="xxsmall"
        />
      ),
      renderSearchControls && (
        <InputSearchControls
          key="search-controls"
          onClear={onClear}
          showClear={true}
          disabled={disabled}
          summary={summary}
        />
      ),
      hasOptions && (
        <Icon
          key="list-caret"
          name={isVisibleOptions ? 'CaretUp' : 'CaretDown'}
          size={18}
          color={disabled ? 'palette.charcoal300' : 'palette.charcoal500'}
          mr="xsmall"
        />
      ),
    ])
  )

  return <SearchControlGrid>{children}</SearchControlGrid>
}

const SearchControlGrid = styled.div`
  display: grid;
  grid-auto-flow: column dense;
  grid-gap: ${({ theme }) => theme.space.xxsmall};
  align-items: center;
  justify-items: center;
  max-height: 1.9rem;
`

const SearchControlDivider = styled.div`
  background: ${({ theme }) => theme.colors.palette.charcoal200};
  height: 70%;
  width: 1px;
`
