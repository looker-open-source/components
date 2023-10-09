/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { InputColorProps } from '../../Inputs/InputColor/InputColor';
import type { FloatingLabelFieldProps, FieldProps } from '../Field';
export interface FieldColorProps extends FieldProps, FloatingLabelFieldProps, InputColorProps {
}
export declare const FieldColor: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<FieldColorProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
