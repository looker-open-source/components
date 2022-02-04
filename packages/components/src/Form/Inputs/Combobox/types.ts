/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type {
  ColorProps,
  CompatibleHTMLProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import type { ReactNode } from 'react'
import type {
  InputChipsCommonProps,
  InputChipsInputControlProps,
  InputChipsValidationProps,
} from '../InputChips'
import type { InputTextProps } from '../InputText'

export type OptionIndicatorProps = Partial<ComboboxOptionStatuses> &
  ComboboxOptionObject

export type ComboboxOptionIndicatorFunction = (
  indicatorProps: OptionIndicatorProps
) => ReactNode

export interface ComboboxOptionIndicatorProps
  extends Partial<ComboboxOptionStatuses>,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * Customize the area to the left of the label, which by default
   * renders a check mark for the selected option or a spacer
   * Use a ReactNode, function component or render-prop-style function, or false to remove
   */
  indicator?: ReactNode | ComboboxOptionIndicatorFunction
  isMulti?: boolean
}

export interface ComboboxOptionObject {
  /**
   * Additional data associated with the option, will be passed to onChange.
   */
  label?: string
  /**
   * The value to match against when suggesting.
   */
  value: string
  /**
   * Highlight and Scroll to this option if it appears in a long list.
   */
  scrollIntoView?: boolean
}

export interface HighlightTextProps {
  /**
   * Highlight the matching option text as the user types into the input
   * @default true
   */
  highlightText?: boolean
}

export interface ComboboxOptionProps
  extends ComboboxOptionObject,
    Pick<ComboboxOptionIndicatorProps, 'indicator'>,
    HighlightTextProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    Omit<CompatibleHTMLProps<HTMLLIElement>, 'data' | 'value'> {
  /**
   * Optional. If omitted, the `value` will be used as the children like:
   * `<ComboboxOption value="Seattle, Tacoma, Washington" />`. But if you need
   * to control a bit more, you can put whatever children you want, but make
   * sure to render a `ComboboxOptionText` as well, so the value is still
   * displayed with the text highlighting on the matched portions.
   *
   * @example
   *   <ComboboxOption value="Apple" />
   *     🍎 <ComboboxOptionText />
   *   </ComboboxOption>
   */
  children?: ReactNode
}

export type MaybeComboboxOptionObject = ComboboxOptionObject | undefined
export type ComboboxOptionType =
  | MaybeComboboxOptionObject
  | ComboboxOptionObject[]

export type ComboboxCallback<
  TOption extends ComboboxOptionType = MaybeComboboxOptionObject
> = (option: TOption) => void

export type ComboboxMultiCallback = ComboboxCallback<ComboboxOptionObject[]>

export interface ComboboxOptionStatuses {
  isActive: boolean
  isSelected: boolean
}

export interface ComboboxInputCommonProps {
  /**
   * If true, when the user clicks inside the text box the current value will
   * be selected. Use this if the user is likely to delete all the text anyway
   * (like the URL bar in browsers).
   *
   * However, if the user is likely to want to tweak the value, leave this
   * false, like a google search--the user is likely wanting to edit their
   * search, not replace it completely.
   */
  selectOnClick?: boolean
  /**
   * Determines if the value in the input changes or not as the user navigates
   * with the keyboard. If true, the value changes, if false the value doesn't
   * change.
   *
   * Set this to false when you don't really need the value from the input but
   * want to populate some other state (like the recipient selector in an email client).
   * But if your input is more like a normal `<input type="text"/>`, then leave
   * the `true` default.
   */
  autoComplete?: boolean
  /**
   * customize the tooltip on the clear icon
   */
  clearIconLabel?: string
  isClearable?: boolean
  /**
   * Makes the inputted value the source of truth, whether it matches an option or not
   * @default false
   */
  freeInput?: boolean
  inputReadOnly?: boolean
}

export interface ComboboxInputProps
  extends Omit<InputTextProps, 'autoComplete' | 'value' | 'defaultValue'>,
    ComboboxInputCommonProps {
  defaultValue?: string
  summary?: string
  value?: string
}

export interface ComboboxMultiInputProps
  extends Omit<InputChipsCommonProps, 'autoComplete'>,
    InputChipsValidationProps,
    ComboboxInputCommonProps,
    Partial<InputChipsInputControlProps> {
  onClear?: () => void
  /**
   * Allows inputting of values (whether found in options or not) via typing or pasting
   * Use validate, onValidationFail, and onDuplicate for validation on typed or pasted values
   * @default false
   */
  freeInput?: boolean
}
