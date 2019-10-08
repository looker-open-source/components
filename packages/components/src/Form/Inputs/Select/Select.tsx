import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import {
  border,
  typography,
  layout,
  CompatibleHTMLProps,
  CustomizableAttributes,
  reset,
  space,
  SpaceProps,
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
  extends SpaceProps,
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
        {...props}
        ref={ref}
      >
        {includeBlank && <option value="">{placeholder}</option>}
        {optionElements}
      </SelectBase>
    )
  }
)

//
// @TODO - Should be properly imported from `Caret Down.svg`
// import caretDownIcon from '../../../../icons/svg/Caret Down.svg'
//
const indicatorRaw = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.41 8L12 12.58L16.59 8L18 9.41L12 15.41L6 9.41L7.41 8Z" fill="#1C2125"/>
</svg>`
const indicatorSize = '1rem'
const indicatorPadding = '.25rem'
const indicator = (color: string) =>
  window.btoa(indicatorRaw.replace('#1C2125', color))

// NOTE: Styling Selects is very complex
//  See reference artice for background: https://www.filamentgroup.com/lab/select-css.html
//  This component will likely be replaced with a React Select powered version

const SelectBase = styled.select.attrs((props: SelectProps) => ({
  borderRadius: CustomizableSelectAttributes.borderRadius,
  fontSize: CustomizableSelectAttributes.fontSize,
  height: props.py || props.p ? undefined : CustomizableSelectAttributes.height,
  px: props.p || CustomizableSelectAttributes.px,
  py: props.p || CustomizableSelectAttributes.py,
  ...props,
}))<SelectProps>`
  ${reset}
  background-color: ${props =>
    props.validationType === 'error'
      ? props.theme.colors.palette.red000
      : props.theme.colors.palette.white};
  border: solid 1px ${props => props.theme.colors.palette.charcoal300};

  appearance: none;

  background-image:
    url(data:image/svg+xml;base64,
    ${props => indicator(props.theme.colors.palette.charcoal500)}),
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
