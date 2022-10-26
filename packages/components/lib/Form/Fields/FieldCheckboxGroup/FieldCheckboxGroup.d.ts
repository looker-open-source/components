import type { FC } from 'react';
import type { CheckboxGroupProps } from '../../Inputs';
import type { FieldProps } from '../Field';
export interface FieldCheckboxGroupProps extends CheckboxGroupProps, Omit<FieldProps, 'detail'> {
    inputsInline?: boolean;
}
export declare const FieldCheckboxGroup: import("styled-components").StyledComponent<FC<FieldCheckboxGroupProps>, import("styled-components").DefaultTheme, {}, never>;
