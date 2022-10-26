import type { FormEvent } from 'react';
import React from 'react';
import type { MaxHeightProps } from '@looker/design-tokens';
import type { InputTextBaseProps } from '../InputText';
export interface InputChipsInputControlProps {
    /**
     * for controlling the input text
     */
    inputValue: string;
    /**
     * Called when the input text changes (use with inputValue to control the input text).
     * Passes the event if triggered by typing but not when triggered by value tokenization or clearing the field.
     */
    onInputChange: (value: string, event?: FormEvent<HTMLInputElement>) => void;
    isVisibleOptions?: boolean;
    showCaret?: boolean;
}
export declare const joinValues: (selectedValues: string[]) => string;
export interface InputChipsControlProps {
    /**
     * InputChips is a controlled component since unlike native inputs,
     * you can't easily access the current value via dom API
     */
    values: string[];
    /**
     * InputChips is a controlled component since unlike native inputs,
     * you can't easily access the current value via dom API
     */
    onChange: (values: string[]) => void;
    /**
     * When the user selects and copies chips, what should the text be
     */
    formatTextToCopy?: (values: string[]) => string;
    onClear?: () => void;
}
export interface InputChipsCommonProps extends Omit<InputTextBaseProps, 'defaultValue' | 'onChange'>, MaxHeightProps {
    /**
     * Format the value for display in the chip
     */
    formatChip?: (value: string) => string;
    /**
     * customize the tooltip on the closing icon
     * @default Delete
     */
    chipIconLabel?: string;
    /**
     * customize the tooltip on the closing icon
     */
    clearIconLabel?: string;
    isClearable?: boolean;
    inputReadOnly?: boolean;
    /**
     * Set to false to disable the removal of the last value on backspace key
     * @default true
     */
    removeOnBackspace?: boolean;
    summary?: string;
}
export interface InputChipsBaseProps extends InputChipsCommonProps, InputChipsControlProps, InputChipsInputControlProps {
}
export declare const InputChipsBaseInternal: React.ForwardRefExoticComponent<InputChipsBaseProps & InputChipsInputControlProps & React.RefAttributes<HTMLInputElement>>;
export declare const InputChipsBase: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InputChipsBaseProps & InputChipsInputControlProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
