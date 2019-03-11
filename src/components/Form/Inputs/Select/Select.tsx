import * as React from 'react'
import { Theme } from '../../../../style'
import { CustomizableAttributes } from '../../../../types/attributes'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

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

export interface SelectProps extends BoxProps<HTMLSelectElement>, InputProps {
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
  theme?: Theme
}

export const Select: React.SFC<SelectProps> = ({
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
        return undefined
    }
  }

  // Gracefully deal with situation where `value` prop is set but `onChange` is not.
  const defaultValue =
    props.defaultValue || (props.value && !props.onChange)
      ? props.value
      : undefined

  const optionElements = !options
    ? null
    : options[0].hasOwnProperty('key')
      ? renderOptGroups(options as GroupedOptionsType<SelectOptionProps>)
      : renderOptions(options as OptionsType<SelectOptionProps>)

  return (
    <Box
      is="select"
      bg={handleValidationType()}
      border="solid 1px"
      borderColor="palette.charcoal300"
      borderRadius={CustomizableSelectAttributes.borderRadius}
      fontSize={CustomizableSelectAttributes.fontSize}
      height={CustomizableSelectAttributes.height}
      px={CustomizableSelectAttributes.px}
      py={CustomizableSelectAttributes.py}
      type="text"
      {...props}
      defaultValue={defaultValue}
      value={defaultValue ? undefined : props.value}
    >
      {includeBlank && <option>{placeholder}</option>}
      {optionElements}
    </Box>
  )
}

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
