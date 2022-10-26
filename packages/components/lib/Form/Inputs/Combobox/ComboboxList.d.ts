/// <reference types="react" />
import type { CompatibleHTMLProps, LayoutProps, SpaceProps, TypographyProps } from '@looker/design-tokens';
import type { ComboboxOptionIndicatorProps } from './types';
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
interface ComboboxListInternalProps extends ComboboxListProps {
    isMulti: boolean;
}
export declare const ComboboxUl: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, ComboboxListInternalProps, never>;
export declare const ComboboxList: (props: ComboboxListProps) => JSX.Element;
export declare const ComboboxMultiList: (props: ComboboxListProps) => JSX.Element;
export {};
