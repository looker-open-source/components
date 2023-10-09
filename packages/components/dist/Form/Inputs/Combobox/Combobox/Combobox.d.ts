import React from 'react';
import type { ComboboxCallback, ComboboxMultiCallback, ComboboxOptionObject } from '../types';
import type { ComboboxWrapperProps } from '../ComboboxWrapper';
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
    /**
     * ComboboxList will not render inside a popover when true
     */
    shouldRenderListInline?: boolean;
}
export interface ComboboxProps extends ComboboxWrapperProps, ComboboxCommonProps {
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
export declare const Combobox: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, Partial<ComboboxProps & React.RefAttributes<HTMLDivElement>> & {
    [others: string]: any;
}, string | number>;
