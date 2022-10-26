import type { CompatibleHTMLProps, FlexboxProps, LayoutProps, TypographyProps, SpaceProps } from '@looker/design-tokens';
import React from 'react';
import type { ComboboxCallback, ComboboxMultiCallback, ComboboxOptionObject } from './types';
export interface ComboboxBaseProps extends FlexboxProps, Omit<LayoutProps, 'size'>, SpaceProps, TypographyProps, Omit<CompatibleHTMLProps<HTMLDivElement>, 'readOnly' | 'onChange' | 'value' | 'defaultValue'> {
    /**
     * The optional a11y aria label for combobox Wrapper element that has popup
     */
    wrapperAriaLabel?: string;
}
export interface ComboboxCommonProps<TCallback extends ComboboxCallback | ComboboxMultiCallback = ComboboxCallback> {
    /**
     * If true, the popover opens when focus is on the text box.
     */
    openOnFocus?: boolean;
    /**
     * If true, the popover opens when the text box is clicked.
     * @default true
     */
    openOnClick?: boolean;
    /**
     * Called when an option is selected (not when user types – use ComboboxInput.onChange for that)
     */
    onChange?: TCallback;
    /**
     * Called when the suggestion list closes, whether via blur, escape or selection
     */
    onClose?: TCallback;
    /**
     * Called when the suggestion list opens, whether via typing, click, or focus
     */
    onOpen?: TCallback;
}
export interface ComboboxProps extends ComboboxBaseProps, ComboboxCommonProps {
    /**
     * The current option (controlled)
     */
    value?: ComboboxOptionObject;
    /**
     * The initial option (uncontrolled)
     */
    defaultValue?: ComboboxOptionObject;
}
export declare const ComboboxInternal: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLDivElement>>;
export declare const ComboboxWrapper: React.ForwardRefExoticComponent<ComboboxBaseProps & {
    isVisible: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export declare const Combobox: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {
    display: import("styled-system").ResponsiveValue<import("csstype").Property.Display, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "display">;
