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

import React, { forwardRef, Ref } from 'react'
import ReactDOMServer from 'react-dom/server'
import styled from 'styled-components'
import { CaretDown } from '@looker/icons'
import {
  border,
  BorderProps,
  CompatibleHTMLProps,
  CustomizableAttributes,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import { ValidationType } from '../../ValidationMessage'

const renderOptions = (options: OptionsType<SelectOptionProps>) => {
  return options.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))
}

const renderOptGroups = (
  optionGroups: GroupedOptionsType<SelectOptionProps>
) => {
  return optionGroups.map(option => {
    return (
      <optgroup key={option.key} label={option.key}>
        {renderOptions(option.options)}
      </optgroup>
    )
  })
}

export const CustomizableSelectAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export type OptionsType<OptionType> = OptionType[]

export interface GroupType<OptionType> {
  options: OptionsType<OptionType>
  [key: string]: any
}

export type GroupedOptionsType<UnionOptionType> = Array<
  GroupType<UnionOptionType>
>

export interface SelectOptionProps {
  label: string
  value: string
}

export interface SelectProps
  extends BorderProps,
    Omit<LayoutProps, 'size'>,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLSelectElement> {
  options?:
    | OptionsType<SelectOptionProps>
    | GroupedOptionsType<SelectOptionProps>
  /**
   * Include a blank item as the first entry. If placeholder is specified it will be the label.
   * @default true
   */
  includeBlank?: boolean
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
  validationType?: ValidationType
}

const SelectComponent = forwardRef(
  (
    {
      includeBlank = true,
      options,
      placeholder,
      defaultValue: propsDefault,
      value,
      ...props
    }: SelectProps,
    ref: Ref<HTMLSelectElement>
  ) => {
    // Gracefully deal with situation where `value` prop is set but `onChange` is not.
    const defaultValue =
      propsDefault || (value && !props.onChange) ? value : undefined

    const optionElements =
      !options || options.length === 0
        ? null
        : Object.prototype.hasOwnProperty.call(options[0], 'key')
        ? renderOptGroups(options as GroupedOptionsType<SelectOptionProps>)
        : renderOptions(options as OptionsType<SelectOptionProps>)

    return (
      <SelectBase
        defaultValue={defaultValue ? defaultValue.toString() : undefined}
        value={defaultValue ? undefined : value}
        borderColor="palette.charcoal300"
        {...props}
        ref={ref}
      >
        {includeBlank && <option value="">{placeholder}</option>}
        {optionElements}
      </SelectBase>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'

const indicatorRaw = ReactDOMServer.renderToString(<CaretDown />)
  .replace(/1em/g, '24')
  .replace('data-reactroot=""', 'xmlns="http://www.w3.org/2000/svg"')
const indicatorSize = '1rem'
const indicatorPadding = '.25rem'
const indicatorPrefix = 'data:image/svg+xml;base64,'
export const selectIndicatorBG = (color: string) =>
  typeof window !== 'undefined' &&
  `url('${indicatorPrefix}${window.btoa(
    indicatorRaw.replace('currentColor', color)
  )}')`

// NOTE: Styling Selects is very complex
//  See reference artice for background: https://www.filamentgroup.com/lab/select-css.html
//  This component will likely be replaced with a React Select powered version

const SelectBase = styled.select.attrs((props: SelectProps) => ({
  borderRadius: props.borderRadius || CustomizableSelectAttributes.borderRadius,
  fontSize: props.fontSize || CustomizableSelectAttributes.fontSize,
  height: props.py || props.p ? undefined : CustomizableSelectAttributes.height,
  px: props.p || CustomizableSelectAttributes.px,
  py: props.p || CustomizableSelectAttributes.py,
}))<SelectProps>`
  ${reset}
  background-color: ${props =>
    props.validationType === 'error'
      ? props.theme.colors.palette.red000
      : props.theme.colors.palette.white};
  border: solid 1px;

  appearance: none;

  background-image:${props =>
    selectIndicatorBG(props.theme.colors.palette.charcoal500)},
    linear-gradient(to bottom, ${props =>
      props.theme.colors.palette.white} 0%, ${props =>
  props.theme.colors.palette.white} 100%);

  background-repeat: no-repeat, repeat;
  background-position: right ${indicatorPadding} center, 0 0;
  background-size: ${indicatorSize}, 100%;

  &::-ms-expand {
    display: none;
  }
  ${border}
  ${layout}
  ${typography}
  ${space}
  padding-right: calc(2 * ${indicatorPadding} + ${indicatorSize});
`

export const Select = styled(SelectComponent)``
