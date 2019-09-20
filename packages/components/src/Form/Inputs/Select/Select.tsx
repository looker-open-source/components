import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CustomizableAttributes, palette } from '@looker/design-tokens'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

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
  extends Omit<BoxProps<HTMLSelectElement>, 'as'>,
    InputProps {
  /**
   * Specifies value of the input field.
   */
  value?: string
  /*
   * Specifies the options that should be available to select
   */
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
}

type ComponentType = FunctionComponent<SelectProps>
type StyledComponentType = StyledComponent<ComponentType, SelectProps>

const InternalSelect: ComponentType = ({
  includeBlank = true,
  options,
  placeholder,
  validationType,
  ...props
}) => {
  const handleValidationType = () => {
    switch (validationType) {
      case 'error':
        return 'palette.red000'
      default:
        return 'palette.white'
    }
  }

  // Gracefully deal with situation where `value` prop is set but `onChange` is not.
  const defaultValue =
    props.defaultValue || (props.value && !props.onChange)
      ? props.value
      : undefined

  const optionElements =
    !options || options.length === 0
      ? null
      : Object.prototype.hasOwnProperty.call(options[0], 'key')
      ? renderOptGroups(options as GroupedOptionsType<SelectOptionProps>)
      : renderOptions(options as OptionsType<SelectOptionProps>)

  return (
    <Box
      as="select"
      bg={handleValidationType()}
      border="solid 1px"
      borderColor={palette.charcoal300}
      borderRadius={CustomizableSelectAttributes.borderRadius}
      fontSize={CustomizableSelectAttributes.fontSize}
      height={
        props.py || props.p ? undefined : CustomizableSelectAttributes.height
      }
      px={props.px || props.p || CustomizableSelectAttributes.px}
      py={props.py || props.p || CustomizableSelectAttributes.py}
      {...props}
      defaultValue={defaultValue}
      value={defaultValue ? undefined : props.value}
    >
      {includeBlank && <option value="">{placeholder}</option>}
      {optionElements}
    </Box>
  )
}

//
// @TODO - Should be properly imported from `Caret Down.svg`
// import caretDownIcon from '../../../../icons/svg/Caret Down.svg'
//
const indicatorRaw = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.41 8L12 12.58L16.59 8L18 9.41L12 15.41L6 9.41L7.41 8Z" fill="#1C2125"/>
</svg>`
const indicatorSize = '1rem'
const indicatorPadding = '.25rem'
const indicator = indicatorRaw.replace('#1C2125', palette.charcoal500)

// NOTE: Styling Selects is very complex
//  See reference artice for background: https://www.filamentgroup.com/lab/select-css.html
//  This component will likely be replaced with a React Select powered version

const SelectFactory = React.forwardRef<StyledComponentType, SelectProps>(
  (props: SelectProps, ref: Ref<StyledComponentType>) => (
    <InternalSelect ref={ref} {...props} />
  )
)

/** @component */
export const Select = styled<ComponentType>(SelectFactory)`
  appearance: none;

  background-image:
    url('data:image/svg+xml;base64,${window.btoa(indicator)}'),
    linear-gradient(to bottom, ${palette.white} 0%, ${palette.white} 100%);

  background-repeat: no-repeat, repeat;
  background-position: right ${indicatorPadding} center, 0 0;
  background-size: ${indicatorSize}, 100%;

  padding-right: calc(2 * ${indicatorPadding} + ${indicatorSize});

  &::-ms-expand {
    display: none;
  }
`
