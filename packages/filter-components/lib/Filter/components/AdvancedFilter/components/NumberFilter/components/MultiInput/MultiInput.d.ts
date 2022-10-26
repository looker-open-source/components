import type { ValidationMessageProps } from '@looker/components';
import type { ValueProps } from '@looker/filter-expressions';
import type { FC } from 'react';
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
export declare const MultiInputInternal: FC<MultiInputProps>;
export declare const MultiInput: import("styled-components").StyledComponent<FC<MultiInputProps>, import("styled-components").DefaultTheme, {}, never>;
export {};
