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

import React, { ReactNode, useContext, useMemo } from 'react'
import styled from 'styled-components'
import { Box } from '../../../Layout'
import { ListItem } from '../../../List'
import { Heading, Paragraph } from '../../../Text'
import {
  ComboboxContext,
  ComboboxMultiContext,
  ComboboxMultiOption,
  ComboboxOption,
  comboboxOptionGrid,
  ComboboxOptionObject,
  ComboboxOptionText,
} from '../Combobox'
import { notInOptions } from './utils/options'
import { useVirtualizationOptions } from './utils/useVirtualizationOptions'

export interface SelectOptionObject extends ComboboxOptionObject {
  description?: string | ReactNode
}

export interface SelectOptionGroupProps {
  options: SelectOptionObject[]
  label?: string | ReactNode
}

export type SelectOptionProps = SelectOptionObject | SelectOptionGroupProps

const renderOption = (
  option: SelectOptionObject,
  index: number,
  scrollIntoView?: boolean
) => {
  if (option.description) {
    return (
      <ComboboxOption
        {...option}
        key={index}
        py="xxsmall"
        scrollIntoView={scrollIntoView}
      >
        <SelectOptionWithDescription {...option} />
      </ComboboxOption>
    )
  }
  return <ComboboxOption {...option} key={index} />
}

const renderMultiOption = (
  option: SelectOptionObject,
  index: number,
  scrollIntoView?: boolean
) => {
  if (option.description) {
    return (
      <ComboboxMultiOption
        {...option}
        key={index}
        py="xxsmall"
        scrollIntoView={scrollIntoView}
      >
        <SelectOptionWithDescription {...option} />
      </ComboboxMultiOption>
    )
  }
  return <ComboboxMultiOption {...option} key={index} />
}

export function SelectOptionWithDescription({
  description,
}: SelectOptionObject) {
  return (
    <Box>
      <Heading fontSize="small" fontWeight="semiBold" pb="xxsmall">
        <ComboboxOptionText />
      </Heading>
      <Paragraph variant="subdued" fontSize="small">
        {description}
      </Paragraph>
    </Box>
  )
}

const SelectOptionGroupTitle = styled(Heading)<{ isMulti?: boolean }>`
  padding-top: ${({ theme }) => theme.space.xxsmall};
  ${comboboxOptionGrid}
  ${({ isMulti, theme }) =>
    isMulti ? `grid-template-columns: ${theme.space.xlarge} 1fr;` : ''}
`

SelectOptionGroupTitle.defaultProps = {
  fontSize: 'xxsmall',
  fontWeight: 'semiBold',
  px: 'xsmall',
  py: 'xxsmall',
  variant: 'subdued',
}

export const SelectOptionGroup = ({
  options,
  label,
  isMulti,
}: SelectOptionGroupProps & { isMulti?: boolean }) => (
  <SelectOptionGroupContainer>
    {label && (
      <SelectOptionGroupTitle isMulti={isMulti}>
        <span />
        {label}
      </SelectOptionGroupTitle>
    )}
    {options.map((option, index) =>
      isMulti ? renderMultiOption(option, index) : renderOption(option, index)
    )}
  </SelectOptionGroupContainer>
)

const SelectOptionGroupContainer = styled.div`
  padding: ${({ theme }) => theme.space.xsmall} 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.palette.charcoal200};
  &:first-child,
  & + div {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }
`

export interface SelectOptionsBaseProps {
  /**
   * Options may be flat or grouped, label is option, without it the value is used
   */
  options?: SelectOptionProps[]
  /**
   * The user can type in the input (default false to mimic traditional select tag)
   */
  isFilterable?: boolean
  /**
   * Text to show when there are no available options
   * @default 'No options'
   */
  noOptionsLabel?: string
  /**
   * Render only the options visible in the scroll window
   */
  virtualize?: boolean
}

export interface SelectMultiOptionsBaseProps {
  /**
   * Add an on-the-fly option mirroring the typed text (use when isFilterable = true)
   * When `true`, notInOptions is used to show/hide and can be included in a custom function
   */
  showCreate?: boolean
  /**
   * Format the label of the on-the-fly create option (use with canCreate)
   * @default `Create ${inputText}`
   */
  formatCreateLabel?: (inputText: string) => ReactNode
}

export interface SelectOptionsProps
  extends SelectOptionsBaseProps,
    SelectMultiOptionsBaseProps {
  isMulti?: boolean
}

const optHeight = 28
const buffer = 5

function useScrollWindow(virtualize: boolean, length: number) {
  const { listClientRect, listScrollPosition } = useContext(ComboboxContext)

  if (!virtualize) return { end: length - 1, start: 0 }

  if (listScrollPosition === undefined || listClientRect === undefined)
    return { end: Math.min(length - 1, 50), start: 0 }

  const start = Math.floor(listScrollPosition / optHeight)
  const end = Math.ceil(
    (listClientRect.height + listScrollPosition) / optHeight
  )
  return {
    end: end + buffer > length - 1 ? length - 1 : end + buffer,
    start: start - buffer < 0 ? 0 : start - buffer,
  }
}

export function SelectOptions({
  options,
  isFilterable,
  showCreate,
  formatCreateLabel,
  isMulti,
  noOptionsLabel = 'No options',
  virtualize = false,
}: SelectOptionsProps) {
  const { start, end } = useScrollWindow(
    virtualize,
    options ? options.length : 0
  )

  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const {
    data: { navigationOption },
  } = contextToUse

  // Manage ComboboxContext.optionsRef to support keyboard navigation
  const virtualizationOptions = useVirtualizationOptions(
    virtualize,
    options,
    isMulti
  )

  let scrollToFirst = false
  let scrollToLast = false
  if (
    virtualize &&
    virtualizationOptions &&
    virtualizationOptions.length &&
    navigationOption
  ) {
    scrollToFirst =
      start > 0 && navigationOption.value === virtualizationOptions[0].value
    scrollToLast =
      end < virtualizationOptions.length - 1 &&
      navigationOption.value ===
        virtualizationOptions[virtualizationOptions.length - 1].value
  }

  const noOptions = (
    <ListItem fontSize="small" px="medium" py="xxsmall">
      {noOptionsLabel}
    </ListItem>
  )

  const createOption = isFilterable && showCreate && (
    <SelectMultiCreateOption
      options={options}
      formatLabel={formatCreateLabel}
      noOptions={noOptions}
      key="create"
    />
  )

  const optionsToRender = options && options.slice(start, end + 1)
  const after = options ? options.length - 1 - end : 0

  const renderToUse = isMulti ? renderMultiOption : renderOption

  return (
    <>
      {options && scrollToFirst
        ? renderToUse(options[0] as SelectOptionObject, 0, true)
        : null}
      {start > 0 && <LiSpacer height={start * optHeight} />}
      {optionsToRender && optionsToRender.length > 0
        ? [
            ...optionsToRender.map(
              (option: SelectOptionProps, index: number) => {
                const optionAsGroup = option as SelectOptionGroupProps
                // Keep key consistent unless start # is reducing...
                // ComboboxContext.optionsRef doesn't handle inserting new options at the top of the list well
                // so we remount them all
                const correctedIndex = index + start
                return optionAsGroup.options ? (
                  <SelectOptionGroup
                    key={index}
                    {...optionAsGroup}
                    isMulti={isMulti}
                  />
                ) : (
                  renderToUse(option as SelectOptionObject, correctedIndex)
                )
              }
            ),
            createOption,
          ]
        : createOption || noOptions}
      {after > 0 ? <LiSpacer height={after * optHeight} /> : null}
      {options && scrollToLast
        ? renderToUse(
            options[options.length - 1] as SelectOptionObject,
            0,
            true
          )
        : null}
    </>
  )
}

const LiSpacer = styled.li<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`

interface SelectMultiCreateOptionProps {
  options?: SelectOptionProps[]
  noOptions: ReactNode
  formatLabel?: (inputText: string) => ReactNode
}

function SelectMultiCreateOption({
  options,
  noOptions,
  formatLabel,
}: SelectMultiCreateOptionProps) {
  const {
    data: { inputValue, options: currentOptions },
  } = useContext(ComboboxMultiContext)

  const shouldShow = useMemo(() => {
    return notInOptions(currentOptions, options, inputValue)
  }, [currentOptions, options, inputValue])

  if (!inputValue) return null

  if (!shouldShow) {
    if (!options || options.length === 0) return <>{noOptions}</>
    return null
  }

  return (
    <ComboboxMultiOption value={inputValue} highlightText={false} hideCheckMark>
      {formatLabel ? formatLabel(inputValue) : `Create "${inputValue}"`}
    </ComboboxMultiOption>
  )
}
