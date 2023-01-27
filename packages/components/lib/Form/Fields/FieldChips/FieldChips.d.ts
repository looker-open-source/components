/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { InputChipsProps } from '../../Inputs/InputChips/InputChips';
import type { FloatingLabelFieldProps } from '../Field';
export interface FieldChipsProps extends FloatingLabelFieldProps, InputChipsProps {
}
export declare const FieldChips: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<FieldChipsProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
