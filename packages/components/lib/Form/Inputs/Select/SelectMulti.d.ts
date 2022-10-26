import React from 'react';
import type { ComboboxMultiInputProps, ComboboxMultiProps } from '../Combobox';
import type { InputChipsValidationProps } from '../InputChips';
import type { SelectBaseProps } from './Select';
export interface SelectMultiProps extends Omit<ComboboxMultiProps, 'values' | 'defaultValues' | 'onChange'>, Omit<SelectBaseProps, 'isClearable'>, Pick<ComboboxMultiInputProps, 'chipIconLabel' | 'clearIconLabel' | 'freeInput' | 'removeOnBackspace'>, InputChipsValidationProps {
    /**
     * Should the list close after an option is selected
     * @default false
     */
    closeOnSelect?: boolean;
    /**
     * Value of the initial option
     */
    defaultValues?: string[];
    /**
     * Handle an option being selected
     */
    onChange?: (values?: string[]) => void;
    /**
     * Values of the current selected option (controlled)
     */
    values?: string[];
}
export declare const SelectMulti: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<SelectMultiProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
