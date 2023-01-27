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
export declare const FieldDateRange: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<FieldInputDateRangeProps, "width" | "value" | "label" | "inline" | "disabled" | "className" | "id" | "aria-labelledby" | "children" | "onChange" | "readOnly" | "required" | "description" | "externalLabel" | "validationMessage" | "detail" | "locale" | "validationType" | "ariaLabelOnly" | "hideLabel" | "autoResize" | "onValidationFail" | "dateStringFormat"> & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
