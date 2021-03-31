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

import { useTranslation } from 'react-i18next'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import { Close } from '@styled-icons/material/Close'
import { Error } from '@styled-icons/material/Error'
import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess'
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'
import React, { FC, MouseEvent, ReactElement } from 'react'
import styled from 'styled-components'
import compact from 'lodash/compact'
import { IconButton } from '../../Button'
import { iconButtonColor } from '../../Button/iconButtonColor'
import { Icon } from '../../Icon'
import { Span } from '../../Text'

export interface AdvancedInputControlsProps
  extends CompatibleHTMLProps<HTMLDivElement> {
  /**
   * customize the tooltip on the clear icon
   * @default 'Clear Field'
   */
  clearIconLabel?: string
  isVisibleOptions?: boolean
  onClear: (e: MouseEvent<HTMLButtonElement>) => void
  showCaret?: boolean
  showClear: boolean
  summary?: string
  validationType?: 'error'
}

// inserts a divider line between each control element (item1 | item2 | item3)
const intersperseDivider = (children: ReactElement[]) =>
  children.map((child, i) => (
    <React.Fragment key={i}>
      {i > 0 && <SearchControlDivider key={i} />}
      {child}
    </React.Fragment>
  ))

export const AdvancedInputControls: FC<AdvancedInputControlsProps> = (
  props
) => {
  const { t } = useTranslation('AdvancedInputControls')
  const clearIconLabelText = t('Clear Field')
  const {
    disabled,
    clearIconLabel = clearIconLabelText,
    isVisibleOptions,
    onClear,
    showCaret,
    showClear,
    summary,
    validationType,
    ...rest
  } = props
  const children = intersperseDivider(
    compact([
      summary && (
        <Span
          color="text1"
          fontSize="small"
          style={{ whiteSpace: 'nowrap' }}
          pr="xxsmall"
        >
          {summary}
        </Span>
      ),
      validationType === 'error' && (
        <Icon icon={<Error />} size={20} color="critical" mx="xxsmall" />
      ),
      showClear && (
        <IconButton
          size="xsmall"
          icon={<Close />}
          label={clearIconLabel}
          onClick={onClear}
          tooltipDisabled={disabled}
          disabled={disabled}
        />
      ),
      showCaret && (
        <CaretIcon
          icon={isVisibleOptions ? <ExpandLess /> : <ExpandMore />}
          disabled={disabled}
          data-testid="caret"
        />
      ),
    ])
  )

  return <SearchControlGrid {...rest}>{children}</SearchControlGrid>
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

const CaretIcon = styled(Icon).attrs(() => ({ mr: 'xxsmall', size: 20 }))`
  ${iconButtonColor}
  cursor: default;
  opacity: ${({ disabled }) => (disabled ? '0.75' : '1')};
`
