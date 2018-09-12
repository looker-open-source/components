export interface InputProps {
  /**
   * Specifies the unique id of an input.
   */
  id?: string
  /**
   * Specifies the name of an input, which is used in the context of a form in order to capture the value of the input.
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
   * Optional function to be triggered when a user makes a change in the input.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
