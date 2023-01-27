/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { CheckboxGroupProps } from '../../Inputs';
import type { FieldProps } from '../Field';
export interface FieldCheckboxGroupProps extends CheckboxGroupProps, Omit<FieldProps, 'detail'> {
    inputsInline?: boolean;
}
export declare const FieldCheckboxGroup: import("styled-components").StyledComponent<{
    ({ id: propsID, options, value, name, inputsInline, ...props }: FieldCheckboxGroupProps): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
