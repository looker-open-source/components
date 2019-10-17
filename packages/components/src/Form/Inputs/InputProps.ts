import { CompatibleHTMLProps, SpaceProps } from '@looker/design-tokens'
import { ValidationType } from '../ValidationMessage'

export interface InputProps extends CompatibleHTMLProps<HTMLInputElement> {
  validationType?: ValidationType
}

export const inputPropKeys = [
  'checked',
  'disabled',
  'id',
  'name',
  'onChange',
  'readOnly',
  'required',
  'value',
  'aria-describedby',
  'aria-labelledby',
]

export interface CheckboxRadioContainerProps extends SpaceProps {
  branded?: boolean
}
