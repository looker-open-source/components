/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Ref } from 'react';
import React from 'react';
import type { InputDateRangeProps } from '../../Inputs/InputDateRange';
import type { FieldProps, FloatingLabelFieldProps } from '../Field';
export interface FieldInputDateRangeProps extends FieldProps, FloatingLabelFieldProps, InputDateRangeProps {
    ref: Ref<HTMLInputElement>;
}
export declare const FieldDateRange: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<FieldInputDateRangeProps, "width" | "label" | "children" | "value" | "aria-labelledby" | "disabled" | "readOnly" | "required" | "className" | "id" | "onChange" | "locale" | "inline" | "detail" | "description" | "validationMessage" | "validationType" | "ariaLabelOnly" | "hideLabel" | "autoResize" | "externalLabel" | "onValidationFail" | "dateStringFormat"> & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
