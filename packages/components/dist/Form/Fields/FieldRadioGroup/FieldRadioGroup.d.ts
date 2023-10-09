/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { FieldProps } from '../Field';
import type { RadioGroupProps } from '../../Inputs';
export interface FieldRadioGroupProps extends RadioGroupProps, Omit<FieldProps, 'detail'> {
    inputsInline?: boolean;
}
export declare const FieldRadioGroup: import("styled-components").StyledComponent<{
    ({ id: propsID, options, name, inputsInline, ...props }: FieldRadioGroupProps): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
