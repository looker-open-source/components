/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { Close } from '@styled-icons/material/Close'
import { Error } from '@styled-icons/material/Error'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowDropUp } from '@styled-icons/material/ArrowDropUp'
import type { MouseEvent } from 'react'
import React from 'react'
import styled from 'styled-components'
import { IconButton } from '../../Button'
import { iconButtonColor } from '../../Button/iconButtonColor'
import { Icon } from '../../Icon'
import { Span } from '../../Text'
import { useTranslation } from '../../utils'

export interface AdvancedInputControlsProps
  extends CompatibleHTMLProps<HTMLDivElement> {
  /**
   * customize the tooltip on the clear icon
   */
  clearIconLabel?: string
  isVisibleOptions?: boolean
  onClear: (e: MouseEvent<HTMLButtonElement>) => void
  showCaret?: boolean
  showClear: boolean
  summary?: string
  /**
   * Display the error icon
   */
  errorIcon?: boolean
}

export const AdvancedInputControls = styled(
  (props: AdvancedInputControlsProps) => {
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
      errorIcon,
      ...rest
    } = props

    return (
      <div {...rest}>
        {summary && (
          <Span
            color="text1"
            fontSize="small"
            style={{ whiteSpace: 'nowrap' }}
            pr="u2"
          >
            {summary}
          </Span>
        )}
        {summary && showClear && <SearchControlDivider />}
        {showClear && (
          <IconButton
            size="small"
            icon={<Close role="presentation" />}
            label={clearIconLabel}
            onClick={onClear}
            tooltipDisabled={disabled}
            disabled={disabled}
            mr="u1"
          />
        )}
        {showClear && showCaret && <SearchControlDivider />}
        {showCaret && (
          <CaretIcon
            icon={
              isVisibleOptions ? (
                <ArrowDropUp role="presentation" />
              ) : (
                <ArrowDropDown role="presentation" />
              )
            }
            data-testid="caret"
            mr="u1"
          />
        )}
        {errorIcon && (
          <Icon
            size="xsmall"
            icon={<Error role="presentation" />}
            color="critical"
            mr="u1"
          />
        )}
      </div>
    )
  }
)`
  align-items: center;
  display: flex;
  max-height: 1.9rem;
  padding-right: ${({ theme }) => theme.space.u1};
`

const SearchControlDivider = styled.div`
  background: ${({ theme }) => theme.colors.ui2};
  height: ${({ theme }) => theme.space.u5};
  margin-right: ${({ theme }) => theme.space.u1};
  width: 1px;
`

const CaretIcon = styled(Icon)`
  ${iconButtonColor}
  cursor: default;
`
