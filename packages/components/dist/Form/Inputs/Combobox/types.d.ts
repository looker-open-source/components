import type { ColorProps, CompatibleHTMLProps, FlexboxProps, LayoutProps, SpaceProps, TypographyProps } from '@looker/design-tokens';
import type { ReactNode } from 'react';
import type { InputChipsCommonProps, InputChipsInputControlProps, InputChipsValidationProps } from '../InputChips';
import type { InputTextProps } from '../InputText';
export declare type OptionIndicatorProps = Partial<ComboboxOptionStatuses> & ComboboxOptionObject;
export declare type ComboboxOptionIndicatorFunction = (indicatorProps: OptionIndicatorProps) => ReactNode;
export interface ComboboxOptionIndicatorProps extends Partial<ComboboxOptionStatuses>, CompatibleHTMLProps<HTMLDivElement> {
    /**
     * Customize the area to the left of the label, which by default
     * renders a check mark for the selected option or a spacer
     * Use a ReactNode, function component or render-prop-style function, or false to remove
     */
    indicator?: ReactNode | ComboboxOptionIndicatorFunction;
    isMulti?: boolean;
}
export interface ComboboxOptionObject {
    /**
     * Additional data associated with the option, will be passed to onChange.
     */
    label?: string;
    /**
     * The value to match against when suggesting.
     */
    value: string;
    /**
     * Highlight and Scroll to this option if it appears in a long list.
     */
    scrollIntoView?: boolean;
    /**
     * Additional information associated with the option
     */
    payload?: string | number | Record<string, unknown>;
}
export interface HighlightTextProps {
    /**
     * Highlight the matching option text as the user types into the input
     * @default true
     */
    highlightText?: boolean;
}
export interface ComboboxOptionProps extends ComboboxOptionObject, Pick<ComboboxOptionIndicatorProps, 'indicator'>, HighlightTextProps, ColorProps, FlexboxProps, LayoutProps, SpaceProps, TypographyProps, Omit<CompatibleHTMLProps<HTMLLIElement>, 'data' | 'value'> {
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
    children?: ReactNode;
}
export declare type MaybeComboboxOptionObject = ComboboxOptionObject | undefined;
export declare type ComboboxOptionType = MaybeComboboxOptionObject | ComboboxOptionObject[];
export declare type ComboboxCallback<TOption extends ComboboxOptionType = MaybeComboboxOptionObject> = (option: TOption) => void;
export declare type ComboboxMultiCallback = ComboboxCallback<ComboboxOptionObject[]>;
export interface ComboboxOptionStatuses {
    isActive: boolean;
    isSelected: boolean;
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
    selectOnClick?: boolean;
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
    autoComplete?: boolean;
    /**
     * customize the tooltip on the clear icon
     */
    clearIconLabel?: string;
    isClearable?: boolean;
    /**
     * Makes the inputted value the source of truth, whether it matches an option or not
     * @default false
     */
    freeInput?: boolean;
    inputReadOnly?: boolean;
}
export interface ComboboxInputProps extends Omit<InputTextProps, 'autoComplete' | 'value' | 'defaultValue'>, ComboboxInputCommonProps {
    defaultValue?: string;
    summary?: string;
    value?: string;
}
export interface ComboboxMultiInputProps extends Omit<InputChipsCommonProps, 'autoComplete'>, InputChipsValidationProps, ComboboxInputCommonProps, Partial<InputChipsInputControlProps> {
    onClear?: () => void;
    /**
     * Allows inputting of values (whether found in options or not) via typing or pasting
     * Use validate, onValidationFail, and onDuplicate for validation on typed or pasted values
     * @default false
     */
    freeInput?: boolean;
}
export interface ComboboxListProps extends Pick<ComboboxOptionIndicatorProps, 'indicator'>, SpaceProps, LayoutProps, TypographyProps, CompatibleHTMLProps<HTMLUListElement> {
    /**
     * When true and the list is opened, if an option's value
     * matches the value in the input, it will automatically be highlighted and
     * be the starting point for any keyboard navigation of the list.
     *
     * This allows you to treat a Combobox more like a `<select>` than an
     * `<input/>`, but be mindful that the user is still able to put any
     * arbitrary value into the input, so if the only valid values for the input
     * are from the list, your app will need to do that validation on blur or
     * submit of the form.
     * @default false
     */
    persistSelection?: boolean;
    /**
     * Close after an option is selected
     * @default true
     */
    closeOnSelect?: boolean;
    /**
     * Render only the options visible in the scroll window
     * Requires manually updating ComboboxContext.optionsRef with complete
     * list of options in order for keyboard navigation to work properly
     * @default false
     */
    windowing?: boolean;
    /**
     * Whether to honor the first click outside the popover
     * @default false
     */
    cancelClickOutside?: boolean;
}
export interface ComboboxListInternalProps extends ComboboxListProps {
    isMulti?: boolean;
}
