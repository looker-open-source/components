import { CompatibleHTMLProps } from '@looker/design-tokens'
import { InputTextProps } from '../InputText'

export interface SelectProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onSelect'> {
  /**
   * Called with the selection value when the user makes a selection from the
   * list.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-onselect
   */
  onSelect?: (value: string) => void
  /**
   * If true, the popover opens when focus is on the text box.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-openonfocus
   */
  openOnFocus?: boolean
}

export interface SelectInputProps extends Omit<InputTextProps, 'value'> {
  /**
   * If true, when the user clicks inside the text box the current value will
   * be selected. Use this if the user is likely to delete all the text anyway
   * (like the URL bar in browsers).
   *
   * However, if the user is likely to want to tweak the value, leave this
   * false, like a google search--the user is likely wanting to edit their
   * search, not replace it completely.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-selectonclick
   */
  selectOnClick?: boolean
  /**
   * Determines if the value in the input changes or not as the user navigates
   * with the keyboard. If true, the value changes, if false the value doesn't
   * change.
   *
   * Set this to false when you don't really need the value from the input but
   * want to populate some other state (like the recipient selector in Gmail).
   * But if your input is more like a normal `<input type="text"/>`, then leave
   * the `true` default.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-autocomplete
   */
  autocomplete?: boolean
  /**
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-value
   */
  value?: string
}

export interface SelectListProps extends CompatibleHTMLProps<HTMLUListElement> {
  /**
   * Defaults to false. When true and the list is opened, if an option's value
   * matches the value in the input, it will automatically be highlighted and
   * be the starting point for any keyboard navigation of the list.
   *
   * This allows you to treat a Select more like a `<select>` than an
   * `<input/>`, but be mindful that the user is still able to put any
   * arbitrary value into the input, so if the only valid values for the input
   * are from the list, your app will need to do that validation on blur or
   * submit of the form.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxlist-persistselection
   */
  persistSelection?: boolean
}

export interface SelectOptionProps extends CompatibleHTMLProps<HTMLLIElement> {
  /**
   * Optional. If omitted, the `value` will be used as the children like:
   * `<SelectOption value="Seattle, Tacoma, Washington" />`. But if you need
   * to control a bit more, you can put whatever children you want, but make
   * sure to render a `SelectOptionText` as well, so the value is still
   * displayed with the text highlighting on the matched portions.
   *
   * @example
   *   <SelectOption value="Apple" />
   *     🍎 <SelectOptionText />
   *   </SelectOption>
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoption-children
   */
  children?: React.ReactNode
  /**
   * The value to match against when suggesting.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoption-value
   */
  value: string
}
