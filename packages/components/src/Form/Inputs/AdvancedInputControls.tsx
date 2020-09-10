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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { FC, MouseEvent, ReactElement } from 'react'
import styled from 'styled-components'
import flatMap from 'lodash/flatMap'
import tail from 'lodash/tail'
import compact from 'lodash/compact'
import { lighten } from 'polished'
import { IconButton } from '../../Button'
import { Icon } from '../../Icon'
import { Span } from '../../Text'

export interface AdvancedInputControlsProps
  extends CompatibleHTMLProps<HTMLDivElement> {
  hasOptions?: boolean
  isVisibleOptions?: boolean
  onClear: (e: MouseEvent<HTMLButtonElement>) => void
  summary?: string
  showClear: boolean
  validationType?: 'error'
}

// inserts a divider line between each control element (item1 | item2 | item3)
const intersperseDivider = (children: ReactElement[]) =>
  tail(
    flatMap(children, (child, i) => [<SearchControlDivider key={i} />, child])
  )

export const AdvancedInputControls: FC<AdvancedInputControlsProps> = ({
  validationType,
  showClear,
  disabled,
  isVisibleOptions,
  hasOptions,
  onClear,
  summary,
}) => {
  const children = intersperseDivider(
    compact([
      validationType === 'error' && (
        <Icon
          key="warning"
          name="Error"
          size={20}
          color="critical"
          mr="xxsmall"
        />
      ),
      summary && (
        <Span
          key="summary"
          color="text1"
          fontSize="small"
          style={{ whiteSpace: 'nowrap' }}
          pr="xsmall"
        >
          {summary}
        </Span>
      ),
      showClear && (
        <IconButton
          key="clear"
          size="xsmall"
          icon="Close"
          label="Clear Field"
          onClick={onClear}
          tooltipDisabled={disabled}
          disabled={disabled}
        />
      ),
      hasOptions && (
        <CaretIcon
          name={isVisibleOptions ? 'CaretUp' : 'CaretDown'}
          key="list-caret"
          disabled={disabled}
        />
      ),
    ])
  )

  return <SearchControlGrid>{children}</SearchControlGrid>
}

const SearchControlGrid = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column dense;
  grid-gap: ${({ theme }) => theme.space.xxsmall};
  justify-items: center;
  max-height: 1.9rem;
`

const SearchControlDivider = styled.div`
  background: ${({ theme }) => theme.colors.ui2};
  height: 70%;
  width: 1px;
`

const CaretIcon = styled(Icon).attrs({
  mr: 'xxsmall',
  size: 20,
})`
  color: ${({ theme }) => lighten(0.14, theme.colors.neutral)};
  opacity: ${({ disabled }) => (disabled ? '0.75' : '1')};
`
