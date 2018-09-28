import { ValidationType } from '../ValidationMessage'

export interface InputProps {
  /**
   * Specifies the unique id of an input.
   */
  id?: string
  /**
   * Specifies the name of an input, which is used in the context of a form in order to capture the value of the input. Also required for validation.
   */
  name?: string
  /**
   * Determines if an input is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Used to provide a detailed description of an input that contains errors.
   */
  'aria-describedby'?: string
  /**
   * Determines if the input is readonly.
   * @default false
   */
  readOnly?: boolean
  /**
   * Determines if an input is required.
   * @default false
   */
  required?: boolean
  /**
   * Specifies the type of validation -- error, warning, etc.
   */
  validationType?: ValidationType
  /**
   * Optional function to be triggered when a user makes a change in the input.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
