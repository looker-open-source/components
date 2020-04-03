import { ComboboxOptionObject, getComboboxText } from '../../Combobox'
import {
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
} from '../SelectOptions'

export function flattenOptions(options: SelectOptionProps[]) {
  return options.reduce(
    (acc: SelectOptionObject[], option: SelectOptionProps) => {
      const optionAsGroup = option as SelectOptionGroupProps
      if (optionAsGroup.title) {
        return [...acc, ...optionAsGroup.options]
      }
      return [...acc, option as SelectOptionObject]
    },
    []
  )
}

export function getOption(value?: string, options?: SelectOptionProps[]) {
  const flattenedOptions = options && flattenOptions(options)
  return value
    ? { label: getComboboxText(value, flattenedOptions), value }
    : undefined
}

export function getOptions(
  values?: string[],
  options?: SelectOptionProps[]
): SelectOptionObject[] | undefined {
  if (!values) return undefined
  const flattenedOptions = options && flattenOptions(options)
  return values.map((value) => ({
    label: getComboboxText(value, flattenedOptions),
    value,
  }))
}

export function compareOption(option: { value: string }, value: string) {
  return getComboboxText(option).toLowerCase() === value.toLowerCase()
}

export function getFirstOption(
  options: SelectOptionProps[]
): SelectOptionObject {
  const optionAsGroup = options[0] as SelectOptionGroupProps
  if (optionAsGroup && optionAsGroup.title) return optionAsGroup.options[0]
  return options[0] as SelectOptionObject
}

// Is a value contained the specified options (logic to show the on-the-fly "Create" option)
export function notInOptions(
  currentOptions: ComboboxOptionObject[],
  options?: SelectOptionProps[],
  inputValue?: string
) {
  if (!inputValue) return false
  if (currentOptions.find((option) => compareOption(option, inputValue))) {
    return false
  }
  if (!options) return true
  return (
    flattenOptions(options).find((option) =>
      compareOption(option, inputValue)
    ) === undefined
  )
}
