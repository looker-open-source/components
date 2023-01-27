/// <reference types="react" />
import type { ValidationMessageProps } from '@looker/components';
import type { ValueProps } from '@looker/filter-expressions';
interface MultiInputProps {
    onChange?: (...args: any) => void;
    inputValue?: string;
    item: ValueProps;
    className?: string;
    width?: string | number;
    placement?: 'right';
    /** Text to be shown inside the input when there is no value entered  */
    placeholder?: string;
    validationMessage?: ValidationMessageProps;
}
export declare const MultiInputInternal: ({ className, item, onChange, width, placeholder, validationMessage, }: MultiInputProps) => JSX.Element;
export declare const MultiInput: import("styled-components").StyledComponent<({ className, item, onChange, width, placeholder, validationMessage, }: MultiInputProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
