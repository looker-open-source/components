import { CompatibleHTMLProps } from '@looker/design-tokens'
import { ValidationType } from '../ValidationMessage'

export interface InputProps extends CompatibleHTMLProps<HTMLInputElement> {
  validationType?: ValidationType
}
