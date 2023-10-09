import type { LayoutProps } from '@looker/design-tokens';
import React from 'react';
import type { ComboboxInputProps, ComboboxOptionIndicatorProps, ComboboxProps } from '../Combobox';
import type { SelectOptionsBaseProps } from './SelectOptions';
import type { SelectOptionProps } from './types';
export interface SelectBaseProps extends SelectOptionsBaseProps, Pick<ComboboxInputProps, 'noErrorIcon' | 'placeholder' | 'validationType'>, Pick<ComboboxOptionIndicatorProps, 'indicator'> {
    /**
     * Options may be flat or grouped, label is optional – without it the value is used
     */
    options?: SelectOptionProps[];
    /**
     * The user can clear the current value by clicking an x icon button
     */
    isClearable?: boolean;
    /**
     * Handle when the user types in the field,
     * or the menu opens with a pre-populated value
     */
    onFilter?: (term: string) => void;
    /**
     * Control the dimensions of the list
     * (use this to untether the list width from the input width)
     */
    listLayout?: LayoutProps;
    /**
     * Render only the options visible in the scroll window
     * defaults to false for <100 options, true for >=100 options
     */
    windowing?: boolean;
}
export interface SelectProps extends Omit<ComboboxProps, 'value' | 'defaultValue' | 'onChange'>, SelectBaseProps {
    /**
     * Allows the select width to resize with the current value or placeholder
     * Container will default to `display: inline-flex` and container & list will default to `width: auto`
     */
    autoResize?: boolean;
    /**
     * Value of the current selected option (controlled)
     */
    value?: string;
    /**
     * Value of the initial option
     */
    defaultValue?: string;
    /**
     * Handle an option being selected
     */
    onChange?: (value: string) => void;
    /**
     * The optional a11y aria label for combobox Wrapper element that has popup
     */
    wrapperAriaLabel?: string;
}
export declare const Select: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
