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
  ComboboxMultiContext,
  ComboboxMultiOption,
  ComboboxOption,
  ComboboxOptionIndicatorProps,
  ComboboxOptionIndicator,
  ComboboxOptionObject,
  ComboboxOptionText,
} from '../Combobox'
import { notInOptions } from './utils/options'
import { useWindowedOptions } from './utils/useWindowedOptions'

export interface SelectOptionObject
  extends ComboboxOptionObject,
    Pick<ComboboxOptionIndicatorProps, 'indicator'> {
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
  display: flex;
  padding-top: ${({ theme }) => theme.space.xxsmall};
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
        <ComboboxOptionIndicator isMulti={isMulti} />
        {label}
      </SelectOptionGroupTitle>
    )}
    {options.map((option, index) =>
      isMulti ? renderMultiOption(option, index) : renderOption(option, index)
    )}
  </SelectOptionGroupContainer>
)

const SelectOptionGroupContainer = styled.div`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.ui2};
  border-top: 1px solid;
  padding: ${({ theme }) => theme.space.xsmall} 0;
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
  windowedOptions?: boolean
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

export function SelectOptions({
  options,
  isFilterable,
  showCreate,
  formatCreateLabel,
  isMulti,
  noOptionsLabel = 'No options',
  windowedOptions,
}: SelectOptionsProps) {
  const {
    start,
    end,
    before,
    after,
    scrollToFirst,
    scrollToLast,
  } = useWindowedOptions(windowedOptions, options, isMulti)

  const optionsToRender = options && options.slice(start, end + 1)
  const renderToUse = isMulti ? renderMultiOption : renderOption

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

  return (
    <>
      {options && scrollToFirst
        ? renderToUse(options[0] as SelectOptionObject, 0, true)
        : null}
      {before}
      {optionsToRender && optionsToRender.length > 0
        ? [
            ...optionsToRender.map(
              (option: SelectOptionProps, index: number) => {
                const optionAsGroup = option as SelectOptionGroupProps
                // Keep key consistent if options are windowed
                const correctedIndex = index + start
                return optionAsGroup.options ? (
                  <SelectOptionGroup
                    key={correctedIndex}
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
      {after}
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
    <ComboboxMultiOption
      value={inputValue}
      highlightText={false}
      indicator={false}
    >
      {formatLabel ? formatLabel(inputValue) : `Create "${inputValue}"`}
    </ComboboxMultiOption>
  )
}
