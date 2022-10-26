import React from 'react';
import type { InputChipsCommonProps, InputChipsControlProps, InputChipsInputControlProps } from './InputChipsBase';
/**
 * InputChips is a component that appears to be a regular text input,
 * but also allows (validated) user inputs to be stored as 'chips' (see the Chip element)
 */
export declare type FormatInputValue = ((value: string) => string) | false;
export interface InputChipsValidationProps {
    /**
     * for checking each value before converting to a chip
     */
    validate?: (value: string) => boolean;
    /**
     * Callback to format each value entered, before validation.
     * Defaults to `value.trim()`, set to `false` to avoid trimming whitespace.
     */
    formatInputValue?: FormatInputValue;
    /**
     * callback when values fail validation
     */
    onValidationFail?: (values: string[]) => void;
    /**
     * callback when values are duplicates
     */
    onDuplicate?: (values: string[]) => void;
}
export declare const splitInputValue: (inputValue: string) => string[];
export interface InputChipsProps extends Omit<InputChipsCommonProps, 'onValidationFail'>, InputChipsControlProps, Partial<InputChipsInputControlProps>, InputChipsValidationProps {
    /**
     * How to convert a typed or pasted string into an array of values
     */
    parseInputValue?: (value: string) => string[];
}
export declare const validateValues: (newValues: string[], currentValues: string[], validate?: ((value: string) => boolean) | undefined, formatInputValue?: FormatInputValue | undefined) => {
    duplicateValues: string[];
    invalidValues: string[];
    unusedValues: string[];
    validValues: string[];
};
export declare const InputChips: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InputChipsProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
